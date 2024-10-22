const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true, // حذف فضاهای خالی
  },
  email: {
    type: String,
    required: true,
    unique: true, // ایمیل باید منحصر به فرد باشد
    trim: true,
    lowercase: true, // تبدیل به حروف کوچک
    match: /.+\@.+\..+/, // اعتبارسنجی فرمت ایمیل
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  profilePicture: {
    type: String,
    default: "defaultProfilePicUrl", // URL پیش‌فرض برای عکس پروفایل
  },
  dateOfBirth: {
    type: Date,
    required: false, // می‌توانید این را اختیاری کنید
  },
  registrationDate: {
    type: Date,
    default: Date.now, // تاریخ ثبت‌نام به صورت خودکار
  },
  role: {
    type: String,
    enum: ["user", "admin"], // نقش‌های مجاز
    default: "user", // نقش پیش‌فرض
  },
  accountStatus: {
    type: String,
    enum: ["active", "inactive", "banned"], // وضعیت‌های مجاز
    default: "active", // وضعیت پیش‌فرض
  },
  loginCount: {
    type: Number,
    default: 0, // شمارش تعداد ورود
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
