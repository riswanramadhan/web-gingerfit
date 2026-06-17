# Gingerfit+ Website Build Brief

Dokumen ini adalah **brief teknis dan desain** untuk membangun website landing page statis **Gingerfit+** menggunakan **Next.js + Tailwind CSS**.  
File ini ditujukan untuk AI agent/developer agar dapat langsung memahami kebutuhan, struktur halaman, konten, asset, behavior, SEO, dan requirement UI/UX website.

---

## 1. Project Overview

### Nama Website

```text
Gingerfit+
```

### URL Production

```text
https://gingerfitplus.dekatlokal.com
```

### Jenis Website

```text
Static scrollable landing page
Responsive-first UI
SEO-friendly website
Product-focused landing page
WhatsApp-driven conversion website
```

### Tech Stack

```text
Framework: Next.js
Styling: Tailwind CSS
Animation: AOS Scroll Animation
Deployment Target: Vercel / platform compatible with Next.js
SEO: Metadata, sitemap.xml, robots.txt, Open Graph, Twitter Card, JSON-LD
```

### Karakter Website

Website harus terasa:

```text
Fresh
Clean
Healthy
Energetic
Modern
Playful
Premium
Product-focused
```

Website tidak boleh terasa terlalu formal, terlalu medis, terlalu kosong, atau terlalu ramai. Fokus utama website adalah membuat user mengenal Gingerfit+, melihat varian produk, percaya pada brand, lalu klik WhatsApp untuk order.

---

## 2. Business Information

### Brand / UMKM

```text
Nama UMKM/Brand: Gingerfit+
Jenis Usaha: Gingershot / Minuman Jahe
```

### Lokasi Usaha

```text
Jl. Dirgantara 4 Blok E, Mangalli, Kec. Palangga, Kab. Gowa
```

### Jam Operasional

```text
08.00 – 20.00 WITA
```

### Tanggal Mulai Usaha

```text
25 Agustus 2025
```

### Ringkasan Usaha

```text
Gingerfit+ adalah minuman kesehatan berbahan dasar jahe pilihan yang diformulasikan untuk membantu menjaga daya tahan tubuh, menghangatkan badan, dan mendukung gaya hidup sehat. Produk ini menawarkan manfaat herbal alami dengan rasa yang praktis dan nyaman dikonsumsi sehari-hari.
```

### Keunggulan Produk

```text
Gingerfit+ dikembangkan langsung oleh seorang apoteker dengan formulasi yang mengutamakan manfaat kesehatan sekaligus kenyamanan konsumsi. Berbeda dengan banyak produk jahe yang memiliki rasa tajam dan cenderung pahit, Gingerfit+ dipadukan dengan madu asli 100% sehingga menghasilkan rasa yang lebih enak, lebih halus di tenggorokan, dan dapat dinikmati oleh berbagai kalangan tanpa mengurangi manfaat alami jahe.
```

---

## 3. Contact & Social Media

### Instagram

```text
@gingerfitplus
```

### TikTok

```text
@gingerfitplus
```

### WhatsApp Admin

Ada 2 nomor WhatsApp yang tersedia:

```text
085298354853
081803253349
```

Gunakan nomor utama berikut sebagai default untuk semua CTA WhatsApp:

```text
085298354853
```

Format nomor untuk WhatsApp link:

```text
6285298354853
```

Nomor kedua dapat digunakan sebagai fallback:

```text
6281803253349
```

### Google Maps

```text
https://maps.app.goo.gl/BGfQAYmS1Veoic496
```

Gunakan link Google Maps tersebut untuk section lokasi dan CTA “Buka Google Maps”.

---

## 4. Main Website Goal

Tujuan utama website:

```text
Mengenalkan Gingerfit+ sebagai produk gingershot sehat.
Menampilkan varian produk dengan jelas dan menarik.
Membangun trust melalui legalitas, testimoni, dan mitra.
Mengarahkan user untuk order melalui WhatsApp.
Membuat Gingerfit+ terlihat profesional sebagai UMKM yang sudah terdigitalisasi bersama DekatLokal.
```

### Primary Conversion

```text
Klik WhatsApp untuk order produk.
```

### Secondary Conversion

```text
Klik Instagram/TikTok.
Klik Google Maps.
Melihat legalitas.
Membaca testimoni.
Melihat dokumentasi.
```

---

## 5. Design Guideline Reference

Gunakan file guideline desain yang sudah dibuat sebelumnya:

```text
gingerfit_web_design_guideline.md
```

Website harus mengikuti DNA visual Gingerfit+:

```text
Clean background
Big product image
Variant color accent
Fresh ingredient visual
Bold rounded typography
Clear CTA
```

### Core Color Tokens

```css
:root {
  --color-brand-green: #00A651;
  --color-ginger-yellow: #F5B51B;
  --color-sky-blue: #28BDEB;
  --color-cream: #FFF9EF;
  --color-black: #111111;
  --color-soft-gray: #E9E4DA;
  --color-white: #FFFFFF;

  --color-immunity-booster: #00A651;
  --color-immunity-aid: #E8AD22;
  --color-running-booster: #14DDB0;
  --color-running-highlight: #DDF44A;
  --color-vitamin-a: #20B9D6;
  --color-vitamin-c: #FF641F;
  --color-energy-booster: #111111;
  --color-energy-accent: #FF5A3C;
}
```

