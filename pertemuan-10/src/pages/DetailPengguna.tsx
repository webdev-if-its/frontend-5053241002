// TODO(Level 8): komponen TANPA props. Ambil :id lewat useParams, cari
// pengguna di `daftarPengguna` (dari '../data'), lalu render:
// - kalau ketemu: teks "Pengguna #{id}" dan <h2>{nama pengguna}</h2>,
// - kalau tidak: "Pengguna tidak ditemukan".
// Lihat SOAL.md untuk kontrak lengkap.
import { useParams } from 'react-router-dom'
import { daftarPengguna } from '../data'

export function DetailPengguna() {
  const { id } = useParams()
  const penggunaId = id && id.trim() !== '' ? Number(id) : Number.NaN
  const pengguna = Number.isInteger(penggunaId)
    ? daftarPengguna.find((item) => item.id === penggunaId)
    : undefined

  if (!pengguna) {
    return <p>Pengguna tidak ditemukan</p>
  }

  return (
    <div>
      <p>Pengguna #{pengguna.id}</p>
      <h2>{pengguna.nama}</h2>
    </div>
  )
}