import { HeadingLLight } from "../components/Typography";
import { MovieCard } from "../components/Cards";
import data from "../data/data.json";

function Bookmarked() {
  return (
    <div className="px-4 md:px-6 lg:pl-0 lg:pr-9">
      <HeadingLLight text="Bookmarked Movies" mb="mb-[25px]" />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap mb-10">
        {/* {bookmarkedMovies &&
          bookmarkedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              year={movie.release_date}
              category={movie.media_type}
              genre={movie.genre}
              movieTitle={movie.title}
              src={movie.backdrop_path}
            />
          ))} */}
      </div>

      <HeadingLLight text="Bookmarked TV Series" mb="mb-[25px]" />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap">
        {data &&
          data.tvseries.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              year={movie.year}
              category={movie.category}
              genre={movie.genre}
              movieTitle={movie.title}
              src={movie.image_url}
            />
          ))}
      </div>
    </div>
  );
}

export default Bookmarked;
