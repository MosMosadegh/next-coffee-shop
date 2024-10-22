import connectToDb from "@/utils/db";
import UserModel from "@/models/user";

const handler = async (req, res) => {
  connectToDb();
  switch (req.method) {
    case "GET": {
        const users = await UserModel.find({}) 

      res.json(users);
      break;
    }

    case "POST": {
      // Req.body
      const {
        username,
        email,
        password,
        // profilePicture,
        // dateOfBirth,
        // registrationDate,
        // role,
        // accountStatus,
        // loginCount,
      } = req.body;

      if (username.length < 4 || !email.trim() || password.length < 8) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      const user = await UserModel.create({
        username,
        email,
        password,
        // profilePicture,
        // dateOfBirth,
        // registrationDate,
        // role,
        // accountStatus,
        // loginCount,
      });

      if (user) {
        return res
          .status(201)
          .json({ message: "User registered successfully" });
      } else {
        return res.status(409).json({ message: "Unknown Error" });
      }
    }

    default: {
      res.json({ message: "Welcome to Users page ❤️" });
    }
  }
};

export default handler;
