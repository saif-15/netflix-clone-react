import axios from "E:\\Projects\\netflix-clone\\src\\axios.js";
import requests from "E:\\Projects\\netflix-clone\\src\\request.js";
import React, { useEffect, useState } from "react";
import "./Banner.css";


export default function Banner() {

    const[movie,setMovie]=useState([]);

    useEffect(()=>{
        const fetchdata= async ()=>{
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
        }
        fetchdata()
    },[])

    console.log(movie);

const truncate=(string,n)=>{
return string?.length > n ? string.substr(0,n-1)+'...':string;
}

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
        <div className="banner_content">
            <div className="banner_title">
                <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
            </div>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>

            <div className="banner_desc">
             {truncate(movie?.overview,100)}
            </div>

        </div>

            <div className="banner-gradient"></div>

    </header>
  );
}
