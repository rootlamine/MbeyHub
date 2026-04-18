import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Inscription — MbeyHub" },
      { name: "description", content: "Contactez MbeyHub ou inscrivez-vous pour rejoindre la plateforme AgriTech au Sénégal." },
      { property: "og:title", content: "Contact & Inscription — MbeyHub" },
      { property: "og:description", content: "Rejoignez MbeyHub dès aujourd'hui." },
    ],
  }),
  component: ContactPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#F9A825' }}>Contact</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Rejoignez la communauté MbeyHub
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Inscrivez-vous gratuitement ou contactez-nous pour en savoir plus sur notre plateforme.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                Formulaire d'inscription
              </h2>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-secondary text-center border border-primary/20">
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Merci !</h3>
                  <p className="text-muted-foreground">Votre inscription a bien été enregistrée. Nous vous contacterons très bientôt.</p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Prénom</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="+221 77 000 00 00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Vous êtes</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-card border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">Sélectionnez votre profil</option>
                      <option value="farmer">Agriculteur / Producteur</option>
                      <option value="coop">Coopérative agricole</option>
                      <option value="merchant">Commerçant / Transformateur</option>
                      <option value="consumer">Consommateur</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message (optionnel)</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                      placeholder="Dites-nous en plus sur vos besoins..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl gradient-hero text-primary-foreground font-semibold text-base transition-transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                  >
                    Créer mon compte <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "contact@mbeyhub.sn" },
                  { icon: Phone, label: "Téléphone", value: "+221 77 000 00 00" },
                  { icon: MapPin, label: "Adresse", value: "Dakar, Sénégal" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{c.label}</p>
                      <p className="text-foreground font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Suivez-nous</h3>
                <div className="flex gap-3">
                  {["Facebook", "LinkedIn", "Instagram"].map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
