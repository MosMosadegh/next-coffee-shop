import connectToDb from "@/utils/db";
import MenuModel from "@/models/menu";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  await connectToDb(); // اطمینان از اتصال به پایگاه داده

  switch (req.method) {
    case "GET": {
      const { id } = req.query;
      if (isValidObjectId(id)) {
        try {
          const product = await MenuModel.findOne({ _id: id }); // جستجوی بر اساس ID
          if (!product) {
            return res.status(404).json({ message: "Product not found" });
          }

          return res.status(200).json(product);
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Error fetching Menu Item", error });
        }
      } else {
        return res.status(422).json({ message: "Product ID is not valid" });
      }
    }
    case "POST": {
      const { title, price, desc, score, off, type, img } = req.body;

      if (!title || title.length < 1 || !price || isNaN(price)) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      try {
        const newProduct = await MenuModel.create({
          title,
          price,
          desc,
          score,
          off,
          type,
          img,
        }); // ایجاد یک محصول جدید

        return res.status(201).json({
          product: newProduct,
          message: "Product created successfully",
        });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating Menu Item", error });
      }
    }

    case "PUT": {
      const { id } = req.query;
      const { title, price, desc, score, off, type, img } = req.body;

      // اعتبارسنجی فیلدها
      if (!title || title.length < 1 || !price || isNaN(price)) {
        return res.status(422).json({ message: "Data is not valid" });
      }
      if (isValidObjectId(id)) {
        try {
          const updatedProduct = await MenuModel.findOneAndUpdate(
            { _id: id },
            {
              title,
              price,
              desc,
              score,
              off,
              type,
              img,
            },
            { new: true } // این گزینه باعث می‌شود که محصول به‌روزرسانی شده برگردانده شود
          );

          if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
          }

          return res.status(200).json({
            product: updatedProduct,
            message: "Product updated successfully",
          });
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Error updating Menu Item", error });
        }
      } else {
        return res.status(422).json({ message: "Course ID is not valid" });
      }
    }

    case "DELETE": {
      const { id } = req.query;
      if (isValidObjectId(id)) {
        try {
          const deletedProduct = await MenuModel.findOneAndDelete({ _id: id }); // حذف محصول

          if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
          }

          return res
            .status(200)
            .json({ message: "Product deleted successfully" });
        } catch (error) {
          return res
            .status(500)
            .json({ message: "Error deleting Menu Item", error });
        }
      } else {
        return res.status(422).json({ message: "User ID is not valid" });
      }
    }

    default: {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
};

export default handler;
