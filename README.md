# Frontend React Application

Aplikasi frontend menggunakan React dan Vite yang diintegrasikan dengan Backend Express API. Aplikasi ini memiliki fitur autentikasi dan manajemen user dengan tampilan modern menggunakan Bootstrap.

## Fitur

- Autentikasi (Login & Register)
- Protected Routes dengan Auth Context
- Dashboard Admin
- Manajemen User (CRUD)
- Responsive Design dengan Bootstrap
- State Management menggunakan React Context
- HTTP Client dengan Axios

## Struktur Direktori

```
frontend-react/
├── src/
│   ├── assets/            # Assets statis (gambar, icons)
│   ├── components/        # Komponen yang dapat digunakan kembali
│   │   └── SidebarMenu.jsx
│   ├── context/          # React Context untuk state management
│   │   └── AuthContext.jsx
│   ├── routes/           # Konfigurasi routing
│   │   └── index.jsx
│   ├── services/         # Service untuk API calls
│   │   └── api.js
│   ├── views/            # Komponen halaman
│   │   ├── admin/        # Halaman admin
│   │   │   ├── dashboard/
│   │   │   └── users/
│   │   ├── auth/         # Halaman autentikasi
│   │   └── home/         # Halaman utama
│   ├── App.jsx           # Root component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Teknologi yang Digunakan

- React.js
- Vite (Build tool)
- React Router DOM
- Bootstrap 5
- Axios
- JS-Cookie
- React Icons

## Instalasi

1. Clone repository ini
2. Masuk ke folder `frontend-react`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Setup environment variables:

   - Copy `.env.example` ke `.env`
   - Sesuaikan `VITE_API_URL` dengan URL backend API

5. Jalankan aplikasi dalam mode development:
   ```bash
   npm run dev
   ```

## Script yang Tersedia

- `npm run dev` - Menjalankan aplikasi dalam mode development
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production secara lokal

## Fitur Halaman

1. **Autentikasi**

   - Login
   - Register
   - Protected Routes

2. **Dashboard Admin**
   - Overview statistik
   - Menu navigasi
3. **Manajemen User**
   - List Users
   - Create User
   - Edit User
   - Delete User

## Penggunaan Context

Aplikasi menggunakan AuthContext untuk manajemen state autentikasi:

```javascript
import { useAuth } from "../context/AuthContext";

const { isAuthenticated, setIsAuthenticated } = useAuth();
```

## API Integration

Menggunakan Axios untuk integrasi dengan backend:

```javascript
import api from "../services/api";

// Contoh penggunaan
const response = await api.get("/users");
```

## Lisensi

Proyek ini bebas digunakan untuk pembelajaran.
