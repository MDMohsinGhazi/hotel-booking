import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FaUserFriends, FaSearchLocation, FaCalendarAlt } from "react-icons/fa";
import Calendar from "../comman/Calender";
import GustCount from "../comman/GustCount";
import { setDestination } from "../../store/slice/search/searchSlice";
import { useState } from "react";

const Search = () => {
  const [showCal, setShowCal] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { destination, checkIn, checkOut, count } = useSelector(
    (state) => state.search
  );

  return (
    <section className="flex items-center justify-between  border-2 mx-auto max-w-4xl lg:max-w-5xl xl:max-w-7xl -mt-20 bg-white  rounded-xl py-16 px-10 shadow-sm relative z-50">
      <div className="flex justify-center gap-3 items-center border px-3 py-1 rounded-md">
        <FaSearchLocation />
        <input
          type="text"
          placeholder={destination || "where are you going"}
          onChange={(evt) => {
            dispatch(setDestination(evt.target.value));
          }}
        />
      </div>
      <div className="relative flex justify-center gap-3 items-center border px-3 py-1 rounded-md">
        <FaCalendarAlt />
        <span onClick={() => setShowCal(!showCal)}>
          {format(new Date(checkIn), "MM/dd/yyyy")} to
          {format(new Date(checkOut), "MM/dd/yyyy")}
        </span>
        {showCal ? <Calendar /> : null}
      </div>
      <div className="relative flex justify-center gap-3 items-center border px-3 py-1 rounded-md">
        <FaUserFriends />
        <span onClick={() => setShowCount(!showCount)}>
          {count.adults} adults - {count.children} children - {count.rooms} room
        </span>
        {showCount ? <GustCount /> : null}
      </div>
      <button
        onClick={() => navigate("/search")}
        disabled={destination == ""}
        className="bg-primary disabled:bg-primary/70 px-6 py-2 text-white font-semibold rounded-md"
      >
        Search
      </button>
    </section>
  );
};

export default Search;
