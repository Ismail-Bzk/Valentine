'use client';

import { FormEvent, useState } from 'react';

type PasswordGateProps = {
  expectedPassword: string;
  onUnlock: () => void;
};

export function PasswordGate({ expectedPassword, onUnlock }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim() === expectedPassword.trim()) {
      setError('');
      onUnlock();
      return;
    }

    setError('Mot de passe incorrect. Reessaie avec notre date speciale.');
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
          placeholder="Exemple: 14-02-2022"
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
