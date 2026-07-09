"use client";

import Image from "next/image";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { primaryCta, secondaryCTA, siteConfig } from "@/config/site";

const Hero = () => {
  const {
    activeModal,
    closeModal,
    handleFormSubmit,
    hasSubmitted,
    isSubmitting,
    openModal,
    submitError,
  } = useLeadModal();

  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center pb-40 pt-52 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-(--primary)">
            {siteConfig.name}
          </p>
          <h1 className="mb-6 max-w-4xl font-heading text-5xl font-black uppercase tracking-normal md:text-7xl lg:text-8xl">
            {siteConfig.header}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-(--muted) md:text-xl">
            {siteConfig.blurb}
          </p>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => openModal(primaryCta.modal)}>
              {primaryCta.label}
            </Button>
            <Button href="/#services" variant="secondary">
              {secondaryCTA.label}
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-white/90 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="text-(--primary)">✓</span>
              <span>ASE Certified Technicians</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-(--primary)">✓</span>
              <span>45+ Years Experience</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-(--primary)">✓</span>
              <span>4.9★ Google Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-(--primary)">✓</span>
              <span>Family Owned</span>
            </div>
          </div>
        </div>
      </Container>
      <Image
        src={siteConfig.heroImage}
        alt="Abstract storefront background"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute bottom-0 left-0 h-64 w-full bg-linear-to-b from-transparent to-(--background)" />
      {activeModal && (
        <LeadModal
          activeModal={activeModal}
          hasSubmitted={hasSubmitted}
          isSubmitting={isSubmitting}
          onClose={closeModal}
          onSubmit={handleFormSubmit}
          submitError={submitError}
        />
      )}
    </section>
  );
};

export default Hero;
