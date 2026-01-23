import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [isWiggling, setIsWiggling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 1000);
    }, 5000); // Wiggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/971505505369"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center transition-transform duration-300 hover:scale-105 ${isWiggling ? 'animate-bounce-subtle' : ''}`}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Back Layer */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-[#25D366] opacity-30 animate-ping-slow"></div>

        {/* Main Icon Circle */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl z-20 border-[2px] border-white">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7" // Increased icon size slightly
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        </div>

        {/* Text Pill */}
        <div className="flex flex-col justify-center rounded-full bg-white pl-11 pr-5 py-2 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-[#f8f9fa] border border-[#25D366]/20 min-w-[160px]">
          <span className="text-[14px] font-bold leading-tight text-gray-900">WhatsApp</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[11px] text-[#25D366] font-bold uppercase tracking-wide">
              Click to chat now
            </span>
          </div>
        </div>
      </a>

      <style>{`
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;
