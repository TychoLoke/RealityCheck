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
  variant?: "default" | "inverted";
}

const surfaceStyles = {
  default: {
    empty:
      "border-midnight/10 bg-cloud text-neutral shadow-[0_24px_64px_-48px_rgba(11,14,26,0.2)]",
    heading: "text-midnight",
    copy: "text-neutral",
    shell: "border-midnight/10 bg-cloud",
  },
  inverted: {
    empty:
      "border-white/20 bg-midnight text-white/80 shadow-[0_24px_64px_-48px_rgba(11,14,26,0.55)]",
    heading: "text-white",
    copy: "text-white/75",
    shell: "border-white/20 bg-midnight",
  },
};

export function Embed({ html, title, description, variant = "default" }: EmbedProps) {
  const sanitized = sanitizeEmbed(html);
  const palette = surfaceStyles[variant];

  if (!sanitized) {
    return (
      <div
        className={`rounded-2xl border border-dashed p-6 text-sm ${palette.empty}`}
      >
        <p className={`font-semibold ${palette.heading}`}>{title}</p>
        <p className={`mt-2 ${palette.copy}`}>Add your embed in .env.local to display this content.</p>
        {description ? <div className={`mt-3 text-xs ${palette.copy}`}>{description}</div> : null}
        <div className="mt-4">
          <FormError />
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-2xl border p-2 shadow-[0_24px_64px_-48px_rgba(11,14,26,0.22)] ${palette.shell}`}>
      <div
        className="embed-html [&>iframe]:h-[360px] [&>iframe]:w-full [&>iframe]:rounded-xl [&>iframe]:border-0"
        dangerouslySetInnerHTML={{ __html: sanitized }}
      />
    </div>
  );
}
