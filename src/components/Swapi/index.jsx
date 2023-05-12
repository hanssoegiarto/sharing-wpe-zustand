import { useEffect } from "react";
import useSwapiStore from "../../store/useSwapiStore";
import PeopleCard from "./PeopleCard";
import Pagination from "./Pagination";

const Swapi = () => {
  const { fetchPeople, page } = useSwapiStore((state) => state);

  useEffect(() => {
    fetchPeople();
  }, [page]);

  return (
    <div className="p-4 space-x-4">
      <PeopleCard />
      <Pagination />
    </div>
  );
};

export default Swapi;
