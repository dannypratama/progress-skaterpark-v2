# HANDOFF: REDESIGN PROGRESS SKATERPARK (TAHAP 3)

> File ini ditulis untuk meneruskan pekerjaan ke model/agent lain tanpa kehilangan konteks.
> Ditulis: 2026-11-09, sesi ZCode (model GLM). Status: langkah 1 (REKON) selesai. Langkah 2 (MOODBOARD) DITUGASKAN KE MODEL BERIKUTNYA memakai referensi visual dari owner (bagian 7). Semua moodboard buatan model sebelumnya sudah DIHAPUS atas instruksi owner.

---

## 1. KONTEKS PROJECT

- Project: **Progress Skaterpark**, landing page skatepark + kursus privat skateboard di Kota Tegal, Jawa Tengah. Alamat asli: Jl. Pancasila No.66, RT.7/RW.2, Mangkukusuman, Kec. Tegal Timur, Kota Tegal. Kontak asli: WA +62 882 3254 8569, IG @dannypratamaf, FB DannyPratamaF, email dannypratamaf@gmail.com (ditampilkan sebagai info@progressskatepark.com). Jam buka 08.00-22.00 setiap hari, tiket masuk Rp 50.000/orang/hari.
- Riwayat: project lama (2024) di `C:\Users\Danny\Music\progress-skaterpark` sudah lewat refactor + audit antislop (artefak: `anti-slop/audit-001-2026-11-09.md` + fix report, `DESIGN.md` v1). Live lama: https://progress-skaterpark.netlify.app/
- Sekarang: TAHAP REDESIGN = project BARU. Folder baru sudah dibuat: `C:\Users\Danny\Music\progress-skaterpark-v2` (isi sekarang: hanya file ini). Repo GitHub baru nanti (saran nama: `progress-skaterpark-v2`).
- Ini project vibe-coding untuk PORTOFOLIO; workflow & kualitas mengikuti pola project "progress-vintage-v2" (project itu sendiri TIDAK dipakai sebagai referensi gaya).

## 2. ATURAN NON-NEGOTIABLE (dari brief owner)

1. Repo lama `C:\Users\Danny\Music\progress-skaterpark` TIDAK BOLEH disentuh sama sekali (sudah dipatuhi sepanjang sesi: hanya read). Redesign = project baru di folder terpisah + repo GitHub baru.
2. Aset gambar: salin utuh dari repo lama, TIDAK menambah, TIDAK menghapus file.
3. Stack: **Astro + CSS murni, tanpa framework CSS, tanpa jQuery. Bootstrap ditinggal.** (Owner menegaskan ulang "arsitektur rencana pake astro.build".)
4. Copywriting memakai skill antislop-copywriting. Bahasa: **English** (keputusan owner).
5. antislop mode: **DURING (session override)**. Wajib jalankan Delivery Gate antislop sebelum nyatakan selesai, lapor PASS/FAIL per blok.
6. Deploy: GitHub Pages project site (subpath `/progress-skaterpark-v2/`) + workflow `withastro/action`, auto deploy tiap push ke main.
7. Klaim angka dari situs lama WAJIB ditanyakan dulu. (Sudah ditanya, jawaban owner ada di bagian 6.)

## 3. LINGKUNGAN

- Windows 10, Git Bash, Node 22 (tersedia `node`). `python`/`python3` TIDAK terinstall. CLI `gh` TIDAK terinstall.
- Bikin repo GitHub via kredensial git tersimpan: `git credential fill` (host github.com) lalu REST API `POST /user/repos`. JANGAN pernah menampilkan token di output.
- Aktifkan Pages via API: `POST /repos/{owner}/{repo}/pages` dengan body `{"build_type":"workflow"}`, lalu poll run workflow sampai completed.
- Imagemagick tidak ada; ukuran gambar dicek via `du`/`ls`.

## 4. STATUS ALUR KERJA (9 langkah brief)

