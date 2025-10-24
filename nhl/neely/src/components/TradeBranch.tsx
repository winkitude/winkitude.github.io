import { useEffect, useRef, useState } from "react";

interface TradeBranchProps {
  id: string;
  fromTeam: string;
  toTeam: string;
  fromColor?: string;
  toColor?: string;
  playersOut: string[];
  playersIn: string[];
  description?: string;
  isNested?: boolean;
  nestLevel?: number;
  isCelebration?: boolean;
  isCurrentAsset?: boolean;
}

export const TradeBranch = ({
  fromTeam,
  toTeam,
  playersOut,
  playersIn,
  description,
  isNested = false,
  nestLevel = 0,
  isCelebration = false,
  isCurrentAsset = false,
}: TradeBranchProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const branchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (branchRef.current) {
      observer.observe(branchRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftPadding = nestLevel * 40;

  // Special styling for Stanley Cup celebration
  if (isCelebration) {
    return (
      <div
        ref={branchRef}
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ paddingLeft: `${leftPadding}px` }}
      >
        <div className="flex items-start gap-3 mb-6">
          <div className="flex items-center mt-2">
            {isNested && (
              <>
                <div className="w-6 h-px bg-border" />
              </>
            )}
            <div className="w-4 h-4 text-bruins-gold flex-shrink-0">🏆</div>
          </div>
          
          <div className="flex-1">
            <div className="bg-bruins-gold/10 border-2 border-bruins-gold rounded-lg p-4">
              <div className="text-lg font-bold text-bruins-gold mb-2">
                {playersIn[0]}
              </div>
              {description && (
                <div className="text-sm text-foreground">
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={branchRef}
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ paddingLeft: `${leftPadding}px` }}
    >
      <div className="flex items-start gap-3 mb-6">
        {/* Connector line */}
        <div className="flex items-center mt-2">
          {isNested && (
            <>
              <div className="w-6 h-px bg-border" />
            </>
          )}
          <svg
            className="w-4 h-4 text-muted-foreground flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>

        {/* Trade content */}
        <div className="flex-1 space-y-2">
          {playersOut.length > 0 && (
            <div className="flex items-start gap-2">
              <span className="text-sm text-muted-foreground">to</span>
              <div>
                <div className="font-bold text-sm text-foreground">{toTeam}:</div>
                <div className="space-y-0.5">
                  {playersOut.map((player, idx) => (
                    <div key={idx} className="text-sm text-foreground">
                      • <span className="font-medium">{player}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {playersIn.length > 0 && (
            <div className="flex items-start gap-2 ml-6">
              <span className="text-sm text-muted-foreground">to</span>
              <div>
                <div className="font-bold text-sm text-foreground">{fromTeam}:</div>
                <div className="space-y-0.5">
                  {playersIn.map((player, idx) => {
                    const playerName = player.replace('⭐ ', '');
                    const isHighlighted = player.startsWith('⭐');
                    
                    return (
                      <div key={idx} className={`text-sm ${isHighlighted ? 'text-bruins-gold font-bold' : 'text-foreground'}`}>
                        • <span className="font-medium">{playerName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {description && (
            <div className="text-xs text-muted-foreground italic ml-6 mt-2 max-w-md">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
