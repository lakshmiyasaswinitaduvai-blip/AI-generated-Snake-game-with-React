/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Github, Twitter, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">Neon Rhythm</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Arcade</a>
          <a href="#" className="hover:text-fuchsia-400 transition-colors">Playlist</a>
          <a href="#" className="hover:text-white transition-colors">Leaderboard</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95">
            Connect
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sidebar - Info/Stats */}
        <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
            <h2 className="text-xs font-black text-cyan-400 uppercase tracking-[0.2em] mb-4">System Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Latency</span>
                <span className="text-sm font-mono text-green-400">12ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Uptime</span>
                <span className="text-sm font-mono">99.9%</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
            <h2 className="text-xs font-black text-fuchsia-400 uppercase tracking-[0.2em] mb-4">Global Rank</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black">#1,204</span>
              <span className="text-xs text-green-400 font-bold">â–² 12</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">Top 5% of players this week. Keep playing to reach the Cyber League.</p>
          </div>
        </div>

        {/* Center - Game */}
        <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
          <div className="mb-8 text-center">
            <h1 className="text-6xl font-black tracking-tighter italic mb-2 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent">
              SNAKE.EXE
            </h1>
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">High Performance Arcade Engine v2.4</p>
          </div>
          
          <SnakeGame />
        </div>

        {/* Right Sidebar - Music */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-8 order-3">
          <MusicPlayer />
          
          <div className="w-full p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xs font-black text-white uppercase tracking-[0.2em]">Up Next</h2>
              <button className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden">
                    <img src={`https://picsum.photos/seed/track${i}/100/100`} alt="Track" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold truncate group-hover:text-cyan-400 transition-colors">Future Echoes</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Synth Collective</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-700 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-8 py-12 border-t border-white/5 mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-slate-500 text-xs font-medium tracking-widest uppercase">
          &copy; 2026 Neon Rhythm Interactive. All rights reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Support</a>
        </div>

        <div className="flex items-center gap-4">
          <Twitter className="w-4 h-4 text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors" />
          <Github className="w-4 h-4 text-slate-500 hover:text-fuchsia-400 cursor-pointer transition-colors" />
        </div>
      </footer>
    </div>
  );
}
