import { Link } from "react-router-dom";
import { useGetFeaturedPropertyQuery } from "../../store/slice/hotel/hotelApiSlice";
import Spinner from "../comman/Spinner";

const Featured = () => {
  const {
    data: featuredProperty,
    isLoading,
    isError,
    error,
  } = useGetFeaturedPropertyQuery();
  if (isLoading) {
    return (
      <section className="mx-auto my-20 max-w-7xl">
        <h1 className="text-3xl pb-5">Homes guest loves</h1>
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
    <section className="mx-auto my-20 max-w-7xl">
      <h1 className="text-3xl pb-5">Homes guest loves</h1>
      <div className="flex justify-between">
        {featuredProperty?.map((property, index) => (
          <Link
            to={`/hotel/${property._id}`}
            className="relative w-72"
            key={index}
          >
            <img
              src={
                property.image ||
                "https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              }
              alt="img"
              className="bg-cover w-full h-full"
            />
            <div className="text-xs font-mono bg-primary w-fit h-fit p-1 text-white absolute top-5 -right-5 z-50">
              Featured
            </div>
            <div className="absolute inset-0 text-white text-xl bg-primary/10 hover:bg-transparent ">
              <div className="p-2">
                <h1 className="text-2xl font-semibold">{property.name}</h1>
                <p>{property.city}</p>
                <p>starting from {property.cheapestPrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Featured;
