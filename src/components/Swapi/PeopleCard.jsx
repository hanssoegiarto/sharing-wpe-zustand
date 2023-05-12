import React from "react";
import useSwapiStore from "../../store/useSwapiStore";

const PeopleCard = () => {
  const { peopleData } = useSwapiStore((state) => state);
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-4 w-80">
      <div className="text-4xl font-bold text-center mb-4 text-gray-700">{peopleData.name}</div>
      <div className="flex justify-between">
        <div className="text-lg font-bold text-gray-600">Gender:</div>
        <div className="text-lg text-gray-700">{peopleData.gender}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-bold text-gray-600">Birth Year:</div>
        <div className="text-lg text-gray-700">{peopleData.birth_year}</div>
      </div>
    </div>
  );
};

export default PeopleCard;