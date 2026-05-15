import { motion, useScroll, useTransform } from "motion/react";
import { 
  Dumbbell, 
  Flame, 
  Users, 
  Activity, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Star
} from "lucide-react";
import { useState, useRef } from "react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-black text-white overflow-hidden">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      
      <main>
        <HeroSection />
        <ProgramsSection />
        <TransformationSection />
        <MembershipSection />
        <TestimonialsSection />
        <TrainersSection />
        <CTABanner />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: { isMobileMenuOpen: boolean, setIsMobileMenuOpen: (v: boolean) => void }) {
  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Results", href: "#results" },
    { name: "Memberships", href: "#memberships" },
    { name: "Trainers", href: "#trainers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-iron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 red-gradient flex items-center justify-center font-black italic text-xl">IF</div>
            <span className="aggressive-text text-2xl">Iron Forge</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Austin, TX</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#080808] border-b border-iron"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold uppercase tracking-wider text-gray-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#memberships"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 red-gradient text-white text-center px-6 py-3 aggressive-text text-xl shadow-[0_0_15px_rgba(255,0,0,0.2)]"
            >
              Start Free Trial
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3400&auto=format&fit=crop" 
          alt="Athlete deadlifting" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="aggressive-text text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6">
              Build <br/><span className="text-brand">Strength.</span><br/>
              Transform.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl">
              Austin's premier destination for high-performance fitness. Join the elite. Stop making excuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <a href="#memberships" className="red-gradient w-full py-5 aggressive-text text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] text-center flex items-center justify-center gap-2">
                Start Free Trial
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      desc: "Build raw power and muscle mass with our elite free-weight and machine zones.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Flame,
      title: "Fat Loss Programs",
      desc: "High-intensity metabolic conditioning designed to torch calories and reveal muscle.",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Users,
      title: "Group Classes",
      desc: "Feed off the energy of the pack. HIIT, spin, and functional training sessions daily.",
      image: "https://images.unsplash.com/photo-1638202538198-9eb0a12e8312?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Activity,
      title: "Personal Coaching",
      desc: "1-on-1 expert guidance tailored to your specific biomechanics and goals.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-[#080808] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="aggressive-text text-4xl md:text-5xl mb-4 flex items-center gap-3 justify-center lg:justify-start">
            <span className="w-8 h-px bg-brand hidden md:block"></span>Our Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">Everything you need to break past your limits and forge a new you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={program.title}
              className="group relative h-80 overflow-hidden card-hover"
            >
              <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#080808]/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <program.icon className="w-10 h-10 text-brand mb-4 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="text-brand aggressive-text text-lg mb-1">0{idx + 1}.</div>
                <h3 className="aggressive-text text-3xl mb-2">{program.title}</h3>
                <p className="text-gray-400 text-sm">{program.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  const transformations = [
    {
      name: "Marcus T.",
      result: "Lost 45 lbs, Gained 12 lbs Muscle",
      time: "8 Months",
      before: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1583465554952-6da5e8bdcb6a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Sarah L.",
      result: "Deadlift PR: 225 lbs",
      time: "6 Months",
      before: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1534438097552-6da5e8bdcb6a?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="results" className="py-24 bg-[#0A0A0A] border-y border-iron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="aggressive-text text-4xl md:text-5xl mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-brand"></span>Real Results
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">We don't sell memberships. We sell transformations. These are real members who put in the work.</p>
          </div>
          <p className="aggressive-text text-8xl text-zinc-900 leading-[0.8] select-none hidden lg:block opacity-50">PROVE IT</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {transformations.map((t, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={t.name} 
              className="bg-[#050505] p-6 border border-iron relative card-hover"
            >
              <div className="grid grid-cols-2 gap-4 mb-6 relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.before} alt={`${t.name} Before`} className="w-full h-full object-cover grayscale opacity-70" />
                  <div className="absolute top-2 left-2 bg-black/80 backdrop-blur text-xs font-bold uppercase tracking-wider px-2 py-1">Before</div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.after} alt={`${t.name} After`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute top-2 right-2 red-gradient text-xs font-bold uppercase tracking-wider px-2 py-1">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-brand w-12 h-12 flex items-center justify-center border border-iron font-display aggressive-text text-xl z-10">VS</div>
              </div>
              <div className="text-center pb-2">
                <h3 className="aggressive-text text-3xl">{t.name}</h3>
                <p className="text-brand font-bold uppercase tracking-wide mt-1">{t.result}</p>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider font-bold">Timeframe: {t.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipSection() {
  const plans = [
    {
      name: "Basic",
      price: "29",
      desc: "For the self-guided lifter.",
      features: ["24/7 Gym Access", "Free Weights & Machines", "Locker Room Access", "1 Strategy Session"],
      recommended: false
    },
    {
      name: "Pro",
      price: "59",
      desc: "Maximize your training potential.",
      features: ["All Basic Features", "Unlimited Group Classes", "Recovery Zone Access", "Monthly Body Scan", "Guest Privileges (Weekends)"],
      recommended: true
    },
    {
      name: "Elite",
      price: "99",
      desc: "The complete transformation package.",
      features: ["All Pro Features", "2 Personal Training Sessions/mo", "Custom Nutrition Plan", "Priority Class Booking", "Exclusive Swag Pack"],
      recommended: false
    }
  ];

  return (
    <section id="memberships" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="aggressive-text text-4xl md:text-5xl mb-4 flex items-center gap-3 justify-center">
            <span className="w-8 h-px bg-brand hidden md:block"></span>Memberships
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">No hidden fees. No BS contracts. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={plan.name} 
              className={`bg-[#0A0A0A] p-8 flex flex-col relative ${plan.recommended ? 'border border-brand bg-zinc-900/50 transform md:-translate-y-4' : 'border border-iron'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-brand text-black px-3 py-1 text-xs font-black uppercase">
                  Popular
                </div>
              )}
              <h3 className="aggressive-text text-3xl text-center mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-center mb-6 text-sm">{plan.desc}</p>
              <div className="text-center mb-8">
                <span className="text-gray-500 font-bold text-2xl align-top">$</span>
                <span className={`aggressive-text text-6xl ${plan.recommended ? 'text-brand' : 'text-white'}`}>{plan.price}</span>
                <span className="text-gray-500 italic text-sm block mt-1">/ mo</span>
              </div>
              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 aggressive-text text-lg transition-colors ${plan.recommended ? 'red-gradient text-white hover:scale-105 shadow-[0_0_15px_rgba(255,0,0,0.2)]' : 'bg-black border border-iron hover:bg-zinc-900 text-white'}`}>
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: "I've trained at 5 different gyms in Austin. Iron Forge is the only one where the community actually pushes you to be better. The equipment is top tier.",
      author: "David M.",
      rating: 5
    },
    {
      text: "The coaches here don't mess around. I came in wanting to lose 10 lbs, ended up finding a love for powerlifting. Changed my life completely.",
      author: "Jessica R.",
      rating: 5
    },
    {
      text: "Loud music, heavy weights, no judgment. If you're serious about your training, this is the only place to be.",
      author: "Michael T.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#080808] border-t border-iron overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="aggressive-text text-4xl md:text-5xl mb-4 flex items-center gap-3 justify-center">
            <span className="w-8 h-px bg-brand"></span>The Word
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-6 bg-zinc-900 border-l-4 border-brand shadow-xl"
            >
              <div className="italic text-sm text-gray-300 mb-4">"{t.text}"</div>
              <div className="mt-2 aggressive-text text-[10px]">— {t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainersSection() {
  const trainers = [
    {
      name: "Rex Carter",
      role: "Head Strength Coach",
      image: "https://images.unsplash.com/photo-1567598508481-65985588ce2a?q=80&w=600&auto=format&fit=crop",
      bio: "Former competitive powerlifter. Rex specializes in raw strength development and biomechanics."
    },
    {
      name: "Lena Hayes",
      role: "Endurance & HIIT",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
      bio: "Don't let the smile fool you. Lena's metabolic conditioning classes will break you down and build you back stronger."
    },
    {
      name: "Jackson 'Jax' Pierce",
      role: "Hypertrophy Specialist",
      image: "https://images.unsplash.com/photo-1534368270820-9304381bb454?q=80&w=600&auto=format&fit=crop",
      bio: "Focused on muscle building and aesthetic transformations. Jax brings science to bodybuilding."
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-black border-t border-iron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="aggressive-text text-4xl md:text-5xl mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-brand"></span>Trainers
            </h2>
            <p className="text-gray-400 text-lg">Your guides on the path to elite fitness.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest hover:text-brand-dark transition-colors">
            View All Trainers <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={trainer.name} 
              className="group cursor-pointer bg-zinc-900 border border-iron relative overflow-hidden"
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity hover:mix-blend-normal" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="aggressive-text text-2xl text-white">{trainer.name}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{trainer.role}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm p-4">{trainer.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-32 bg-[#080808] flex items-center justify-center overflow-hidden text-center px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" 
          alt="Gym interior" 
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="aggressive-text text-5xl md:text-7xl mb-6 text-white leading-tight">
          Ready to break your limits?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Your goals won't achieve themselves. Claim your 7-day free pass today.
        </p>
        <a href="#memberships" className="red-gradient px-12 py-5 aggressive-text text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] inline-block">
          Claim Free Pass
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-iron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="aggressive-text text-4xl mb-8 flex items-center gap-3">
                 <span className="w-8 h-px bg-brand"></span>Location & Intel
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 border border-iron p-3 text-brand">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Headquarters</h4>
                    <p className="text-gray-400 text-sm">1102 E 5th St<br/>Austin, TX 78702</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 border border-iron p-3 text-brand">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Comms</h4>
                    <p className="text-gray-400 text-sm">(512) 555-IRON<br/>info@ironforge.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Hours of Operation</h4>
                <ul className="space-y-2 text-gray-400 text-sm border-t border-iron pt-4">
                  <li className="flex justify-between"><span>Monday - Friday</span> <span>5:00 AM - 11:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>6:00 AM - 10:00 PM</span></li>
                  <li className="flex justify-between text-brand font-bold"><span>Sunday</span> <span>Open 24/7 for Members</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-8 border border-iron relative">
              <h3 className="aggressive-text text-2xl mb-6 text-white">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-iron p-3 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-iron p-3 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors text-sm" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-zinc-900 border border-iron p-3 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Your Goal</label>
                  <select className="w-full bg-zinc-900 border border-iron p-3 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors appearance-none text-sm">
                    <option>Select a goal...</option>
                    <option>Fat Loss</option>
                    <option>Hypertrophy/Muscle Gain</option>
                    <option>Powerlifting/Strength</option>
                    <option>General Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-iron p-3 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors text-sm" placeholder="How can we help you crush your goals?"></textarea>
                </div>
                <button type="button" className="red-gradient w-full text-white aggressive-text uppercase text-xl py-4 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,0,0,0.2)] mt-4">
                  Send Message
                </button>
              </form>
            </div>
         </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="h-24 sm:h-20 bg-brand text-black flex flex-col items-center justify-center sm:flex-row sm:justify-between px-4 sm:px-10 aggressive-text text-sm italic">
      <span className="mb-2 sm:mb-0">READY TO FORGE A NEW YOU?</span>
      <span className="hidden md:inline">AUSTIN • TEXAS • EST 2024</span>
      <a href="#memberships" className="hover:text-white transition-colors cursor-pointer">JOIN THE REVOLUTION &rarr;</a>
    </footer>
  );
}
