/**
 * Audio configuration constants
 * Single source of truth for background music asset path
 */

export const BACKGROUND_AUDIO_PATH = '/assets/audio/romantic-instrumental.mp3';

export const AUDIO_CONFIG = {
  path: BACKGROUND_AUDIO_PATH,
  loop: true,
  defaultVolume: 0.3,
} as const;
