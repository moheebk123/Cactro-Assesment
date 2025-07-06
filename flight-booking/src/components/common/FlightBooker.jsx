import React, { useRef, useState } from "react";

const FlightBooker = () => {
  const [bookingState, setBookingState] = useState("choosing-flight-type");
  const [flightType, setFlightType] = useState("one-way");
  const flightTypeRef = useRef(null);

  const handleSelectFlightType = () => {
    const value = flightTypeRef.current.value;
    if (!value) {
      return;
    }
    if (value !== "one-way" && value === "return") {
      setFlightType("return");
    }
    setBookingState("booking-flight");
  };

  const handleBookFlight = () => {
    alert("Book Flight");
  };

  return (
    <div>
      {bookingState === "choosing-flight-type" ? (
        <div>
          <h2>Choose Flight Type</h2>
          <select name="" id="" ref={flightTypeRef} defaultValue={flightType}>
            <option value="one-way">One Way Flight</option>
            <option value="return">Return Flight</option>
          </select>
          <button onClick={handleSelectFlightType}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Choose Date and Time for Flight</h2>
          <input type="datetime" name="" id="" />
          {flightType === "return" ? (
            <input type="datetime" name="" id="" />
          ) : (
            <></>
          )}

          <button onClick={handleBookFlight}>Book Flight</button>
        </div>
      )}
    </div>
  );
};

export default FlightBooker;

// Flight Type Selection:
// User can choose between:
// One-Way Flight
// Return Flight
// Date Selection: The user must select :
// Departure Date
// Return Date (only if return flight is selected)
// Validation Rules:

// Departure date must not be in the past.
// Return date (if applicable) must not be before the departure date.
// Disable the "Book Flight" button if the form is invalid.

// Submission: On clicking "Book Flight", show an alert with a confirmation message like:

// “You have booked a one-way flight on 2025-06-05.”
// “You have booked a return flight from 2025-06-05 to 2025-06-10.”
