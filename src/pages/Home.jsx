import { HeadingLLight } from '../components/Typography';
import { MovieCard, TrendingCard } from '../components/Cards';
import data from '../data/data.json';

function Home() {
  return (
    <div className=''>

      <div className='pl-4 md:pl-6 lg:pl-0'>
        <HeadingLLight text='Trending' mb='mb-[25px]' />
      
        <div className='scroll-bar rounded-l-lg flex items-center gap-x-4 md:gap-x-10 mb-10 overflow-y-auto'
        >
           { data && data.movies.map(movie => (
                <TrendingCard 
                  key={movie.id} 
                  id={movie.id}
                  year={movie.year}
                  category={movie.category}
                  genre={movie.genre}
                  movieTitle={movie.title}
                  src={movie.image_url}
                />
              ))  
            }
        </div>
      </div>

      <div className='px-4 md:px-6 lg:pl-0 lg:pr-9'>
        <HeadingLLight text='Recomended for you' mb='mb-[25px]' />

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap'>
          {
            data && data.movies.map(movie => (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                category={movie.category} 
                genre={movie.genre} 
                movieTitle={movie.title} 
                src={movie.image_url} 
              />
            ))
          }
          {
            data && data.tvseries.map(tv => (
              <MovieCard 
                key={tv.id}
                id={tv.id}
                year={tv.year} 
                category={tv.category} 
                genre={tv.genre} 
                movieTitle={tv.title} 
                src={tv.image_url} 
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Home