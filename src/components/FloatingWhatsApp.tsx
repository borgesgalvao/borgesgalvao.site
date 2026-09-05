import React, { useState } from 'react';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group"
    >
      {/* Floating Tooltip / Callout Balloon */}
      {showTooltip && (
        <div
          id="whatsapp-callout"
          className="relative bg-slate-900/90 border border-white/20 backdrop-blur-xl text-white px-3.5 py-2.5 rounded-xl shadow-2xl text-xs max-w-xs flex items-center gap-2 animate-bounce duration-1000"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="font-semibold text-slate-200">
              Fale conosco para um orçamento rápido!
            
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Fechar dica do WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900/90 border-r border-b border-white/20 transform rotate-45" />
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Estou%20no%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white rounded-full shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Conversar no WhatsApp com borgesgalvao.site (31) 99214-1182"
      >
        {/* Glow Ripple effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        {/* Official WhatsApp SVG Icon for pixel perfection */}
        <svg
          className="w-8 h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.778.978-.953 1.178-.175.2-.351.225-.652.075-.3-.15-1.266-.467-2.411-1.488-.891-.795-1.493-1.777-1.668-2.078-.175-.3-.019-.462.131-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.928-2.238-.244-.589-.493-.509-.678-.518-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.079 2.912 1.23 3.112c.15.2 2.123 3.242 5.144 4.546.719.31 1.28.496 1.718.635.722.23 1.378.197 1.897.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.43-.076-.125-.277-.2-.578-.35zM12.042 21.944h-.008c-1.777 0-3.52-.477-5.047-1.382l-.362-.215-3.753.984 1.002-3.659-.236-.376c-.996-1.587-1.523-3.418-1.523-5.297 0-5.503 4.478-9.981 9.986-9.981 2.666 0 5.172 1.038 7.058 2.925 1.886 1.887 2.924 4.394 2.923 7.062 0 5.504-4.478 9.984-9.985 9.984h-.058zm0-21.944C5.402 0 0 5.402 0 12.042c0 2.12.553 4.187 1.604 6.01L0 24l6.136-1.569c1.764.962 3.754 1.513 5.906 1.513 6.64 0 12.042-5.402 12.042-12.042 0-3.217-1.253-6.241-3.528-8.516C18.283 1.253 15.259 0 12.042 0z"/>
        </svg>
      </a>
    </div>
  );
};
