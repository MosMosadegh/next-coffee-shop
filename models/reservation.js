const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    trim: true, // حذف فضاهای خالی
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true, // تبدیل به حروف کوچک
    match: /.+\@.+\..+/, // اعتبارسنجی فرمت ایمیل
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 11,
  },
  profilePicture: {
    type: String,
    default: "defaultProfilePicUrl", // URL پیش‌فرض برای عکس پروفایل
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now, // تاریخ ثبت‌نام به صورت خودکار
  },
  selectedPerson: {
    type: String,
    enum: ["1", "2", "3", "4"],
    default: "1", // تعداد پیش‌فرض
  },
});

const ReservationModel =
  mongoose.models.Reservation || mongoose.model("Reservation", reservationSchema);
export default ReservationModel;
