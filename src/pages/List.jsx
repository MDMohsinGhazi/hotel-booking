import { useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "../components/comman/NotFound";
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
    limit: 10,
  });
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useGetHotelsQuery({ ...q, page });

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
      {data.totalResults > 0 ? (
        <div className="w-full">
          <ListResult
            hotels={data.hotels}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
          <section className="mt-5 p-3 border border-gray-300 flex justify-between">
            <div>{data.totalResults} results found</div>
            <div className="flex items-center gap-5">
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Prev
              </button>
              <div className="bg-gray-200 px-2 py-0.5">
                {page}/{Math.ceil(data.totalResults / 10)}
              </div>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === Math.ceil(data.totalResults / 10)}
              >
                Next
              </button>
            </div>
          </section>
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default List;