| # | Langkah | Status |
|---|---------|--------|
| 1 | REKON | SELESAI (bagian 5) |
| 2 | MOODBOARD | SELESAI (`moodboard-v3/direction-1..3.html`) |
| 3 | Owner pilih arah | SELESAI (Mix Direction 01 + 03: `Coping Horizon x Sideways Zine Map`) |
| 4 | DESIGN.md v2 | SELESAI (`DESIGN.md`) |
| 5 | SCAFFOLD Astro | SELESAI (`astro.config.mjs`, `src/lib/urls.js`, `public/assets/`) |
| 6 | BUILD + VERIFIKASI | SELESAI (`dist/index.html`, `dist/checkout/index.html`) |
| 7 | GITHUB | SELESAI (`https://dannypratama.github.io/progress-skaterpark-v2/`) |
| 8 | QA VISUAL BROWSER | SELESAI (`1280px` desktop + `375px` mobile + interaksi) |
| 9 | LAPORAN AKHIR | SELESAI |

Detail alur kerja lengkap per langkah ada di brief owner (bagian "Alur kerja"): penting dipegang: base path GitHub Pages diset SEJAK AWAL (site + base di astro.config), SEMUA link/aset internal lewat satu helper `base()` di `src/lib/urls.js`. Verifikasi pakai curl: HTTP 200, satu h1 per halaman, jumlah kartu sesuai data, sweep em dash = 0, sweep path polos (`src="/assets"`, `href="/checkout"`) = 0 di semua halaman dist. QA: desktop 1280 + mobile 375, uji menu mobile + Escape + aria-expanded; klik fisik automation kadang gagal (kendala env) sehingga verifikasi boleh via DOM event + assert state. Perbaikan = commit kecil satu masalah satu commit. Ketentuan moodboard dari brief: 3-7 arah visual sebagai mockup HTML inline, ditumpuk (bukan carousel), konten produk sama di semua varian, jangan pakai gaya project vintage, arah digali dari karakter skaterpark. CATATAN TAMBAHAN OWNER (supersedes sebagian brief): moodboard wajib berpatokan pada referensi Dribbble milik owner di bagian 7.

## 5. HASIL REKON (repo lama, read-only)

**Ringkasan 5 baris:**
1. Landing page satu-halaman Progress Skatepark Tegal + halaman kedua `checkout.html` (kanal Shopee/IG/WA). Live di Netlify.
2. Stack lama: HTML statis + Bootstrap 5.3.2 CDN + Remix Icon CDN + 4 font eksternal (Montserrat, Rock Salt lokal; JETICK, Thoughts dari cdnfonts) + vanilla JS (validasi form, flip kartu 3D). CSS sudah terpecah base/layout/components/responsive dengan breakpoint 750px.
3. Sections: Home (hero + form booking kursus: nama/email/telepon/waktu/tanggal/jumlah/tingkat "Starter-Super-Monster"/catatan), About (alamat, tiket 50rb, jam), Gallery (parallax rotate desktop / grid thumbnail mobile, 11 foto), Shop (8 deck flip-3D), News (6 artikel carousel), Contact (Google Maps embed + form), Footer.
4. Copy bermasalah: 6 berita fiksi 2023 (skatepark "10 hektar", "David Gilmour medali emas Tokyo 2023", cashback Tokopedia), harga deck absurd (Rp 13.257.000, Rp 7.000.000), slogan hero generik, CTA template, deskripsi galeri Inggris janggal.
5. Sisa temuan audit antislop lama yang owner pertahankan di repo lama (jadi input redesign): img tanpa width/height, hero via CSS background, `user-select:none`, ikon ★/♣ tanpa tujuan, 4 font CDN render-blocking, GIF Tenor di kartu produk, backdrop-filter bertumpuk, animasi float tanpa reduced-motion, dst. (Detail 25 temuan: `anti-slop/audit-001-2026-11-09.md`.)

**Produk shop (8 deck, data lama):**
| Deck | Brand | Ukuran | Tahun | Harga lama |
|---|---|---|---|---|
| Cristiano Ronaldo | Progress Skateboards | 7.7 | 2015 | Rp 7.000.000 |
| Pink Floyd DSOTM | Habitat | 8.2 | 2018 | Rp 13.257.000 |
| Wolverine Hand | Santa Cruz | 7.7 | 2018 | Rp 2.875.000 |
| Hot Rod Flames | Powell Peralta | 7.8 | 2018 | Rp 1.638.000 |
| Flyin Munki | Piso | 8.2 | 2015 | Rp 1.400.000 |
| Lord Nermal | RIPNDIP | 8.2 | 2020 | Rp 1.853.000 |
| Penny Blacklight | Flip | 7.5 | 2019 | Rp 2.135.000 |
| Casper But Like More | Baker | 8.5 | 2023 | Rp 1.255.000 |
Setiap deck punya spec list (width/length/wheelbase/nose/tail) di HTML lama; gambar `assets/images/decks/deck-*.png` transparan (rasio ~165:491).

