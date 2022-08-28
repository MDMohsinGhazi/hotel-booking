import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/comman/Spinner";
import ListResult from "../components/hotel/ListResult";
import ListSearch from "../components/hotel/ListSearch";

import { useGetHotelsQuery } from "../store/slice/hotel/hotelApiSlice";

const List = () => {
  const { destination } = useSelector((state) => state.search);
  const [q, setQ] = useState({
    city: destination,
    min: 1,
    max: 50000,
  });
  const { data: hotels, isLoading, isError, error } = useGetHotelsQuery(q);
  if (isLoading) {
    return (
      <main className="min-h-screen flex justify-center pt-20">
        <Spinner />
      </main>
    );
  }

  return (
    <main className="relative mx-auto max-w-7xl mt-5 p-10 min-h-screen flex gap-10">
      <ListSearch setQ={setQ} />
      <ListResult
        hotels={hotels}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </main>
  );
};

export default List;
