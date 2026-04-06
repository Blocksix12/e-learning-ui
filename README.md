# E Learning UI (Next.js)

[Tiếng Việt](#tiếng-việt) • [English](#english)

---

## Tiếng Việt

UI dự án E-Learning xây dựng với **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**, tập trung vào cấu trúc sạch (clean architecture), tái sử dụng component, responsive mobile-first và giữ thiết kế sát bản gốc.

### Tính năng

- Next.js 14+ **App Router**
- **Tailwind CSS** (ưu tiên utility classes; tránh inline styles cho layout/spacing)
- Component tái sử dụng: `Button`, `Card`, `Container`
- Tách lớp rõ ràng:
  - `components/layout`: khung layout (Sidebar/Topbar/BottomNav/FAB)
  - `components/sections`: các section theo màn hình
  - `components/ui`: UI primitives
  - `lib`: helper + data tĩnh
- `next/image` cho hình ảnh (tối ưu hoá, khai báo `sizes`)
- `next/link` cho điều hướng
- Responsive **mobile-first**
- **Loading skeleton** qua `app/loading.tsx`
- Animation cơ bản: hover/transition/active (CSS-only, tránh client components không cần thiết)
- Semantic HTML: `header`, `aside`, `nav`, `main`, `section`, `ul/li`

### Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- `next/image`, `next/link`

### Cấu trúc thư mục (gợi ý)

```text
app/
  layout.tsx
  page.tsx
  loading.tsx
  globals.css
components/
  layout/
  sections/
  ui/
lib/
public/
  images/
tailwind.config.ts
postcss.config.mjs
next.config.mjs
```

### Yêu cầu môi trường

- Node.js >= 18.17 (khuyến nghị Node 20+)
- npm / pnpm / yarn

### Cài đặt & chạy local

```bash
npm install
npm run dev
```

Mở: http://localhost:3000

### Build production

```bash
npm run build
npm run start
```

### Scripts thường dùng

- `npm run dev`: chạy môi trường development
- `npm run build`: build production
- `npm run start`: chạy server production sau khi build
- `npm run lint`: kiểm tra lint (nếu đã cấu hình)

### Hình ảnh (next/image)

Khuyến nghị đặt ảnh vào:

```text
public/images/
  avatar.jpg
  course-1.jpg
  course-2.jpg
  course-3.jpg
```

Sau đó dùng `next/image` với `fill` hoặc `width/height` + khai báo `sizes` để tối ưu responsive.

### Quy ước code

- Ưu tiên **Server Components** (mặc định trong App Router)
- Tránh dùng "use client" nếu không cần (giảm hydration mismatch)
- Data hiển thị có thể đặt trong `lib/data.ts` để UI tách khỏi dữ liệu
- Dùng `lib/cn.ts` để nối `className` gọn gàng

### Roadmap (tuỳ chọn)

- Thêm routing thật cho `/courses`, `/tasks`, `/profile`
- Thêm dark mode toggle + persist (localStorage/cookie)
- Tích hợp data từ API (Server Actions / fetch on server)
- Thêm tests (unit/e2e)

---

## English

An E-Learning UI built with **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**, focusing on clean structure, reusable components, mobile-first responsiveness, and staying close to the original design.

### Features

- Next.js 14+ **App Router**
- **Tailwind CSS** (utility-first; avoid inline styles for layout/spacing)
- Reusable UI primitives: `Button`, `Card`, `Container`
- Clear separation:
  - `components/layout`: app shell (Sidebar/Topbar/BottomNav/FAB)
  - `components/sections`: page sections
  - `components/ui`: UI primitives
  - `lib`: helpers + static data
- `next/image` for optimized images (with proper `sizes`)
- `next/link` for navigation
- Mobile-first responsive layout
- **Loading skeleton** via `app/loading.tsx`
- Basic animations: hover/transition/active (CSS-only; minimize client components)
- Semantic HTML: `header`, `aside`, `nav`, `main`, `section`, `ul/li`

### Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- `next/image`, `next/link`

### Suggested project structure

```text
app/
  layout.tsx
  page.tsx
  loading.tsx
  globals.css
components/
  layout/
  sections/
  ui/
lib/
public/
  images/
tailwind.config.ts
postcss.config.mjs
next.config.mjs
```

### Requirements

- Node.js >= 18.17 (Node 20+ recommended)
- npm / pnpm / yarn

### Install & run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

### Production build

```bash
npm run build
npm run start
```

### Common scripts

- `npm run dev`: start dev server
- `npm run build`: create production build
- `npm run start`: run production server
- `npm run lint`: lint (if configured)

### Images (next/image)

Recommended location:

```text
public/images/
  avatar.jpg
  course-1.jpg
  course-2.jpg
  course-3.jpg
```

Then use `next/image` with `fill` or `width/height` and define `sizes` for responsive optimization.

### Code conventions

- Prefer **Server Components** by default (App Router)
- Avoid "use client" unless necessary (reduces hydration mismatch)
- Keep display data in `lib/data.ts` to separate UI from data
- Use `lib/cn.ts` for clean `className` composition

---

## License

MIT
