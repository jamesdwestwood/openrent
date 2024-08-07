"use client";

import Hero from "@/app/components/hero/Hero";
import SocialProof from "@/app/components/socialProof/SocialProof";
import Landlords from "@/app/components/landlords/Landlords";
import Tenants from "@/app/components/tenants/Tenants";
import useOnScreen from "@/app/hooks/useOnScreen";
import { useRef } from "react";
import CtaBanner from "@/app/components/ctaBanner/CtaBanner";
import { isNull } from "lodash";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);

  return (
    <main>
      <Hero sx={{ height: "80vh" }} ref={ref} />
      <SocialProof />
      <Landlords />
      <Tenants />
      <CtaBanner show={!isNull(ref) && !isVisible} />
    </main>
  );
}
