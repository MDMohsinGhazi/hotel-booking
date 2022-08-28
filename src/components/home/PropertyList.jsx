import { useGetPropertyTypeQuery } from "../../store/slice/hotel/hotelApiSlice";
import Scrollbar from "../comman/Scrollbar";
import Spinner from "../comman/Spinner";

const PropertyList = () => {
  const { data: types, isLoading, isError, error } = useGetPropertyTypeQuery();
  if (isError) {
    return (
      <section className="mx-auto max-w-7xl mt-20 flex justify-center">
        <h1 className="text-3xl pb-5">somthing went wrong</h1>
        <Spinner />
      </section>
    );
  }
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <h1 className="text-3xl pb-5">Browse by property type</h1>
      <div>
        <Scrollbar
          types={types}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </section>
  );
};

export default PropertyList;
