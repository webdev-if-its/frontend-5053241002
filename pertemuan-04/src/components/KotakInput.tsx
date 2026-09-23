// TODO(Level 2): beri tipe props yang benar — { onUbah: (nilai: string) =>
// void }. Render sebuah <input> yang memanggil onUbah dengan nilai terbarunya
// TIAP KALI isinya berubah (tiap ketikan) — gunakan onChange dengan tipe event
// yang tepat.
// Lihat SOAL.md untuk kontrak lengkap.
import type { ChangeEvent } from "react";
export function KotakInput({onUbah}: {onUbah: (nilai: string) => void}) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onUbah(event.target.value);
  }
  return <p><input onChange={handleChange} /></p>
}
