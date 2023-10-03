import axios from "axios"
const base_url='https://api.themoviedb.org/3'
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI2OTc0ZDZkZDQ1ZWQ0M2MzYTg2ZWJiZGY3YTA4YyIsInN1YiI6IjYzYjJiNzdiYTkxMTdmMDU2NTY2NmJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXNUYabuYMIA3v1z1BDN3iXRuXS1R_xvcVh7LbDWK2o"

const headers={
    Authorization: "bearer "+TMDB_TOKEN
};

const fetchData= async(url,params)=>{
     try{
        const {data}=await axios.get(base_url+url,{
            headers,
            params,
        })
        return data;
     }
     catch(err){
         console.log(err)
         return err;
     }
}

export {fetchData};