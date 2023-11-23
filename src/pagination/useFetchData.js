import React, { useEffect, useState } from 'react'

const useFetchData = () => {
    const [data,setData] = useState([]);

    const getData = async()=>{
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const rdata = await response.json();
        setData(rdata);
    }

    useEffect(()=>{
      getData();
    },[])
  return (
    data
  )
}

export default useFetchData