---

## 6. Font Direction

Gunakan font yang sesuai dengan karakter Gingerfit+:

```text
Bold
Rounded
Friendly
Modern
Readable
Fresh
```

### Recommended Fonts

Prioritas utama:

```text
Poppins
```

Alternatif:

```text
Plus Jakarta Sans
Nunito Sans
Montserrat
Inter
```

### Recommended Implementation

Gunakan `next/font/google`.

```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
```

---

## 7. Asset Requirements

Semua asset sebaiknya diletakkan di folder:

```text
/public/images
```

atau struktur lebih rapi:

```text
/public/images/brand
/public/images/products
/public/images/legal
/public/images/testimonials
/public/images/partners
/public/images/owner
```

### Required Brand Assets

```text
logo-ginger
logo-dekatlokal
logo-edukasilokal
```

Keterangan:

```text
logo-ginger        -> digunakan untuk favicon, navbar, dan brand identity
logo-dekatlokal    -> digunakan pada section mitra dan footer
logo-edukasilokal  -> digunakan pada section mitra dan footer
```

### Required Owner Asset

```text
owner-ginger
```

Gunakan pada section about jika tersedia.

### Required Legal Assets

```text
nib-ginger
hki-ginger
```

Keterangan:

```text
nib-ginger -> gambar legalitas NIB
hki-ginger -> gambar legalitas HKI/Hak Cipta
```

Legalitas harus bisa diperbesar/popup ketika diklik.

### Required Testimonial Documentation Assets

```text
testimoni-1
testimoni-2
testimoni-3
testimoni-4
testimoni-5
```

Gunakan pada section testimoni image/dokumentasi.

### Required Product Assets

Gunakan poster produk yang sudah dibuat sebelumnya. Rekomendasi nama file:

```text
product-immunity-aid
product-immunity-booster
product-vitamin-a-booster
product-vitamin-c-booster
product-running-booster
product-energy-booster
```

Jika nama file berbeda, sesuaikan import/path di komponen.

---

## 8. Global UX Requirements

### Website Type

```text
Single-page landing page
Scrollable
Responsive
Static content
Fast loading
SEO-friendly
Mobile-first
```

### Animation

Gunakan AOS scroll animation.

```text
Library: aos
Animation style: subtle, smooth, modern
Avoid excessive animation
```

Recommended animation mapping:

```text
Hero text: fade-right
Hero image: zoom-in
Partner logos: fade-up
About cards: fade-up
Product cards: fade-up
Legal cards: fade-up
Testimonials: fade-up
FAQ: fade-up
CTA: zoom-in
```

### Icon System

Gunakan icon modern, bukan emoji.

Recommended icon library:

```text
lucide-react
```

Icon boleh digunakan untuk:

```text
WhatsApp CTA
Benefit card
Legalitas
Lokasi
Jam operasional
Produk
FAQ
Social media
Navigation
```

Tidak boleh menggunakan emoji sebagai icon utama.

### Hover Interaction

Semua card dan button harus punya hover movement yang subtle.

```text
Button hover:
translate-y slightly
shadow stronger
color slightly darker

Card hover:
translate-y -4px
shadow increase
border accent visible

Icon hover:
small rotation / scale
```

---

## 9. Website Structure

Website terdiri dari section berikut:

```text
1. Navbar
2. Hero Section
3. Partner / Mitra Section
4. About Section
5. Legalitas Section
6. Product Section
7. Written Testimonials Section
8. Image Documentation Testimonials Section
9. Location Section with Embedded Maps
10. FAQ Section
11. CTA Section
12. Footer
13. Floating WhatsApp Button
```

---

# 10. Section Detail

---

## 10.1 Navbar

### Layout

```text
Position: sticky/fixed top
Background: transparent at top, white/cream blur on scroll
Left: logo ginger only, no text
Right: menu links
```

### Navbar Logo

Gunakan:

```text
logo-ginger
```

Important:

```text
Navbar kiri hanya logo Gingerfit tanpa teks.
```

### Menu Items

```text
Home
Tentang
Produk
Legalitas
Testimoni
Lokasi
FAQ
```

### CTA Navbar

Tambahkan CTA kecil:

```text
Order Now
```

CTA mengarah ke WhatsApp admin.

### Mobile Navbar

```text
Logo kiri
Hamburger kanan
Menu slide/dropdown
CTA WhatsApp tetap terlihat
```

---

## 10.2 Hero Section

### Goal

Hero harus langsung menjual kesan:

```text
Fresh
Healthy
Daily booster
Natural gingershot
Easy to order
```

### Content Direction

Headline recommended:

```text
Your Daily Booster, Fresh in Every Shot.
```

Alternatif bahasa Indonesia:

```text
Segarnya Bikin Nagih, Boosternya Bikin Semangat.
```

Subheadline:

