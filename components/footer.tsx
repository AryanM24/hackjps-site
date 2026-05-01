export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center overflow-hidden p-0">
      {/* Vignette gradient fade at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent" />
      
      {/* Big HACKJPS text */}
      <h2 
        className="w-full select-none text-center font-display text-[21vw] font-bold uppercase leading-[0.7] tracking-tighter text-foreground/10"
        aria-label="HackJPS"
      >
        HACKJPS
      </h2>
    </footer>
  )
}
