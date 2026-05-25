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
        { autoAlpha: 0, y: 20, scale: 0.92 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.75 }
      )
      .fromTo(".hero-title",
        { autoAlpha: 0, y: 44 },
        { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.42"
      )
      .fromTo(".hero-desc",
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.75 }, "-=0.48"
      )
      .fromTo(".hero-chip",
        { autoAlpha: 0, y: 18, scale: 0.94 },
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6 }, "-=0.38"
      )
      .fromTo(".hero-stat",
        { autoAlpha: 0, y: 16, scale: 0.82 },
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.13, duration: 0.58, ease: "back.out(1.9)" }, "-=0.28"
      );

      // ── Floating geometric shapes ────────────────────────────────────────
      gsap.to(".shape-circle-lg", {
        rotation: 360, duration: 44, repeat: -1, ease: "none",
        transformOrigin: "center center",
      });
      gsap.to(".shape-circle-sm", {
        rotation: -360, duration: 27, repeat: -1, ease: "none",
        transformOrigin: "center center",
      });
      gsap.to(".shape-diamond", {
        y: -22, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut",
      });
      gsap.to(".shape-diamond-sm", {
        y: 16, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.3,
      });

      // ── Hero background parallax (smooth scrub) ───────────────────────
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 120,
        ease: "none",
      });

      // ── Services section header ──────────────────────────────────────────
      gsap.fromTo(".services-header",
        { autoAlpha: 0, y: 38 },
        {
          autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".services-header", start: "top 88%", once: true },
        }
      );

      // ── Service cards: batched for smoother stagger ───────────────────
      ScrollTrigger.batch(".service-card", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(batch,
            { autoAlpha: 0, y: 44, scale: 0.97 },
            {
              autoAlpha: 1, y: 0, scale: 1,
              stagger: 0.09,
              duration: 0.82,
              ease: "power3.out",
              overwrite: true,
            }
          ),
      });

      // ── Contact band ─────────────────────────────────────────────────────
      gsap.fromTo(".contact-content > *",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1, y: 0, stagger: 0.16, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-section", start: "top 88%", once: true },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
