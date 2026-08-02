# Product Requirements Document (PRD) - Website "Finance" (Kopirosoft)

## 1. Ringkasan Proyek
Proyek ini bertujuan untuk membangun sebuah *landing page* dan website representatif untuk produk **"Finance"** menggunakan **Next.js**. Mengacu pada referensi desain pada PDF (Kopirosoft Portfolio), website ini harus dibangun secara **100% pixel-perfect** dan identik dengan desain referensi, sesuai dengan standar dan permintaan mutlak dari klien.

## 2. Tujuan (Objectives)
- Menerjemahkan desain visual dari referensi PDF ke dalam antarmuka web dengan tingkat akurasi 100%.
- Menampilkan fitur-fitur unggulan produk Finance (konversi USD ke IDR, *real-time insights*, pencarian ATM, *automated savings*).
- Membangun kepercayaan pengunjung dengan deretan logo mitra perusahaan terkemuka (Google, Canva, Adobe, Claude, Framer).

## 3. Tech Stack
- **Framework Utama:** Next.js (menggunakan **App Router** sebagai standar terbaru untuk struktur yang optimal).
- **Styling:** Tailwind CSS (untuk mereplikasi ukuran, warna, dan tata letak desain UI secara presisi dan efisien).
- **Animasi & Interaksi:** Framer Motion (untuk memberikan efek transisi yang *smooth* dan akurat sesuai ekspektasi desain klien).
- **Environment:** Lingkungan server pendukung Node.js (teroptimasi dan sepenuhnya kompatibel untuk *local development* pada sistem operasi Windows).

## 4. Struktur Halaman & Fitur (Features & Requirements)
*Catatan: Seluruh konten teks, logo, gambar, dan data metrik pada halaman ini akan di-hardcode (statis) tanpa adanya integrasi CMS.*

### 4.1. Hero Section
- **Headline:** "Finance for a Smarter Future. Banking & Beyond."
- **Sub-headline:** "Banking redefined for the modern era."
- **Social Proof:** Deretan logo *trusted companies* (Google, Canva, Adobe, Claude, Framer).
- **Call to Action (CTA):** Tombol ajakan "Download the App".

### 4.2. Fitur Utama (Core Features Section)
- **Real-Time Insights & Automation:** Desain kartu *pixel-perfect* yang mengilustrasikan wawasan keuangan *real-time* dan otomatisasi.
- **Konversi Mata Uang:** Ilustrasi visual pertukaran uang statis (USD ke IDR).
- **Investment Strategies:** Tampilan penawaran bunga statis (Saving up to 3% AER Interest).
- **ATM Finder:** Bagian "Saving Cash for Safety" yang menunjukkan metrik ketersediaan ATM di berbagai lokasi.

### 4.3. About Us & Global Reach
- **Pernyataan Misi:** "We are here to redefine how you interact with money through a modern, transparent, and adaptive banking ecosystem."
- **Global Presence:** Visualisasi peta statis dengan angka jangkauan operasi (Middle East, Europe, Asia 20+, Australia, Africa, dsb).

### 4.4. Testimonials
- Komponen grid/slider statis untuk menampilkan *feedback* terkait transformasi finansial pengguna.

### 4.5. Footer
- Tautan navigasi statis, informasi kontak, kebijakan privasi, dan CTA (Join the 70+ million using Finance).

## 5. Non-Functional Requirements
- **Pixel-Perfect Accuracy:** Prioritas mutlak proyek adalah kesamaan 100% antara hasil kode (*output browser*) dengan referensi visual PDF.
- **Responsiveness (Desktop-First):** Tata letak dikembangkan menggunakan pendekatan *desktop-first* untuk memastikan kesamaan layout di layar besar, dengan tetap menjaga agar komponen tidak pecah (*graceful degradation*) pada resolusi kecil.
- **Performance:** Memanfaatkan *Static Site Generation* (SSG) pada Next.js secara maksimal karena tidak ada pemanggilan data dinamis (*fetching* CMS), sehingga waktu muat halaman akan sangat instan.
