import Image from "next/image";
import React from 'react';

const API_KEY = process.env.API_KEY;

export default async function MovieDetails({ params }) {
  const movieId = params.id;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const movie = await res.json();
  // console.log('movie : ', movie);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
          style={{maxWidth: '100%', height: '100%'}}
        />
        <div className="p-2">
          <h2 className="text-lg font-bold mb-3">{movie.title || movie.name}</h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
          <span className="font-semibold mr-1">Total Vote: </span>
            {movie.vote_count}
          </p>
          <p className="mb-3">
          <span className="font-semibold mr-1">Rating: </span>
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  )
}