```text
Gingerfit+ adalah gingershot organik berbahan dasar jahe pilihan, diformulasikan untuk menemani rutinitas harian dengan rasa yang segar, hangat, dan praktis.
```

CTA Primary:

```text
Order via WhatsApp
```

CTA Secondary:

```text
Lihat Varian Produk
```

### Visual

Gunakan product group atau beberapa poster produk.

Jika hanya satu visual utama, gunakan poster produk yang paling cocok sebagai hero:

```text
product-immunity-booster
atau
group product image jika tersedia
```

### Style

```text
Background:
Fresh sky blue / cream gradient

Decoration:
Floating ginger, lemon, leaf, ice, splash

Typography:
Large, bold, rounded

Hero image:
Large, clean, product-focused
```

---

## 10.3 Partner / Mitra Section

### Title

```text
Didukung Oleh Mitra Terpercaya
```

### Description

```text
Gingerfit+ berkolaborasi dengan program pendampingan digital bersama DekatLokal
```

### Logos

Tampilkan 2 logo image:

```text
logo-dekatlokal
logo-edukasilokal
```

### Layout

```text
Desktop:
Logo berjejer horizontal

Mobile:
Logo stacked atau 2-column kecil

Style:
White/cream card
Soft shadow
Rounded corners
Hover scale
```

---

## 10.4 About Section

### Title

```text
Tentang Gingerfit+
```

### Description

Gunakan copy berikut:

```text
Gingerfit+ adalah minuman kesehatan berbahan dasar jahe pilihan yang diformulasikan untuk membantu menjaga daya tahan tubuh, menghangatkan badan, dan mendukung gaya hidup sehat. Produk ini menawarkan manfaat herbal alami dengan rasa yang praktis dan nyaman dikonsumsi sehari-hari.
```

### Supporting Copy

```text
Dikembangkan langsung oleh seorang apoteker, Gingerfit+ mengutamakan formulasi yang seimbang antara manfaat kesehatan dan kenyamanan konsumsi. Perpaduan jahe pilihan dengan bahan alami seperti madu, kunyit, lemon, wortel, nanas, dan caffeine shot membuat setiap varian memiliki karakter rasa yang berbeda.
```

### Optional Owner Visual

Jika asset tersedia, tampilkan:

```text
owner-ginger
```

### About Cards

Tampilkan 3 benefit cards:

```text
Bahan Alami Pilihan
Menggunakan jahe organik dan bahan alami pilihan.

Cold-Pressed
Diproses untuk menjaga karakteristik rasa asli dan kesegaran bahan.

Praktis Dikonsumsi
Kemasan kecil yang mudah dinikmati kapan saja dan di mana saja.
```

---

## 10.5 Legalitas Section

### Title

```text
Legalitas Usaha
```

### Description

```text
Gingerfit+ memiliki legalitas usaha dan perlindungan karya/merek sebagai bentuk komitmen dalam membangun produk lokal yang terpercaya.
```

### Legal Data

```text
NIB: 0505230004703
HKI/Hak Cipta: No. 000944431
```

### Required Images

```text
nib-ginger
hki-ginger
```

### Behavior

```text
Saat card legalitas diklik, gambar legalitas tampil dalam modal/popup.
Modal bisa ditutup dengan tombol X, klik area luar, atau tombol Escape.
Gunakan overlay gelap transparan.
Gambar harus responsif.
```

### Legal Cards

```text
Card 1:
Title: Nomor Induk Berusaha
Label: NIB
Number: 0505230004703
Image: nib-ginger

Card 2:
Title: Hak Kekayaan Intelektual
Label: HKI / Hak Cipta
Number: No. 000944431
Image: hki-ginger
```

---

## 10.6 Product Section

### Title

```text
Pilihan Varian Gingerfit+
```

### Description

```text
Segarkan hari Anda dengan koleksi gingershot organik dari Gingerfit+. Setiap varian dibuat dari jahe pilihan dan dipadukan dengan bahan alami premium untuk menemani aktivitas harian Anda.
```

### Product Pricing

Semua varian ukuran 80 mL:

```text
Harga: Rp10.000
Ukuran: 80 mL
```

Tersedia juga ukuran lain:

```text
300 mL: Rp30.000
600 mL: Rp60.000
1 Liter: Rp100.000
```

### Ordering System

```text
Ready Stock
Preorder via WhatsApp
Preorder via Instagram
```

### Product List

#### 1. Immunity Aid

```text
Name: Immunity Aid
Combination: Organic Ginger + Extra Honey
Descriptor: Organic Ginger & Extra Honey
Price: Rp10.000
Size: 80 mL
Color: #E8AD22
Image: product-immunity-aid
```

Description:

```text
Perpaduan rasa tajam khas jahe organik dengan kelembutan manis dari madu ekstra. Varian ini memberikan rasa hangat yang nyaman di tenggorokan, cocok untuk menemani momen istirahat atau saat tubuh membutuhkan kesegaran ekstra.
```

#### 2. Immunity Booster

