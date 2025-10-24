export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bruins-gold/10 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="text-bruins-gold font-mono text-sm mb-4 tracking-widest uppercase">
            The Greatest Trade Tree in NHL History
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
            Pederson for Neely.<br />
            <span className="text-bruins-gold">40 Years of Value.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            In 1985, the Boston Bruins traded Barry Pederson for Cam Neely and a pick. 
            Four decades later, that trade is still creating value for the franchise.
          </p>
          <div className="flex items-center justify-center gap-2 animate-bounce">
            <div className="w-1 h-12 bg-bruins-gold rounded-full" />
            <div className="text-bruins-gold text-sm font-mono">Scroll to begin</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bruins-gold to-transparent" />
    </section>
  );
};
