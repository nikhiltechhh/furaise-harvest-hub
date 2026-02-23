import { useRef, useState, useEffect } from "react";
import Video from "@/assets/furaise.mp4";

// ─── CONFIGURATION ─────────────────────────────────────────────────────────────
const VIDEO_CONFIG = {
  src: Video,
  poster: "/images/your-poster.jpg",
  title: "From Indian Farms to Global Markets",
  subtitle:
    "Watch how we bring the finest turmeric and rice from source to shipment — with full traceability and zero compromise on quality.",
  badge: "Our Story",
};
// ───────────────────────────────────────────────────────────────────────────────

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-triggered reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (playing) setControlsVisible(false);
    }, 2500);
  };

  const showControls = () => {
    setControlsVisible(true);
    scheduleHide();
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setHasStarted(true);
      scheduleHide();
    } else {
      v.pause();
      setPlaying(false);
      setControlsVisible(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const el = playerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) setDuration(v.duration);
  };

  const handleEnded = () => {
    setPlaying(false);
    setHasStarted(false);
    setProgress(0);
    setCurrentTime(0);
    setControlsVisible(true);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = ratio * v.duration;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* ── Section Header ── */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.3em] text-secondary border border-secondary/60 px-4 py-1.5 rounded-full mb-5">
            {VIDEO_CONFIG.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight max-w-3xl mx-auto">
            {VIDEO_CONFIG.title}
          </h2>
          <p className="mt-5 text-primary/55 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {VIDEO_CONFIG.subtitle}
          </p>
        </div>

        {/* ── Video Player ── */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {/* Reel-size wrapper — centered, max-width matches 9:16 portrait */}
          <div className="relative mx-auto" style={{ maxWidth: "360px" }}>

            {/* Gold corner accents */}
            {[
              "top-0 left-0",
              "top-0 right-0 rotate-90",
              "bottom-0 right-0 rotate-180",
              "bottom-0 left-0 -rotate-90",
            ].map((pos, i) => (
              <span
                key={i}
                className={`absolute ${pos} w-8 h-8 z-20 pointer-events-none`}
                style={{
                  borderTop: "2px solid",
                  borderLeft: "2px solid",
                  borderColor: "var(--color-secondary, #d4a520)",
                  borderRadius: "1px",
                }}
              />
            ))}

            {/* Player — 9:16 Instagram Reel ratio */}
            <div
              ref={playerRef}
              className="relative w-full bg-black rounded-sm overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
              style={{ aspectRatio: "9/16", cursor: "none" }}
              onMouseMove={showControls}
              onMouseLeave={() => playing && setControlsVisible(false)}
              onClick={togglePlay}
            >
              {/* Video element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={VIDEO_CONFIG.src}
                poster={VIDEO_CONFIG.poster}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                playsInline
              />

              {/* Big play button shown before first play */}
              {!hasStarted && (
                <div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full transition-transform duration-300 hover:scale-110"
                    aria-label="Play video"
                    style={{
                      background: "var(--color-secondary, #d4a520)",
                      boxShadow:
                        "0 0 0 16px rgba(212,165,32,0.15), 0 0 0 32px rgba(212,165,32,0.07)",
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ background: "var(--color-secondary, #d4a520)" }}
                    />
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 ml-1 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Controls overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 z-20 transition-all duration-300"
                style={{
                  opacity: controlsVisible ? 1 : 0,
                  transform: controlsVisible
                    ? "translateY(0)"
                    : "translateY(8px)",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                  pointerEvents: controlsVisible ? "auto" : "none",
                  paddingTop: "48px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Seek bar */}
                <div
                  className="mx-4 mb-3 h-1 bg-white/20 rounded-full cursor-pointer group"
                  onClick={seek}
                >
                  <div
                    className="h-full rounded-full relative"
                    style={{
                      width: `${progress}%`,
                      background: "var(--color-secondary, #d4a520)",
                    }}
                  >
                    <span
                      className="absolute right-0 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ top: "50%", transform: "translate(50%, -50%)" }}
                    />
                  </div>
                </div>

                {/* Buttons row */}
                <div className="flex items-center gap-3 px-4 pb-4">

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    onClick={toggleMute}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18L19 19.27 20.27 18 5.54 3.27 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                      </svg>
                    )}
                  </button>

                  {/* Timestamp */}
                  <span className="text-white/60 text-xs font-body tabular-nums ml-1">
                    {formatTime(currentTime)}
                    {duration > 0 && (
                      <span className="text-white/30"> / {formatTime(duration)}</span>
                    )}
                  </span>

                  <div className="flex-1" />

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Toggle fullscreen"
                  >
                    {isFullscreen ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;