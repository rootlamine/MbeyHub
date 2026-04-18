import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sprout, BarChart3, ShieldCheck, Users, ArrowRight, Leaf, Sun, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import solutionBg from "@/assets/hero-farming.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MbeyHub — Connecter l'agriculture sénégalaise au digital" },
      { name: "description", content: "Plateforme numérique innovante pour les agriculteurs sénégalais. Vendez, gérez et optimisez votre production." },
      { property: "og:title", content: "MbeyHub — Connecter l'agriculture sénégalaise au digital" },
      { property: "og:description", content: "Plateforme numérique innovante pour les agriculteurs sénégalais." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Agriculture sénégalaise connectée au digital" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-hero opacity-85" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium backdrop-blur-sm mb-6">
                <Sprout size={16} /> Plateforme AgriTech #1 au Sénégal
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
            >
              Connecter l'agriculture sénégalaise{" "}
              <span className="text-accent">au digital</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg sm:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl"
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              MbeyHub est une plateforme numérique innovante qui permet aux agriculteurs
              de vendre, gérer et optimiser leur production grâce à la technologie.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-foreground text-primary font-semibold text-base transition-transform hover:scale-105 shadow-lg"
              >
                S'inscrire <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base transition-all hover:bg-primary-foreground/10"
              >
                Découvrir la plateforme
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Agriculteurs connectés" },
              { value: "500+", label: "Coopératives partenaires" },
              { value: "14", label: "Régions couvertes" },
              { value: "30%", label: "Hausse des revenus" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <p className="text-3xl sm:text-4xl font-bold" style={{ color: '#2E7D32' }}>{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={solutionBg} alt="Agriculture sénégalaise" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/92" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F9A825' }}>Nos services</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Une solution complète pour l'agriculture
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Mise en relation", desc: "Connectez producteurs et acheteurs directement, sans intermédiaire." },
              { icon: BarChart3, title: "Gestion agricole", desc: "Outils numériques pour gérer vos cultures, stocks et finances." },
              { icon: Sun, title: "Informations stratégiques", desc: "Accédez aux données de marché, météo et conseils agronomiques." },
              { icon: ShieldCheck, title: "Traçabilité", desc: "Suivez vos produits de la ferme au consommateur final." },
              { icon: TrendingUp, title: "Optimisation des récoltes", desc: "Maximisez vos rendements grâce à l'analyse de données." },
              { icon: Leaf, title: "Agriculture durable", desc: "Pratiques responsables pour un avenir meilleur." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Voir tous nos services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Public cible */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pour qui ?</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              MbeyHub s'adresse à tous les acteurs
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🌾", title: "Agriculteurs", desc: "Vendez vos produits au meilleur prix" },
              { emoji: "🤝", title: "Coopératives", desc: "Gérez et fédérez vos membres efficacement" },
              { emoji: "🏪", title: "Commerçants", desc: "Approvisionnez-vous directement" },
              { emoji: "🏙️", title: "Consommateurs", desc: "Accédez à des produits frais et locaux" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-card text-center border border-border hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <span className="text-4xl">{item.emoji}</span>
                <h3 className="mt-4 text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Rejoignez MbeyHub dès aujourd'hui
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Faites partie de la révolution AgriTech au Sénégal. Inscrivez-vous et commencez
              à transformer votre activité agricole.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-primary-foreground text-primary font-bold text-lg transition-transform hover:scale-105 shadow-xl"
            >
              Créer un compte <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
