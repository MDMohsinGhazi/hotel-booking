import CityCard from "../comman/Card";
import Spinner from "../comman/Spinner";

import { useGetCountByCityQuery } from "../../store/slice/hotel/hotelApiSlice";

const Explore = () => {
  const cities = ["london", "maldives", "dubai", "newYork"].join(",");

  const {
    data: propertiesByCity,
    isLoading,
    isError,
    error,
  } = useGetCountByCityQuery({ cities });

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl mt-20">
        <h1 className="text-3xl pb-5">Explore World</h1>
        <Spinner />
      </section>
    );
  }
  if (isError) {
    return (
      <section className="mx-auto max-w-7xl mt-20 flex justify-center">
        <h1 className="text-3xl pb-5">somthing went wrong</h1>
        <Spinner />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl mt-20">
      <h1 className="text-3xl pb-5">Explore World</h1>
      <div className="flex flex-row justify-between">
        {propertiesByCity?.map((property, index) => (
          <CityCard key={index} property={property} />
        ))}
      </div>
      {isError && <div>{error}</div>}
    </section>
  );
};

export default Explore;
