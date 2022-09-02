import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({ hotel }) => {
  const {
    _id,
    image,
    name,
    distance,
    city,
    address,
    title,
    desc,
    cheapestPrice,
  } = hotel;
  return (
    <Link to={`/hotel/${_id}`} className="flex shadow-md border p-5 min-w-full">
      <img
        className="h-48 aspect-square bg-cover object-center rounded-md"
        loading="lazy"
        src={image}
        alt="hotel"
      />
      <div className="flex justify-between w-full p-5 space-x-10">
        <div>
          <h1 className="text-2xl font-semibold text-primary ">{name}</h1>
          <div className="flex space-x-5">
            <div className="text-primary underline underline-offset-1 font-semibold">
              <span>{address}</span>, <span>{city}</span>
            </div>
            <span>{distance}</span>
          </div>
          <p>{title}</p>
          <p>{desc}</p>
        </div>
        <div className="space-y-5">
          <div className="text-lg font-semibold">very good</div>
          <div className="text-primary text-xl font-semibold">
            {cheapestPrice} INR
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
