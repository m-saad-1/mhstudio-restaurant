import type { Metadata } from "next";
import Link from "next/link";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Check from "lucide-react/dist/esm/icons/check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Restaurant Digital Services & Automation",
  description: "Explore restaurant CRM, loyalty, marketing, reservations, inventory, analytics, AI, WhatsApp, SEO, automation, integrations, and multi-branch digital services.",
};

export default function SupportingServicesPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[30%] h-[30%] w-[40%] rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[20%] h-[40%] w-[30%] rounded-full bg-amber-400/5 blur-[80px]" />
        </div>

        <div className="content-shell relative z-10 text-center max-w-4xl mx-auto mb-16">
          <Reveal className="flex flex-col items-center">
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Supporting Restaurant Services
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
              Everything Your Restaurant Needs to Grow, Connected in One Ecosystem.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-body">
              Beyond your website, POS, and kitchen systems, MhStudio provides the supporting tools that help restaurants understand customers, increase repeat business, automate daily tasks, and operate efficiently.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 font-medium text-zinc-950 transition-colors hover:bg-amber-400"
              >
                Get a Free Demo
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center border border-border px-6 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500"
              >
                Explore Core Systems
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Hero Visual: Ecosystem */}
        <div className="content-shell relative z-10">
          <Reveal delayMs={100} className="mx-auto w-full max-w-5xl">
             <div className="relative aspect-square sm:aspect-video w-full rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex items-center justify-center p-4 sm:p-8">
                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                
                {/* Central Node */}
                <div className="relative z-20 flex flex-col items-center justify-center w-32 h-32 sm:w-48 sm:h-48 bg-zinc-900 border-2 border-amber-500/50 rounded-full shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                   <span className="font-bold text-amber-500 text-sm sm:text-xl text-center leading-tight">YOUR<br/>RESTAURANT</span>
                </div>
                
                {/* Orbiting Nodes (Supporting Services) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                   {['CRM', 'Loyalty', 'Marketing', 'Reservations', 'Inventory', 'Analytics', 'AI', 'WhatsApp', 'SEO', 'Integrations'].map((node, i, arr) => {
                      const angle = (i * (360 / arr.length)) * (Math.PI / 180);
                      // Calculate positions (responsive)
                      const rSmall = 120;
                      const rLarge = 220;
                      return (
                         <div key={node} className="absolute flex items-center justify-center hidden sm:flex" style={{
                            transform: `translate(${Math.cos(angle) * rLarge}px, ${Math.sin(angle) * rLarge}px)`
                         }}>
                            <div className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-full text-xs font-bold text-zinc-300 shadow-lg relative">
                               {node}
                               {/* Connecting line to center */}
                               <div className="absolute top-1/2 left-1/2 w-[220px] h-px bg-zinc-800 -z-10 origin-left" style={{ transform: `translateY(-50%) rotate(${angle + Math.PI}rad)` }}></div>
                            </div>
                         </div>
                      );
                   })}
                   
                   {/* Mobile version of nodes */}
                   <div className="absolute inset-0 flex items-center justify-center sm:hidden">
                      <div className="w-[280px] h-[280px] border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]">
                         {['CRM', 'Analytics', 'Inventory', 'Marketing'].map((node, i, arr) => {
                            const angle = (i * (360 / arr.length)) * (Math.PI / 180);
                            return (
                               <div key={node} className="absolute w-20 h-8 -ml-10 -mt-4 bg-zinc-900 border border-zinc-700 rounded-full text-[10px] font-bold text-zinc-300 flex items-center justify-center" style={{
                                  left: `calc(50% + ${Math.cos(angle) * 140}px)`,
                                  top: `calc(50% + ${Math.sin(angle) * 140}px)`,
                                  transform: `rotate(${-angle}rad)` // keep text upright
                               }}>
                                  {node}
                               </div>
                            )
                         })}
                      </div>
                   </div>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 2 & 3. INTRO & CAPABILITIES GRID */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell">
          <SectionHeading
            eyebrow="One Ecosystem. Multiple Capabilities."
            title="The Systems Behind a Better-Run Restaurant."
            description="A restaurant's digital operation doesn't stop at taking orders. You need to understand your customers, manage stock, bring guests back, promote your offers, track performance, and automate repetitive tasks."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {[
               { title: "CRM & Customer Management", desc: "Build a centralized customer database and understand every customer's relationship with your restaurant." },
               { title: "Loyalty & Retention", desc: "Turn first-time customers into repeat customers with points, rewards, and targeted offers." },
               { title: "Promotions & Marketing", desc: "Create campaigns, offers, discounts, and targeted promotions from one place." },
               { title: "Reservations & Booking", desc: "Manage reservations, guest information, table allocation, and booking activity." },
               { title: "Inventory & Supply", desc: "Track stock, ingredients, recipes, suppliers, purchase orders, and waste." },
               { title: "Analytics & Business Intelligence", desc: "Turn restaurant data into useful insights for better decisions." },
               { title: "Multi-Branch Management", desc: "Manage multiple locations while keeping branch-level operations organized." },
               { title: "AI Restaurant Assistants", desc: "Use AI to support customer communication, ordering, analysis, and tasks." },
               { title: "WhatsApp Ordering", desc: "Connect customer conversations with ordering and restaurant workflows." },
               { title: "Local SEO & Visibility", desc: "Improve your restaurant's visibility when customers search for food nearby." },
               { title: "Performance Optimization", desc: "Keep digital experiences fast, reliable, and optimized for conversions." },
               { title: "Integrations & Automation", desc: "Connect your restaurant systems with the tools your business already uses." }
             ].map((cap, i) => (
                <Reveal key={cap.title} delayMs={(i % 3) * 50} className="surface-card p-6 border-t-2 border-t-amber-500/20">
                   <h3 className="text-sm font-bold text-foreground mb-2">{cap.title}</h3>
                   <p className="text-foreground-body text-xs leading-relaxed">{cap.desc}</p>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. CRM & SEGMENTATION */}
      <section className="section-space">
        <div className="content-shell grid gap-12 lg:grid-cols-2 items-center">
           <Reveal className="space-y-6">
             <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Customer Management</span>
             <h3 className="text-3xl font-bold tracking-tight text-foreground">Know Your Customers Beyond Their Last Order.</h3>
             <p className="text-foreground-body text-sm leading-relaxed">A restaurant's customer database can become one of its most valuable business assets. Instead of treating every order as an isolated transaction, build a long-term relationship with your customers.</p>
             <div className="flex flex-wrap gap-2 mt-4">
                {['New Customers', 'Repeat Customers', 'High-Value Customers', 'Inactive Customers'].map(seg => (
                   <span key={seg} className="text-[10px] font-bold text-zinc-400 bg-surface border border-border px-2 py-1 rounded">{seg}</span>
                ))}
             </div>
           </Reveal>

           <Reveal delayMs={100} className="flex justify-center">
             <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-6">
                <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
                   <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-lg">AK</div>
                   <div>
                      <div className="font-bold text-zinc-100 text-lg">Ahmed Khan</div>
                      <div className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded w-fit mt-1">High-Value Customer</div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                   <div><div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Total Orders</div><div className="font-bold text-zinc-200">18</div></div>
                   <div><div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Total Spend</div><div className="font-bold text-zinc-200">PKR 42,500</div></div>
                   <div><div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Favorite</div><div className="font-bold text-zinc-200">Beef Burger</div></div>
                   <div><div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Last Order</div><div className="font-bold text-zinc-200">2 days ago</div></div>
                </div>
                <button className="w-full bg-zinc-900 text-amber-500 border border-amber-500/30 text-xs font-bold py-2 rounded">Send Targeted Offer</button>
             </div>
           </Reveal>
        </div>
      </section>

      {/* 6. LOYALTY & RETENTION */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Loyalty & Retention"
            title="Give Customers a Reason to Come Back."
            description="Loyalty should be connected to actual restaurant activity. Turn first-time customers into regulars with automated points, rewards, and targeted incentives."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
             {[
                { label: "ORDER", sub: "Customer places order" },
                { label: "EARN", sub: "Earn points per PKR" },
                { label: "REWARD", sub: "Unlock discounts" },
                { label: "RETURN", sub: "Redeem next visit" }
             ].map((step, i, arr) => (
                <div key={step.label} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                   <div className="bg-surface border border-border p-4 rounded-lg w-full md:w-40 text-center flex flex-col justify-center shadow-sm">
                      <span className="font-bold text-amber-500 text-sm mb-1">{step.label}</span>
                      <span className="text-[10px] text-foreground-muted">{step.sub}</span>
                   </div>
                   {i < arr.length - 1 && <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0 flex-shrink-0" />}
                </div>
             ))}
          </Reveal>
        </div>
      </section>

      {/* 9, 10, 11. INVENTORY, PURCHASING, WASTE */}
      <section className="section-space">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Inventory & Supply Management"
            title="Know What You Have, What You Need, and What You're Losing."
            description="Restaurant inventory is closely connected to menu sales. Track stock, connect sales to recipes, manage suppliers, and monitor waste."
            align="center"
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
             {/* Recipe mapping */}
             <Reveal className="surface-card p-6 border border-border">
                <div className="text-xs font-bold text-amber-500 mb-6 uppercase tracking-wider">Recipe Mapping</div>
                <div className="bg-zinc-950 border border-zinc-800 rounded p-5">
                   <div className="font-bold text-zinc-200 border-b border-zinc-800 pb-3 mb-4">Chicken Burger</div>
                   <div className="space-y-3 text-sm text-zinc-400">
                      <div className="flex justify-between"><span>Burger Bun</span><span>1 pc</span></div>
                      <div className="flex justify-between"><span>Chicken Breast</span><span>150g</span></div>
                      <div className="flex justify-between"><span>Cheese Slice</span><span>1 pc</span></div>
                      <div className="flex justify-between"><span>Special Sauce</span><span>20g</span></div>
                   </div>
                   <div className="mt-4 pt-3 border-t border-zinc-800 text-xs text-zinc-500 text-center">
                      Ingredients are automatically deducted from stock when sold.
                   </div>
                </div>
             </Reveal>

             {/* Workflow */}
             <Reveal delayMs={100} className="surface-card p-6 border border-border flex flex-col justify-center">
                <div className="text-xs font-bold text-amber-500 mb-6 uppercase tracking-wider">Purchasing Workflow</div>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-4 bg-zinc-950 p-3 rounded border border-zinc-800 text-sm">
                      <div className="w-8 h-8 rounded bg-red-500/10 text-red-500 flex items-center justify-center font-bold">1</div>
                      <div><span className="font-bold text-zinc-200 block">Low Stock Alert</span><span className="text-xs text-zinc-500">Chicken breast stock is below threshold.</span></div>
                   </div>
                   <div className="flex items-center gap-4 bg-zinc-950 p-3 rounded border border-zinc-800 text-sm ml-4">
                      <div className="w-8 h-8 rounded bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">2</div>
                      <div><span className="font-bold text-zinc-200 block">Purchase Order</span><span className="text-xs text-zinc-500">PO generated for supplier.</span></div>
                   </div>
                   <div className="flex items-center gap-4 bg-zinc-950 p-3 rounded border border-zinc-800 text-sm ml-8 relative shadow-[0_0_15px_rgba(245,158,11,0.1)] border-amber-500/30">
                      <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">3</div>
                      <div><span className="font-bold text-zinc-200 block">Receive Stock</span><span className="text-xs text-amber-500">Inventory automatically updated.</span></div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 13 & 14. ANALYTICS & AI INSIGHTS */}
      <section className="section-space section-divider bg-surface-secondary/30">
        <div className="content-shell grid gap-12 lg:grid-cols-2 items-center">
           <Reveal className="flex justify-center">
             <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-6">
                <div className="font-bold text-zinc-100 mb-6 flex justify-between items-center border-b border-zinc-800 pb-4">
                   <span>Weekly Performance</span>
                   <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">Past 7 Days</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-zinc-900 border border-zinc-800 rounded p-4">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Revenue</div>
                      <div className="text-xl font-bold text-amber-500">PKR 485,200</div>
                      <div className="text-xs text-emerald-500 mt-1">↑ 12% vs last week</div>
                   </div>
                   <div className="bg-zinc-900 border border-zinc-800 rounded p-4">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Orders</div>
                      <div className="text-xl font-bold text-zinc-200">342</div>
                      <div className="text-xs text-emerald-500 mt-1">↑ 8% vs last week</div>
                   </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded p-4">
                   <div className="text-[10px] text-amber-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="text-base">✨</span> AI Insight</div>
                   <p className="text-xs text-zinc-300 leading-relaxed italic">Revenue increased this week, primarily driven by delivery orders and the new burger promotion. Recommend extending the lunch deal.</p>
                </div>
             </div>
           </Reveal>

           <Reveal delayMs={100} className="space-y-6">
             <span className="mb-2 inline-block text-xs font-semibold tracking-wider text-amber-500 uppercase">Analytics & AI</span>
             <h3 className="text-3xl font-bold tracking-tight text-foreground">Stop Guessing. Start Understanding.</h3>
             <p className="text-foreground-body text-sm leading-relaxed">Restaurant data can answer important questions about sales, operations, and customer behavior. AI turns large amounts of operational data into understandable insights, acting as a decision-support layer for management.</p>
             <ul className="space-y-2 mt-4 text-sm text-foreground-body">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Track revenue, orders, and AOV</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Identify best-selling products</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Compare branch performance</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Analyze customer retention</li>
             </ul>
           </Reveal>
        </div>
      </section>

      {/* 16 & 22. WHATSAPP & AUTOMATION */}
      <section className="section-space">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="WhatsApp & Automation"
            title="Automate Workflows and Meet Customers Where They Are."
            description="Connect customer conversations with ordering workflows, and automate repetitive tasks across your restaurant."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 flex flex-col md:flex-row gap-6">
             {/* Automation Flow */}
             <div className="flex-1 bg-surface border border-border p-6 rounded-xl flex flex-col">
                <h4 className="font-bold text-foreground text-sm mb-6 border-b border-border pb-3 text-left">Custom Workflows</h4>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded flex-1 text-center">New Order</div>
                      <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0" />
                      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-xs px-3 py-1.5 rounded flex-1 text-center">Kitchen Alert</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded flex-1 text-center">Inactive Customer</div>
                      <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0" />
                      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-xs px-3 py-1.5 rounded flex-1 text-center">Comeback Offer</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded flex-1 text-center">Ready Order</div>
                      <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0" />
                      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-xs px-3 py-1.5 rounded flex-1 text-center">Dispatch Rider</div>
                   </div>
                </div>
             </div>

             {/* WhatsApp Flow */}
             <div className="flex-1 bg-surface border border-border p-6 rounded-xl flex flex-col">
                <h4 className="font-bold text-foreground text-sm mb-6 border-b border-border pb-3 text-left">WhatsApp Ordering</h4>
                <div className="flex flex-wrap justify-center items-center gap-2">
                   <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-[10px] font-bold px-3 py-1.5 rounded">WhatsApp</div>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <div className="bg-zinc-900 text-zinc-300 text-[10px] px-3 py-1.5 rounded">Order</div>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <div className="bg-zinc-900 text-zinc-300 text-[10px] px-3 py-1.5 rounded">Central</div>
                   <ArrowRight className="w-3 h-3 text-zinc-600" />
                   <div className="bg-zinc-900 text-zinc-300 text-[10px] px-3 py-1.5 rounded">KDS</div>
                </div>
                <p className="text-[10px] text-foreground-muted mt-6 text-center leading-relaxed">
                   Turn WhatsApp into another ordering and communication channel. Share menu links, send order updates, and handle inquiries automatically.
                </p>
             </div>
          </Reveal>
        </div>
      </section>

      {/* 26. CUSTOMER JOURNEY */}
      <section className="section-space section-divider bg-surface-secondary/20">
        <div className="content-shell text-center">
          <SectionHeading
            eyebrow="The Full Journey"
            title="See How Everything Works Together."
            description="One customer journey can generate operational data, customer data, and future revenue opportunities—all from the same connected ecosystem."
            align="center"
          />

          <Reveal delayMs={100} className="mt-16 w-full overflow-x-auto pb-4">
             <div className="flex items-center min-w-[900px] justify-between text-xs font-bold text-zinc-400 bg-zinc-950 p-6 rounded-xl border border-zinc-800 shadow-xl mx-auto">
                <div className="flex flex-col items-center gap-2">
                   <span className="text-zinc-300">Discover</span>
                   <span className="text-[10px] text-zinc-500 font-normal">Google / Social</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <div className="flex flex-col items-center gap-2">
                   <span className="text-zinc-300">Browse</span>
                   <span className="text-[10px] text-zinc-500 font-normal">Website / App</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <div className="flex flex-col items-center gap-2">
                   <span className="text-amber-500">Order</span>
                   <span className="text-[10px] text-zinc-500 font-normal">Online / QR / POS</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-500" />
                <div className="flex flex-col items-center gap-2">
                   <span className="text-zinc-300">Prepare</span>
                   <span className="text-[10px] text-zinc-500 font-normal">KDS</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <div className="flex flex-col items-center gap-2">
                   <span className="text-emerald-500">Loyalty</span>
                   <span className="text-[10px] text-zinc-500 font-normal">CRM Updated</span>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500" />
                <div className="flex flex-col items-center gap-2">
                   <span className="text-zinc-300">Re-engage</span>
                   <span className="text-[10px] text-zinc-500 font-normal">Marketing</span>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-space">
        <div className="content-shell text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Ready to Upgrade Your Operations?"
            title="Build the Restaurant Ecosystem You Actually Need."
            description="Your restaurant doesn't need more disconnected software. It needs the right systems working together. From CRM and loyalty to inventory, analytics, AI, and automation, MhStudio builds the supporting layer around your digital operation."
            align="center"
          />

          <Reveal delayMs={200} className="mt-16 flex flex-wrap justify-center items-center gap-4">
             <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-amber-500 px-8 font-medium text-zinc-950 transition-colors hover:bg-amber-400 rounded-sm">
                Get a Free Consultation
             </Link>
             <Link href="/services" className="inline-flex h-12 items-center justify-center border border-border px-8 font-medium text-foreground transition-colors hover:bg-surface hover:text-amber-500 rounded-sm">
                See Core Systems
             </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

