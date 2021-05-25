import React, { useEffect, useState } from "react";
import useSWR from "swr";
const LastSalesPage = (props) => {
  const { sales } = props;
  //const [sales, setSales] = useState();
  //     const [error,setError] = useState()
  //   useEffect(() => {
  //     fetch(
  //       "https://nextjs-course-a9e23-default-rtdb.firebaseio.com/sales.json"
  //     ).then((res) => res.json()).then((data)=>{
  //         let newArray = []
  //         for(let key in data){
  //             data[key].id = key
  //             newArray.push(data[key])
  //         }
  //         setSales(newArray)
  //         newArray = []
  //     }).catch((err)=>{
  //         setError(err.message)
  //         //console.log(err.message)
  //     });
  //   }, []);

  //   if(error){
  //       return <h1>failed to load data</h1>
  //   }
  //   if(!sales){
  //       return <p>Loading...</p>
  //   }

  //   const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //   const { data, error } = useSWR(
  //     "htps://nextjs-course-a9e23-default-rtdb.firebaseio.com/sales.json",
  //     fetcher
  //   );

  //   useEffect(() => {
  //     if (data) {
  //       let newArray = [];
  //       for (let key in data) {
  //         data[key].id = key;
  //         newArray.push(data[key]);
  //       }
  //       setSales(newArray);
  //       newArray = [];
  //     }
  //   }, [data]);

  //   console.log(error);
  //   if (error) return <div>failed to load</div>;
  //   if (!data) return <div>loading...</div>;
  //   if (!sales) return <div>loading...</div>;
  return (
    <div>
      {sales.map((item) => {
        return <h1 key={item.id}>{item.userName}${item.volume}</h1>;
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://nextjs-course-a9e23-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  let newArray = [];
  for (let key in data) {
    data[key].id = key;
    newArray.push(data[key]);
  }
  return {
    props: {
      sales: newArray,
    },
    revalidate: 10,
  };
};

export default LastSalesPage;
