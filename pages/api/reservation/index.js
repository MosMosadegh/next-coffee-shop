import ReservationModel from "@/models/reservation";
import connectToDb from "@/utils/db";

const handler = async (req, res) => {
  await connectToDb(); // اطمینان از اتصال به پایگاه داده

  switch (req.method) {
    case "GET": {
      const reservation = await ReservationModel.find({});
      res.json(reservation);
      break;
    }

    case "POST": {
      // Req.body
      try {
        const { name, email, phoneNumber, date, selectedPerson } =
          req.body;

        if (
          name.length < 1 ||
          // !phoneNumber.trim() ||
          !date.trim() ||
          !selectedPerson.trim()
        ) {
          return res.status(422).json({ message: "Data is not valid" });
        }

        await ReservationModel.create({
          name,
          email,
          phoneNumber,
          date,
          selectedPerson,
        });

        return res
          .status(201)
          .json({ message: "Reservation Item Add successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error creating Reservation", error });
      }
    }

    default: {
      res.status(405).json({ message: "Method Not Allowed ❤️" });
    }
  }
};

export default handler;
