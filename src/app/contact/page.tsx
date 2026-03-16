"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-noir mb-4">
              Nous Contacter
            </h1>
            <div className="w-24 h-1 bg-orange mx-auto rounded-full mb-4" />
            <p className="text-noir/60 text-lg max-w-xl mx-auto">
              Une question, un besoin ? Notre équipe est à votre écoute pour
              vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-orange rounded-2xl p-8 text-blanc">
                <h2 className="text-2xl font-bold mb-6">
                  Coordonnées
                </h2>
                <div className="space-y-5">
                  <div>
                    <p className="text-jaune font-bold text-sm uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:nessboissons@gmail.com"
                      className="text-blanc hover:text-jaune transition-colors text-lg"
                    >
                      nessboissons@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-jaune font-bold text-sm uppercase tracking-wider mb-1">
                      Commercial
                    </p>
                    <p className="text-lg">
                      <a
                        href="tel:0658746706"
                        className="hover:text-jaune transition-colors"
                      >
                        06 58 74 67 06
                      </a>
                      {" / "}
                      <a
                        href="tel:0651771240"
                        className="hover:text-jaune transition-colors"
                      >
                        06 51 77 12 40
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-jaune font-bold text-sm uppercase tracking-wider mb-1">
                      Standard
                    </p>
                    <p className="text-lg">
                      <a
                        href="tel:0764383520"
                        className="hover:text-jaune transition-colors"
                      >
                        07 64 38 35 20
                      </a>
                      {" / "}
                      <a
                        href="tel:0661659621"
                        className="hover:text-jaune transition-colors"
                      >
                        06 61 65 96 21
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-jaune font-bold text-sm uppercase tracking-wider mb-1">
                      Adresse
                    </p>
                    <a
                      href="https://maps.google.com/?q=4+impasse+de+la+remusade+13010+Marseille"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-jaune transition-colors"
                    >
                      4 impasse de la Remusade
                      <br />
                      13010 Marseille - La Capelette
                    </a>
                  </div>
                  <div>
                    <p className="text-jaune font-bold text-sm uppercase tracking-wider mb-1">
                      Réseaux sociaux
                    </p>
                    <a
                      href="https://www.instagram.com/ness_boissons"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-jaune transition-colors"
                    >
                      @ness_boissons
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-blanc rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-noir mb-3">
                  Joignable 24/24
                </h3>
                <p className="text-noir/70 leading-relaxed">
                  Notre équipe commerciale est disponible et dédiée entièrement
                  à nos clients. N&apos;hésitez pas à nous appeler à tout moment.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-blanc rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-noir mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-noir/60">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-orange hover:text-orange-dark font-medium transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-noir mb-2">
                    Envoyez-nous un message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-noir/70 mb-1"
                      >
                        Nom *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-noir/10 bg-beige focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-noir/70 mb-1"
                      >
                        Établissement
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-noir/10 bg-beige focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                        placeholder="Nom de l'établissement"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-noir/70 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-noir/10 bg-beige focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-noir/70 mb-1"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-noir/10 bg-beige focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-noir/70 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-noir/10 bg-beige focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre besoin..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange text-blanc py-4 rounded-xl font-bold text-lg hover:bg-orange-dark transition-colors"
                  >
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
