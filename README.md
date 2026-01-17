# 🍽️ DineTime - MERN Stack Restaurant Reservation System

DineTime is a full-stack restaurant website built using the MERN stack (MongoDB, Express, React, Node.js).
It allows users to explore the restaurant, view the menu, and make real table reservations that are saved to a live MongoDB Atlas database.

This project was built with a modern responsive UI and a fully functional backend.

## 🚀 Features

- Modern, responsive restaurant landing page
- Fully working reservation system
- MongoDB Atlas integration for storing reservations
- Success page with automatic redirect
- REST API using Express & Mongoose
- Mobile-friendly hamburger menu
- “Our Menu” button opens a PDF menu
- Input validation & backend error handling
- Component-based React architecture

## 🧩 Tech Stack

### Frontend

- React (Vite + JavaScript + SWC)
- React Router DOM
- Axios
- React Icons
- React Scroll
- Hot Toast
- Custom CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Validator
- dotenv
- CORS

## 🗂️ Project Structure



```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   ├── Qualities.jsx
│   │   ├── Reservation.jsx
│   │   ├── Team.jsx
│   │   └── WhoAreWe.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Success.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── restApi.json
└── package.json
```

### Backend

```
backend/
├── config/
│   └── config.env
├── controller/
│   └── reservation.js
├── database/
│   └── dbConnection.js
├── error/
│   └── error.js
├── models/
│   └── reservationSchema.js
├── routes/
│   └── reservationRoute.js
├── app.js
├── server.js
└── package.json
```

## 📸 Screenshots



## 🔌 API

### Save Reservation

POST ``` /api/v1/reservation/send ```

### Request Body

```
{
  "firstName": "Tanmoy",
  "lastName": "Santra",
  "email": "tanmoy@gmail.com",
  "phone": "9876543210",
  "date": "2026-01-20",
  "time": "18:30"
}
```

All reservations are saved in MongoDB Atlas:

``` Cluster → RESTAURANT → reservations ```

## 🧪 Database

The backend uses MongoDB Atlas to store:
- First Name
- Last Name
- Email
- Phone
- Date
- Time
Every reservation submitted from the frontend is permanently stored and can be viewed from MongoDB Atlas.

## ⚙️ Installation & Setup

### 1. Clone the repository
```
git clone https://github.com/TanmoySantra28/dinetime-mern.git
cd dinetime
```
### 2. Backend Setup
```
cd backend
npm install
```
Create config/config.env:
```
PORT=4000
MONGO_URI=your_mongodb_connection_string
```
Start the backend:
```
npm run dev
```
### 3. Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend runs at:
```
http://localhost:5173
 ```
Backend runs at:
```
http://localhost:4000
```

## 📱 Responsive Design

- Fully responsive layout
- Hamburger menu for mobile
- Optimized for desktop, tablet & phone screens

## 👨‍💻 Developed By

Tanmoy

## 📝 License

This project is licensed under MIT License.


