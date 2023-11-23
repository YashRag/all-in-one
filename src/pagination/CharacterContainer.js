import React, { useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import useFetchData from "./useFetchData";

const CharacterContainer = () => {
  const data = useFetchData();
  const [currentPage,setCurrentPage] = useState(1);
  const recordeperPage = 6;
  
  const indexOfLasttRecord = currentPage * recordeperPage ;
  const indexOfFirst       = indexOfLasttRecord - recordeperPage ;

  const currentRecords = data.slice(indexOfFirst,indexOfLasttRecord);
  console.log(currentRecords)

  const nPages = Math.ceil(data.length / recordeperPage);
  return (
    
    <div className="flex flex-col justify-center">
    <div className="flex flex-wrap justify-center ">
      {currentRecords.map((info, index) => (
        <Character key={index} name={info.fullName} imgurl={info.imageUrl}/>
      ))}
    </div>
    <Pagination 
     nPages = {nPages}
     currentPage = {currentPage}
     setCurrentPage = {setCurrentPage}
    />
    </div>
    
  );
};

export default CharacterContainer;
