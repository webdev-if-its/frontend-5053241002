// TODO(Level 1): beri tipe props yang benar — { onKlik: (e:
// React.MouseEvent<HTMLButtonElement>) => void }. Render sebuah <button>
// bertuliskan "Klik Saya" yang, SAAT DIKLIK (bukan saat render), memanggil
// onKlik dengan event klik-nya.
// Lihat SOAL.md untuk kontrak lengkap.
export function TombolKlik({onKlik}: {onKlik: (e: React.MouseEvent<HTMLButtonElement>) => void}) {
  return <button onClick={(e) => onKlik(e)}>Klik Saya</button>
}
