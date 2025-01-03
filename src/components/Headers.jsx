import { BookmarkedIcon, MainMenuIcon, MoviesIcon, TvSeriesIcon } from '../assets/Icons'
import logo from '../assets/images/logo.png'

export const MobileHeader = () => {
    return(
        <div className="h-14 bg-semidark-blue flex items-center justify-between px-4 md:rounded-[10px]">
            <img src={logo} className="w-[25px] h-5" alt="" />
            <div className='flex items-center gap-x-6'>
                <div  className="cursor-pointer size-4">
                    <MainMenuIcon />
                </div>
                <div  className="cursor-pointer size-4">
                    <MoviesIcon />
                </div>
                <div  className="cursor-pointer size-4">
                    <TvSeriesIcon />
                </div>
                <div  className="cursor-pointer w-[14px] h-4">
                    <BookmarkedIcon />
                </div>
            </div>
            <div className="size-6 rounded-full border-white border-[1px]"></div>
        </div>
    )
}