import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import UserRouter from "./router/user.js";
import ProductRouter from "./router/product.js";
import cartRouter from "./router/cart.js";
import orderRouter from "./router/order.js";
import contactRouter from "./router/contact.js";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(multer().any());

// API routes
app.use("/api/auth", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contact", contactRouter);

// Serve React build
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// Fallback for React Router
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