```text
Name: Immunity Booster
Combination: Organic Ginger + Turmeric Shot
Descriptor: Organic Ginger & Turmeric Shot
Price: Rp10.000
Size: 80 mL
Color: #00A651
Image: product-immunity-booster
```

Description:

```text
Kombinasi tradisional antara jahe dan kunyit yang diproses secara modern. Menghasilkan minuman dengan cita rasa rempah yang kuat dan autentik untuk mendukung rutinitas harian yang aktif.
```

#### 3. Vitamin A Booster

```text
Name: Vitamin A Booster
Combination: Organic Ginger + Carrot Shot
Descriptor: Organic Ginger & Carrot Shot
Price: Rp10.000
Size: 80 mL
Color: #20B9D6
Image: product-vitamin-a-booster
```

Description:

```text
Perpaduan rasa manis alami dari wortel murni dan kehangatan jahe. Varian ini menjadi cara yang menyenangkan dan menyegarkan untuk melengkapi kebutuhan asupan Vitamin A dan Beta-Karoten harian.
```

#### 4. Vitamin C Booster

```text
Name: Vitamin C Booster
Combination: Organic Ginger + Lemon Shot
Descriptor: Organic Ginger & Lemon Shot
Price: Rp10.000
Size: 80 mL
Color: #FF641F
Image: product-vitamin-c-booster
```

Description:

```text
Kombinasi segar yang memadukan rasa asam alami dari perasan lemon dengan kehangatan jahe. Cocok dinikmati di pagi hari sebagai asupan buah sitrus yang menyegarkan.
```

#### 5. Running Booster

```text
Name: Running Booster
Combination: Organic Ginger + Pineapple Extract
Descriptor: Organic Ginger & Pineapple Extract
Price: Rp10.000
Size: 80 mL
Color: #14DDB0
Highlight Color: #DDF44A
Image: product-running-booster
```

Description:

```text
Diformulasikan dengan ekstrak nanas alami yang memberikan sentuhan rasa manis-asam tropis yang khas. Pilihan minuman yang menyegarkan untuk menghidrasi tubuh kembali, baik sebelum maupun setelah aktivitas fisik seperti berlari.
```

#### 6. Energy Booster

```text
Name: Energy Booster
Combination: Organic Ginger + Caffeine Shot
Descriptor: Organic Ginger & Caffeine Shot
Price: Rp10.000
Size: 80 mL
Color: #111111
Accent Color: #FF5A3C
Image: product-energy-booster
```

Description:

```text
Memadukan karakteristik jahe yang hangat dengan tambahan caffeine shot. Pilihan alternatif yang praktis untuk menemani aktivitas kerja atau belajar saat membutuhkan kesegaran dan rasa mantap di lidah.
```

### Important Note for Energy Booster Text

Di beberapa asset visual, tulisan mungkin muncul sebagai:

```text
Caffein Shot
Cafein Shot
```

Untuk copy website, gunakan ejaan yang lebih formal:

```text
Caffeine Shot
```

Namun jangan memaksa mengubah teks pada gambar produk/poster jika asset sudah final.

### Product Card CTA

Setiap produk memiliki tombol:

```text
Order Varian Ini
```

Saat diklik, user diarahkan ke WhatsApp dengan pesan otomatis sesuai produk.

---

## 10.7 Product WhatsApp Message Behavior

### General WhatsApp URL Format

```text
https://wa.me/6285298354853?text={ENCODED_MESSAGE}
```

### Product Message Template

Gunakan format pesan:

```text
Halo Admin Gingerfit+, saya ingin order produk {PRODUCT_NAME} ukuran {SIZE}. Mohon info ketersediaan dan cara pemesanannya.

Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.
```

### Example: Immunity Booster

```text
Halo Admin Gingerfit+, saya ingin order produk Immunity Booster ukuran 80 mL. Mohon info ketersediaan dan cara pemesanannya.

Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.
```

### Example: General CTA

```text
Halo Admin Gingerfit+, saya tertarik dengan produk Gingerfit+. Mohon info varian, harga, dan cara pemesanannya.

Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.
```

### Important

Semua tombol WhatsApp wajib menyertakan watermark:

```text
Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.
```

---

## 10.8 Written Testimonials Section

### Title

```text
Apa Kata Mereka?
```

### Description

```text
Beberapa cerita dan apresiasi dari pelanggan serta tokoh yang telah mengenal Gingerfit+.
```

### Testimonials

#### Testimonial 1

```text
Name: Gubernur Sulawesi Selatan
Origin: Sulawesi Selatan
Quote: Inovasi produk herbal lokal seperti Gingerfit+ menunjukkan potensi besar dalam mengembangkan UMKM berbasis kesehatan serta meningkatkan nilai tambah komoditas lokal.
```

#### Testimonial 2

```text
Name: Prof. Dr. Ir. Jamalluddin Jompa, M.Sc.
Role: Rektor Universitas Hasanuddin
Origin: Makassar
Quote: Saya mengapresiasi hadirnya Gingerfit+ sebagai inovasi minuman jahe praktis yang memudahkan masyarakat menikmati manfaat jahe dan madu dalam kehidupan sehari-hari.
```

#### Testimonial 3

