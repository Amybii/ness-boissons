"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("age-verified");
    if (stored === "true") {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, []);

  function handleYes() {
    sessionStorage.setItem("age-verified", "true");
    setVerified(true);
  }

  function handleNo() {
    setDenied(true);
  }

  if (verified === null) return null;

  if (verified) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] bg-noir flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <Image
          src="/logo-blanc.png"
          alt="Ness Boissons"
          width={200}
          height={75}
          className="h-16 w-auto mx-auto mb-10"
          priority
        />

        {denied ? (
          <div>
            <h1 className="text-blanc text-2xl font-bold mb-4">
              Accès refusé
            </h1>
            <p className="text-blanc/60 leading-relaxed">
              Vous devez avoir 18 ans ou plus pour accéder à ce site.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-blanc text-2xl md:text-3xl font-bold mb-4">
              Bienvenue chez Ness Boissons
            </h1>
            <p className="text-blanc/70 mb-2 text-lg">
              Ce site contient des informations sur des boissons alcoolisées.
            </p>
            <p className="text-blanc text-xl font-bold mb-8">
              Avez-vous 18 ans ou plus ?
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleYes}
                className="bg-orange text-blanc px-10 py-3 rounded-full font-bold text-lg hover:bg-orange-dark transition-colors"
              >
                Oui, j&apos;ai 18 ans ou plus
              </button>
              <button
                onClick={handleNo}
                className="border-2 border-blanc/30 text-blanc/70 px-10 py-3 rounded-full font-bold text-lg hover:border-blanc hover:text-blanc transition-colors"
              >
                Non
              </button>
            </div>

            <p className="text-blanc/40 text-xs mt-8 leading-relaxed">
              L&apos;abus d&apos;alcool est dangereux pour la santé.
              <br />
              À consommer avec modération.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
