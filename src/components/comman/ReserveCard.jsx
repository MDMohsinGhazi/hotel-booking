import { useSelector } from "react-redux";

const ReserveCard = ({ setShowModel, showModel, cheapestPrice, score }) => {
  const { checkIn, checkOut } = useSelector((state) => state.search);

  const night = Math.floor((checkOut - checkIn) / 86400000) || 1;

  return (
    <figure className="w-72 text-neutral-600 space-y-3 bg-primary/10 p-5">
      <h1 className="text-xl font-semibold">Perfect for {night}-night stay!</h1>
      <p className="text-neutral-500 ">
        Location in real heart of city, this property has an excelent location
        score {score || 5}
      </p>
      <p className="font-semibold text-lg">
        {cheapestPrice * night || cheapestPrice} INR ({night}-night)
      </p>
      <button
        className="bg-primary text-white px-4  py-2 font-semibold text-xl rounded-md shadow-md w-full"
        onClick={() => setShowModel(!showModel)}
      >
        Reserve or Book!
      </button>
    </figure>
  );
};

export default ReserveCard;
