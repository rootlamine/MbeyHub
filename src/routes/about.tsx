import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Leaf, Shield, Users } from "lucide-react";
import aboutBg from "@/assets/about-hub.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — MbeyHub" },
      { name: "description", content: "Découvrez la mission, la vision et les valeurs de MbeyHub, le hub AgriTech de référence au Sénégal." },
      { property: "og:title", content: "À propos — MbeyHub" },
      { property: "og:description", content: "Découvrez la mission, la vision et les valeurs de MbeyHub." },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function AboutPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Agricultrices sénégalaises" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F9A825' }}>À propos</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Le hub AgriTech de référence au Sénégal
            </h1>
            <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
              MbeyHub est né de la conviction que la technologie peut transformer l'agriculture
              sénégalaise. Notre plateforme numérique connecte tous les acteurs de la chaîne
              de valeur agricole pour créer un écosystème plus efficace, transparent et rentable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6">
                <Target size={26} className="text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digitaliser et moderniser l'agriculture sénégalaise en offrant aux producteurs
                des outils numériques accessibles pour vendre, gérer et optimiser leur production.
                Nous créons des ponts entre le monde rural et le digital.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F9A825' }}>
                <Eye size={26} className="text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Notre Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le hub AgriTech de référence au Sénégal et en Afrique de l'Ouest,
                en créant un écosystème numérique où chaque agriculteur a accès aux mêmes
                opportunités de marché que les grands producteurs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Nos Valeurs
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Nous explorons constamment de nouvelles solutions technologiques." },
              { icon: Leaf, title: "Durabilité", desc: "Une agriculture responsable pour les générations futures." },
              { icon: Users, title: "Inclusion", desc: "Chaque agriculteur mérite un accès égal aux opportunités." },
              { icon: Shield, title: "Transparence", desc: "La confiance se construit par l'ouverture et l'honnêteté." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-5">
                  <v.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
