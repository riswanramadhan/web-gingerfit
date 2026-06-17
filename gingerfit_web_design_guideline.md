# Gingerfit+ Website Design Guideline

Dokumen ini digunakan sebagai guideline warna, visual direction, dan UI/UX design system awal untuk pengembangan website **Gingerfit+**.

---

## 1. Core Design Direction

Website Gingerfit+ harus membawa karakter visual:

**fresh, clean, healthy, energetic, playful, dan product-focused.**

Website tidak boleh terasa terlalu medis, terlalu formal, atau terlalu kaku. Gingerfit+ lebih cocok diposisikan sebagai brand minuman sehat yang modern, fun, segar, dan mudah diterima oleh anak muda, pekerja aktif, serta customer yang peduli kesehatan harian.

### Keyword desain utama

```text
Fresh Booster
Natural Energy
Clean Health
Playful Premium
```

Secara visual, website Gingerfit+ harus terasa seperti kombinasi antara:

- Brand minuman sehat modern
- Katalog produk premium
- Visual fresh ala juice/shot drink
- Campaign energetic yang cocok untuk Instagram dan website UMKM

---

## 2. Brand Color Foundation

### Primary Brand Colors

| Color Name | Fungsi | HEX |
|---|---|---|
| Fresh Green | Warna sehat, natural, immunity, CTA utama | `#00A651` |
| Ginger Yellow | Warna jahe, madu, energi natural | `#F5B51B` |
| Sky Fresh Blue | Background fresh, clean, hydration feel | `#28BDEB` |
| Cream White | Background utama website | `#FFF9EF` |
| Deep Black | Teks utama dan kontras premium | `#111111` |
| Soft Gray | Teks sekunder, border, background ringan | `#E9E4DA` |
| Pure White | Card, content area, negative space | `#FFFFFF` |

### General Color Usage

```text
Background utama website:
#FFF9EF / #FFFFFF

Text utama:
#111111

CTA utama:
#00A651 atau warna sesuai varian produk

Section highlight:
Cream to Sky Blue gradient
Cream to Yellow gradient
Cream to Variant Color gradient
```

### Rule penting

Gunakan maksimal **2 warna dominan dalam satu section** agar desain tetap bersih dan tidak terlalu ramai.

---

## 3. Product Variant Color System

Setiap varian Gingerfit+ harus memiliki warna identitas sendiri. Tujuannya agar user dapat mengenali produk hanya dari warna.

| Produk | Warna Utama | HEX | Warna Pendukung | Kesan Visual |
|---|---|---|---|---|
| Immunity Booster | Green | `#00A651` | `#DFF7E8` | sehat, kuat, natural |
| Immunity Aid | Honey Gold | `#E8AD22` | `#FFF1C7` | hangat, manis, comforting |
| Running Booster | Mint Turquoise | `#14DDB0` | `#D7FFF4`, `#DDF44A` | sporty, segar, aktif |
| Vitamin A Booster | Cyan Blue | `#20B9D6` | `#DDF7FF` | fresh, clean, ringan |
| Vitamin C Booster | Orange | `#FF641F` | `#FFE1D1` | citrus, cerah, semangat |
| Energy Booster | Black | `#111111` | `#FF5A3C` | bold, kuat, energy shot |

---

## 4. Website Color Usage Rules

### A. Homepage

Homepage sebaiknya menggunakan warna yang lebih netral, fresh, dan brand-wide.

#### Rekomendasi

```text
Hero background:
Soft sky blue / cream gradient

Headline:
Deep black atau white, tergantung background

CTA utama:
Fresh Green

Product visual:
Full color, product-focused

Decorative elements:
Ginger, lemon, leaves, ice, fruit slices, juice splash
```

Homepage tidak perlu terlalu dominan ke satu varian produk, kecuali sedang ada campaign khusus.

---

### B. Product Section

Setiap product card harus menggunakan warna varian masing-masing sebagai accent.

#### Example usage

```text
Immunity Booster:
Accent: #00A651
Background card: #F0FFF5

Immunity Aid:
Accent: #E8AD22
Background card: #FFF6D8

Running Booster:
Accent: #14DDB0
Background card: #E9FFF8

Vitamin A Booster:
Accent: #20B9D6
Background card: #EAFBFF

Vitamin C Booster:
Accent: #FF641F
Background card: #FFF0E8

Energy Booster:
Accent: #111111
Secondary accent: #FF5A3C
Background card: #F7F7F7
```

