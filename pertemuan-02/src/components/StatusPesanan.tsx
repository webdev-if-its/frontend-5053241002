// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->
// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.
import type { Status } from '../types'

export function StatusPesanan({ status }: { status: Status }) {
  let label = ''
  if (status === 'pending') label = 'Menunggu'
  else if (status === 'selesai') label = 'Selesai'
  else if (status === 'batal') label = 'Dibatalkan'

  return <p>{label}</p>
}
