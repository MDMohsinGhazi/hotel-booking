import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/slice/search/searchSlice";

const GustCount = () => {
  const { count } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  return (
    <section className="bg-white p-8 border shadow-md absolute top-14 w-72 divide-y divide-inherit">
      <div className="flex justify-between pb-3">
        <h1>Adults</h1>
        <div className="flex gap-3">
          <button
            className="px-3 py-1 border border-primary"
            onClick={() => dispatch(decrement("adults"))}
          >
            -
          </button>
          <div>{count.adults}</div>
          <button
            className="px-3 py-1 border border-primary"
            onClick={() => dispatch(increment("adults"))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <h1>Children</h1>
        <div className="flex gap-3">
          <button
            className="px-3 py-1 border border-primary"
            onClick={() => dispatch(decrement("children"))}
          >
            -
          </button>
          <div>{count.children}</div>
          <button
            className="px-3 py-1 border border-primary"
            onClick={() => dispatch(increment("children"))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <h1>Room</h1>
        <div className="flex gap-3">
          <button
            className="px-3 py-1 border border-primary"
            onClick={() => dispatch(decrement("rooms"))}
          >
            -
          </button>
          <div>{count.rooms}</div>
          <button
            className="px-3 py-1 border border-primary"
            onClick={() => dispatch(increment("rooms"))}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default GustCount;
