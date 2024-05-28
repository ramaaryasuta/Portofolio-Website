import React from 'react';
import { Button } from "@material-tailwind/react";
  

const MyCard = ({ title, desc, img, tech, github }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 flex">
    <img className="w-1/3 object-cover" src={img} alt="Sample" />
    <div className="w-2/3 p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base mb-4">
        {desc}
      </p>
      <div>
      <a href={github} target="_blank">
        <Button>View</Button>
        </a>
      </div>
    </div>
  </div>
  );
};

export default MyCard;
