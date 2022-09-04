import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getDatesInRange from "../../utils/getDatesInRange";

import { useGetRoomsByHotelQuery } from "../../store/slice/room/roomApiSlice";

import Room from "./Room";

const Rooms = () => {
  const { id } = useParams();
  const { checkIn, checkOut, count } = useSelector((state) => state.search);
  const dates = getDatesInRange(checkIn, checkOut);

  const {
    data: rooms,
    isLoading,
    isError,
    error,
  } = useGetRoomsByHotelQuery(id);

  const night = Math.floor((checkOut - checkIn) / 86400000) || 1;

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center">
        somthing went wrong
      </div>
    );
  }
  return (
    <section className="py-5 space-y-5">
      {rooms.map((room) => (
        <Room
          key={room._id}
          room={room}
          night={night}
          count={count}
          dates={dates}
        />
      ))}
    </section>
  );
};

export default Rooms;
