import { SearchIcon, SearchIconDesktop } from "../assets/Icons"
import { useWindowSize } from "@uidotdev/usehooks"

function SearchComponent() {
    const {width} = useWindowSize();
  return (
    <div className='flex items-center gap-x-4 md:gap-x-6'>
        {width < 768 ?   <SearchIcon /> : <SearchIconDesktop />}
        <input 
            type='text' 
            className="h-[52px] md:h-[60px] text-base md:text-2xl font-light bg-dark-blue w-full focus:outline-none placeholder:text-base md:placeholder:text-2xl placeholder:opacity-50 placeholder:font-light caret-red focus:border-b-[1px] border-grayish-blue" 
            placeholder="Search for movies or TV series"
        />
    </div>
  )
}

export default SearchComponent