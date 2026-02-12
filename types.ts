import React from 'react';

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system' | 'loading';
  content: string | React.ReactNode;
  timestamp: number;
}

export interface ChatSession {
    id: string;
    title: string;
    date: number;
    messages: TerminalLine[];
}
