import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "./Card";

const Scrollbar = ({ types }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <section className="flex relative max-w-full">
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll snap-x snap-mandatory whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {types?.map((type, index) => (
          <article
            className="inline-block p-2 cursor-pointer snap-start w-72 relative"
            key={index}
          >
            <img src={type.img} alt="type" />
            <h1 className="text-xl font-semibold font-mono capitalize">
              {type.type}
            </h1>
            <p className="text-neutral-500">{type.count} properties</p>
          </article>
        ))}
      </div>
      <MdChevronLeft
        className="bg-white rounded-full absolute top-1/3 -left-5 shadow-2xl shadow-neutral-900 text-neutral-500"
        size={48}
        onClick={slideLeft}
      />
      <MdChevronRight
        className="bg-white rounded-full absolute top-1/3 -right-5 shadow-2xl shadow-neutral-900 text-neutral-500"
        size={40}
        onClick={slideRight}
      />
    </section>
  );
};

export default Scrollbar;
