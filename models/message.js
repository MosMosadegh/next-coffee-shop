const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // تبدیل به حروف کوچک
    match: /.+\@.+\..+/, // اعتبارسنجی فرمت ایمیل
  },
  profile: {
    type: String,
    default: "defaultProfilePicUrl", // URL پیش‌فرض برای عکس پروفایل
  },
  body: {
    type: String,
    required: true,
    trim: true, // حذف فضاهای خالی
    minlength: 1, // حداقل طول محتوا
  },
  subject: {
    type: String,
    required: true,
    trim: true, // حذف فضاهای خالی
    minlength: 1, // حداقل طول محتوا
  },
  createdAt: {
    type: Date,
    default: () => Date.now() // تاریخ ایجاد به صورت خودکار
  },
});

const MessageModel =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
export default MessageModel;
