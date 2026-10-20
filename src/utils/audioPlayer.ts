/**
 * Clean & Resilient Birthday Audio Player
 * 
 * Plays a single, crystal-clear instrumental birthday audio track
 * with seamless looping and zero audio overlap/merging.
 */

class RomanticAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private onStateChange: ((playing: boolean) => void) | null = null;
  private audioUrl: string = '/music.mp3';

  constructor() {
    // Lazily initialized upon user interaction
  }

  public setAudioUrl(url: string) {
    this.audioUrl = url;
    if (this.audio) {
      this.audio.src = url;
    }
  }

  public setListener(callback: (playing: boolean) => void) {
    this.onStateChange = callback;
    callback(this.isPlaying);
  }

  private notify() {
    if (this.onStateChange) {
      this.onStateChange(this.isPlaying);
    }
  }

  private initAudio() {
    if (!this.audio) {
      const audio = new Audio(this.audioUrl);
      audio.loop = true;
      audio.volume = 0.5;

      audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      audio.addEventListener('error', (e) => {
        console.warn('Audio playback error:', e);
        this.isPlaying = false;
        this.notify();
      });

      this.audio = audio;
    }
  }

  public async play(): Promise<boolean> {
    this.initAudio();
    if (!this.audio) return false;

    try {
      if (this.audio.paused) {
        await this.audio.play();
      }
      this.isPlaying = true;
      this.notify();
      return true;
    } catch (err) {
      console.warn('Playback gesture required or blocked:', err);
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public pause() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  public toggle(): Promise<boolean> | void {
    if (this.isPlaying) {
      this.pause();
    } else {
      return this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioManager = new RomanticAudioManager();
