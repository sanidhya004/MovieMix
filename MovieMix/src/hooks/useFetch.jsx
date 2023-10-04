import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../utils/api";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const[loading,setLoading]=useState(null);
    const [error,setError]=useState(null);

    useEffect(()=>{
          setLoading("Loading...")
          fetchData(url)
          .then((res)=>{
          
           setData(res)
           console.log(res)
           setLoading(false)
          })
          .catch((err)=>{
             setLoading(false);
             setError("OOPS SOMETING WENT WRONG")
          })
    },[url])
   
    return {data,loading,error};
}

export default useFetch;