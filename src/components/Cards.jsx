import { Link } from "react-router"
import { BookmarkIcon } from "../assets/Icons"

export const MovieCard = ({year, category, genre, movieTitle, src, id}) => {
    
    return(
        <figure className="rounded-lg bg-dark-blue relative w-auto">

          <span className="size-8 rounded-full absolute top-4 right-4 bg-grayish-blue opacity-50 flex items-center justify-center">
            <BookmarkIcon /> 
          </span>

          <img className="rounded-lg w-full" src={src} alt={movieTitle} />

          <figcaption className='flex items-center gap-x-2 mt-2 mb-1 description-s-light opacity-75'>
            <span>{year}</span>
            <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
            <span className="capitalize">{category}</span>
            <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
            <span>{genre}</span>
          </figcaption>

          <Link to={`/movies/${id}`} className="heading-s-medium capitalize">{movieTitle}</Link>

        </figure>
    )
}



export const TrendingCard = ({year, category, genre, movieTitle, src, id}) => {
  return (
      <div className="relative shrink-0 overflow-hidden cursor-move h-[140px] md:h-[230px] w-[240px] md:w-[470px] rounded-lg" style={{backgroundImage: `url(${src})`}}>

        <span className="size-8 rounded-full absolute top-2 right-2 md:top-4 md:right-6 bg-grayish-blue opacity-50 flex items-center justify-center">
          <BookmarkIcon /> 
        </span>

        <div className="absolute bg-red bottom-0 left-0 right-0 pl-4 md:pl-6 pb-4 md:pb-6">
          <div className='flex items-center gap-x-2 mt-2 mb-1 description-s-light opacity-75'>
            <span>{year}</span>
            <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
            <span className="capitalize">{category}</span>
            <span className="size-[3px] opacity-50 rounded-full bg-white"></span>
            <span>{genre}</span>
          </div>
          <Link to={`/movies/${id}`} className="heading-s-medium capitalize">{movieTitle}</Link>
        </div>

      </div>
  )
}