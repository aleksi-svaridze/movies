import { SideBar, MobileHeader } from "./components/Headers";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from './pages/TvSeries';
import Bookmarked from "./pages/Bookmarked";
import Search from './pages/Search';
import NotFound from "./pages/NotFound";
import SearchComponent from "./components/Search";
// import { useWindowSize } from "@uidotdev/usehooks";

function App() {

  return (
    <div className="text-white bg-dark-blue font-outfit md:pt-6 lg:pt-8">
      {/* Header section */}
      <div className="md:mx-6">
        <MobileHeader />
      </div>
      
      <SideBar />

        {/* Search Section */}
        <div className="my-6 md:my-8 mx-4 md:mx-6">
          <SearchComponent />
        </div>

      {/* Routes */}
        <Routes>
          <Route index path="/" element={ <Home /> }/>      
          <Route path="/movies" element={ <Movies /> }/>      
          <Route path="/tvseries" element={ <TvSeries /> }/>      
          <Route path="/bookmarked" element={ <Bookmarked /> }/>      
          <Route path="/search" element={ <Search /> }/>      
          <Route path="*" element={ <NotFound /> }/>      
        </Routes>
    </div>
  );
}

export default App;
