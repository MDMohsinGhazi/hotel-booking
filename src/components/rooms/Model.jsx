import Rooms from "./Rooms";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Model = ({ setShowModel }) => {
  return (
    <section className="fixed inset-0 p-10 min-h-full w-screen bg-black/30 flex justify-center">
      <div className="relative bg-white w-1/2 mt-20 rounded-lg border-2 border-gray-400 p-10">
        <Rooms />
        <AiOutlineCloseCircle
          className="text-primary absolute  right-5 top-5"
          size={36}
          onClick={() => setShowModel(false)}
        />
      </div>
    </section>
  );
};

export default Model;
