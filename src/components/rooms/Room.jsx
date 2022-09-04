import { useParams, useNavigate } from "react-router-dom";
import { useBookRoomMutation } from "../../store/slice/booking/bookingApiSlice";

const Room = ({ room, night, count, dates }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookRoom, { isLoading, isError, isSuccess, error }] =
    useBookRoomMutation();

  const handelBooking = async () => {
    const data = {
      hotel: id,
      room: room._id,
      count,
      dates,
    };
    try {
      const book = await bookRoom(data).unwrap();

      navigate("/booking");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <artical className="flex gap-5 bg-gray-100 rounded-lg ">
      <img src={room.image} alt="img" className="h-48 w-56 rounded-l-lg" />

      <div className="py-5 pr-5  w-full space-y-1">
        <h1 className="text-xl text-primary font-semibold">{room.title}</h1>
        <p>{room.desc}</p>
        <p>Price per day : {room.price}</p>
        <div className="flex justify-between w-full">
          <p className="text-primary font-semibold">
            Get in {room.price * count.rooms * night} rupees for {night} night
          </p>
          <button
            className="bg-primary disabled:bg-primary/70 px-4 py-1 text-white font-semibold rounded-md "
            onClick={handelBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </artical>
  );
};

export default Room;
