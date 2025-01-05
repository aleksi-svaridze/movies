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