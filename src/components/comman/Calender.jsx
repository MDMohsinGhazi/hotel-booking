import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useDispatch } from "react-redux";
import { setDateRange } from "../../store/slice/search/searchSlice";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDateRange(date[0]));
  }, [date]);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
      className="absolute top-14 z-50"
      minDate={new Date()}
    />
  );
};

export default Calender;
