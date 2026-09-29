// Tactile Web Audio API sound engine (Enabled by default for instant tap response)
class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;
  private lastTapTime: number = 0;

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_sound_v2");
      if (saved !== null) {
        this.enabled = saved === "true";
      } else {
        this.enabled = true; // Enabled by default
        try {
          localStorage.setItem("portfolio_sound_v2", "true");
        } catch {
          // ignore
        }
      }

      // Attach global tap listener so when user taps on ANYTHING, sound plays out
      this.attachGlobalTapListener();
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_sound_v2", String(this.enabled));
      window.dispatchEvent(new CustomEvent("portfolio_sound_change", { detail: this.enabled }));
    }
    if (this.enabled) {
      this.initCtx();
      this.playTap(true);
    }
    return this.enabled;
  }

  // Global listener: plays sound whenever the user taps or clicks on ANYTHING on the screen
  private attachGlobalTapListener() {
    if (typeof window === "undefined") return;

    const handleInteraction = () => {
      if (!this.enabled) return;
      this.playTap();
    };

    // Listen to pointerdown (handles touch, pen, and mouse universally with zero delay)
    window.addEventListener("pointerdown", handleInteraction, { passive: true });
  }

  // Crisp, tactile UI tap sound (Audible & crisp on both mobile phone speakers and headphones)
  public playTap(force = false) {
    if (!this.enabled && !force) return;

    // 55ms throttle to prevent double-firing on rapid tap/click events
    const nowTime = Date.now();
    if (!force && nowTime - this.lastTapTime < 55) return;
    this.lastTapTime = nowTime;

    this.initCtx();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;

      // Primary crisp pop (optimized for phone speakers: 1100Hz -> 380Hz)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1100, now);
      osc1.frequency.exponentialRampToValueAtTime(360, now + 0.032);

      gain1.gain.setValueAtTime(0.065, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.032);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.032);

      // Subtle high-end tactile transient click (2200Hz snap)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(2200, now);
      osc2.frequency.exponentialRampToValueAtTime(700, now + 0.012);

      gain2.gain.setValueAtTime(0.035, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);

      osc2.start(now);
      osc2.stop(now + 0.012);

      // Gentle haptic feedback pulse on supporting mobile devices
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate(8);
        } catch {
          // Ignore
        }
      }
    } catch {
      // AudioContext error silently handled
    }
  }

  public playHover() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.03);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch {
      // AudioContext error silently handled
    }
  }

  public playClick() {
    this.playTap();
  }
}

export const sound = new SoundEngine();

