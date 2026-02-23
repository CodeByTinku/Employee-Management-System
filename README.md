# 🏢 Employee Management System

A modern and efficient **Employee Management Dashboard** built with **React** and **Vite**. Secured with **Clerk Authentication** for protected access. 🚀

---

## ✨ Key Features

- **� Authentication**: Secure Sign In / Sign Up powered by **Clerk**
- **�👨‍💼 Employee CRUD**: Add, edit, view, and delete employee records easily
- **⚡ State Management**: Powered by **Redux Toolkit** for predictable state updates
- **🎨 Modern UI**: Styled with **Tailwind CSS** & **DaisyUI** for a sleek, responsive design
- **🖼️ Interactive Modals**: Smooth popups for data entry and confirmations
- **👤 User Profile**: Navbar mein profile avatar with sign-out option

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React 19 | UI Library |
| ⚡ Vite | Build Tool |
| 🔐 Clerk | Authentication |
| 🔄 Redux Toolkit | State Management |
| 🌬️ Tailwind CSS | Styling |
| � DaisyUI | UI Components |
| � React Icons | Icons |

---

## 🔐 Authentication (Clerk)

This project uses **[Clerk](https://clerk.com)** for authentication.

- Users must **Sign In / Sign Up** before accessing the dashboard
- Protected routes — bina login ke dashboard nahi dikhega
- Profile management & Sign Out via navbar avatar

### How it works:
```
Not Logged In  →  Beautiful Login/Signup Page
Logged In      →  Full Employee Dashboard ✅
```

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/CodeByTinku/Employee-Management-System.git
cd Employee-Management-System
npm install
```

### 2. Setup Environment Variables
Create a `.env` file in the root directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

> 🔑 Get your key from [Clerk Dashboard](https://dashboard.clerk.com) → Your Project → API Keys

### 3. Run Dev Server
```bash
npm run dev
```

### 4. Open App
Visit `http://localhost:5173` to manage your team! 🎉

---

## ☁️ Deploying to Vercel

Since `.env` is not pushed to GitHub, add environment variables manually in Vercel:

1. Go to **Vercel Dashboard** → Your Project → **Settings**
2. Click **Environment Variables**
3. Add:
   - **Key:** `VITE_CLERK_PUBLISHABLE_KEY`
   - **Value:** your Clerk publishable key
4. Click **Save** and **Redeploy**

> ⚠️ `.env` file should **NEVER** be pushed to GitHub — it contains secret keys!

---

## 🤝 Contributing

Got a cool idea or found a pesky bug? We'd love your help! 💙

- **🐛 Found a Bug?** Open an issue to report it
- **💡 New Feature?** Propose your ideas in the issues
- **👩‍💻 Want to Code?** Fork the repo, fix it, and drop a PR!

Let's build something awesome together! 🚀
