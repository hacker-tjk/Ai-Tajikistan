import React from 'react';
import { Search, Plus, Image, MessageSquare, MoreHorizontal, Trash2, Download } from 'lucide-react';
import { ChatSession } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (action: string) => void;
  chatHistory: ChatSession[];
  onLoadChat: (chat: ChatSession) => void;
  onDeleteChat: (e: React.MouseEvent, id: string) => void;
  activeChatId: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ 
    isOpen, 
    onClose, 
    onSelect, 
    chatHistory, 
    onLoadChat, 
    onDeleteChat,
    activeChatId 
}) => {
  
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 left-0 w-[85%] max-w-[300px] h-full bg-[#000000] z-50 transform transition-transform duration-300 ease-out flex flex-col border-r border-white/5 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 pt-6">
            <div className="relative mb-4">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Поиск" 
                    className="w-full bg-[#1a1a1a] text-white text-sm rounded-lg py-2 pl-9 pr-4 outline-none focus:ring-1 focus:ring-gray-600 placeholder-gray-600"
                />
            </div>
            <button 
                onClick={() => onSelect('new_chat')}
                className="w-full flex items-center gap-3 px-3 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
            >
                <Plus size={18} />
                <span>Новый чат</span>
            </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 scrollbar-hide">
           <div className="space-y-1 mb-6">
               <SidebarItem icon={<Image size={18} />} label="Изображения" onClick={() => onSelect('mode_image')} />
               <SidebarItem icon={<Download size={18} />} label="Скачать проект (333)" onClick={() => onSelect('download_project')} />
           </div>
           {chatHistory.length > 0 && (
               <>
                <div className="px-3 mb-2 text-xs font-semibold text-gray-600">История</div>
                <div className="space-y-1">
                        {chatHistory.map((chat) => (
                            <div 
                                key={chat.id} 
                                onClick={() => onLoadChat(chat)}
                                className={`group relative w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${activeChatId === chat.id ? 'bg-[#1a1a1a] text-white' : 'text-gray-400 hover:bg-[#111] hover:text-gray-200'}`}
                            >
                                <div className="truncate text-sm pr-6 flex-1">
                                    {chat.title}
                                </div>
                                <button 
                                    onClick={(e) => onDeleteChat(e, chat.id)}
                                    className="absolute right-2 opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-red-500 transition-opacity"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                </div>
               </>
           )}
        </div>
        <div className="p-4 border-t border-white/5 bg-[#000000]">
            <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-white text-xs font-semibold">
                    MG
                </div>
                <div className="flex-1 text-left overflow-hidden">
                    <div className="text-sm font-medium text-white truncate">Muhammad Gulov</div>
                    <div className="text-xs text-gray-500">Free Plan</div>
                </div>
                <MoreHorizontal size={16} className="text-gray-500" />
            </button>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, onClick }: any) => (
  <button 
    onClick={onClick} 
    className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-[#1a1a1a] hover:text-white rounded-lg transition-colors text-sm font-medium"
  >
    <div className="">{icon}</div>
    <span>{label}</span>
  </button>
);

export default Sidebar;