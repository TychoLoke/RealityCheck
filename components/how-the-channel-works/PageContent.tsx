"use client";

import { useMemo, useState } from "react";
import channelMapData from "@/content/how-the-channel-works/channel-map.json";
import economicsData from "@/content/how-the-channel-works/economics.json";
import rolesOverviewData from "@/content/how-the-channel-works/roles-overview.json";
import servicesMatrixData from "@/content/how-the-channel-works/services-matrix.json";
import rolePlansData from "@/content/how-the-channel-works/role-plans.json";
import { Hero } from "./sections/Hero";
import { ChannelMap } from "./sections/ChannelMap";
import { LifecycleTimeline } from "./sections/LifecycleTimeline";
import { EconomicsFlow } from "./sections/EconomicsFlow";
import { RolesAtAGlance } from "./sections/RolesAtAGlance";
import { ServicesMatrix } from "./sections/ServicesMatrix";
import { WhereYouFit } from "./sections/WhereYouFit";
import { JoinStrip } from "./sections/JoinStrip";

type RoleOption = (typeof channelMapData.roles)[number];
type MotionOption = (typeof channelMapData.motions)[number];

type RolePlans = typeof rolePlansData.roles;

export function PageContent() {
  const roles = channelMapData.roles as RoleOption[];
  const motions = channelMapData.motions as MotionOption[];
  const rolePlans = rolePlansData as { maturity: string[]; roles: RolePlans };

  const [selectedRole, setSelectedRole] = useState<string>("partner");
  const [selectedMotion, setSelectedMotion] = useState<string>("sell");

  const selectedMotionData = useMemo(
    () => motions.find((motion) => motion.id === selectedMotion) ?? motions[0],
    [motions, selectedMotion]
  );
  const activeMotionId = selectedMotionData?.id ?? "";

  return (
    <div className="space-y-24 pb-24">
      <Hero
        roles={roles}
        motions={motions}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        selectedMotion={selectedMotion}
        onMotionChange={setSelectedMotion}
      />

      <section className="px-4">
        <div className="mx-auto max-w-[1120px] space-y-16">
          <ChannelMap
            roles={roles}
            motions={motions}
            edges={channelMapData.edges}
            selectedRole={selectedRole}
            selectedMotion={selectedMotion}
          />

          <LifecycleTimeline
            motions={motions}
            selectedMotion={activeMotionId}
            onSelect={setSelectedMotion}
          />

          <EconomicsFlow data={economicsData} />

          <RolesAtAGlance roles={rolesOverviewData.roles} />

          <ServicesMatrix data={servicesMatrixData} />

          <WhereYouFit data={rolePlans} />
        </div>
      </section>

      <JoinStrip />
    </div>
  );
}
