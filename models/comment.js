const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  username: {
        type: String,
        required: true,
        ref: 'User' // اشاره به مدل کاربر
    },
    profile: {
      type: String,
      default: "defaultProfilePicUrl", // URL پیش‌فرض برای عکس پروفایل
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post' // اشاره به مدل پست یا محصول
    },
    body: {
        type: String,
        required: true,
        trim: true, // حذف فضاهای خالی
        minlength: 1 // حداقل طول محتوا
    },
    // createdAt: {
    //     type: Date,
    //     default: () => Date.now() // تاریخ ایجاد به صورت خودکار
    // },
    // updatedAt: {
    //     type: Date,
    //     default: () => Date.now() // تاریخ آخرین ویرایش به صورت خودکار
    // },
    // score: {
    //     type: Number,
    //     required: false,
    //     min: 1, // حداقل امتیاز
    //     max: 5 // حداکثر امتیاز
    // },
    // isDeleted: {
    //     type: Boolean,
    //     default: false // وضعیت حذف پیش‌فرض
    // }
},{timestamps: true}
);

// تعریف مدل کامنت
const CommentModel = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
export default CommentModel;