import { useState, useEffect } from "react";
import { HeadingLLight } from "../components/Typography";
import { MovieCard } from "../components/Cards";

function TvSeries() {
  const [tvSeries, setTvSeries] = useState([]);
  useEffect(() => {
    getTvSeriesList();
  }, []);

  const getTvSeriesList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=68e01138389d4ea2cf35ca5ca585f56c"
    );
    const data = await response.json();
    setTvSeries(data.results);
  };
  return (
    <div className="px-4 md:px-6 lg:pl-0 lg:pr-9">
      <HeadingLLight text="TV Series" mb="mb-[25px]" />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap">
        {tvSeries &&
          tvSeries.map((tv) => (
            <MovieCard
              key={tv.id}
              id={tv.id}
              year={tv.first_air_date}
              category={tv.media_type}
              genre={tv.genre}
              movieTitle={tv.name}
              src={tv.backdrop_path}
            />
          ))}
      </div>
    </div>
  );
}

export default TvSeries;
