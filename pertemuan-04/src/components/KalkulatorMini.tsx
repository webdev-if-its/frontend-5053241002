// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";
export function KalkulatorMini() {
  const [angkaA, setAngkaA] = useState<string>('');
  const [angkaB, setAngkaB] = useState<string>('');

  const numA = angkaA === '' ? 0 : Number(angkaA);
  const numB = angkaB === '' ? 0 : Number(angkaB);

  return (
    <div>
      <label htmlFor="angkaA">Angka A</label>
      <input
        id="angkaA"
        type="number"
        value={angkaA}
        onChange={(e) => setAngkaA(e.target.value)}
      />
      <label htmlFor="angkaB">Angka B</label>
      <input
        id="angkaB"
        type="number"
        value={angkaB}
        onChange={(e) => setAngkaB(e.target.value)}
      />
      <p>Hasil: {numA + numB}</p>
    </div>
  );
}
