import moment from "moment";
import { BiRupee } from "react-icons/bi";
import { useCancelBookingMutation } from "../../store/slice/booking/bookingApiSlice";
import Spinner from "../comman/Spinner";

const BookingCard = ({ booking }) => {
  const [cancelBooking, { isLoading, isError, isSuccess }] =
    useCancelBookingMutation();
  if (isError) alert("Somthing went wrong");
  return (
    <article className="border border-gray-300 rounded-lg">
      <h1 className="bg-gray-200 flex justify-between py-2 px-4">
        <div>
          <div>Booked on</div>
          <div>{moment(booking.createdAt).format("MMM Do YY")}</div>
        </div>
        <div>
          <div>Total</div>
          <div className="flex justify-center items-center">
            <span>
              <BiRupee />
            </span>
            <span>{booking.amount}</span>
          </div>
        </div>
        <div>
          <div>Status</div>
          <div>{booking.status}</div>
        </div>
        <div>
          <div>Booking Id</div>
          <div>#{booking._id}</div>
        </div>
      </h1>
      <div className="flex justify-between p-5 ">
        <div>
          <div className="text-2xl font-semibold">
            Booking date {moment(booking.dates[0]).format("D-MMM-YY")}
          </div>
          <div>{booking.hotel?.name}</div>
          <div>{booking.room?.title}</div>
          <div>{booking.hotel?.address}</div>
        </div>
        <div className="pr-10">
          <div>
            {booking.roomCount} Room for {booking.adults} person
          </div>
          {booking.children ? (
            <div> and {booking?.children} children</div>
          ) : null}
          <div>for {booking.dates.length} night</div>
          {booking.status === "canceled" ? (
            <div className="mt-8  text-primary font-semibold  ">
              Booking is canceled
            </div>
          ) : (
            <button
              className="mt-8 px-3 py-1 bg-primary/80 text-white font-semibold rounded-lg disabled:opacity-50"
              disabled={isLoading}
              onClick={() => cancelBooking(booking._id)}
            >
              Cancel Booking
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default BookingCard;
