/**
 * Romantic Birthday Audio Player
 * 
 * Supports both HTML5 Audio (if MP3 is available) and an ethereal, romantic
 * Web Audio API Music Box / Piano Synthesizer as an instant, zero-dependency offline fallback.
 */

class RomanticAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private audioCtx: AudioContext | null = null;
  private synthInterval: number | null = null;
  private synthTimeoutIds: number[] = [];
  private onStateChange: ((playing: boolean) => void) | null = null;
  private audioUrl: string = '/music.mp3';

  constructor() {
    // Lazily initialized on first user gesture
  }

  public setAudioUrl(url: string) {
    this.audioUrl = url;
  }

  public setListener(callback: (playing: boolean) => void) {
    this.onStateChange = callback;
  }

  private notify() {
    if (this.onStateChange) {
      this.onStateChange(this.isPlaying);
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Plays a romantic celesta / music box chime tone using Web Audio API
   */
  private playChime(freq: number, duration: number = 1.2, timeOffset: number = 0, volume: number = 0.15) {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft triangle + sine blend for music box feel
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + timeOffset);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime + timeOffset);
      gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + timeOffset + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + timeOffset + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + timeOffset);
      osc.stop(ctx.currentTime + timeOffset + duration + 0.1);
    } catch {
      // AudioContext silenced or restricted
    }
  }

  /**
   * Starts a dreamy, romantic melody loop (Happy Birthday + Romantic Arpeggios)
   */
  private startSynthMelody() {
    if (this.synthInterval) return;

    // Melody notes in Hz: C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5
    const NOTES: Record<string, number> = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.00,
      A4: 440.00,
      B4: 493.88,
      C5: 523.25,
      D5: 587.33,
      E5: 659.25,
      F5: 698.46,
      G5: 783.99,
    };

    // Romantic slow music box melody
    const sequence: Array<{ note: string; beat: number; len: number }> = [
      // "Happy Birthday to you"
      { note: 'G4', beat: 0, len: 0.8 },
      { note: 'G4', beat: 0.6, len: 0.8 },
      { note: 'A4', beat: 1.2, len: 1.2 },
      { note: 'G4', beat: 2.2, len: 1.2 },
      { note: 'C5', beat: 3.2, len: 1.4 },
      { note: 'B4', beat: 4.4, len: 2.0 },

      // "Happy Birthday to you"
      { note: 'G4', beat: 6.0, len: 0.8 },
      { note: 'G4', beat: 6.6, len: 0.8 },
      { note: 'A4', beat: 7.2, len: 1.2 },
      { note: 'G4', beat: 8.2, len: 1.2 },
      { note: 'D5', beat: 9.2, len: 1.4 },
      { note: 'C5', beat: 10.4, len: 2.0 },

      // "Happy Birthday Dear Bhakti"
      { note: 'G4', beat: 12.0, len: 0.8 },
      { note: 'G4', beat: 12.6, len: 0.8 },
      { note: 'G5', beat: 13.2, len: 1.5 },
      { note: 'E5', beat: 14.4, len: 1.3 },
      { note: 'C5', beat: 15.6, len: 1.3 },
      { note: 'B4', beat: 16.8, len: 1.2 },
      { note: 'A4', beat: 18.0, len: 2.0 },

      // "Happy Birthday to you"
      { note: 'F5', beat: 19.6, len: 0.8 },
      { note: 'F5', beat: 20.2, len: 0.8 },
      { note: 'E5', beat: 20.8, len: 1.3 },
      { note: 'C5', beat: 21.8, len: 1.3 },
      { note: 'D5', beat: 22.8, len: 1.5 },
      { note: 'C5', beat: 24.2, len: 3.0 },
    ];

    const playFullPhrase = () => {
      this.clearTimeouts();
      sequence.forEach((item) => {
        const tId = window.setTimeout(() => {
          if (this.isPlaying) {
            this.playChime(NOTES[item.note] || 440, item.len, 0, 0.12);
            // Add a soft harmonic overtone for depth
            this.playChime((NOTES[item.note] || 440) * 2, item.len * 0.7, 0.05, 0.04);
          }
        }, item.beat * 580);
        this.synthTimeoutIds.push(tId);
      });
    };

    playFullPhrase();
    this.synthInterval = window.setInterval(playFullPhrase, 28000);
  }

  private clearTimeouts() {
    this.synthTimeoutIds.forEach((id) => clearTimeout(id));
    this.synthTimeoutIds = [];
  }

  private stopSynthMelody() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.clearTimeouts();
  }

  public async play(): Promise<boolean> {
    try {
      this.isPlaying = true;
      this.notify();

      // If we don't have an audio instance yet, try creating one
      if (!this.audio && this.audioUrl) {
        const audio = new Audio(this.audioUrl);
        audio.loop = true;
        audio.volume = 0.45;
        this.audio = audio;
      }

      if (this.audio) {
        try {
          await this.audio.play();
          return true;
        } catch {
          // If browser blocked or file not found, gracefully activate synth melody
          this.startSynthMelody();
          return true;
        }
      } else {
        this.startSynthMelody();
        return true;
      }
    } catch {
      this.startSynthMelody();
      return true;
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.audio) {
      this.audio.pause();
    }
    this.stopSynthMelody();
    this.notify();
  }

  public toggle(): Promise<boolean> | void {
    if (this.isPlaying) {
      this.pause();
      return;
    } else {
      return this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioManager = new RomanticAudioManager();
