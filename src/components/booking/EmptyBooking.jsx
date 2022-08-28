import { Link } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";

const EmptyBooking = () => {
  return (
    <article className="flex flex-col justify-center items-center gap-14 pt-20">
      <div className="text-9xl text-neutral-700">
        <BsCalendarCheck />
      </div>
      <div className="flex flex-col items-center gap-5 ">
        <h1 className="text-3xl font-semibold">
          You haven't made your first booking yet!
        </h1>
        <p className="text-xl font-semibold">
          All you need to do in
          <span className="text-primary">
            <Link to="/">search for Digs</Link>{" "}
          </span>
          to get started.
        </p>
      </div>
    </article>
  );
};

export default EmptyBooking;
