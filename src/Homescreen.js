import React from "react";
import Banner from "./components/Banner";
import Row from "./components/Row";
import NavBar from "./components/NavBar";
import requests from "./request";

export default function Homescreen() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarger={true}
      />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
