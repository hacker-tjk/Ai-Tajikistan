import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, Search, Database, Lock, Cpu } from 'lucide-react';

interface ThinkingProcessProps {
  isThinking: boolean;
}

const ThinkingProcess: React.FC<ThinkingProcessProps> = ({ isThinking }) => {
  const [step, setStep] = useState(0);
  const [loadingWidth, setLoadingWidth] = useState(0);

  const steps = [
    { text: "Анализ запроса...", icon: <Brain size={14} className="text-purple-400" /> },
    { text: "Поиск в базе знаний...", icon: <Database size={14} className="text-blue-400" /> },
    { text: "Проверка безопасности...", icon: <Lock size={14} className="text-green-400" /> },
    { text: "Синтез ответа...", icon: <Sparkles size={14} className="text-yellow-400" /> }
  ];

  useEffect(() => {
    if (isThinking) {
      setStep(0);
      setLoadingWidth(0);
      const progressInterval = setInterval(() => {
        setLoadingWidth(prev => {
            if (prev >= 95) return 95; 
            return prev + Math.random() * 5;
        });
      }, 200);
      const stepInterval = setInterval(() => {
        setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 1200);
      return () => {
        clearInterval(progressInterval);
        clearInterval(stepInterval);
      };
    } else {
      setLoadingWidth(100);
    }
  }, [isThinking]);

  if (!isThinking) return null;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 my-4 animate-fade-in">
      <div className="relative bg-[#1a1a1a] rounded-xl border border-white/5 p-4 overflow-hidden shadow-lg">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-pulse" />
        <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-purple-500/30 border-l-transparent animate-spin" />
                <div className="absolute inset-1 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Cpu size={18} className="text-purple-400" />
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                        AI TAJIKISTAN
                        <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded uppercase tracking-wider">Processing</span>
                    </span>
                    <span className="text-xs font-mono text-gray-500">{Math.round(loadingWidth)}%</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 h-5">
                    <span className="animate-pulse">{steps[step].icon}</span>
                    <span className="truncate">{steps[step].text}</span>
                </div>
            </div>
        </div>
        <div className="mt-3 h-1 w-full bg-[#2a2a2a] rounded-full overflow-hidden">
            <div 
                className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${loadingWidth}%` }}
            />
        </div>
      </div>
    </div>
  );
};
export default ThinkingProcess;