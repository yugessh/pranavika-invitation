// Procedural South Indian Traditional Ambience Generator using Web Audio API
// Synthesizes a soothing meditative Tanpura drone (Sa - Pa - Sa' - Sa) with rich warmth

class TraditionalAmbienceEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private activeNodes: (OscillatorNode | GainNode)[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime); // gentle, soothing volume
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isPlaying) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(0.08, now + 1.5);

    // Carnatic base pitch C# (approx 138.59 Hz)
    // Notes: Pa (104 Hz), Sa (138.6 Hz), Sa (138.6 Hz), Sa' octave (277.2 Hz)
    const droneNotes = [
      { freq: 103.83, harmonic: 1, detune: -4, type: 'triangle' as OscillatorType, delay: 0 },
      { freq: 138.59, harmonic: 1, detune: 2, type: 'sine' as OscillatorType, delay: 0.8 },
      { freq: 138.59, harmonic: 2, detune: -2, type: 'sine' as OscillatorType, delay: 1.6 },
      { freq: 277.18, harmonic: 0.8, detune: 5, type: 'triangle' as OscillatorType, delay: 2.4 },
    ];

    droneNotes.forEach((note) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = note.type;
      osc.frequency.setValueAtTime(note.freq, now);
      osc.detune.setValueAtTime(note.detune, now);

      // Warm low-pass acoustic resonance filter to emulate gourds of veena / tambura
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);
      filter.Q.setValueAtTime(2.5, now);

      // Slow breathing swell envelope
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.06 * note.harmonic, now + 2 + note.delay);

      // Subtle LFO for natural plucked vibrato
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.3 + Math.random() * 0.2, now);
      lfoGain.gain.setValueAtTime(1.5, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now + note.delay * 0.5);

      this.activeNodes.push(osc, noteGain, filter, lfo, lfoGain);
    });
  }

  public pause() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1);

    setTimeout(() => {
      this.activeNodes.forEach((node) => {
        try {
          if ('stop' in node) (node as OscillatorNode).stop();
          node.disconnect();
        } catch {
          // ignore cleanup errors
        }
      });
      this.activeNodes = [];
      this.isPlaying = false;
    }, 1100);
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(vol, 0.2)), this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const traditionalAmbience = new TraditionalAmbienceEngine();
