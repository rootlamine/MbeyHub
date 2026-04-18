import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/design-system")({
  component: DesignSystemPage,
  head: () => ({
    meta: [
      { title: "Design System — MbeyHub" },
      { name: "description", content: "Le design system de MbeyHub : couleurs, typographie, composants et identité visuelle." },
    ],
  }),
});

const colors = [
  { name: "Primary (Vert)", hex: "#2E7D32", var: "--primary", className: "bg-primary text-primary-foreground" },
  { name: "Accent (Jaune/Orange)", hex: "#F9A825", var: "--accent", className: "bg-accent text-accent-foreground" },
  { name: "Background", hex: "#FCFDFC", var: "--background", className: "bg-background text-foreground border" },
  { name: "Foreground", hex: "#1A2B1F", var: "--foreground", className: "bg-foreground text-background" },
  { name: "Secondary", hex: "—", var: "--secondary", className: "bg-secondary text-secondary-foreground" },
  { name: "Muted", hex: "—", var: "--muted", className: "bg-muted text-muted-foreground" },
  { name: "Card", hex: "#FFFFFF", var: "--card", className: "bg-card text-card-foreground border" },
  { name: "Border", hex: "—", var: "--border", className: "bg-border text-foreground" },
];

function Swatch({ name, hex, varName, className }: { name: string; hex: string; varName: string; className: string }) {
  return (
    <div className="rounded-xl overflow-hidden border shadow-sm">
      <div className={`h-28 flex items-end p-4 ${className}`}>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className="p-3 bg-card text-xs space-y-1">
        <div className="flex justify-between"><span className="text-muted-foreground">Hex</span><span className="font-mono">{hex}</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Token</span><span className="font-mono">{varName}</span></div>
      </div>
    </div>
  );
}

function DesignSystemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <Badge className="bg-accent text-accent-foreground mb-4">Design System</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MbeyHub Design System</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              L'identité visuelle, les couleurs, la typographie et les composants qui donnent vie à MbeyHub.
            </p>
          </div>
        </section>

        {/* Brand */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Identité de marque</h2>
          <p className="text-muted-foreground mb-8">L'agriculture rencontre le digital — chaleureuse, moderne, accessible.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle>🌱 Innovation</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">Technologie au service du terroir sénégalais.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>🤝 Inclusion</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">Une plateforme accessible à tous les producteurs.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>🌍 Durabilité</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">Une agriculture rentable et responsable.</CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Colors */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Palette de couleurs</h2>
          <p className="text-muted-foreground mb-8">Tokens sémantiques basés sur le vert agricole et l'accent solaire.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {colors.map((c) => (
              <Swatch key={c.var} name={c.name} hex={c.hex} varName={c.var} className={c.className} />
            ))}
          </div>

          <h3 className="text-xl font-bold mt-12 mb-4">Dégradés</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="gradient-hero h-32 rounded-xl flex items-center justify-center text-primary-foreground font-semibold">.gradient-hero</div>
            <div className="gradient-warm h-32 rounded-xl flex items-center justify-center text-accent-foreground font-semibold">.gradient-warm</div>
          </div>
        </section>

        <Separator />

        {/* Typography */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Typographie</h2>
          <p className="text-muted-foreground mb-8">
            Titres : <span className="font-mono">Arial Bold</span> · Corps : <span className="font-mono">Poppins</span>
          </p>
          <div className="space-y-6 bg-card border rounded-xl p-8">
            <div>
              <p className="text-xs text-muted-foreground mb-1">H1 · 4xl/6xl bold</p>
              <h1 className="text-4xl md:text-6xl font-bold">Connecter l'agriculture</h1>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">H2 · 3xl bold</p>
              <h2 className="text-3xl font-bold">Une plateforme moderne</h2>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">H3 · xl bold</p>
              <h3 className="text-xl font-bold">Outils de gestion agricole</h3>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Body · base</p>
              <p>MbeyHub est une plateforme numérique innovante qui permet aux agriculteurs de vendre, gérer et optimiser leur production grâce à la technologie.</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Muted · sm</p>
              <p className="text-sm text-muted-foreground">Texte secondaire pour les descriptions et légendes.</p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Buttons */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Boutons</h2>
          <p className="text-muted-foreground mb-8">Variantes d'action pour guider l'utilisateur.</p>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Accent</Button>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <Separator />

        {/* Badges */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Badges</h2>
          <p className="text-muted-foreground mb-8">Étiquettes pour catégoriser et signaler.</p>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge className="bg-accent text-accent-foreground">Accent</Badge>
          </div>
        </section>

        <Separator />

        {/* Cards */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Cartes</h2>
          <p className="text-muted-foreground mb-8">Conteneurs de contenu modulaires.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Carte simple</CardTitle>
                <CardDescription>Description secondaire</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Contenu principal de la carte avec du texte explicatif.
              </CardContent>
            </Card>
            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle className="text-primary">Carte accentuée</CardTitle>
                <CardDescription>Bordure primaire</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Pour mettre en avant un élément clé.
              </CardContent>
            </Card>
            <Card className="gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle>Carte gradient</CardTitle>
                <CardDescription className="text-primary-foreground/80">Fond dégradé</CardDescription>
              </CardHeader>
              <CardContent className="opacity-90">
                Pour les sections premium ou les CTA.
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Forms */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Formulaires</h2>
          <p className="text-muted-foreground mb-8">Champs de saisie cohérents.</p>
          <div className="max-w-md space-y-4 bg-card border rounded-xl p-6">
            <div className="space-y-2">
              <Label htmlFor="ds-name">Nom complet</Label>
              <Input id="ds-name" placeholder="Aïssatou Diop" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ds-email">Email</Label>
              <Input id="ds-email" type="email" placeholder="aissatou@mbeyhub.sn" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ds-msg">Message</Label>
              <Textarea id="ds-msg" placeholder="Votre message..." />
            </div>
            <Button className="w-full">Envoyer</Button>
          </div>
        </section>

        <Separator />

        {/* Spacing & Radius */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Rayons & élévation</h2>
          <p className="text-muted-foreground mb-8">Base : <span className="font-mono">--radius: 0.75rem</span></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "sm", cls: "rounded-sm" },
              { label: "md", cls: "rounded-md" },
              { label: "lg", cls: "rounded-lg" },
              { label: "xl", cls: "rounded-xl" },
            ].map((r) => (
              <div key={r.label} className={`bg-primary text-primary-foreground h-24 flex items-center justify-center font-semibold ${r.cls}`}>
                {r.label}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {["shadow-sm", "shadow", "shadow-md", "shadow-lg"].map((s) => (
              <div key={s} className={`bg-card border h-24 rounded-xl flex items-center justify-center font-mono text-sm ${s}`}>
                {s}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
