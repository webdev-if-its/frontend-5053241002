// TODO(Level 2): komponen TANPA props. Render <nav> berisi tiga NavLink
// (dari 'react-router-dom'): "Beranda" (ke "/"), "Produk" (ke "/produk"),
// "Tentang" (ke "/tentang"). Link yang sedang aktif mendapat class
// "font-bold" (className berupa fungsi yang menerima { isActive }). Link
// "Beranda" harus memakai prop `end` supaya tidak aktif di semua halaman.
// Lihat SOAL.md untuk kontrak lengkap.
import { NavLink } from 'react-router-dom'

export function Navbar() {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-bold' : ''

  return (
    <nav>
      <NavLink to="/" className={getNavLinkClassName}>
        Beranda
      </NavLink>
      <NavLink to="/produk" className={getNavLinkClassName}>
        Produk
      </NavLink>
      <NavLink to="/tentang" className={getNavLinkClassName}>
        Tentang
      </NavLink>
    </nav>
  )
}
