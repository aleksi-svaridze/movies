import { HeadingLLight } from "../components/Typography";
import { MovieCard, TrendingCard } from "../components/Cards";
import { useState, useEffect } from "react";
import {
  MovieCardPlaceholder,
  TrendingCardPlaceholder,
} from "../components/placeholders";

function Home({ setMoviesToFavoriteList }) {
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=68e01138389d4ea2cf35ca5ca585f56c"
      )
        .then((res) => res.json())
        .then((data) => {
          setTrending(data.results);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-[52px]">
      <div className="pl-4 md:pl-6 lg:pl-0">
        <HeadingLLight text="Trending" mb="mb-[25px]" loading={loading} />

        <div className="h-[140px] md:h-[230px] scroll-bar rounded-l-lg flex items-center gap-x-4 md:gap-x-10 mb-10 overflow-y-hidden">
          {loading && <TrendingCardPlaceholder />}
          {trending &&
            trending
              .slice(0, 4)
              .map((movie) => (
                <TrendingCard
                  setMoviesToFavoriteList={setMoviesToFavoriteList}
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

      <div className="px-4 md:px-6 lg:pl-0 lg:pr-9">
        <HeadingLLight
          text="Recomended for you"
          mb="mb-[25px]"
          loading={loading}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap">
          {loading && <MovieCardPlaceholder />}

          {trending &&
            trending.map((movie) => (
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
    </div>
  );
}

export default Home;
