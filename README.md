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
Karena dengan menggunakan union type dapat membantu untuk membatasi input. Sehingga input yang diperbolehkan hanya input yang terdaftar pada opsi yang valid. Union type dapat mencegah typo dan lebih aman daripada menggunakan string biasa.

## Refleksi
Yang mengubah cara berbikir saya dari konsep pada pertemuan ini adalah kita dapat menyusun komponan HTML menggunakan file dari tsx, serta setiap komponen dan props bisa dibuat menjadi modular sehingga bisa digunakan kembali pada halaman HTML yang lain.

## Refleksi Pertemuan 3
Hal yang paling mengubah cara berpikirku adalah penggunaan ternary dan && langsung di dalam JSX untuk mengatur alur antarmuka. Kemudian Tailwind CSS, sangat mempermudah dalam pembuatan komponen reusable, dibanding membuat hierarki class BEM di CSS biasa.

## Refleksi Pertemuan 4
Perbedaan variabel biasa dengan state adalah variabel biasa tidak akan memicu proses render ulang komponen oleh React apabila nilainya berubah. Sedangkan pada state kebalikannya, jika ada variabel yang berubah, maka akan memicu proses render ulang.

Properti `e.target.value` dari input HTML memiliki tipe data string meskipun input tersebut memiliki properti `type="number"`. Sehingga nilai tersebut harus diubah menjadi `Number()` agar dapat dilakukan operasi matematis. Apabila tidak diubah maka akan diperlakukan seperti teks biasa. Sehingga jika ada operasi `+` teks akan digabungkan, bukan dilakukan operasi penjumlahan.

## Refleksi Pertemuan 6

Efek yang memasang timer atau listener wajib memiliki cleanup dikarenakan unuk menghindari memory leak. Jika tidak ada clean up, maka timer lama akan terus berjalan dan menumpuk pada memori.

`console.log` muncul dua kali dalam `StrictMode` dikarenakan pada React menduplikasi pemanggilan komponen (mount > unmount > mount) agar memudahkan developer untuk mendeteksi tumpukan bug yang ada.

## Refleksi Pertemuan 9
Keuntungan dari memisahkan fungsi API dari komponen adalah menjaga kerapian kode serta memudahkan ketika pemeliharaan nantinya. Jadi komponen UI hanya menangani state dan render tampilan, tanpa harus mengetahui detail dari API.

Fetch tidak otomatis melempar error pada kondisi 404 dan 500 adalah karena kondisi 404 dan 500 browser masih terhubung dengan server. Fetch hanya akan melempar error jika browser tidak terhubung lagi ke server.
