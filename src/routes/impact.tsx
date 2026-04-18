import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, Heart, MapPin, Sprout, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Notre Impact — MbeyHub" },
      { name: "description", content: "L'impact économique et social de MbeyHub sur l'agriculture sénégalaise." },
      { property: "og:title", content: "Notre Impact — MbeyHub" },
      { property: "og:description", content: "Découvrez comment MbeyHub transforme l'agriculture au Sénégal." },
    ],
  }),
  component: ImpactPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function ImpactPage() {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Agriculture plus rentable",
      desc: "Grâce à la vente directe et à l'accès aux données de marché, les agriculteurs augmentent leurs revenus de 30% en moyenne. La réduction des intermédiaires permet une meilleure marge pour les producteurs.",
      stat: "+30%",
      statLabel: "de revenus en moyenne",
    },
    {
      icon: Heart,
      title: "Valorisation des produits locaux",
      desc: "MbeyHub met en lumière la richesse agricole sénégalaise. Les consommateurs urbains accèdent à des produits frais, traçables et de qualité, renforçant la fierté du « consommer local ».",
      stat: "85%",
      statLabel: "de produits locaux vendus",
    },
    {
      icon: MapPin,
      title: "Développement rural",
      desc: "En connectant les zones rurales aux marchés urbains, MbeyHub stimule l'économie locale, crée des emplois et encourage les jeunes à rester dans l'agriculture.",
      stat: "14",
      statLabel: "régions impactées",
    },
    {
      icon: Sprout,
      title: "Réduction des pertes",
      desc: "Nos outils de planification et de mise en relation réduisent les pertes post-récoltes en optimisant les chaînes de distribution et le timing des ventes.",
      stat: "-40%",
      statLabel: "de pertes post-récoltes",
    },
  ];

  return (
    <>
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F9A825' }}>Impact</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Transformer l'agriculture, transformer des vies
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              MbeyHub crée un impact économique et social mesurable sur l'agriculture sénégalaise
              et la vie de milliers de familles rurales.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {impacts.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="md:w-1/4 flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <item.icon size={26} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{item.stat}</p>
                    <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Faites partie du changement
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Chaque inscription renforce l'écosystème AgriTech sénégalais.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary-foreground text-primary font-bold text-lg transition-transform hover:scale-105 shadow-xl">
              Rejoindre MbeyHub <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