```text
Name: Alfreds Roosevelt
Origin: Makassar
Quote: Mantap! Sekali disajikan, Gingerfit+ langsung habis dinikmati oleh seluruh rekan kerja saya. Rasanya enak, tidak pahit, dan pas untuk dinikmati kapan saja.
```

#### Testimonial 4

```text
Name: Khairiyah Said
Origin: Makassar
Quote: Enak, segar, dan tidak pahit. Gingerfit+ memberikan sensasi hangat yang nyaman dengan rasa yang membuat saya langsung menghabiskannya dalam satu kali teguk.
```

#### Testimonial 5

```text
Name: Sebastian White
Origin: Jerman
Quote: It leaves me feeling refreshed and energized throughout my entire body. I noticed positive effects almost immediately after taking it. The Vitamin C Booster is my favorite! I would love to see this amazing product become available in Germany.
```

#### Testimonial 6

```text
Name: dr. Anita Mustari
Origin: Gowa
Quote: Suka banget sama semua menu Gingerfit+! Rasanya nggak pernah cukup kalau cuma beli satu, hehe. Semoga makin sukses dan berkembang terus. Tolong jualannya setiap hari ya, karena sudah jadi favorit saya!
```

### Layout

```text
Desktop:
Card carousel or 3-column grid

Mobile:
Horizontal scroll cards or stacked cards

Style:
White cards, rounded, soft shadow, variant color accent
```

---

## 10.9 Image Documentation Testimonials Section

### Title

```text
Dokumentasi Gingerfit+
```

### Description

```text
Momen Gingerfit+ hadir dalam berbagai aktivitas, pelanggan, dan dokumentasi brand.
```

### Required Images

```text
testimoni-1
testimoni-2
testimoni-3
testimoni-4
testimoni-5
```

### Layout Options

Preferred:

```text
Masonry grid / responsive gallery
```

Alternative:

```text
Horizontal scroll gallery on mobile
```

### Behavior

```text
Image hover scale slight
Image click opens modal/lightbox
Image alt text must be descriptive
```

---

## 10.10 Location Section

### Title

```text
Lokasi Gingerfit+
```

### Description

```text
Kunjungi atau temukan Gingerfit+ melalui Google Maps. Untuk pemesanan, hubungi admin melalui WhatsApp agar informasi stok dan preorder dapat dikonfirmasi lebih cepat.
```

### Address

```text
Jl. Dirgantara 4 Blok E, Mangalli, Kec. Palangga, Kab. Gowa
```

### Operating Hours

```text
08.00 – 20.00 WITA
```

### Google Maps Link

```text
https://maps.app.goo.gl/BGfQAYmS1Veoic496
```

### Embed Maps

Tambahkan iframe Google Maps.

Jika embed URL belum tersedia, gunakan placeholder iframe dan CTA button ke Google Maps.

Example placeholder:

```tsx
<iframe
  src="GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="420"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### CTA

```text
Buka Google Maps
```

---

## 10.11 FAQ Section

### Title

```text
Pertanyaan yang Sering Ditanyakan
```

### FAQ Items

#### 1. Apa itu Gingerfit+?

```text
Gingerfit+ adalah minuman kesehatan berbahan dasar jahe pilihan yang dipadukan dengan bahan alami seperti madu, kunyit, lemon, wortel, nanas, dan caffeine shot untuk mendukung gaya hidup sehat harian.
```

#### 2. Berapa harga produk Gingerfit+?

```text
Semua varian ukuran 80 mL dibanderol Rp10.000. Tersedia juga ukuran 300 mL seharga Rp30.000, 600 mL seharga Rp60.000, dan 1 Liter seharga Rp100.000.
```

#### 3. Apakah produk ready stock?

```text
Sistem pemesanan Gingerfit+ tersedia melalui ready stock dan preorder. Untuk memastikan ketersediaan produk, customer dapat menghubungi admin melalui WhatsApp.
```

#### 4. Bagaimana cara order Gingerfit+?

```text
Klik tombol WhatsApp pada website, pilih varian produk yang diinginkan, lalu admin akan membantu konfirmasi stok dan proses pemesanan.
```

#### 5. Apakah Gingerfit+ harus diminum dingin?

```text
Gingerfit+ paling nikmat dikonsumsi dalam keadaan dingin agar terasa lebih segar.
```

#### 6. Apakah perlu dikocok sebelum diminum?

```text
Ya. Kocok dahulu sebelum diminum karena endapan alami pada produk adalah hal yang wajar dari penggunaan bahan baku asli tanpa bahan penstabil.
```

#### 7. Bagaimana cara menyimpan Gingerfit+?

```text
Simpan Gingerfit+ di dalam lemari es untuk menjaga kualitas dan kesegarannya.
```

#### 8. Apakah Gingerfit+ membuka kerja sama reseller atau mitra?

```text
Gingerfit+ terbuka untuk peluang kolaborasi, reseller, event olahraga, gym, padel, wedding organizer, dan kebutuhan acara lainnya. Silakan hubungi admin melalui WhatsApp untuk diskusi lebih lanjut.
```

---

## 10.12 CTA Section

### Title

```text
Siap Coba Booster Harianmu?
```

### Description

```text
Pilih varian favoritmu dan rasakan kesegaran gingershot organik Gingerfit+ untuk menemani aktivitas harian.
```

### CTA Button

```text
Order Sekarang via WhatsApp
```

CTA mengarah ke WhatsApp admin dengan general message.

### Visual

```text
Product bottle group
Fresh ingredient accent
Cream/green/sky gradient
Rounded section
```

---

## 10.13 Footer

### Footer Style

```text
Modern
Simple
Clean
Cream/black/white
Soft border top
```

### Footer Content

#### Left Area

```text
Logo Gingerfit+
Short description
Social links: Instagram, TikTok, WhatsApp
```

Description:

```text
Gingerfit+ adalah gingershot organik berbahan dasar jahe pilihan untuk mendukung rutinitas sehat harian dengan rasa yang segar, hangat, dan praktis.
```

#### Middle Area

Footer navigation:

```text
Tentang
Produk
Legalitas
Testimoni
Lokasi
FAQ
```

#### Right Area

Title:

```text
Mitra Kami
```

Content:

```text
logo-dekatlokal
logo-edukasilokal
```

Layout:

```text
Logo disusun vertikal / berjejer ke bawah
Rapi
Ukuran konsisten
Card kecil atau clean plain logo
```

### Footer Bottom

Teks center:

```text
© 2026 Gingerfit+. All rights reserved | Powered by DekatLokal
```

Important behavior:

```text
Text "DekatLokal" memiliki warna berbeda.
DekatLokal clickable.
Saat diklik, buka tab baru ke:
https://www.dekatlokal.com
```

HTML requirement:

```tsx
<a
  href="https://www.dekatlokal.com"
  target="_blank"
  rel="noopener noreferrer"
