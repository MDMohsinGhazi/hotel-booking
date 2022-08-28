import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ReserveCard from "../components/comman/ReserveCard";
import Model from "../components/rooms/Model";

import { useGetHotelByIdQuery } from "../store/slice/hotel/hotelApiSlice";

import { MdLocationPin } from "react-icons/md";
import Spinner from "../components/comman/Spinner";

const Hotel = () => {
  const [showModel, setShowModel] = useState(false);
  const { id } = useParams();

  const { data: hotel, isLoading, isError, error } = useGetHotelByIdQuery(id);

  console.log(showModel);

  if (isLoading) {
    return (
      <main className="min-h-screen flex justify-center ">
        <Spinner />
      </main>
    );
  }
  if (isError) {
    return (
      <main className="mx-auto max-w-7xl relative py-10  flex justify-between gap-10 min-h-screen">
        Something went wrong
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-7xl relative py-10  flex justify-between gap-10 min-h-screen">
      <section className="flex flex-col items-start">
        <div className="space-y-2 pb-20">
          <h1 className="text-3xl font-semibold text-primary">{hotel.name}</h1>
          <div className="flex items-center">
            <MdLocationPin />
            {hotel.city}
          </div>
          <p className="text-sky-600 ">Excellent location - {hotel.distance}</p>
          <p className="text-primary/80">
            Book a stay over 20000 INR at this property and get free airport
            taxi
          </p>
          <p className="text-2xl font-semibold pt-10">{hotel.title}</p>
          <p>{hotel.desc}</p>
        </div>
        <img src={hotel.image} alt="image" />
      </section>
      <section className="flex flex-col justify-between items-end">
        <button className="bg-primary text-white px-6 py-2 font-semibold text-xl rounded-md shadow-md ">
          Reserve or Book
        </button>
        <ReserveCard
          setShowModel={setShowModel}
          showModel={showModel}
          name={hotel.name}
          cheapestPrice={hotel.cheapestPrice}
          score={hotel.score}
        />
      </section>
      {showModel ? <Model setShowModel={setShowModel} /> : null}
    </main>
  );
};

export default Hotel;
