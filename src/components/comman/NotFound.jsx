import { ImSad } from "react-icons/im";
const NotFound = () => {
  return (
    <section className="w-full flex flex-col pt-32 items-center gap-10">
      <ImSad className="text-7xl font-thin text-gray-300" />
      <h1 className="text-2xl text-gray-600">
        Sorry we could't find any results.
      </h1>
    </section>
  );
};

export default NotFound;