>
  DekatLokal
</a>
```

---

## 10.14 Floating WhatsApp Button

### Position

```text
Fixed bottom-right
Visible on all pages/sections
High z-index
```

### Design

```text
Round button
WhatsApp icon
Green color
Soft shadow
Hover scale
Pulse animation subtle
```

### Notification Element

Tambahkan notif kecil untuk menarik klik.

Example text:

```text
Butuh info stok?
```

atau:

```text
Order via WhatsApp
```

### Behavior

```text
Klik floating WA mengarah ke WhatsApp admin.
Gunakan general WhatsApp message.
Notif bisa muncul sebagai small bubble di samping button.
Di mobile, bubble jangan menutupi konten utama.
```

---

# 11. SEO Requirements

Website harus SEO-friendly.

## 11.1 Metadata

### Title

```text
Gingerfit+ | Gingershot Organik Jahe untuk Daily Booster
```

### Description

```text
Gingerfit+ adalah minuman gingershot organik berbahan dasar jahe pilihan dengan berbagai varian seperti Immunity Booster, Vitamin C Booster, Running Booster, dan Energy Booster. Order mudah via WhatsApp.
```

### Keywords

```text
Gingerfit
Gingerfit+
gingershot
minuman jahe
ginger shot Makassar
minuman herbal Gowa
minuman sehat
UMKM Gowa
UMKM Makassar
gingershot organik
immunity booster
vitamin c booster
running booster
energy booster
```

### Canonical

```text
https://gingerfitplus.dekatlokal.com
```

### Open Graph

```text
og:title: Gingerfit+ | Gingershot Organik Jahe untuk Daily Booster
og:description: Minuman gingershot organik berbahan dasar jahe pilihan dengan rasa segar, hangat, dan praktis.
og:url: https://gingerfitplus.dekatlokal.com
og:type: website
og:image: /images/og-gingerfit.jpg
```

### Twitter Card

```text
twitter:card: summary_large_image
twitter:title: Gingerfit+ | Gingershot Organik Jahe untuk Daily Booster
twitter:description: Minuman gingershot organik jahe pilihan untuk mendukung rutinitas sehat harian.
twitter:image: /images/og-gingerfit.jpg
```

---

## 11.2 robots.txt

Buat file:

```text
/public/robots.txt
```

Isi:

```txt
User-agent: *
Allow: /

Sitemap: https://gingerfitplus.dekatlokal.com/sitemap.xml
```

---

## 11.3 sitemap.xml

Buat sitemap otomatis atau static untuk landing page.

Jika static:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gingerfitplus.dekatlokal.com</loc>
    <lastmod>2026-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Jika menggunakan Next.js App Router, bisa buat:

```text
app/sitemap.ts
app/robots.ts
```

---

## 11.4 JSON-LD Structured Data

Tambahkan JSON-LD untuk LocalBusiness, Product, dan FAQPage.

### LocalBusiness JSON-LD Direction

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gingerfit+",
  "description": "Gingerfit+ adalah minuman kesehatan berbahan dasar jahe pilihan yang diformulasikan untuk mendukung gaya hidup sehat.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Dirgantara 4 Blok E, Mangalli",
    "addressLocality": "Gowa",
    "addressRegion": "Sulawesi Selatan",
    "addressCountry": "ID"
  },
  "url": "https://gingerfitplus.dekatlokal.com",
  "telephone": "+6285298354853",
  "openingHours": "Mo-Su 08:00-20:00"
}
```

