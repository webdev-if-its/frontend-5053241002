// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
import type { FormEvent } from "react";

export function FormLogin({ onLogin }: { onLogin: (email: string) => void }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("email") as HTMLInputElement | null;
    if (input) {
      onLogin(input.value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" />
      <button type="submit">Masuk</button>
    </form>
  );
}
