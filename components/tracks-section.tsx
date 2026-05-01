import { Brain, Heart, Leaf, Shield } from "lucide-react"

const tracks = [
  {
    icon: Brain,
    name: "AI & Machine Learning",
    description: "Build intelligent solutions using the latest in AI and ML technologies.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Heart,
    name: "Health & Wellness",
    description: "Create technology that improves health outcomes and quality of life.",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: Leaf,
    name: "Sustainability",
    description: "Develop solutions for environmental challenges and sustainable futures.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    description: "Build tools to protect digital infrastructure and user privacy.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
]

export function TracksSection() {
  return (
    <section id="tracks" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Competition Tracks
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Choose your challenge</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Select a track that aligns with your passion. Each track has dedicated 
            prizes and mentors to help you succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.name}
              className="group relative overflow-hidden rounded-xl bg-card p-8 transition-all hover:bg-card/80"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${track.bgColor}`}>
                <track.icon className={`h-7 w-7 ${track.color}`} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {track.name}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {track.description}
              </p>
              <div className="mt-6">
                <span className="text-sm font-medium text-accent">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
