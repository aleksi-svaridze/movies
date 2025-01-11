import React from 'react'
import { HeadingLLight } from '../components/Typography'
import { MovieCard } from '../components/Cards'
import data from '../data/data.json';

function TvSeries() {
  return (
    <div className='px-4 md:px-6 lg:px-9'>
    <HeadingLLight text='TV Series' mb='mb-[25px]' />

    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-[15px] md:gap-y-6 md:gap-x-7 xl:gap-y-8 xl:gap-x-10 flex-wrap'>
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
  )
}

export default TvSeries