import { HeadingLLight } from "../components/Typography";
import { MovieCard, TrendingCard } from "../components/Cards";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import imgDesktop1 from "../assets/images/trending/1.png";
import imgDesktop2 from "../assets/images/trending/2.png";
import imgDesktop3 from "../assets/images/trending/3.png";
import imgDesktop4 from "../assets/images/trending/4.png";
import imgDesktop5 from "../assets/images/trending/5.png";

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
    largeDesktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 768, min: 587 },
      items: 1,
      partialVisibilityGutter: 320,
    },
    mobile: {
      breakpoint: { max: 587, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    },
  };

  return (
    <div className="pb-[52px]">
      <div className="pl-4 md:pl-6 lg:pl-0">
        <HeadingLLight text="Trending" mb="mb-[25px]" />

        {/* <div className="scroll-bar rounded-l-lg flex items-center gap-x-4 md:gap-x-10 mb-10 overflow-y-hidden"> */}
        <Carousel
          containerClass={"bg-red"}
          sliderClass={"gap-x-4 md:gap-x-10"}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          partialVisible={true}
          // infinite={true}
          removeArrowOnDeviceType={[
            "largeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
          autoPlay={false}
          // customTransition="all 2s ease-in-out"
          // autoPlaySpeed={4000}
        >
          <img src={imgDesktop1} className="h-full min-h-[140px]" alt="" />
          <img src={imgDesktop2} className="h-full min-h-[140px]" alt="" />
          <img src={imgDesktop3} className="h-full min-h-[140px]" alt="" />
          <img src={imgDesktop4} className="h-full min-h-[140px]" alt="" />
          <img src={imgDesktop5} className="h-full min-h-[140px]" alt="" />
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
        </Carousel>
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
