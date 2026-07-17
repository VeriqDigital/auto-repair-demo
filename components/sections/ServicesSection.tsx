"use client";

import { useRef, useState } from "react";

import { services } from "@/data/services";

const ServicesSection = () => {
  const animationDirection = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [trackOffset, setTrackOffset] = useState(-1);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const visibleCount = Math.min(3, services.length);
  const canRotate = services.length > visibleCount;
  const carouselServices = Array.from(
    { length: visibleCount + 2 },
    (_, serviceOffset) => {
      const serviceIndex = currentIndex + serviceOffset - 1 + services.length;

      return services[serviceIndex % services.length];
    },
  );

  const startRotation = (direction: number) => {
    animationDirection.current = direction;
    setTransitionEnabled(true);
    setIsAnimating(true);
    setTrackOffset(direction === 1 ? -2 : 0);
  };

  const rotateServices = (direction: number) => {
    if (!canRotate || isAnimating) {
      return;
    }

    startRotation(direction);
  };

  const showPreviousServices = () => {
    rotateServices(-1);
  };

  const showNextServices = () => {
    rotateServices(1);
  };

  const handleSlideEnd = () => {
    if (!isAnimating) {
      return;
    }

    setTransitionEnabled(false);
    setCurrentIndex(
      (index) =>
        (index + animationDirection.current + services.length) %
        services.length,
    );
    setTrackOffset(-1);
    setIsAnimating(false);
  };

  const getServiceCard = (
    service: (typeof services)[number],
    serviceOffset: number,
  ) => (
    <article
      key={`${service.title}-${serviceOffset}`}
      className="flex h-full shrink-0 basis-full flex-col rounded-lg border border-white/10 bg-(--surface) p-6 md:basis-[calc((100%-3rem)/3)] md:p-7"
      aria-hidden={serviceOffset === 0 || serviceOffset === visibleCount + 1}
    >
      <h3 className="font-heading text-lg font-black uppercase leading-tight text-white">
        {service.title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/68">
        {service.description}
      </p>
    </article>
  );

  const currentServiceTitles = Array.from(
    { length: visibleCount },
    (_, serviceOffset) =>
      services[
        (currentIndex + serviceOffset + services.length) % services.length
      ].title,
  );

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.45fr_1.55fr] xl:gap-14 2xl:-mx-16">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--primary)">
          Services
        </p>
        <h2 className="mt-4 max-w-md font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl xl:text-6xl">
          From oil changes to transmission repair. We have you covered.
        </h2>
      </div>
      <div className="grid min-w-0 grid-cols-2 items-center gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-5">
        <button
          type="button"
          onClick={showPreviousServices}
          disabled={!canRotate}
          className="order-2 flex size-11 cursor-pointer items-center justify-center justify-self-start rounded-full border border-white/10 bg-black/35 text-2xl leading-none text-white/75 transition hover:border-(--primary) hover:text-(--primary) disabled:opacity-50 md:order-1"
          aria-label="Show previous services"
        >
          <span className="-translate-y-px" aria-hidden="true">
            &larr;
          </span>
        </button>
        <div
          className="order-1 col-span-2 h-72 overflow-hidden md:order-2 md:col-span-1 md:h-96"
          aria-live="polite"
        >
          <div
            className="flex h-full gap-6 [--service-step:calc(100%+1.5rem)] md:[--service-step:calc((100%-3rem)/3+1.5rem)]"
            onTransitionEnd={handleSlideEnd}
            style={{
              transform: `translateX(calc(${trackOffset} * var(--service-step)))`,
              transition: transitionEnabled
                ? "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
          >
            {carouselServices.map(getServiceCard)}
          </div>
          <span className="sr-only">
            Showing services: {currentServiceTitles.join(", ")}
          </span>
        </div>
        <button
          type="button"
          onClick={showNextServices}
          disabled={!canRotate}
          className="order-3 flex size-11 cursor-pointer items-center justify-center justify-self-end rounded-full border border-white/10 bg-black/35 text-2xl leading-none text-white/75 transition hover:border-(--primary) hover:text-(--primary) disabled:opacity-50"
          aria-label="Show next services"
        >
          <span className="-translate-y-px" aria-hidden="true">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
