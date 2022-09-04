import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setDestination,
  setMaxPrice,
} from "../../store/slice/search/searchSlice";
import { format } from "date-fns";
import Calendar from "../comman/Calender";
import GustCount from "../comman/GustCount";

const ListSearch = ({ setQ }) => {
  const [showCal, setShowCal] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  const dispatch = useDispatch();

  const { destination, checkIn, checkOut, count, price } = useSelector(
    (state) => state.search
  );

  const searchHandler = () => {
    setQ({ city: destination, max: price.max, min: price.min });
  };

  return (
    <section className="flex flex-shrink-0 flex-col items-start gap-4 bg-secondary rounded-xl  shadow-lg shadow-primary/30 px-10 py-5  w-fit text-sm h-fit">
      <h1 className="text-xl font-semibold ">Search</h1>
      <div className="space-y-1 w-full">
        <div className="">Destination</div>
        <input
          type="text"
          placeholder={destination}
          onChange={(evt) => dispatch(setDestination(evt.target.value))}
        />
      </div>
      <div className="relative w-full">
        <div>Check-in-date</div>
        <div className="bg-white text-neutral-500 px-2 py-1 ">
          <span onClick={() => setShowCal(!showCal)}>
            {format(new Date(checkIn), "MM/dd/yyyy")} to{" "}
            {format(new Date(checkOut), "MM/dd/yyyy")}
          </span>
        </div>
        {showCal ? <Calendar /> : null}
      </div>
      <div className="relative w-full">
        <div>options</div>
        <div
          className="bg-white text-neutral-500 px-2 py-1"
          onClick={() => setShowCounter(!showCounter)}
        >
          {count.adults} adults - {count.children} children - {count.rooms} room
        </div>
        {showCounter ? <GustCount /> : null}
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <span>Max Price per night</span>
          <span>{price.max}</span>
        </div>
        <div>
          <input
            className="w-full accent-primary"
            type="range"
            min={0}
            max={500000}
            step={1000}
            defaultValue={500000}
            onChange={(evt) => {
              dispatch(setMaxPrice(evt.target.value));
            }}
          />
          <div className="flex justify-between text-xs font-extralight">
            <span>0 INR</span>
            <span>500000 INR</span>
          </div>
        </div>
      </div>
      <button
        className="bg-primary px-6 py-2 text-white font-semibold rounded-md self-center mt-2 w-full"
        onClick={searchHandler}
      >
        Search
      </button>
    </section>
  );
};

export default ListSearch;
