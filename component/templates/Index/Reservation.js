import React, { useState } from "react";
import moment from "moment-jalaali";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("example@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("09*********");
  const [date, setDate] = useState(moment().format("jYYYY/jM/jD"));
  const [time, setTime] = useState("00:00");
  const [selectedPerson, setSelectedPerson] = useState("1");

  const addReservation = async (event) => {
    event.preventDefault();
    const reserveResponse = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        date,
        time,
        selectedPerson,
      }),
    });

    if (reserveResponse.status === 201) {
      setName("");
      setEmail("");
      setPhoneNumber("");
      setDate("");
      setTime("");
      setSelectedPerson("");
      alert("Join Successfully :))");
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    {/* <i className="fa fa-check text-primary mr-3"></i> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary mr-3"
                    />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    {/* <i className="fa fa-check text-primary mr-3"></i> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary mr-3"
                    />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    {/* <i className="fa fa-check text-primary mr-3"></i> */}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary mr-3"
                    />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required="required"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required="required"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Phone Number"
                      required="required"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="تاریخ شمسی را وارد کنید"
                      />
                      {/* <p>تاریخ شمسی: {date}</p> */}

                      {/* <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      /> */}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      value={selectedPerson}
                      onChange={(e) => setSelectedPerson(e.target.value)}
                    >
                      <option value="" disabled>
                        Person
                      </option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="4">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                      onClick={addReservation}
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
