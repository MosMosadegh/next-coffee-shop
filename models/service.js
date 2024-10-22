const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    img: {
      type: String,
      default: "defaultProfilePicUrl", // URL پیش‌فرض برای عکس پروفایل
    },
    desc: {
        type: String,
        required: true,
        trim: true, // حذف فضاهای خالی
        minlength: 1 // حداقل طول محتوا
    },
    icon: {
        type: String,
        required: false,

    },
});

const ServiceModel =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default ServiceModel;
