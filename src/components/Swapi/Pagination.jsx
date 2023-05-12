import React from "react";
import useSwapiStore from "../../store/useSwapiStore";

const Pagination = () => {
  const { prevPage, nextPage, page } = useSwapiStore((state) => state);
  return (
    <div className="flex mt-8 w-80">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none" onClick={prevPage}>Prev</button>
      <div className="bg-blue-500 text-white font-bold py-2 px-4">{page}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none" onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;