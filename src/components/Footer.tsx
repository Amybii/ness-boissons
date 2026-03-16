import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-noir text-blanc py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/logo-blanc.png"
              alt="Ness Boissons"
              width={160}
              height={60}
              className="h-14 w-auto mb-4"
            />
            <p className="text-blanc/60 leading-relaxed">
              Service de livraison express.
              <br />
              Proximité, Réactivité, Flexibilité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-jaune uppercase tracking-wider text-sm mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-blanc/60 hover:text-blanc transition-colors"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="#partenaires"
                  className="text-blanc/60 hover:text-blanc transition-colors"
                >
                  Partenaires
                </Link>
              </li>
              <li>
                <Link
                  href="#apropos"
                  className="text-blanc/60 hover:text-blanc transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blanc/60 hover:text-blanc transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-jaune uppercase tracking-wider text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-blanc/60">
              <li>
                <a
                  href="mailto:nessboissons@gmail.com"
                  className="hover:text-blanc transition-colors"
                >
                  nessboissons@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0658746706"
                  className="hover:text-blanc transition-colors"
                >
                  06 58 74 67 06
                </a>
              </li>
              <li>
                <a
                  href="tel:0764383520"
                  className="hover:text-blanc transition-colors"
                >
                  07 64 38 35 20
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=4+impasse+de+la+remusade+13010+Marseille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  4 impasse de la Remusade, 13010 Marseille
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ness_boissons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  @ness_boissons
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blanc/10 mt-12 pt-8 text-center text-blanc/40 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ness Boissons. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
