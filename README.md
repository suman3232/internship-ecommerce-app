# 🛒 Internship eCommerce Application

This is a MERN stack eCommerce website built as part of my internship project. It includes essential features like authentication, product listings, cart management, and order processing.

---

## 🚀 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: PayPal Sandbox

---

## 📁 Folder Structure

```

mern-ecommerce-website/
├── client/         # React frontend
├── server/         # Express backend
└── README.md

````

---

## ✅ Features

- 🔐 User Authentication (Register/Login)
- 👤 Admin Panel (Manage Products & Orders)
- 🛍️ Product Listings with Details
- 🛒 Cart Functionality
- 💳 Payment Integration via PayPal
- 📦 Order Placement
- 📱 Fully Responsive UI

---

## 🛠️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/suman3232/internship-ecommerce-app.git
cd internship-ecommerce-app
````

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Add Environment Variables

Create a `.env` file in the `server` folder with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 5. Start the Backend Server

```bash
cd ../server
npm start
```

### 6. Start the Frontend App

```bash
cd ../client
npm start
```

---

## ⚙️ Optional: Seed Sample Data

If you want to add sample products or users:

```bash
cd server
node seeder.js
```

---

## 📝 Note

This project was submitted as part of my internship. Focus was given on functionality and clean structure. Some features (e.g., product reviews, full deployment) can be added in the future.

---

## 👨‍💻 Author

**Suman Patra**

* GitHub: [https://github.com/suman3232](https://github.com/suman3232)

