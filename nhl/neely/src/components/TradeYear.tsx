import { YearMarker } from "./YearMarker";
import { TradeBranch } from "./TradeBranch";

interface Trade {
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
}

interface TradeYearProps {
  year: string;
  month?: string;
  day?: string;
  trades: Trade[];
}

export const TradeYear = ({ year, month, day, trades }: TradeYearProps) => {
  return (
    <div className="flex gap-4 relative">
      {/* Timeline line */}
      <div className="absolute left-[64px] top-8 bottom-0 w-px bg-border" />
      
      <YearMarker year={year} month={month} day={day} />
      
      <div className="flex-1 pt-1">
        {trades.map((trade) => (
          <TradeBranch key={trade.id} {...trade} />
        ))}
      </div>
    </div>
  );
};