### Product JSON-LD Direction

Buat structured data untuk 6 varian produk.

```text
Product name
Description
Offer price
Currency IDR
Availability
Brand Gingerfit+
```

### FAQ JSON-LD Direction

Gunakan FAQ items dari FAQ section.

---

# 12. Accessibility Requirements

### General

```text
Semua image harus punya alt text.
Button harus bisa difokuskan via keyboard.
Modal legalitas dan lightbox harus bisa ditutup dengan Escape.
Kontras warna harus aman.
Jangan hanya mengandalkan warna untuk informasi penting.
```

### Minimum Font Size

```text
Body mobile: 14px minimum
Body desktop: 16px minimum
Button: 14px minimum
Caption: 12px minimum
```

### Image Alt Examples

```text
logo-ginger:
Logo Gingerfit+

product-immunity-booster:
Botol Gingerfit+ varian Immunity Booster

nib-ginger:
Dokumen Nomor Induk Berusaha Gingerfit+

hki-ginger:
Dokumen Hak Cipta Gingerfit+

testimoni-1:
Dokumentasi pelanggan Gingerfit+ 1
```

---

# 13. Suggested Component Architecture

Jika menggunakan Next.js App Router:

```text
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts

components/
  Navbar.tsx
  HeroSection.tsx
  PartnerSection.tsx
  AboutSection.tsx
  LegalSection.tsx
  ProductSection.tsx
  TestimonialSection.tsx
  DocumentationSection.tsx
  LocationSection.tsx
  FAQSection.tsx
  CTASection.tsx
  Footer.tsx
  FloatingWhatsApp.tsx
  LegalModal.tsx
  ImageLightbox.tsx

data/
  products.ts
  testimonials.ts
  faq.ts
  site.ts

lib/
  whatsapp.ts
  seo.ts
```

---

## 13.1 Data Structure Example

### products.ts

```ts
export const products = [
  {
    name: "Immunity Aid",
    descriptor: "Organic Ginger & Extra Honey",
    combination: "Organic Ginger + Extra Honey",
    price: 10000,
    size: "80 mL",
    image: "/images/products/product-immunity-aid.png",
    color: "#E8AD22",
    bgColor: "#FFF6D8",
    description:
      "Perpaduan rasa tajam khas jahe organik dengan kelembutan manis dari madu ekstra.",
  },
  {
    name: "Immunity Booster",
    descriptor: "Organic Ginger & Turmeric Shot",
    combination: "Organic Ginger + Turmeric Shot",
    price: 10000,
    size: "80 mL",
    image: "/images/products/product-immunity-booster.png",
    color: "#00A651",
    bgColor: "#F0FFF5",
    description:
      "Kombinasi tradisional antara jahe dan kunyit yang diproses secara modern.",
  },
  {
    name: "Vitamin A Booster",
    descriptor: "Organic Ginger & Carrot Shot",
    combination: "Organic Ginger + Carrot Shot",
    price: 10000,
    size: "80 mL",
    image: "/images/products/product-vitamin-a-booster.png",
    color: "#20B9D6",
    bgColor: "#EAFBFF",
    description:
      "Perpaduan rasa manis alami dari wortel murni dan kehangatan jahe.",
  },
  {
    name: "Vitamin C Booster",
    descriptor: "Organic Ginger & Lemon Shot",
    combination: "Organic Ginger + Lemon Shot",
    price: 10000,
    size: "80 mL",
    image: "/images/products/product-vitamin-c-booster.png",
    color: "#FF641F",
    bgColor: "#FFF0E8",
    description:
      "Kombinasi segar yang memadukan rasa asam alami dari perasan lemon dengan kehangatan jahe.",
  },
  {
    name: "Running Booster",
    descriptor: "Organic Ginger & Pineapple Extract",
    combination: "Organic Ginger + Pineapple Extract",
    price: 10000,
    size: "80 mL",
    image: "/images/products/product-running-booster.png",
    color: "#14DDB0",
    highlightColor: "#DDF44A",
    bgColor: "#E9FFF8",
    description:
      "Diformulasikan dengan ekstrak nanas alami yang memberikan sentuhan rasa manis-asam tropis.",
  },
  {
    name: "Energy Booster",
    descriptor: "Organic Ginger & Caffeine Shot",
    combination: "Organic Ginger + Caffeine Shot",
    price: 10000,
    size: "80 mL",
    image: "/images/products/product-energy-booster.png",
    color: "#111111",
    accentColor: "#FF5A3C",
    bgColor: "#F7F7F7",
    description:
      "Memadukan karakteristik jahe yang hangat dengan tambahan caffeine shot.",
  },
];
```

---

## 13.2 WhatsApp Helper Example

