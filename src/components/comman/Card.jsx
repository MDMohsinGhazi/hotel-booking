import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDestination } from "../../store/slice/search/searchSlice";

const Card = ({ property }) => {
  const [destination, count] = Object.entries(property)[0];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExplore = () => {
    dispatch(setDestination(destination));
    navigate("/search");
  };
  return (
    <figure
      onClick={handleExplore}
      className="bg-neutral-100 rounded-md w-64  xl:w-72 cursor-pointer"
    >
      <img
        className="aspect-video bg-cover rounded-t-md"
        src={process.env.PUBLIC_URL + `images/cities/${destination}.jpg`}
        alt="city"
      />
      <div className="p-2">
        <h1 className="text-xl font-mono font-semibold capitalize">
          {destination}
        </h1>
        <p className="text-neutral-500">{count} properties</p>
      </div>
    </figure>
  );
};

export default Card;
