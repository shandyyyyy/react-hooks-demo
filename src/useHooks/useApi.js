import React, { useState, useEffect } from 'react';

const getList = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve([6,7,8,9,10]);
    }, 2000);
  })
}
export default function useApi(){
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [query, setQuery] = useState('');
  useEffect(async()=>{
    const data = await getList();
    console.log(data, query);
    setData(data);
  }, [query]);

  return [data, setQuery];
}