```ts
const ADMIN_WA = "6285298354853";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;
}

export function createProductMessage(productName: string, size = "80 mL") {
  return `Halo Admin Gingerfit+, saya ingin order produk ${productName} ukuran ${size}. Mohon info ketersediaan dan cara pemesanannya.

Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.`;
}

export function createGeneralMessage() {
  return `Halo Admin Gingerfit+, saya tertarik dengan produk Gingerfit+. Mohon info varian, harga, dan cara pemesanannya.

Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.`;
}
```

---

# 14. Responsive Design Requirements

## Desktop

```text
Hero boleh 2-column layout.
Product image besar dan dominan.
Product cards bisa 3-column grid.
Documentation bisa masonry.
Footer multi-column.
```

## Tablet

```text
Hero bisa tetap 2-column atau stacked.
Product cards 2-column.
Spacing disesuaikan.
```

## Mobile

```text
Hero harus stacked.
Headline tetap readable.
CTA harus muncul cepat.
Product cards 1-column.
Floating ingredients dikurangi.
Navbar mobile menggunakan hamburger.
Footer stacked.
Floating WA tidak boleh menutup CTA utama.
```

---

# 15. Performance Requirements

```text
Gunakan next/image untuk semua gambar.
Gunakan width/height pada image.
Lazy load gallery/testimonial image.
Optimasi asset sebelum upload.
Minimize layout shift.
Gunakan semantic HTML.
Hindari animation yang terlalu berat.
```

### Image Optimization Notes

```text
Product images:
Gunakan PNG/WebP dengan background sesuai kebutuhan.

Logo:
Gunakan SVG jika tersedia.
Jika PNG, pastikan transparent background.

Gallery:
Gunakan WebP/JPG compressed.
```

---

# 16. Content Tone

Tone website:

```text
Friendly
Fresh
Professional
Tidak terlalu formal
Tidak terlalu slang
Meyakinkan
Conversion-oriented
```

### Jangan gunakan emoji

Requirement:

```text
Tidak menggunakan emoji pada website.
Gunakan icon modern dari icon library.
```

---

# 17. Acceptance Criteria

Website dianggap selesai jika memenuhi checklist berikut:

## Technical

```text
Next.js berjalan tanpa error.
Tailwind CSS aktif.
AOS scroll animation aktif.
Responsive mobile/tablet/desktop.
Tidak ada broken image.
Tidak ada broken link.
robots.txt tersedia.
sitemap.xml tersedia.
Metadata SEO tersedia.
Favicon menggunakan logo-ginger.
```

## UI/UX

```text
Visual mengikuti DNA Gingerfit+.
Hero modern dan menarik.
Navbar kiri hanya logo Ginger tanpa teks.
Semua section tampil rapi.
Footer modern dan clean.
Floating WhatsApp button tampil di kanan bawah.
Icon modern, bukan emoji.
Hover interaction tersedia.
```

## Content

```text
Section Mitra ada dengan logo DekatLokal dan EdukasiLokal.
About section sesuai profil usaha.
Legalitas section menampilkan NIB dan HKI.
Product section menampilkan 6 produk.
Testimoni tulisan tersedia.
Testimoni image 5 dokumentasi tersedia.
Lokasi dan maps tersedia.
FAQ tersedia.
CTA tersedia.
Footer bottom text sesuai requirement.
```

## WhatsApp

```text
Klik CTA umum direct ke WhatsApp admin.
Klik produk direct ke WhatsApp dengan pesan produk.
Semua pesan WhatsApp punya watermark:
"Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal."
```

## Footer

```text
Footer bottom center:
© 2026 Gingerfit+. All rights reserved | Powered by DekatLokal

Text DekatLokal beda warna.
Text DekatLokal clickable.
Link buka tab baru ke:
https://www.dekatlokal.com
```

---

# 18. Final Implementation Instruction for AI Agent / Developer

Bangun website **Gingerfit+** sebagai landing page statis berbasis **Next.js + Tailwind CSS** dengan animasi **AOS scroll**.  
Website harus responsive, modern, SEO-friendly, memiliki `robots.txt`, `sitemap.xml`, favicon `logo-ginger`, dan menggunakan domain production:

```text
https://gingerfitplus.dekatlokal.com
```

Website harus memiliki semua section berikut:

```text
Navbar
Hero
Mitra
About
Legalitas
Produk
Testimoni tulisan
Testimoni dokumentasi image
Lokasi + Maps
FAQ
CTA
Footer
Floating WhatsApp Button
```

Seluruh CTA utama diarahkan ke WhatsApp admin:

```text
6285298354853
```

Klik produk harus membuka WhatsApp dengan pesan otomatis sesuai produk dan wajib menyertakan watermark:

```text
Pesan ini dikirim melalui website Gingerfit+ bersama DekatLokal.
```

Desain harus mengikuti guideline Gingerfit+ yang fresh, clean, healthy, energetic, playful, modern, dan product-focused. Gunakan font rounded modern seperti **Poppins**, icon modern dari **lucide-react**, animasi hover yang subtle, dan hindari penggunaan emoji.

Prioritaskan hasil akhir yang:

```text
Cepat
Responsive
SEO-friendly
Modern
Trustworthy
Mudah order via WhatsApp
Konsisten dengan visual Gingerfit+
```
