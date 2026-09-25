import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useVideoFadeLoop } from "../hooks/useVideoFadeLoop";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export default function Hero() {
  const { videoRef, opacity } = useVideoFadeLoop();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Video background */}
      <div className="absolute inset-x-0" style={{ top: "300px", bottom: 0 }}>
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover transition-opacity"
          style={{ opacity }}
        />
      </div>

      {/* Overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 68%, #ffffff 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container pt-16 sm:pt-24 pb-16">
        <h1 className="font-display font-normal text-black max-w-7xl text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.02em] animate-fade-rise">
          Everything You Need.{" "}
          <span className="text-[#6f6f6f]">Right Around the Corner.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-[#6f6f6f] animate-fade-rise-delay">
          Discover everyday essentials from VP STORE — shop online or visit us
          in Indra Nagar, Shahapur.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-rise-delay-2">
          <Link to="/shop">
            <Button size="lg">Shop Now</Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="ghost">
              Visit Our Store
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-[#6f6f6f] animate-fade-rise-delay-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <span>Visit VP STORE • Indra Nagar, Shahapur</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Indra%20Nagar%2C%20Shahapur%2C%20Yadgir%20District%2C%20Karnataka"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-black/20 hover:decoration-black text-black"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
