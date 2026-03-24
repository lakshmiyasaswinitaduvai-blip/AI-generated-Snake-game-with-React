import React, { useState, useRef, useEffect } from 'react';
import { DUMMY_TRACKS } from '../constants';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const currentTrack = DUMMY_TRACKS[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % DUMMY_TRACKS.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + DUMMY_TRACKS.length) % DUMMY_TRACKS.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress || 0);
    }
  };

  const handleEnded = () => {
    nextTrack();
  };

  return (
    <div className="w-full max-w-md bg-black/40 backdrop-blur-xl rounded-3xl border border-fuchsia-500/30 p-6 flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(217,70,239,0.3)]">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src={currentTrack.cover} 
            alt={currentTrack.title}
            className="relative w-24 h-24 rounded-2xl object-cover border border-white/10 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          {isPlaying && (
            <div className="absolute bottom-2 right-2 flex gap-0.5 items-end h-4">
              <div className="w-1 bg-cyan-400 animate-[bounce_0.6s_infinite]"></div>
              <div className="w-1 bg-fuchsia-400 animate-[bounce_0.8s_infinite]"></div>
              <div className="w-1 bg-cyan-400 animate-[bounce_0.5s_infinite]"></div>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-black text-white truncate tracking-tight">{currentTrack.title}</h3>
          <p className="text-fuchsia-400 font-medium text-sm tracking-wide uppercase opacity-80">{currentTrack.artist}</p>
          <div className="flex items-center gap-2 mt-2 text-slate-500">
            <Music className="w-3 h-3" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Now Playing</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-bold text-slate-600 tracking-tighter font-mono">
          <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}</span>
          <span>{audioRef.current ? formatTime(audioRef.current.duration) : '0:00'}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8">
        <button 
          onClick={prevTrack}
          className="text-slate-400 hover:text-white transition-colors p-2"
        >
          <SkipBack className="w-6 h-6 fill-current" />
        </button>
        
        <button 
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
        </button>

        <button 
          onClick={nextTrack}
          className="text-slate-400 hover:text-white transition-colors p-2"
        >
          <SkipForward className="w-6 h-6 fill-current" />
        </button>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
        <Volume2 className="w-4 h-4 text-slate-500" />
        <div className="flex-1 h-1 bg-slate-800 rounded-full">
          <div className="w-2/3 h-full bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time: number) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
