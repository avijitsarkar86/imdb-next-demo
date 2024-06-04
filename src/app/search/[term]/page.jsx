import MovieResults from "@/components/MovieResults";
import React from 'react'

export default async function SearchPage({ params }) {
  console.log('SearchPage :: params : ', params);
  const { term } = params;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${term}&language=en=US&page=1&include_adult=false`;
  // console.log('SearchPage :: url : ', url);
  const res = await fetch(url);

  const data = await res.json();
  const results = data.results;

  // console.log('SearchPage :: results : ', results);

  return (
    <div>
      {
        results && results.length === 0 && (
          <h1 className="text-center pt-6">No results found</h1>
        )
      }
      {
        results && <MovieResults results={results} />
      }
    </div>
  )
}
