# 🏋️‍♂️ Sport Hive - Sports Equipment Management Web Application

Sport Hive একটি সহজ এবং ব্যবহার-বান্ধব ওয়েব অ্যাপ্লিকেশন, যেখানে ইউজাররা স্পোর্টস ইকুইপমেন্ট যুক্ত, আপডেট, ডিলিট এবং দেখার সুবিধা পায়। এটি React এবং Express.js দিয়ে তৈরি করা হয়েছে এবং ইউজার অথেনটিকেশন সিস্টেম সংযুক্ত রয়েছে।

## 🔗 Live Link
👉 [Live Site](http://localhost:5173/) (Development Mode)

---

## ✨ Features

- 🔐 User Registration & Login (with validation)
- 📦 Add, View, Update & Delete Equipment
- 👤 My Equipment List (shows only logged-in user's items)
- 🧭 Protected Routes
- ✅ Success message after login/register
- ❌ 404 Not Found page
- 🎨 TailwindCSS & DaisyUI for beautiful UI

---

## 🔧 Tech Stack

### Frontend
- React
- React Router
- TailwindCSS
- DaisyUI

### Backend
- Node.js
- Express.js
- MongoDB (optional depending on DB setup)

---

## 📁 Project Structure

sport-hive/ │ ├── client/ # React frontend │ ├── src/ │ │ ├── components/ # Reusable UI components │ │ ├── pages/ # Page-level components (Home, MyEquipmentList, etc.) │ │ ├── routes/Routes.jsx # React Router setup │ │ ├── provider/AuthProvider.jsx │ │ └── App.jsx │ └── index.html │ ├── server/ # Express backend (if separated) │ ├── routes/products.js │ ├── controllers/ │ └── server.js │ └── README.md

## 🧑‍💻 Author
Zabir Arkam Akhond