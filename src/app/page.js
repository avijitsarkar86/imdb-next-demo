import MovieResults from "@/components/MovieResults";
import React from 'react';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const requestURL = `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;

  console.log('requestURL : ', requestURL);

  const res = await fetch(requestURL, {
    next: { revalidate: 10000 }
  });

  // const res = await new Promise((resolve) => {
  //   setTimeout(async () => {
  //     const response = await fetch(requestURL, { next: { revalidate: 10 } });
  //     resolve(response);
  //   }, 2000)
  // });
  const data = await res.json();


  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  // console.log('result : ', results);

  return (
    <div>
      <MovieResults results={results} />
    </div>
  )
}
