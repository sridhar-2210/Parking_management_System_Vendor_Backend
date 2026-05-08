# ⚙️ Parking Management System - Vendor Backend

The robust server-side engine designed to power the Vendor ecosystem of the Parking Management System. This API handles complex administrative tasks including lot configuration, dynamic pricing logic, and high-volume transaction processing.

---

## ✨ Core Features

- **Vendor Authentication & Authorization:** Secure JWT-based login with specific middleware to protect sensitive administrative routes.
- **Slot Allocation Logic:** Sophisticated algorithms to manage parking slot availability, ensuring no double-booking and optimal space utilization.
- **Revenue Management:** Automated calculation of parking fees based on entry/exit timestamps and vendor-defined pricing tiers.
- **Real-time Data Processing:** Efficient handling of incoming booking requests and instant updates to the parking lot state.
- **Comprehensive Reporting:** Endpoints designed to aggregate data for daily, weekly, and monthly revenue and occupancy reports.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime Environment** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (NoSQL) |
| **ORM / ODM** | Mongoose |
| **Security** | Bcrypt (Hashing) & JWT (Authentication) |
| **API Testing** | Postman |

---

## 🏗️ Architecture & Design

The backend is built using a **Clean Controller-Service Pattern**:
- **Models:** Schema definitions for Vendors, Parking Slots, and Bookings.
- **Controllers:** Handling request/response cycles and orchestrating service calls.
- **Middlewares:** Handling JWT verification, role-based access, and global error logging.
- **Validation:** Strict input validation to ensure data consistency before database entry.

---

## 🚦 Installation & Setup

To run the vendor backend locally:

1. **Clone the repository:**
   git clone https://github.com/sridhar-2210/Parking_management_System_Vendor_Backend.git
   cd Parking_management_System_Vendor_Backend

2. **Install dependencies:**
   npm install

3. **Configure Environment Variables:**
   Create a .env file in the root directory:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key

4. **Start the server:**
   npm start
   (or `npm run dev` for development mode)

---

## 💡 Challenges & Solutions

**The Challenge:** Managing concurrent booking requests for the same parking slot without data corruption.
**The Solution:** Implemented atomic database operations and validation checks at the service level. This ensures that even if multiple requests hit the server at once, the system maintains a "first-come, first-served" integrity, preventing slot over-allocation.

---

## 👤 Author

**Sridhar**
* **GitHub:** [@sridhar-2210](https://github.com/sridhar-2210)
* **LinkedIn:** [/vangara-sridhar](https://www.linkedin.com/in/vangara-sridhar/)

---
*Developed to provide a scalable and secure infrastructure for modern parking logistics.*
