import connectToDb from "@/utils/db";
import CommentModel from "@/models/comment";

const handler = async (req, res) => {
  await connectToDb();

  switch (req.method) {
    case "GET": {
      try {
        const comments = await CommentModel.find({});
        return res.status(200).json(comments); // استفاده از وضعیت 200
      } catch (error) {
        return res.status(500).json({ message: "Error fetching comments", error });
      }
    }

    case "POST": {
      const { username, profile, productID, body } = req.body;

      // بررسی وجود req.body
      if (!req.body || !username || !body.trim()) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      try {
        const commentItem = await CommentModel.create({
          username,
          profile,
          productID,
          body,
          createdAt: Date.now(), // زمان ایجاد
          updatedAt: Date.now(), // زمان به‌روزرسانی
        });

        return res.status(201).json({ message: "Comment Item added successfully", commentItem });
      } catch (error) {
        return res.status(500).json({ message: "Error creating Comment", error });
      }
    }

    default: {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  }
};

export default handler;