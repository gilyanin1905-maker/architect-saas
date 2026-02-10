
import React from 'react';

const Loader: React.FC = () => (
  <div className="w-full h-[600px] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-white/10 border-t-[#00f2ff] rounded-full animate-spin"></div>
      <div className="text-[10px] uppercase tracking-widest text-white/30 animate-pulse">Loading Module...</div>
    </div>
  </div>
);

export default Loader;
