Landing page Budaya Betawi - gaya cover marun

CARA MENJALANKAN
Buka index.html di browser (klik dua kali), atau pakai ekstensi Live Server di VS Code.

STRUKTUR
index.html      -> kerangka halaman
css/style.css   -> semua tampilan dan animasi
js/script.js    -> efek parallax (gerak pelan mengikuti kursor/kemiringan HP)
assets/         -> gambar (WebP): monas, ondel, burung, bingkai

MENGGANTI KOTAK PUTUS-PUTUS DENGAN GAMBAR
1. Taruh gambar (misal tokoh-kiri.webp, latar transparan) di folder assets/
2. Di index.html, ubah baris slot, contoh:
   <div class="layer slot s-kiri" data-d="14">...</div>
   menjadi:
   <img class="layer s-kiri" data-d="14" src="assets/tokoh-kiri.webp" alt="Penari Betawi">
3. Di css/style.css, pada .s-kiri tambahkan: object-fit:contain; object-position:bottom;
   Gaya .slot (kotak putus-putus) tidak berlaku lagi karena class slot dihapus.
Lakukan hal yang sama untuk tokoh-kanan.
Latar batik, pita, dan ornamen awan sudah digambar dengan kode (SVG), jadi tidak butuh file gambar.

HALAMAN MULAI JELAJAH
Tombol "Mulai Jelajah" menggeser cover ke atas dan membuka halaman informasi (#jelajah) dengan tab Budaya Betawi / Kota Jakarta. Teks kartu ada di index.html; mohon dicek ulang kebenarannya sebelum lomba.

CATATAN
- Siluet gedung Jakarta, rumah Betawi (gigi balang), pita batik, dan ornamen awan digambar dengan kode SVG di index.html.
- bingkai.webp belum dipakai di halaman ini (disimpan untuk bagian berikutnya).
- Font dimuat dari Google Fonts, jadi perlu internet saat dibuka.
- Pastikan semua gambar yang dipakai punya lisensi yang jelas untuk lomba.
