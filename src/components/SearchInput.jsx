import { useEffect, useState, useRef } from "react";
import { SearchIcon, SearchIconDesktop } from "../assets/Icons"
import { useWindowSize } from "@uidotdev/usehooks"
import { useLocation } from "react-router";

function SearchComponent() {
    const {width} = useWindowSize();
    const location = useLocation();
    const [placeholderText, setPlaceholderText] = useState('');
    const inputRef = useRef();

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

    const focusInput = () => {
        inputRef.current.focus();
    };

  return (
    <div className='flex items-center gap-x-4 md:gap-x-6 mb-6 md:mb-8 lg:mb-[19px] bg-dark-blue px-4 md:px-6 lg:px-9'>
        <div onClick={focusInput} className="cursor-pointer">
            {width < 768 ?   <SearchIcon /> : <SearchIconDesktop />}
        </div>
        <input
            ref={inputRef}
            type='text' 
            className="h-[52px] md:h-[60px] text-base md:text-2xl font-light bg-dark-blue w-full focus:outline-none placeholder:text-base md:placeholder:text-2xl placeholder:opacity-50 placeholder:font-light caret-red focus:border-b-[1px] border-grayish-blue" 
            placeholder={placeholderText}
        />
    </div>
  )
}

export default SearchComponent