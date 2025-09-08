declare module "amplitudejs" {
    export interface Song {
      title: string;
      url: string;
      date: string;
      cover_art_url?: string;
      description?: string
    }
  
    export interface AmplitudeConfig {
      songs: Song[];
      [key: string]: any;
    }
  
    export function init(config: AmplitudeConfig): void;
    export function stop(): void;
    export function play(): void;
    export function pause(): void;
  }
  