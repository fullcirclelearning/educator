import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Navigation from "~/components/navigation";
import Header from "~/components/header";
import Footer from "~/components/footer";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <Header />
      <div className="relative">
          <Navigation />
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