---

## 5. UI Component Guideline

## 5.1 Button

### Primary Button

Digunakan untuk CTA utama seperti:

- Order Sekarang
- Chat WhatsApp
- Lihat Produk
- Coba Booster Kamu

```css
.btn-primary {
  background: #00A651;
  color: #FFFFFF;
  border-radius: 999px;
  font-weight: 700;
  padding: 14px 24px;
  border: none;
}
```

### Variant Button

Untuk halaman detail produk, warna button mengikuti warna varian.

```css
.btn-immunity-booster {
  background: #00A651;
  color: #FFFFFF;
}

.btn-immunity-aid {
  background: #E8AD22;
  color: #FFFFFF;
}

.btn-running-booster {
  background: #14DDB0;
  color: #111111;
}

.btn-vitamin-a {
  background: #20B9D6;
  color: #FFFFFF;
}

.btn-vitamin-c {
  background: #FF641F;
  color: #FFFFFF;
}

.btn-energy-booster {
  background: #111111;
  color: #FFFFFF;
}
```

### Button Style Direction

```text
Shape:
Rounded pill

Feel:
Bold, friendly, clickable

Text:
Singkat, jelas, action-oriented
```

---

## 5.2 Product Card

Product card harus terlihat bersih, fresh, dan premium.

### Struktur Product Card

```text
[Product Image]
[Variant Badge]
[Product Name]
[Short Description]
[Price / CTA]
```

### CSS Direction

```css
.product-card {
  background: #FFFFFF;
  border-radius: 28px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
  padding: 24px;
  overflow: hidden;
}
```

### Product Card Rules

```text
Product image:
Besar, jelas, dominan

Text:
Ringkas dan mudah dibaca

Accent color:
Mengikuti warna varian

Background:
Putih / cream / soft variant background

Shadow:
Soft, tidak terlalu tebal
```

---

## 5.3 Badge / Label

Badge digunakan untuk menandai varian produk.

```css
.variant-badge {
  color: #FFFFFF;
  font-weight: 800;
  border-radius: 999px;
  padding: 8px 16px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
}
```

### Running Booster Highlight

Running Booster boleh menggunakan highlight dual color karena secara visual punya kesan sporty dan energetic.

```css
.running-highlight {
  background: linear-gradient(90deg, #14DDB0, #DDF44A);
  color: #111111;
}
```

---

## 6. Typography Direction

Gingerfit+ memakai karakter tipografi yang:

```text
Bold
Rounded
Friendly
Modern
Playful
Readable
```

### Recommended Web Fonts

Gunakan font sans-serif modern dengan bentuk tebal dan rounded.

| Use Case | Recommended Font |
|---|---|
| Headline | Poppins, Montserrat, Plus Jakarta Sans |
| Subheadline | Poppins, Nunito Sans, Plus Jakarta Sans |
| Body Text | Inter, Plus Jakarta Sans, Nunito Sans |
| CTA/Button | Poppins, Montserrat, Plus Jakarta Sans |

### Font Hierarchy

```text
Headline besar:
Bold / ExtraBold / Black

Subheadline:
SemiBold / Bold

Body:
Regular / Medium

CTA:
Bold, short, direct
```

### CSS Direction

```css
h1 {
  font-size: clamp(44px, 7vw, 88px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
}

h2 {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

p {
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
}

.button-text {
  font-size: 15px;
  font-weight: 700;
}
```

---

## 7. Visual Asset Direction

Website Gingerfit+ harus mengutamakan visual produk sebagai pusat perhatian.

### Elemen Visual yang Boleh Digunakan

```text
Product bottle
Ginger slice
Ginger root
Lemon
Carrot
Pineapple
Honey
Coffee beans
Green leaves
Ice cubes
Drink splash
Soft gradient background
Paper tear effect
Floating ingredients
Soft realistic shadow
```

### Style Image Direction

```text
Bright lighting
High contrast product
Soft realistic shadow
Fresh ingredient surrounding
Minimal but dynamic
Clean product composition
```

### Jangan Digunakan

