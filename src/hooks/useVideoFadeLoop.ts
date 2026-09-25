import { useEffect, useRef, useState } from "react";

const FADE_SECONDS = 0.5;

/**
 * Drives a seamless cinematic fade-in/fade-out loop for a background video,
 * instead of relying on the native <video loop> jump-cut. Returns a ref to
 * attach to the <video> element and the current opacity to apply to it.
 */
export function useVideoFadeLoop() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opacity, setOpacity] = useState(0);
  const frameRef = useRef<number | null>(null);
  const restartingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);

      const { currentTime, duration } = video;
      if (!duration || Number.isNaN(duration)) return;

      if (currentTime < FADE_SECONDS) {
        setOpacity(Math.min(1, currentTime / FADE_SECONDS));
      } else if (currentTime > duration - FADE_SECONDS) {
        setOpacity(Math.max(0, (duration - currentTime) / FADE_SECONDS));
      } else {
        setOpacity(1);
      }

      if (currentTime >= duration - 0.05 && !restartingRef.current) {
        restartingRef.current = true;
        setOpacity(0);
        window.setTimeout(() => {
          video.currentTime = 0;
          video
            .play()
            .catch(() => {
              /* Autoplay may be blocked until user interaction; fail silently. */
            })
            .finally(() => {
              restartingRef.current = false;
            });
        }, 100);
      }
    };

    const handleCanPlay = () => {
      video.play().catch(() => {
        /* Autoplay restrictions: video stays paused on first frame. */
      });
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, []);

  return { videoRef, opacity };
}
