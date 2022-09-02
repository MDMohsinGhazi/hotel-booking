import { useState } from "react";
import HorizontalCard from "../comman/HorizontalCard";

const ListResult = ({ hotels, isLoading, isError, error }) => {
  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <section className="flex flex-col w-full ">
      <h1 className="text-3xl font-semibold pb-10 capitalize ">
        Result: Match for your result
      </h1>
      <div className="space-y-6 min-w-full">
        {hotels.map((hotel) => (
          <HorizontalCard hotel={hotel} key={hotel._id} />
        ))}
      </div>
    </section>
  );
};

export default ListResult;
