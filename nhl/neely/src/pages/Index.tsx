import { HeroSection } from "@/components/HeroSection";
import { TradeYear } from "@/components/TradeYear";

const Index = () => {
  // Barry Pederson to Cam Neely Trade Tree
  const tradeHistory = [
    {
      year: "1980",
      month: "Jun",
      day: "11",
      trades: [
        {
          id: "pederson-drafted",
          fromTeam: "Boston Bruins",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Barry Pederson drafted 1st round (18th overall)"],
          description: "The Bruins draft Barry Pederson, who would become a star center before being traded.",
        },
      ],
    },
    {
      year: "1985",
      month: "Jun",
      day: "6",
      trades: [
        {
          id: "neely-original",
          fromTeam: "Boston Bruins",
          toTeam: "Vancouver Canucks",
          playersOut: ["Barry Pederson"],
          playersIn: ["Cam Neely", "1st round draft pick 1987"],
          description: "The original trade that started it all. Boston sends Pederson to Vancouver for Neely and picks.",
        },
      ],
    },
    {
      year: "1987",
      month: "Jun",
      day: "13",
      trades: [
        {
          id: "wesley-drafted",
          fromTeam: "Boston Bruins traded from Vancouver",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Glen Wesley drafted 1st round (3rd overall)"],
          description: "Using the pick from Vancouver, Boston drafts Glen Wesley who becomes a franchise defenseman.",
        },
      ],
    },
    {
      year: "1994",
      month: "Aug",
      day: "25",
      trades: [
        {
          id: "wesley-to-whalers",
          fromTeam: "Boston Bruins",
          toTeam: "Hartford Whalers",
          playersOut: ["Glen Wesley"],
          playersIn: ["1st round pick 1995", "1st round pick 1996", "1st round pick 1997"],
          description: "Wesley is traded to Hartford for three first-round picks, extending the trade tree.",
          isNested: true,
          nestLevel: 1,
        },
      ],
    },
    {
      year: "1995",
      month: "Jul",
      day: "8",
      trades: [
        {
          id: "mclaren-drafted",
          fromTeam: "Boston Bruins traded from Hartford",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Kyle McLaren drafted 1st round (9th overall)"],
          description: "Boston uses one of the Hartford picks to draft Kyle McLaren.",
          isNested: true,
          nestLevel: 2,
        },
      ],
    },
    {
      year: "1996",
      month: "Jun",
      day: "22",
      trades: [
        {
          id: "allison-drafted",
          fromTeam: "Boston Bruins traded from Hartford",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Johnathan Allison drafted 1st round (8th overall)"],
          description: "The second Hartford pick becomes Johnathan Allison.",
          isNested: true,
          nestLevel: 2,
        },
      ],
    },
    {
      year: "1997",
      month: "Jun",
      day: "21",
      trades: [
        {
          id: "samsonov-drafted",
          fromTeam: "Boston Bruins traded from Hartford",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Sergei Samsonov drafted 1st round (8th overall)"],
          description: "The third Hartford pick is used on Sergei Samsonov, who wins the Calder Trophy.",
          isNested: true,
          nestLevel: 2,
        },
      ],
    },
    {
      year: "2003",
      month: "Jan",
      day: "23",
      trades: [
        {
          id: "mclaren-to-sharks",
          fromTeam: "Boston Bruins",
          toTeam: "San Jose Sharks",
          playersOut: ["Kyle McLaren"],
          playersIn: ["4th round pick 2004", "Jeff Jillson", "Jeff Hackett"],
          description: "McLaren is traded to San Jose, creating another branch.",
          isNested: true,
          nestLevel: 3,
        },
      ],
    },
    {
      year: "2004",
      month: "Mar",
      day: "9",
      trades: [
        {
          id: "jillson-to-sharks-return",
          fromTeam: "Boston Bruins",
          toTeam: "San Jose Sharks",
          playersOut: ["Jeff Jillson"],
          playersIn: ["Brad Boyes"],
          description: "Jillson is traded back in a separate deal for Brad Boyes.",
          isNested: true,
          nestLevel: 4,
        },
      ],
    },
    {
      year: "2006",
      month: "Mar",
      day: "9",
      trades: [
        {
          id: "samsonov-to-oilers",
          fromTeam: "Boston Bruins",
          toTeam: "Edmonton Oilers",
          playersOut: ["Sergei Samsonov"],
          playersIn: ["Marty Reasoner", "Yan Stastny", "2nd round pick 2006"],
          description: "Samsonov is traded to Edmonton, continuing the cascade.",
          isNested: true,
          nestLevel: 3,
        },
      ],
    },
    {
      year: "2006",
      month: "Jun",
      day: "24",
      trades: [
        {
          id: "lucic-drafted",
          fromTeam: "Boston Bruins traded from Edmonton",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Milan Lucic drafted 2nd round (50th overall)"],
          description: "The pick from Edmonton becomes Milan Lucic, a key piece of Boston's 2011 Cup team.",
          isNested: true,
          nestLevel: 4,
        },
      ],
    },
    {
      year: "2007",
      month: "Jun",
      day: "16",
      trades: [
        {
          id: "stastny-to-blues",
          fromTeam: "Boston Bruins",
          toTeam: "St. Louis Blues",
          playersOut: ["Yan Stastny"],
          playersIn: ["5th round pick 2007"],
          description: "Stastny is flipped to St. Louis for another pick.",
          isNested: true,
          nestLevel: 4,
        },
      ],
    },
    {
      year: "2007",
      month: "Feb",
      day: "27",
      trades: [
        {
          id: "neil-drafted",
          fromTeam: "Boston Bruins",
          toTeam: "St. Louis Blues",
          playersOut: ["5th round pick 2007"],
          playersIn: ["Dennis Wideman"],
          description: "The Blues pick helps acquire Dennis Wideman in a separate transaction.",
          isNested: true,
          nestLevel: 5,
        },
      ],
    },
    {
      year: "2010",
      month: "Jun",
      day: "25",
      trades: [
        {
          id: "wideman-to-panthers",
          fromTeam: "Boston Bruins",
          toTeam: "Florida Panthers",
          playersOut: ["Dennis Wideman"],
          playersIn: ["1st round pick 2010", "1st round pick 2011", "Nathan Horton", "Gregory Campbell"],
          description: "Wideman goes to Florida in a massive deal that brings Nathan Horton to Boston.",
          isNested: true,
          nestLevel: 5,
        },
      ],
    },
    {
      year: "2011",
      month: "Jun",
      day: "15",
      trades: [
        {
          id: "cup-2011",
          fromTeam: "Boston Bruins",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["🏆 Stanley Cup 2011"],
          description: "The Bruins win the Stanley Cup with Lucic and Horton—both traced back to the 1985 Pederson trade—as key contributors.",
          isCelebration: true,
        },
      ],
    },
    {
      year: "2015",
      month: "Jun",
      day: "26",
      trades: [
        {
          id: "jones-to-la",
          fromTeam: "Boston Bruins",
          toTeam: "Los Angeles Kings",
          playersOut: ["Milan Lucic"],
          playersIn: ["Martin Jones", "Colin Miller", "1st round pick 2015"],
          description: "Lucic is traded to LA, extending the tree into its fourth decade.",
          isNested: true,
          nestLevel: 4,
        },
      ],
    },
    {
      year: "2015",
      month: "Jun",
      day: "26",
      trades: [
        {
          id: "zboril-drafted-la",
          fromTeam: "Boston Bruins traded from Los Angeles",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Jakub Zboril drafted 1st round (15th overall)"],
          description: "Boston uses the LA pick to draft Jakub Zboril.",
          isNested: true,
          nestLevel: 5,
        },
      ],
    },
    {
      year: "2015",
      month: "Jun",
      day: "30",
      trades: [
        {
          id: "jones-to-sharks",
          fromTeam: "Boston Bruins",
          toTeam: "San Jose Sharks",
          playersOut: ["Martin Jones"],
          playersIn: ["Sean Kuraly", "1st round pick 2016"],
          description: "Martin Jones is immediately flipped to San Jose for more assets.",
          isNested: true,
          nestLevel: 5,
        },
      ],
    },
    {
      year: "2016",
      month: "Jun",
      day: "24",
      trades: [
        {
          id: "frederic-drafted",
          fromTeam: "Boston Bruins traded from San Jose",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["Trent Frederic drafted 1st round (29th overall)"],
          description: "The Sharks pick from the Jones trade becomes Trent Frederic.",
          isNested: true,
          nestLevel: 6,
        },
      ],
    },
    {
      year: "2024",
      month: "Mar",
      day: "8",
      trades: [
        {
          id: "zboril-to-columbus",
          fromTeam: "Boston Bruins",
          toTeam: "Columbus Blue Jackets",
          playersOut: ["Jakub Zboril", "3rd round draft pick 2027"],
          playersIn: ["Andrew Peeke"],
          description: "Zboril is traded to Columbus along with a pick for Andrew Peeke.",
          isNested: true,
          nestLevel: 6,
        },
      ],
    },
    {
      year: "2024",
      month: "Mar",
      day: "8",
      trades: [
        {
          id: "peeke-to-bruins",
          fromTeam: "Columbus Blue Jackets",
          toTeam: "Boston Bruins",
          playersOut: ["Jakub Zboril", "3rd round draft pick 2027"],
          playersIn: ["⭐ Andrew Peeke"],
          description: "Zboril is traded to Columbus along with a pick for Andrew Peeke.",
          isNested: true,
          nestLevel: 6,
        },
      ],
    },
    {
      year: "2025",
      month: "Mar",
      day: "5",
      trades: [
        {
          id: "current-multi-team",
          fromTeam: "Boston Bruins",
          toTeam: "Multi-team trade",
          playersOut: ["Shane Lachance (to New Jersey Devils)", "Trent Frederic (to Edmonton Oilers)", "Petr Hauser (to Edmonton Oilers)", "Max Jones (to Edmonton Oilers)"],
          playersIn: ["⭐ Maximus Wanner", "2nd round draft pick 2025 (via St. Louis)", "⭐ 4th round draft pick 2026"],
          description: "Complex multi-team trade bringing in current roster assets, extending the trade tree to 40 years.",
          isNested: true,
          nestLevel: 7,
        },
      ],
    },
    {
      year: "2025",
      month: "Jun",
      day: "28",
      trades: [
        {
          id: "moore-drafted",
          fromTeam: "Boston Bruins traded from St. Louis",
          toTeam: "Boston Bruins",
          playersOut: [],
          playersIn: ["⭐ William Moore drafted 2nd round (51st overall)"],
          description: "Boston uses the 2nd round pick from St. Louis (acquired in the March 2025 multi-team trade) to draft William Moore.",
          isNested: true,
          nestLevel: 8,
        },
      ],
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <HeroSection />

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-16 pb-8 border-b border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            From Pederson to... Peeke and Wanner
          </h2>
          <p className="text-muted-foreground text-lg">
            The most remarkable trade tree in NHL history. From a single 1985 trade, 
            the Boston Bruins have created value for <span className="text-bruins-gold font-bold">40 years</span> and counting.
          </p>
        </div>

        {tradeHistory.map((yearData, index) => (
          <TradeYear key={`${yearData.year}-${index}`} {...yearData} />
        ))}

        <div className="mt-20 pt-12 border-t border-bruins-gold/20 text-center">
          <div className="inline-block">
            <div className="text-bruins-gold font-mono text-sm mb-4">1985 → 2025</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              One Trade. Forty Years.
              <br />
              <span className="text-bruins-gold">Still Creating Value.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Barry Pederson trade gave Boston Cam Neely and a first-round pick. 
              That single deal evolved into a Stanley Cup championship, multiple All-Stars, 
              and assets that continue producing today. This is the greatest trade tree in hockey history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
