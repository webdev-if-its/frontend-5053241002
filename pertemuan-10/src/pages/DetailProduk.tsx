// TODO(Level 4): komponen TANPA props. Ambil parameter :id dari URL lewat
// useParams (nilainya string — ubah ke number), cari produknya di
// `daftarProduk` (dari '../data'), lalu render:
// - kalau ketemu: teks "Produk #{id}" dan <h1>{nama produk}</h1>,
// - kalau tidak ketemu (id tidak ada / bukan angka): "Produk tidak ditemukan".
// Lihat SOAL.md untuk kontrak lengkap.
import { useParams } from 'react-router-dom'
import { daftarProduk } from '../data'

export function DetailProduk() {
  const { id } = useParams()
  const produkId = id && id.trim() !== '' ? Number(id) : Number.NaN
  const produk = Number.isInteger(produkId)
    ? daftarProduk.find((item) => item.id === produkId)
    : undefined

  if (!produk) {
    return <p>Produk tidak ditemukan</p>
  }

  return (
    <div>
      <p>Produk #{produk.id}</p>
      <h1>{produk.nama}</h1>
    </div>
  )
}