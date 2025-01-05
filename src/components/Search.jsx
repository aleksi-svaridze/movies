import { useEffect, useState } from "react";
import { SearchIcon, SearchIconDesktop } from "../assets/Icons"
import { useWindowSize } from "@uidotdev/usehooks"
import { useLocation } from "react-router";

function SearchComponent() {
    const {width} = useWindowSize();
    const location = useLocation();
    
    const [placeholderText, setPlaceholderText] = useState('');

    useEffect(() => {
        if(location.pathname === '/movies') {
            setPlaceholderText('Search for movies')
        } else if(location.pathname === '/tvseries') {
            setPlaceholderText('Search for TV series')
        } else if(location.pathname === '/bookmarked') {
            setPlaceholderText('Search for bookmarked shows')
        } else {
            setPlaceholderText('Search for movies or TV series')
        }
    },[location.pathname])

  return (
    <div className='flex items-center gap-x-4 md:gap-x-6'>
        {width < 768 ?   <SearchIcon /> : <SearchIconDesktop />}
        <input 
            type='text' 
            className="h-[52px] md:h-[60px] text-base md:text-2xl font-light bg-dark-blue w-full focus:outline-none placeholder:text-base md:placeholder:text-2xl placeholder:opacity-50 placeholder:font-light caret-red focus:border-b-[1px] border-grayish-blue" 
            placeholder={placeholderText}
        />
    </div>
  )
}

export default SearchComponent