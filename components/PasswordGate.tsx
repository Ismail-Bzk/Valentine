'use client';

import { FormEvent, useState } from 'react';

type PasswordGateProps = {
  expectedPasswords: string[];
  onUnlock: () => void;
};

export function PasswordGate({ expectedPasswords, onUnlock }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const isPasswordMatch = (input: string, expected: string) => {
    const cleanInput = input.trim();
    const cleanExpected = expected.trim();

    if (cleanInput === cleanExpected) return true;

    // Date-friendly fallback: 06-06-2025, 06/06/2025, 06 06 2025, 06062025
    const inputDigits = cleanInput.replace(/\D/g, '');
    const expectedDigits = cleanExpected.replace(/\D/g, '');

    if (inputDigits.length > 0 && expectedDigits.length > 0) {
      return inputDigits === expectedDigits;
    }

    return false;
  };

  const matchesAnyPassword = (input: string, expectedList: string[]) => {
    return expectedList.some((expected) => isPasswordMatch(input, expected));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (matchesAnyPassword(value, expectedPasswords)) {
      setError('');
      onUnlock();
      return;
    }

    setError('Mot de passe incorrect. Essaie la date au format JJ-MM-AAAA.');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#120b12] px-6 text-white">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur"
      >
        <h1 className="text-center text-4xl">Acces Prive</h1>
        <p className="mt-3 text-center text-sm text-white/80">
          Entre la date de notre rencontre pour ouvrir la surprise finale.
        </p>

        <input
          type="password"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Exemple: 06-06-2025"
          className="mt-6 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-rose focus:outline-none"
        />

        {error ? <p className="mt-3 text-sm text-red-200">{error}</p> : null}

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-rose to-[#ffbfd7] px-4 py-3 font-semibold text-[#4a2238] transition hover:brightness-105"
        >
          Ouvrir la surprise
        </button>
      </form>
    </div>
  );
}
