import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-lg gradient-hero px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MbeyHub — Connecter l'agriculture sénégalaise au digital" },
      { name: "description", content: "MbeyHub est une plateforme numérique innovante qui permet aux agriculteurs sénégalais de vendre, gérer et optimiser leur production grâce à la technologie." },
      { name: "author", content: "MbeyHub" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "MbeyHub — Connecter l'agriculture sénégalaise au digital" },
      { name: "twitter:title", content: "MbeyHub — Connecter l'agriculture sénégalaise au digital" },
      { property: "og:description", content: "MbeyHub est une plateforme numérique innovante qui permet aux agriculteurs sénégalais de vendre, gérer et optimiser leur production grâce à la technologie." },
      { name: "twitter:description", content: "MbeyHub est une plateforme numérique innovante qui permet aux agriculteurs sénégalais de vendre, gérer et optimiser leur production grâce à la technologie." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cfdbe5d6-2b26-4c63-b7bd-7e92de47dcd2/id-preview-37dea3cf--19543ee8-7c2d-481d-98a3-df3cf676dd73.lovable.app-1775838647338.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cfdbe5d6-2b26-4c63-b7bd-7e92de47dcd2/id-preview-37dea3cf--19543ee8-7c2d-481d-98a3-df3cf676dd73.lovable.app-1775838647338.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
