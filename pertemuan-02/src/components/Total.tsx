// TODO(Level 3): beri tipe props yang benar — { qty: number; harga: number }.
// Lalu render satu elemen yang memuat teks "Total: " diikuti HASIL PERKALIAN
// qty * harga (pakai ekspresi { } di JSX, jangan hardcode angkanya). Lihat
// SOAL.md untuk kontrak lengkap.

export function Total({ qty, harga }: { qty: number; harga: number }) {
  return <div>
      <p>Total: {qty * harga}</p>
    </div>
}