```text
Background terlalu gelap untuk semua section
Visual terlalu medis / hospital look
Terlalu banyak elemen sampai produk kalah fokus
Warna neon berlebihan
Font formal kaku seperti Times New Roman
Terlalu banyak teks dalam satu poster/card
```

---

## 8. Section-by-Section Website Direction

## 8.1 Hero Section

Tujuan hero section adalah langsung membuat user merasa produk ini:

```text
Segar
Sehat
Energetic
Mudah dipesan
Menarik secara visual
```

### Recommended Layout

```text
Left:
Headline besar
Subheadline pendek
CTA utama
CTA sekunder opsional

Right:
Product bottle / product group
Floating ingredients
Splash / fresh visual elements
```

### Hero Color Direction

```text
Background:
Soft sky blue to cream gradient

Headline:
Deep black / white depending on contrast

CTA:
Fresh green or campaign color

Visual:
Product bottles full color
```

### Example Headline

```text
Your Daily Booster,
Fresh in Every Shot.
```

### Example Indonesian Headline

```text
Segarnya Bikin Nagih,
Boosternya Bikin Semangat.
```

---

## 8.2 Product Catalog Section

Gunakan grid produk yang rapi dan mudah dipahami.

### Layout Direction

```text
Desktop:
3-column grid atau 2-column feature grid

Tablet:
2-column grid

Mobile:
1-column stacked cards
```

### Product Accent Mapping

```text
Immunity Booster → Green
Immunity Aid → Gold
Running Booster → Mint
Vitamin A Booster → Cyan
Vitamin C Booster → Orange
Energy Booster → Black
```

### Catalog Rules

```text
Jangan semua card dibuat hijau.
Setiap produk harus membawa warna variannya.
Product image harus lebih dominan dari teks.
CTA harus mudah ditemukan.
```

---

## 8.3 Product Detail Page

Setiap halaman detail produk bisa memakai sistem warna khusus sesuai varian.

### Example: Vitamin C Booster Page

```text
Hero background:
Cream-orange gradient

Title badge:
Orange

Ingredient visual:
Lemon + ginger

CTA:
Orange

Benefit icon:
Orange outline
```

### Example: Energy Booster Page

```text
Hero background:
Cream + black accent

Title badge:
Black

Highlight word:
Caffein Shot in orange-red

Ingredient visual:
Ginger + coffee beans

CTA:
Black / orange-red
```

---

## 8.4 About Section

About section harus terasa natural dan trustworthy.

### Direction

```text
Background:
Cream / white

Visual:
UMKM owner, production process, fresh ingredients

Tone:
Personal, clean, warm

Accent:
Green / Ginger Yellow
```

---

## 8.5 CTA Section

CTA section harus jelas dan conversion-oriented.

### Recommended CTA Text

```text
Siap coba booster harianmu?
```

```text
Pilih varian favoritmu dan order sekarang.
```

### CTA Color

```text
Default:
Fresh Green #00A651

Campaign:
Variant color
```

---

## 9. Layout & Spacing

Gingerfit+ harus terasa lega, clean, dan tidak sumpek.

### Spacing Guidelines

```text
Section padding desktop:
80px - 120px

Section padding tablet:
64px - 96px

Section padding mobile:
48px - 72px

Card padding:
24px - 32px

Button padding:
14px - 24px

Border radius:
20px - 32px

Button radius:
999px / pill shape
```

### Layout Principle

```text
1 section = 1 fokus utama
1 product card = 1 warna dominan
1 CTA utama = jelas dan mudah diklik
```

---

## 10. Recommended CSS Color Tokens

Gunakan color tokens berikut agar development website lebih konsisten.

```css
:root {
  /* Core Brand */
  --color-brand-green: #00A651;
  --color-ginger-yellow: #F5B51B;
  --color-sky-blue: #28BDEB;
  --color-cream: #FFF9EF;
  --color-black: #111111;
  --color-soft-gray: #E9E4DA;
  --color-white: #FFFFFF;

  /* Product Variants */
  --color-immunity-booster: #00A651;
  --color-immunity-aid: #E8AD22;
  --color-running-booster: #14DDB0;
  --color-running-highlight: #DDF44A;
  --color-vitamin-a: #20B9D6;
  --color-vitamin-c: #FF641F;
  --color-energy-booster: #111111;
  --color-energy-accent: #FF5A3C;

  /* Soft Backgrounds */
  --bg-immunity-booster: #F0FFF5;
  --bg-immunity-aid: #FFF6D8;
  --bg-running-booster: #E9FFF8;
  --bg-vitamin-a: #EAFBFF;
  --bg-vitamin-c: #FFF0E8;
  --bg-energy-booster: #F7F7F7;
}
```

