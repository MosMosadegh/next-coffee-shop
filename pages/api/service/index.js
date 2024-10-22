import connectToDb from "@/utils/db";
import ServiceModel from "@/models/service";

const handler = async (req, res) => {
  await connectToDb(); // اطمینان از اتصال به پایگاه داده

  switch (req.method) {
    case "GET": {
      const service = await ServiceModel.find({});

      res.json(service);
      break;
    }

    case "POST": {
      // Req.body
      const { title, img, desc, icon } = req.body;

      if (title.length < 1 || !desc.trim() || !img.trim() || !icon.trim()) {
        return res.status(422).json({ message: "Data is not valid" });
      }
      try {
        const serviceItem = await ServiceModel.create({
          title,
          img,
          desc,
          icon,
        });

        return res
          .status(201)
          .json({ message: "Services Item Add successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating Services", error });
      }
    }

    default: {
      res.json({ message: "Welcome to Services page ❤️" });
    }
  }
};

export default handler;
