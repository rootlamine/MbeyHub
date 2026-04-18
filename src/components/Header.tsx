import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

const navLinks = [
  { to: "/" as const, label: "Accueil" },
  { to: "/about" as const, label: "À propos" },
  { to: "/services" as const, label: "Services" },
  { to: "/impact" as const, label: "Impact" },
  { to: "/contact" as const, label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MbeyHub - Produire mieux, vendre plus" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-secondary"
              activeProps={{ className: "px-3 py-2 rounded-md text-sm font-medium text-primary bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-semibold transition-transform hover:scale-105"
          >
            S'inscrire
          </Link>
        </nav>

        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary"
                  activeProps={{ className: "px-3 py-2.5 rounded-md text-sm font-medium text-primary bg-secondary" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-5 py-2.5 rounded-lg gradient-hero text-primary-foreground text-sm font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                S'inscrire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
