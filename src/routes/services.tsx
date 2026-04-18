import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, BarChart3, Sun, ShieldCheck, TrendingUp, Leaf, ShoppingCart, DollarSign, ArrowRight } from "lucide-react";
import marketBg from "@/assets/services-market.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Fonctionnalités — MbeyHub" },
      { name: "description", content: "Découvrez les services MbeyHub : mise en relation producteurs-acheteurs, gestion agricole, traçabilité et plus." },
      { property: "og:title", content: "Services & Fonctionnalités — MbeyHub" },
      { property: "og:description", content: "Solutions numériques complètes pour l'agriculture sénégalaise." },
    ],
  }),
  component: ServicesPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function ServicesPage() {
  const services = [
    { icon: Users, title: "Mise en relation directe", desc: "Connectez producteurs et acheteurs sans intermédiaire. Notre marketplace facilite les transactions directes pour de meilleurs prix des deux côtés." },
    { icon: BarChart3, title: "Outils de gestion agricole", desc: "Gérez vos cultures, vos stocks, vos finances et vos employés avec des outils numériques simples et intuitifs adaptés au contexte sénégalais." },
    { icon: Sun, title: "Informations stratégiques", desc: "Accédez en temps réel aux prix du marché, aux prévisions météo et aux conseils agronomiques personnalisés pour prendre les meilleures décisions." },
    { icon: ShieldCheck, title: "Traçabilité des produits", desc: "Suivez vos produits de la ferme au consommateur final. Garantissez l'origine et la qualité pour renforcer la confiance des acheteurs." },
    { icon: TrendingUp, title: "Optimisation des récoltes", desc: "Utilisez l'analyse de données pour maximiser vos rendements, identifier les meilleures périodes de semis et réduire les pertes." },
    { icon: Leaf, title: "Agriculture durable", desc: "Adoptez des pratiques responsables grâce à nos guides et recommandations pour une agriculture respectueuse de l'environnement." },
  ];

  const objectives = [
    { icon: ShoppingCart, title: "Faciliter la commercialisation", desc: "Accès direct aux marchés locaux et régionaux." },
    { icon: ShieldCheck, title: "Réduire les pertes post-récoltes", desc: "Outils de planification et de stockage intelligents." },
    { icon: DollarSign, title: "Améliorer les revenus", desc: "Meilleurs prix grâce à la vente directe." },
    { icon: ShieldCheck, title: "Assurer la traçabilité", desc: "Transparence totale de la chaîne de valeur." },
    { icon: Leaf, title: "Agriculture durable", desc: "Promouvoir des pratiques écologiques." },
  ];

  return (
    <>
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F9A825' }}>Services</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Des outils puissants pour l'agriculture moderne
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              MbeyHub propose une suite complète de services numériques conçus pour répondre
              aux besoins réels des agriculteurs et acteurs de la chaîne de valeur agricole.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={marketBg} alt="Marché de produits agricoles" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/92" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F9A825' }}>Objectifs stratégiques</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Notre feuille de route
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((o, i) => (
              <motion.div
                key={o.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#F9A825' }}>
                  <o.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading)" }}>{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
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
              Prêt à transformer votre agriculture ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Rejoignez des milliers d'agriculteurs qui utilisent déjà MbeyHub.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary-foreground text-primary font-bold text-lg transition-transform hover:scale-105 shadow-xl">
              Commencer maintenant <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
