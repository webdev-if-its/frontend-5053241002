// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
export function Button(props: {variant: 'primary' | 'secondary' | 'danger'; children: React.ReactNode; onClick?: () => void}) {
  const colorClass = props.variant === 'primary' ? 'bg-blue-500 text-white' :
                     props.variant === 'secondary' ? 'bg-purple-500 text-white' :
                     'bg-red-500 text-white';
  return (
  <button className={colorClass} onClick={props.onClick}>
    {props.children}
  </button>
  )
}
