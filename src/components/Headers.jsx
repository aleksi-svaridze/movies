import { BookmarkedIcon, BookmarkedIconDesktop, MainMenuIcon, MainMenuIconDesktop, MoviesIcon, MoviesIconDesktop, TvSeriesIcon, TvSeriesIconDesktop } from '../assets/Icons'
import logo from '../assets/images/logo.png'

export const MobileHeader = () => {
    return(
        <div className="h-14 bg-semidark-blue flex items-center justify-between px-4 md:rounded-[10px] lg:hidden">
            <img src={logo} className="w-[25px] h-5" alt="website logo" />
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

export const DesktopHeader = () => {
    return(
        <div className='rounded-[20px] bg-semidark-blue w-24 flex flex-col items-center justify-between pt-9 pb-8' style={{minHeight: 'calc(100vh - 64px)'}}>
            <div className='flex flex-col items-center gap-y-[75px]'>
                <img src={logo} className="w-8 h-[25.6px]" alt="website logo" />
                <div className='flex flex-col gap-y-10 items-center'>
                    <div  className="cursor-pointer size-5">
                       <MainMenuIconDesktop />
                    </div>
                    <div  className="cursor-pointer size-5">
                        <MoviesIconDesktop />
                    </div>
                    <div  className="cursor-pointer size-5">
                        <TvSeriesIconDesktop />
                    </div>
                    <div  className="cursor-pointer w-[17px] h-5">
                        <BookmarkedIconDesktop />
                    </div>
                </div>
            </div>
            <div className="size-6 rounded-full border-white border-[1px]"></div>
        </div>
    )
}