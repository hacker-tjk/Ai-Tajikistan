import React from 'react';
import { Menu, SquarePen } from 'lucide-react';

interface MobileControlsProps {
    onOpenMenu: () => void;
    onNewChat: () => void;
}

const MobileControls: React.FC<MobileControlsProps> = ({ onOpenMenu, onNewChat }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-black text-white sticky top-0 z-50">
      <button 
        onClick={onOpenMenu} 
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
      >
        <Menu size={24} className="text-gray-300" />
      </button>
      
      <div className="flex items-center gap-2">
         <span className="text-sm font-semibold text-gray-400">AI TAJIKISTAN</span>
      </div>
      
      <button 
        onClick={onNewChat} 
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
      >
        <SquarePen size={22} className="text-white" />
      </button>
    </div>
  );
};

export default MobileControls;