import { Navigation } from "@/components/navigation";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ExternalLink, Globe, Book, Terminal, Cpu, Trophy, MessageSquare } from "lucide-react";

const resources = [
  {
    title: "Essential Links",
    items: [
      { name: "Devpost", href: "https://hackjps2026.devpost.com", icon: Globe, external: true },
      { name: "Discord", href: "https://discord.gg/hackjps", icon: MessageSquare, external: true },
      { name: "Hacker Guide", href: "#guide", icon: Book },
    ],
  },
  {
    title: "Technical",
    items: [
      { name: "API Documentation", href: "#api", icon: Terminal },
      { name: "Starter Kits", href: "#starter-kits", icon: Cpu },
      { name: "Judging Criteria", href: "#judging", icon: Trophy },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-[#d8d4c7]">
      <Navigation />
      
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          {/* Documentation Style Sidebar */}
          <aside className="w-64 border-r border-[#16a34a]/20 bg-black/50 backdrop-blur-md hidden md:block">
            <ScrollArea className="h-[calc(100vh-120px)] py-6 px-4">
              {resources.map((group) => (
                <div key={group.title} className="mb-8">
                  <h3 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#16a34a] mb-4 px-2">
                    {group.title}
                  </h3>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-sm font-mono tracking-wider transition-all hover:bg-[#16a34a]/10 hover:text-[#16a34a] group relative border border-transparent hover:border-[#16a34a]/30"
                        target={item.external ? "_blank" : undefined}
                      >
                        <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        {item.name}
                        {item.external && <ExternalLink className="w-3 h-3 ml-auto opacity-40" />}
                        
                        {/* Boxy corner accents on hover */}
                        <div className="absolute -left-[1px] -top-[1px] h-2 w-2 border-l border-t border-[#16a34a] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -right-[1px] -top-[1px] h-2 w-2 border-r border-t border-[#16a34a] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-[1px] -left-[1px] h-2 w-2 border-b border-l border-[#16a34a] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-[1px] -right-[1px] h-2 w-2 border-b border-r border-[#16a34a] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Hero Section */}
              <section className="space-y-6">
                <div className="inline-block px-3 py-1 border border-[#16a34a]/30 bg-[#16a34a]/5 text-[#16a34a] text-[10px] font-mono tracking-[0.2em] uppercase">
                  Resources v2026.1
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#d8d4c7] font-display uppercase">
                  Hacker <span className="text-[#16a34a]">Headquarters</span>
                </h2>
                <p className="text-lg text-[#d8d4c7]/70 max-w-2xl font-sans leading-relaxed">
                  Everything you need to build the future. From technical documentation to community support, find all your hackathon essentials here.
                </p>
              </section>

              {/* Essential Links Grid */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://hackjps2026.devpost.com" 
                  target="_blank" 
                  className="group relative border border-[#16a34a]/20 bg-[#16a34a]/5 p-8 transition-all hover:bg-[#16a34a]/10"
                >
                  <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l-2 border-t-2 border-[#16a34a]" />
                  <div className="absolute -right-[1px] -bottom-[1px] h-4 w-4 border-r-2 border-b-2 border-[#16a34a]" />
                  <Globe className="w-8 h-8 text-[#16a34a] mb-6" />
                  <h3 className="text-xl font-bold mb-2 uppercase font-display tracking-wider">Devpost</h3>
                  <p className="text-[#d8d4c7]/60 text-sm">Submit your projects, find teammates, and view prizes.</p>
                  <div className="mt-6 flex items-center text-[#16a34a] text-xs font-mono tracking-widest uppercase group-hover:gap-2 transition-all">
                    Access Portal <span className="text-lg">&gt;</span>
                  </div>
                </a>

                <a 
                  href="https://discord.gg/hackjps" 
                  target="_blank" 
                  className="group relative border border-[#16a34a]/20 bg-[#16a34a]/5 p-8 transition-all hover:bg-[#16a34a]/10"
                >
                  <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l-2 border-t-2 border-[#16a34a]" />
                  <div className="absolute -right-[1px] -bottom-[1px] h-4 w-4 border-r-2 border-b-2 border-[#16a34a]" />
                  <MessageSquare className="w-8 h-8 text-[#16a34a] mb-6" />
                  <h3 className="text-xl font-bold mb-2 uppercase font-display tracking-wider">Discord</h3>
                  <p className="text-[#d8d4c7]/60 text-sm">Join the community, ask questions, and get live updates.</p>
                  <div className="mt-6 flex items-center text-[#16a34a] text-xs font-mono tracking-widest uppercase group-hover:gap-2 transition-all">
                    Join Server <span className="text-lg">&gt;</span>
                  </div>
                </a>
              </section>

              {/* Documentation Sections */}
              <div className="space-y-24">
                <section id="guide" className="space-y-8 pt-12 border-t border-[#16a34a]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#16a34a]" />
                    <h3 className="text-2xl font-bold uppercase tracking-widest font-display">Hacker Guide</h3>
                  </div>
                  <div className="prose prose-invert max-w-none text-[#d8d4c7]/80 font-sans space-y-6">
                    <p>Welcome to HackJPS 2026! This year's event is focused on pushing the boundaries of what's possible with AI and sustainable technology.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-6 border border-[#16a34a]/10 bg-black/40">
                        <h4 className="text-[#16a34a] font-mono text-xs uppercase mb-3">Check-in</h4>
                        <p className="text-sm">Starts March 29th at 9:00 AM. Please have your registration QR code ready at the Innovation Center entrance.</p>
                      </div>
                      <div className="p-6 border border-[#16a34a]/10 bg-black/40">
                        <h4 className="text-[#16a34a] font-mono text-xs uppercase mb-3">Hardware Lab</h4>
                        <p className="text-sm">Available on the 2nd floor. We have Arduinos, Raspberry Pis, and various sensors for checkout.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="api" className="space-y-8 pt-12 border-t border-[#16a34a]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#16a34a]" />
                    <h3 className="text-2xl font-bold uppercase tracking-widest font-display">API Documentation</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-[#17171c] p-6 font-mono text-sm border border-[#16a34a]/20">
                      <div className="flex justify-between items-center mb-4 border-b border-[#16a34a]/10 pb-2">
                        <span className="text-[#16a34a]">GET /v1/events</span>
                        <span className="text-[10px] opacity-50">CURL</span>
                      </div>
                      <pre className="text-blue-400">
                        <code>{`curl -X GET "https://api.hackjps.com/v1/events" \\
  -H "Authorization: Bearer YOUR_HACKER_ID"`}</code>
                      </pre>
                    </div>
                    <p className="text-[#d8d4c7]/70 text-sm">Access our custom event API for real-time schedule updates and announcement notifications.</p>
                  </div>
                </section>

                <section id="judging" className="space-y-8 pt-12 border-t border-[#16a34a]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#16a34a]" />
                    <h3 className="text-2xl font-bold uppercase tracking-widest font-display">Judging Criteria</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "Innovation", desc: "How original and creative is the idea?" },
                      { title: "Technical Complexity", desc: "How challenging was the implementation?" },
                      { title: "Social Impact", desc: "How does it benefit the community?" }
                    ].map((item) => (
                      <div key={item.title} className="p-6 border border-[#16a34a]/10 bg-black/20">
                        <div className="text-[#16a34a] font-bold text-lg mb-2 font-display uppercase">{item.title}</div>
                        <p className="text-xs text-[#d8d4c7]/60 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer Spacer */}
              <div className="h-24" />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
