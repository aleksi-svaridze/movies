import { useEffect, useState } from "react";
import { HeadingLLight } from "../components/Typography";
import { MovieCard } from "../components/Cards";

function Movies() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=68e01138389d4ea2cf35ca5ca585f56c"
    )
      .then((res) => res.json())
      .then((data) => setmovies(data.results));
  };
  return (
    <div className="px-4 md:px-6 lg:pl-0 lg:pr-9">
      <HeadingLLight text="Movies" mb="mb-[25px]" />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap">
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              year={movie.release_date}
              category={movie.media_type}
              genre={movie.genre}
              movieTitle={movie.title}
              src={movie.backdrop_path}
            />
          ))}
      </div>
    </div>
  );
}

export default Movies;
