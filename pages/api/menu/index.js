import connectToDb from "@/utils/db";
import MenuModel from "@/models/menu";

const handler = async (req, res) => {
  await connectToDb();

  switch (req.method) {
    case "GET": {
      const menus = await MenuModel.find({});

      res.json(menus);
      break;
    }

    case "POST": {
      // Req.body
      const { title, price, desc, score, off, type, img } = req.body;

      if (!title || title.length < 1 || !price || isNaN(price)) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      try {
        const menuItem = await MenuModel.create({
          title,
          price,
          desc,
          score,
          off,
          type,
          img,
          // createdAt,
          // inStock,
        });

        return res.status(201).json({ message: "Menu Item Add successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating Menu Item ", error });
      }
    }

    default: {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
};

export default handler;
