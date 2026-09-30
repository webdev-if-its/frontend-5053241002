// TODO(Level 9): beri tipe props yang benar — { isi: string }. Gunakan state
// boolean: awalnya detail tersembunyi dan tombol bertuliskan "Tampilkan
// detail". Saat diklik, teks props.isi muncul dan tombol berubah jadi
// "Sembunyikan detail"; klik lagi menyembunyikannya (elemennya harus
// benar-benar hilang dari DOM).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";

export function DetailToggle({isi} : { isi: string }) {
  const [tampilkan, setTampilkan] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setTampilkan(!tampilkan)}>
        {tampilkan ? "Sembunyikan detail" : "Tampilkan detail"}
      </button>
      {tampilkan && <p>{isi}</p>}
    </div>
  );
}
