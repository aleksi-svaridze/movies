import { HeadingLLight } from "../components/Typography";
import { MovieCard, TrendingCard } from "../components/Cards";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
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
        .then((data) => setTrending(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="pb-[52px]">
      <div className="pl-4 md:pl-6 lg:pl-0">
        <HeadingLLight text="Trending" mb="mb-[25px]" />

        {/* <div className="scroll-bar rounded-l-lg flex items-center gap-x-4 md:gap-x-10 mb-10 overflow-y-hidden"> */}
        <Carousel
          className="bg-red"
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
        >
          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1635100431192-180372735b06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div> */}
          {trending
            ? trending.map((movie) => (
                <TrendingCard
                  key={movie.id}
                  id={movie.id}
                  year={movie.release_date}
                  category={movie.media_type}
                  genre={movie.genre}
                  movieTitle={movie.title}
                  src={movie.backdrop_path}
                />
              ))
            : "No Movies"}
        </Carousel>
        {/* {trending
            ? trending.map((movie) => (
                <TrendingCard
                  key={movie.id}
                  id={movie.id}
                  year={movie.release_date}
                  category={movie.media_type}
                  genre={movie.genre}
                  movieTitle={movie.title}
                  src={movie.backdrop_path}
                />
              ))
            : "No Movies"} */}
        {/* </div> */}
      </div>

      <div className="px-4 md:px-6 lg:pl-0 lg:pr-9">
        <HeadingLLight text="Recomended for you" mb="mb-[25px]" />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap">
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
          {trending &&
            trending.map((tv) => (
              <MovieCard
                key={tv.id}
                id={tv.id}
                year={tv.release_date}
                category={tv.media_type}
                genre={tv.genre}
                movieTitle={tv.title}
                src={tv.backdrop_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