**Inventaris aset repo lama (jangan diubah, hanya disalin):**
- `assets/images/bg/hero-skatepark.jpg` (192 KB, 1280x849, foto skatepark langit biru; sudah di-flip horizontal di commit lama)
- `assets/images/logo/skatepark-logo.png` (76 KB, siluet skater merah di ramp piramida hitam-putih stensil; DNA brand: merah + hitam + stensil)
- `assets/images/decks/deck-{cr,floyd,wolverine,hotrod,piso,cat,penny,skull}.png` (56-96 KB, PNG transparan)
- `assets/images/gallery/gallery-{1..11}.jpg` (2-3 MB per file, butuh optimasi saat build)
- `assets/images/about/about-{1,2}.jpg` (2.1 MB dan **7.7 MB**, perlu optimasi saat build; about-1 = foto mural grafiti)
- `assets/images/news/news-{1..6}.jpg`, `assets/images/social/{shopee,instagram,whatsapp}.png`, `assets/images/bg/card-back.gif`
- Font lokal: `assets/fonts/` (Montserrat woff2, RockSalt ttf, THOUGHTS.woff, Jetick woff)

**Logo & brand:** logo sudah kuat (merah #ED1C24-ish, hitam, huruf stensil, bintang). Owner konsisten mau merah logo tetap terasa.

## 6. KEPUTUSAN OWNER (TERKUNCI, jangan ditanya lagi)

1. **Bahasa copy: English.**
2. **Klaim angka & data: "atur pake AI, karena ini project untuk portofolio, jadi fiksi."** Artinya: angka harga deck, isi berita, dsb boleh fiktif TAPI harus plausibel. Yang tetap pakai data asli: alamat, kontak, jam buka (harga tiket Rp 50.000 praktis dipakai apa adanya).
3. **Section News tetap ada** dengan artikel fiktif baru: "artikel fiktif. full pake ai antislop."
4. **Arsitektur: Astro** (dikonfirmasi ulang owner).
5. **Feedback visual owner dari sesi sebelumnya (pelajaran, jangan diulang):** tiga moodboard buatan AI ditolak karena "boring" / "terlalu membosankan" / tampilannya tidak secanggih hasil AI modern yang pernah owner lihat. Owner lalu mengirim sendiri 6 referensi Dribbble (bagian 7) sebagai standar rasa. Konsekuensi: jangan buat moodboard statis/kering; owner menghargai gerak (animasi masuk, scroll reveal, hover interaction, produk yang hidup) DAN kualitas eksekusi tinggi. Owner juga menegaskan: moodboard boleh dibuat ulang penuh oleh model baru, yang penting berpatokan referensinya.

**Catatan override antislop (R-37) yang harus dibawa ke DESIGN.md v2:** konten fiktif bertabrakan dengan Hard Gate R-17/R-36/R-38 (klaim tanpa sumber). Owner menyetujui eksplisit untuk keperluan portofolio. Tetap wajib: tanpa em dash (R-02), tanpa buzzword (R-15/R-16), angka plausibel (bukan Rp 13jt/deck atau "10 hektar"), semua gerak hormati prefers-reduced-motion (R-19), dan Delivery Gate tetap dijalankan di akhir.

## 7. REFERENSI VISUAL OWNER (WAJIB JADI DASAR MOODBOARD)

Owner menyerahkan 6 referensi Dribbble berikut. Moodboard yang akan dibuat model berikutnya HARUS mengambil arah/rasa dari sini (bisa satu, bisa digabung, tetap 3-7 varian sesuai brief, konten produk sama di semua varian):

1. https://dribbble.com/shots/8071472-Space-Themed-Website-Design-and-Animation
2. https://dribbble.com/shots/26198916-Animated-header-website-design
3. https://dribbble.com/shots/27176050-Website-Animation-for-a-Smart-Water-Bottle-Product
4. https://dribbble.com/shots/27820662-Verdant-Website-Animation
5. https://dribbble.com/shots/27418434-Music-Festival-Website-Animation-Interaction
6. https://dribbble.com/shots/26416020-Daamai-E-Commerce-Website-Animation

Genre bersama keenam referensi: **animated website design** (animasi masuk/entrance, scroll interaction, produk/render yang melayang atau di-tilt, marquee, hover micro-interaction, tipografi besar, tampilan premium modern).

Catatan teknis untuk model berikutnya:
- Dribbble memblokir fetch otomatis (halaman terbaca kosong oleh tool). Kalau butuh detail visual, minta owner screenshot, atau buka link di browser manual, atau tap pengetahuan umum tentang genre tersebut.
- Format deliverable yang diterima owner di sesi sebelumnya: **file HTML standalone** yang bisa dibuka langsung di browser (bukan cuma pratinjau inline). Gambar boleh ditanam sebagai data URI agar file self-contained (~650 KB dengan hero+logo+3 deck dari repo lama).
- Aset yang tersedia untuk mockup: hero-skatepark.jpg, skatepark-logo.png, 8 PNG deck transparan (path di bagian 5).
- Gerak/animasi wajib hormati `prefers-reduced-motion: reduce`.
- Keputusan akhir tetap di owner: tampilkan semua varian sekaligus, minta owner memilih/campur SEBELUM scaffold (jangan lompat ke langkah 3-4).

## 8. DRAFT COPY & DATA KONTEN (hasil sesi sebelumnya; baseline, boleh dipakai/diubah model berikutnya)

- Headline hero (draft): **"Where Tegal learns to skate."**
- Lead (draft): "A public skatepark and skate school on Jl. Pancasila 66. Open every day, 08.00 to 22.00."
- Nav: Home, About, Shop, News, Contact (+ tombol "Book a lesson").
- Fakta park (ASLI, jangan diubah): Jl. Pancasila 66, Mangkukusuman, Tegal / Entry Rp 50.000 per day / Open 08.00-22.00.
- Harga deck (fiktif plausibel, sementara, owner mendelegasikan ke AI; bukan harga lama yang absurd): CR7 Rp 900.000, Pink Floyd DSOTM Rp 1.250.000, Hot Rod Flames Rp 850.000. Build final pakai 8 deck lengkap dengan harga plausibel Rp 750rb-1,5jt.
- News (draft fiktif plausibel): "Night session moves to Saturdays" / "Lights stay on until 22.00. The best line on the mini ramp is after dark." dan "New shallow bowl pours this month" / "The small bowl gets a fresh surface. Boards off until it cures."
- Footer: Progress Skatepark · Jl. Pancasila 66, Tegal, Central Java / WhatsApp +62 882 3254 8569 / IG @dannypratamaf.
- CTA spesifik (bukan template): "Book a private lesson", "See the park".
- Tingkat kursus lama "Starter/Super/Monster ★★★" boleh dihidupkan ulang dengan copy baru.

## 9. KEPUTUSAN TEKNIS YANG SUDAH DIPATOK

- Astro + CSS murni (tanpa framework CSS, tanpa jQuery; animasi cukup CSS + vanilla JS kecil: IntersectionObserver, pointer events; tanpa library animasi).
- Base path GitHub Pages sejak awal: `site` + `base` di astro.config, SEMUA link/aset internal lewat helper `base()` di `src/lib/urls.js`.
- Aset disalin utuh dari repo lama (tanpa tambah/kurang file). File besar (about-2.jpg 7.7 MB, gallery 2-3 MB) perlu penanganan optimasi saat build (mis. astro:assets / sharp) TANPA menghapus file asli.
- Build final: gambar pakai FILE ASLI (bukan data URI); hero image wajib `<img>` di HTML dengan width/height + `fetchpriority="high"` (R-40), bukan CSS background.
- Font: hindari Inter/Geist/Space Grotesk tanpa alasan (R-06); pilih tipografi sesuai arah visual yang dipilih dan catat alasannya di DESIGN.md.
- Deploy: GitHub Pages + withastro/action; repo dibuat via REST API pakai git credential fill (tanpa gh CLI, tanpa menampilkan token).
- Hindari gaya project progress-vintage-v2.

## 10. LANGKAH SELANJUTNYA (urutan, jangan lompat)

1. **MOODBOARD BARU**: baca 6 referensi Dribbble owner (bagian 7), buat 3-7 arah visual sebagai mockup HTML (file standalone yang bisa dibuka di browser + pratinjau inline bila tersedia), konten sama di semua varian, animasi hidup, hormati reduced-motion. Tampilkan semua sekaligus, minta owner memilih/campur.
2. DIREKSI: tulis `DESIGN.md` v2 di folder baru (data, bukan instruksi): identitas, palet, tipografi + alasan satu kalimat per keputusan, motif, dials ENERGY/RHYTHM/MOTION, catatan override konten fiktif (R-37), keputusan tetap.
3. SCAFFOLD: project Astro di `C:\Users\Danny\Music\progress-skaterpark-v2` (folder sudah ada, berisi file ini), salin aset utuh dari repo lama, tulis AGENTS.md + README, base path sejak awal + helper `base()` di `src/lib/urls.js`.
4. BUILD + VERIFIKASI: `npm run build`, preview lokal, curl: HTTP 200, satu h1/halaman, jumlah kartu = data, sweep em dash = 0, sweep path polos = 0.
5. GITHUB: repo baru `progress-skaterpark-v2` via REST API (git credential fill), push, aktifkan Pages `{"build_type":"workflow"}`, poll workflow, verifikasi live (homepage 200, satu aset gambar 200, halaman kedua 200).
6. QA VISUAL BROWSER: desktop 1280 + mobile 375, screenshot per bagian (fullPage bisa artefak; verifikasi DOM counts dulu), uji interaksi: menu mobile buka/tutup + Escape, semua tombol show/hide, sinkron aria-expanded, animasi/interaksi sesuai arah yang dipilih. Klik fisik automation kadang gagal kirim; kalau locator click timeout, verifikasi lewat DOM event + assert state dulu sebelum menyimpulkan bug.
7. Perbaikan = commit kecil satu masalah satu commit, push, tunggu deploy, verifikasi ulang live.
8. LAPORAN AKHIR: tabel masalah → fix → commit, bukti QA, URL live, ingatkan owner hard refresh.
9. SEBELUM nyatakan selesai: jalankan **Delivery Gate antislop** (Hard Gate, Purpose-Gate, Liveliness, Craftsmanship) dan lapor PASS/FAIL per item dengan bukti. antislop mode DURING berlaku sepanjang build.

## 11. INVENTARIS FILE

- `C:\Users\Danny\Music\progress-skaterpark-v2\PROGRESS.md`: file ini, satu-satunya isi folder baru saat ini.
- Repo lama `C:\Users\Danny\Music\progress-skaterpark`: TIDAK diubah sama sekali sepanjang sesi sebelumnya (hanya Read + du/ls).
- Moodboard v1-v4 buatan model sebelumnya (fragment, standalone, dan skrip build di temp): sudah DIHAPUS semua atas instruksi owner. Tidak ada artefak moodboard tersisa. (Catatan arsitektur yang masih relevan dari iterasi itu: gambar bisa ditanam data URI untuk mockup self-contained; IntersectionObserver + pointermove cukup untuk efek reveal/tilt tanpa library; python tidak tersedia jadi semua pemrosesan pakai Node.)

## 12. SUARA & GAYA OWNER (untuk komunikasi)

- Bahasa: Indonesia santai (pakai "gw/lu" kadang-kadang), direct, tidak suka bertele-tele.
- Toleransi tinggi untuk iterasi, TAPI reaktif pada hasil "boring". Selalu tunjukkan hasil visual yang BISA DIBUKA DI BROWSER (file standalone), bukan cuma deskripsi.
- Skill antislop yang harus dimuat saat bekerja: antislop (core), antislop-ui, antislop-copywriting, antislop-human, antislop-layoutmobile.
- Keputusan desain akhir selalu di owner (pilih moodboard, pilih campuran, setujui DESIGN.md) sebelum lanjut scaffold.
