import connectToDb from "@/utils/db";
import MessageModel from "@/models/message";

const handler = async (req, res) => {
  await connectToDb(); // اطمینان از اتصال به پایگاه داده

  switch (req.method) {
    case "GET": {
      const messages = await MessageModel.find({});
      res.json(messages);
      break;
    }

    case "POST": {
        // Req.body
      const { name, email, body, subject } = req.body;

      if (name.length < 1 || !body.trim()) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      try {
        const messageItem = await MessageModel.create({
          name,
          email,
          body,
          subject,
        });

        return res
          .status(201)
          .json({ message: "Message Item Add successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating message", error });
      }
    }

    default: {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
};

export default handler;
