import { Trophy, Award, Medal, Gift } from "lucide-react"

const prizes = [
  {
    icon: Trophy,
    place: "Grand Prize",
    amount: "$5,000",
    perks: ["Cash prize", "Startup incubator access", "1-on-1 mentorship"],
    featured: true,
  },
  {
    icon: Award,
    place: "2nd Place",
    amount: "$2,500",
    perks: ["Cash prize", "Tech gadget bundle", "Workshop access"],
    featured: false,
  },
  {
    icon: Medal,
    place: "3rd Place",
    amount: "$1,000",
    perks: ["Cash prize", "Premium software licenses", "Swag pack"],
    featured: false,
  },
  {
    icon: Gift,
    place: "Track Winners",
    amount: "$500 each",
    perks: ["Per track category", "Special recognition", "Sponsor prizes"],
    featured: false,
  },
]

export function PrizesSection() {
  return (
    <section id="prizes" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Prizes
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Win big, build bigger</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Over $10,000 in prizes up for grabs. From cash awards to 
            mentorship opportunities, your hard work will be rewarded.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prizes.map((prize) => (
            <div
              key={prize.place}
              className={`relative rounded-xl p-6 transition-all ${
                prize.featured
                  ? "bg-gradient-to-b from-accent/20 to-card ring-1 ring-accent/30"
                  : "bg-card hover:bg-card/80"
              }`}
            >
              {prize.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Top Prize
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                  prize.featured ? "bg-accent/20" : "bg-secondary"
                }`}>
                  <prize.icon className={`h-7 w-7 ${prize.featured ? "text-accent" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {prize.place}
                </h3>
                <p className={`mt-2 font-display text-3xl font-bold ${
                  prize.featured ? "text-accent" : "text-foreground"
                }`}>
                  {prize.amount}
                </p>
                <ul className="mt-4 space-y-2">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="text-sm text-muted-foreground">
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
