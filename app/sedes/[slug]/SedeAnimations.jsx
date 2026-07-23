"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SedeAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Ensure initial states (prevents FOUC) ─────────────────────────
      gsap.set([".hero-badge", ".hero-title", ".hero-desc", ".hero-chip", ".hero-stat"], {
        autoAlpha: 0,
      });

      // ── Hero entrance sequence ─────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.1 });

      tl.fromTo(".hero-badge",
        { autoAlpha: 0, y: 24, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.85, ease: "back.out(1.4)" }
      )
      .fromTo(".hero-title",
        { autoAlpha: 0, y: 50, filter: "blur(6px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 }, "-=0.45"
      )
      .fromTo(".hero-desc",
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.5"
      )
      .fromTo(".hero-chip",
        { autoAlpha: 0, y: 20, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, ease: "back.out(1.2)" }, "-=0.4"
      )
      .fromTo(".hero-stat",
        { autoAlpha: 0, y: 18, scale: 0.8 },
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.65, ease: "back.out(1.9)" }, "-=0.3"
      );

      // ── Floating geometric shapes ────────────────────────────────────────
      gsap.to(".shape-circle-lg", {
        rotation: 360, duration: 50, repeat: -1, ease: "none",
        transformOrigin: "center center",
      });
      gsap.to(".shape-circle-sm", {
        rotation: -360, duration: 32, repeat: -1, ease: "none",
        transformOrigin: "center center",
      });
      gsap.to(".shape-diamond", {
        y: -26, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut",
      });
      gsap.to(".shape-diamond-sm", {
        y: 18, duration: 4.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.5,
      });

      // ── Hero background parallax (smooth scrub) ───────────────────────
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        y: 150,
        scale: 1.05,
        ease: "none",
      });

      // ── Services section header ──────────────────────────────────────────
      gsap.fromTo(".services-header",
        { autoAlpha: 0, y: 44, filter: "blur(4px)" },
        {
          autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.95, ease: "power3.out",
          scrollTrigger: { trigger: ".services-header", start: "top 85%", once: true },
        }
      );

      // ── Service cards: pre-hide then batch-reveal (no CSS transform conflict) ──
      gsap.set(".service-card", { autoAlpha: 0, y: 32, scale: 0.96 });

      ScrollTrigger.batch(".service-card", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1, y: 0, scale: 1,
            stagger: 0.1,
            duration: 0.75,
            ease: "back.out(1.2)",
            overwrite: "auto",
            clearProps: "transform",
          }),
      });

      // ── Contact band ─────────────────────────────────────────────────────
      gsap.fromTo(".contact-content > *",
        { autoAlpha: 0, y: 36, filter: "blur(3px)" },
        {
          autoAlpha: 1, y: 0, filter: "blur(0px)", stagger: 0.18, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-section", start: "top 85%", once: true },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
