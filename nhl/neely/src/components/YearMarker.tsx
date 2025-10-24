interface YearMarkerProps {
  year: string;
  month?: string;
  day?: string;
}

export const YearMarker = ({ year, month, day }: YearMarkerProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-end w-16">
        {month && day && <div className="text-muted-foreground text-[10px] font-mono">{month} {day}</div>}
        <div className="text-2xl font-bold text-bruins-gold leading-none">{year}</div>
      </div>
    </div>
  );
};
