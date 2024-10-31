const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // قیمت نمی‌تواند منفی باشد
  },
  desc: {
    type: String,
    required: false,
    trim: true, // حذف فضاهای خالی
  },
  score: {
    type: Number,
    required: false,
    min: 0, // حداقل امتیاز
    max: 5, // حداکثر امتیاز
  },
  off: {
    type: Number,
    required: false,
    min: 0, // حداقل تخفیف
    max: 100, // حداکثر تخفیف
  },
  type: {
    type: String,
    enum: ["hot", "cold"],
    default: "hot",
  },
  img: {
    type: String,
    default: "defaultProfilePicUrl", // URL پیش‌فرض برای عکس پروفایل
   
  },
  createdAt: {
    type: Date,
    default: () => Date.now(), // تاریخ اضافه شدن به صورت خودکار
  },
  inStock: {
    type: Boolean,
    default: true, // وضعیت موجودی پیش‌فرض
  },
});

const MenuModel = mongoose.models.Menu || mongoose.model("Menu", menuSchema);
export default MenuModel;
