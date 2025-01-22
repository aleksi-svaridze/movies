import { NavLink } from 'react-router'
import { BookmarkedIcon, BookmarkedIconDesktop, MainMenuIcon, MainMenuIconDesktop, MoviesIcon, MoviesIconDesktop, TvSeriesIcon, TvSeriesIconDesktop } from '../assets/Icons'
import logo from '../assets/images/logo.png'
import { useWindowSize } from '@uidotdev/usehooks'

export const MobileHeader = () => {
    let {width} = useWindowSize();

    return(
        <div className="h-14 bg-semidark-blue flex items-center justify-between px-4 md:rounded-[10px] lg:hidden">
            <img src={logo} className="w-[25px] h-5" alt="website logo" />
            <div className='flex items-center gap-x-6'>
                {width < 768 
                ?  
                <NavLink to={'/'} className="cursor-pointer size-4">
                    {
                         ({isActive}) => (
                           <MainMenuIcon isActive={isActive} />
                        )
                    }
                </NavLink> 
                :
                <NavLink to={'/'} className="cursor-pointer size-5">
                    {
                        ({isActive}) => (
                            <MainMenuIconDesktop isActive={isActive} />
                        )
                    }
                </NavLink>
                }

                {width < 768 
                ?  
                <NavLink to={'/movies'} className="cursor-pointer size-4">
                    {
                        ({isActive}) => (
                            <MoviesIcon isActive={isActive} />
                        )
                    }
                </NavLink> 
                :
                <NavLink to={'/movies'} className="cursor-pointer size-5">
                {
                    ({isActive}) => (
                        <MoviesIconDesktop isActive={isActive} />
                    )
                }
                </NavLink>
                }

                {width < 768 
                ? 
                <NavLink to={'/tvseries'} className="cursor-pointer size-4">
                    {
                        ({isActive}) => (
                            <TvSeriesIcon isActive={isActive} />
                        )
                    }
                </NavLink>
                :
                <NavLink to={'/tvseries'} className="cursor-pointer size-5">
                {
                    ({isActive}) => (
                        <TvSeriesIconDesktop isActive={isActive} />
                    )
                }
                </NavLink>
                }
                
                {width < 768 
                ? 
                <NavLink to={'/bookmarked'} className="cursor-pointer w-[14px] h-4">
                    {
                        ({isActive}) => (
                            <BookmarkedIcon isActive={isActive} />
                        )
                    }
                </NavLink> 
                :
                <NavLink to={'/bookmarked'} className="cursor-pointer w-[17px] h-5">
                    {
                        ({isActive}) => (
                            <BookmarkedIconDesktop isActive={isActive} />
                        )
                    }
                </NavLink>
                }

            </div>
            <div className="size-6 rounded-full border-white border-[1px]"></div>
        </div>
    )
}

export const SideBar = () => {
    return(
        <div 
            className='hidden rounded-[20px] bg-semidark-blue w-24 lg:flex flex-col items-center justify-between pt-9 pb-8' style={{minHeight: 'calc(100vh - 64px)'}}>
            <div className='flex flex-col items-center gap-y-[75px]'>
                <img src={logo} className="w-8 h-[25.6px]" alt="website logo" />
                <div className='flex flex-col gap-y-10 items-center'>
                    <NavLink to={'/'} className="cursor-pointer size-5">
                    {
                        ({isActive, isPending}) => (
                            <MainMenuIconDesktop isActive={isActive} isPending={isPending} />
                        )
                    }
                    </NavLink>
                    <NavLink to={'/movies'} className="cursor-pointer size-5">
                    {
                        ({isActive}) => (
                            <MoviesIconDesktop isActive={isActive} />
                        )
                    }
                    </NavLink>
                    <NavLink to={'/tvseries'} className="cursor-pointer size-5">
                    {
                        ({isActive}) => (
                            <TvSeriesIconDesktop isActive={isActive} />
                        )
                    }
                    </NavLink>
                    <NavLink to={'/bookmarked'} className="cursor-pointer w-[17px] h-5">
                    {
                        ({isActive}) => (
                            <BookmarkedIconDesktop isActive={isActive} />
                        )
                    }
                    </NavLink>
                </div>
            </div>
            <div className="size-6 rounded-full border-white border-[1px]"></div>
        </div>
    )
}