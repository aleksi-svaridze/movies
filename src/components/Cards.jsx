import { Link } from "react-router";
import { MoviesIcon } from "../assets/Icons";
import { PlayBtn } from "../assets/Icons";

export const MovieCard = ({ year, category, genre, movieTitle, src, id }) => {
  return (
    <figure className="rounded-lg bg-dark-blue relative w-auto">
      <span className="size-8 cursor-pointer rounded-full absolute top-4 right-4 bg-grayish-blue opacity-80 flex items-center justify-center hover:bg-white group transition-all duration-200">
        <svg
          className={`group-hover:stroke-black stroke-white transition-all duration-200 ${
            false ? "fill-white" : "fill-none"
          }`}
          width="12"
          height="14"
          viewBox="0 0 12 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
            strokeWidth="1.5"
          />
        </svg>
      </span>

      <img
        className="rounded-lg w-full"
        src={`https://image.tmdb.org/t/p/w300/${src}`}
        alt={movieTitle}
      />

      <figcaption className="flex items-center gap-x-2 mt-2 mb-1 description-s-light opacity-75">
        <span>{year}</span>
        <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
        <span className="capitalize">{category}</span>
        <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
        <span>{genre}PG</span>
      </figcaption>

      <Link to={`/movies/${id}`} className="heading-s-medium capitalize">
        {movieTitle}
      </Link>
    </figure>
  );
};

export const TrendingCard = ({
  year,
  category,
  genre,
  movieTitle,
  src,
  id,
}) => {
  return (
    <div
      className="relative shrink-0 bg-center bg-cover bg-no-repeat overflow-hidden cursor-move h-[140px] md:h-[230px] w-[240px] md:w-[470px] rounded-lg transition-all duration-200 peer-[]:"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w300/${src}')`,
      }}
    >
      <div
        className="absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 w-[117px] h-12 rounded-[28.5px] p-[9px] gap-x-[19px] items-center hidden group-hover:flex cursor-pointer"
        style={{ backgroundColor: "rgba(255, 255, 255, .25)" }}
      >
        <PlayBtn />
        <span className="text-white font-medium text-lg capitalize">Play</span>
      </div>

      <div className="size-8 rounded-full absolute top-2 right-2 md:top-4 md:right-6 bg-grayish-blue flex items-center justify-center hover:bg-white group opacity-80 cursor-pointer transition-all duration-200">
        <svg
          className={`group-hover:stroke-black stroke-white transition-all duration-200 ${
            false ? "fill-white" : "fill-none"
          }`}
          width="12"
          height="14"
          viewBox="0 0 12 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pl-4 md:pl-6 pb-4 md:pb-6">
        <div className="flex items-center gap-x-2 mt-2 mb-1 description-s-light opacity-75">
          <span>{year}</span>
          <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
          <span className="capitalize flex gap-x-[6px]">
            <MoviesIcon />
            {category}
          </span>
          <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
          <span>{genre}PG</span>
        </div>
        <Link to={`/movies/${id}`} className="heading-s-medium capitalize">
          {movieTitle}
        </Link>
      </div>
    </div>
  );
};
