import { ReactNode } from "react";
import { FormError } from "./FormError";

const allowedTags = new Set(["iframe", "script"]);
const iframeAllowedAttrs = new Set([
  "src",
  "width",
  "height",
  "allow",
  "allowfullscreen",
  "frameborder",
  "title",
  "loading",
  "referrerpolicy",
  "style",
]);
const scriptAllowedAttrs = new Set(["src", "async", "defer"]);
const booleanAttrs = new Set(["allowfullscreen", "async", "defer"]);

const disallowedValuePattern = /(javascript:|data:text)/i;

function sanitizeEmbed(raw?: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (disallowedValuePattern.test(trimmed)) return null;

  const tags = trimmed.match(/<[^>]+>/g);
  if (!tags) return null;

  for (const tag of tags) {
    const tagMatch = /^<\/?([a-z0-9:-]+)/i.exec(tag);
    if (!tagMatch) return null;
    const tagName = tagMatch[1].toLowerCase();
    if (!allowedTags.has(tagName)) return null;

    if (tag.startsWith("</")) {
      continue;
    }

    const attrPart = tag
      .replace(/^<\s*[a-z0-9:-]+/i, "")
      .replace(/\/?\s*>$/, "")
      .trim();

    const allowedAttrs = tagName === "iframe" ? iframeAllowedAttrs : scriptAllowedAttrs;
    const seenAttrs = new Set<string>();
    const attrRegex = /([a-zA-Z0-9:-]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s>]+))?/g;
    let match: RegExpExecArray | null;

    if (!attrPart && tagName !== "script") {
      return null;
    }

    while ((match = attrRegex.exec(attrPart)) !== null) {
      const attrName = match[1].toLowerCase();
      if (!allowedAttrs.has(attrName)) {
        return null;
      }
      const rawValue = match[2];
      if (!rawValue) {
        if (!booleanAttrs.has(attrName)) {
          return null;
        }
        seenAttrs.add(attrName);
        continue;
      }
      const value = rawValue.replace(/^['"]|['"]$/g, "").trim();
      if (!value || disallowedValuePattern.test(value)) {
        return null;
      }
      if (attrName === "src" && !/^https?:\/\//i.test(value)) {
        return null;
      }
      seenAttrs.add(attrName);
    }

    if (tagName === "iframe" && !seenAttrs.has("src")) {
      return null;
    }
    if (tagName === "script" && !seenAttrs.has("src")) {
      return null;
    }
  }

  return trimmed;
}

interface EmbedProps {
  html?: string | null;
  title: string;
  description?: ReactNode;
}

export function Embed({ html, title, description }: EmbedProps) {
  const sanitized = sanitizeEmbed(html);

  if (!sanitized) {
    return (
      <div className="rounded-2xl border border-dashed border-midnight/15 bg-white p-6 text-sm text-neutral">
        <p className="font-semibold text-midnight">{title}</p>
        <p className="mt-2 text-neutral">Add your embed in .env.local to display this content.</p>
        {description ? <div className="mt-3 text-xs text-neutral/80">{description}</div> : null}
        <div className="mt-4">
          <FormError />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-midnight/10 bg-white p-2 shadow-card">
      <div
        className="embed-html [&>iframe]:h-[360px] [&>iframe]:w-full [&>iframe]:rounded-xl [&>iframe]:border-0"
        dangerouslySetInnerHTML={{ __html: sanitized }}
      />
    </div>
  );
}
