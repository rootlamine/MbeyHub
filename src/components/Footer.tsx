import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                MbeyHub
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Connecter l'agriculture sénégalaise au digital. La plateforme AgriTech de référence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Accueil</Link></li>
              <li><Link to="/about" className="opacity-70 hover:opacity-100 transition-opacity">À propos</Link></li>
              <li><Link to="/services" className="opacity-70 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/impact" className="opacity-70 hover:opacity-100 transition-opacity">Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-70"><Mail size={14} /> contact@mbeyhub.sn</li>
              <li className="flex items-center gap-2 opacity-70"><Phone size={14} /> +221 77 000 00 00</li>
              <li className="flex items-center gap-2 opacity-70"><MapPin size={14} /> Dakar, Sénégal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-70">Mentions légales</span></li>
              <li><span className="opacity-70">Politique de confidentialité</span></li>
              <li><span className="opacity-70">CGU</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm opacity-50">
          © {new Date().getFullYear()} MbeyHub. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
