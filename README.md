# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project

File main.tsx sebagai entry point dari project ini, yang mana menghubungkan React ke elemen DOM HTML. Sedangkan untuk App.tsx merupakan file component yang dapat dipanggil oleh main.tsx dengan cara diimport terlebih dahulu baru dipanggil dengan `<App />`

## Identitas
- Nama: Krisna Anugrah Arianto Heru Putro
- NRP: 5053241002
- Kelas: M

## Commit vs Push
Commit: git commit adalah sebuah aksi dimana aksi tersebut menyimpan perubahan kode secara lokal atau di komputer.
Push: git push adalah sebuah aksi dimana aksi tersebut "mengunggah" hasil commit ke repository

## JSX vs TSX
.jsx merupakan extension dari file JavaScript yang dapat menuliskan sintaks HTML di dalam kodenya. Sedangkan untuk .tsx sendiri merupakan extension dari file TypeScript yang support .jsx beserta dengan beberpa upgrade seperti adanya type checking sehingga error dapat dideteksi sebelum runtime.

## Kenapa Union Type untuk Status
(tulis di sini)

## Refleksi
(tulis di sini)