---

## 11. Tailwind CSS Color Extension

Jika website menggunakan Tailwind CSS, warna dapat dimasukkan ke `tailwind.config.js`.

```js
theme: {
  extend: {
    colors: {
      gingerfit: {
        green: '#00A651',
        yellow: '#F5B51B',
        sky: '#28BDEB',
        cream: '#FFF9EF',
        black: '#111111',
        gray: '#E9E4DA',
      },
      product: {
        immunityBooster: '#00A651',
        immunityAid: '#E8AD22',
        runningBooster: '#14DDB0',
        runningHighlight: '#DDF44A',
        vitaminA: '#20B9D6',
        vitaminC: '#FF641F',
        energyBooster: '#111111',
        energyAccent: '#FF5A3C',
      },
      productBg: {
        immunityBooster: '#F0FFF5',
        immunityAid: '#FFF6D8',
        runningBooster: '#E9FFF8',
        vitaminA: '#EAFBFF',
        vitaminC: '#FFF0E8',
        energyBooster: '#F7F7F7',
      }
    }
  }
}
```

---

## 12. UI/UX Designer Notes

### Design must feel

```text
Fresh, not medical
Fun, not childish
Premium, not expensive-looking in a cold way
Healthy, not boring
Energetic, not crowded
```

### Product Visual Priority

```text
1. Product bottle
2. Variant color
3. Ingredient visual
4. Headline / product name
5. CTA
```

### Visual Formula

```text
Clean Background
+ Big Product Image
+ Variant Color Accent
+ Fresh Ingredient Visual
+ Bold Rounded Typography
+ Clear CTA
```

---

## 13. Accessibility Guideline

### Contrast

Pastikan kontras text cukup jelas.

```text
Black text on cream:
Good

White text on green/orange/black:
Good

White text on yellow/gold:
Use carefully; ensure gold is dark enough

Text on image:
Use overlay or solid background
```

### CTA Accessibility

```text
CTA button harus terlihat jelas.
Jangan hanya mengandalkan warna untuk membedakan button.
Gunakan label teks yang jelas.
Hover/focus state harus tersedia.
```

### Minimum Font Size

```text
Body mobile:
Minimum 14px

Body desktop:
16px - 18px

Button:
Minimum 14px

Caption:
Minimum 12px
```

---

## 14. Responsive Design Notes

### Desktop

```text
Gunakan layout dua kolom untuk hero.
Product image boleh besar dan dominan.
Floating ingredients boleh lebih ekspresif.
```

### Mobile

```text
Headline harus tetap terbaca.
Product image tidak boleh terlalu kecil.
CTA harus muncul sebelum user scroll terlalu jauh.
Floating elements harus dikurangi agar tidak ramai.
Product card dibuat stacked.
```

### Mobile Product Card

```text
Image:
Top area

Badge:
Di bawah image / overlay ringan

Text:
Ringkas

CTA:
Full width button
```

---

## 15. Final Design Principle

Website Gingerfit+ harus mengutamakan **produk sebagai pusat perhatian**.

Warna boleh playful, tetapi harus tetap rapi. Elemen buah, rempah, dan splash boleh dinamis, tetapi jangan sampai mengalahkan produk. Setiap varian harus memiliki identitas warna yang konsisten agar user mudah mengingat.

### Final Formula

```text
Clean Background
+ Big Product Image
+ Variant Color Accent
+ Fresh Ingredient Visual
+ Bold Rounded Typography
+ Clear CTA
= Gingerfit+ Website Visual DNA
```

Dengan guideline ini, website Gingerfit+ akan terasa konsisten dengan poster dan identitas visual yang sudah dibuat: **fresh, fun, healthy, modern, dan siap dipakai untuk brand UMKM yang terlihat lebih profesional.**
