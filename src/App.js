import { SideBar, MobileHeader } from "./components/Headers";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import SearchComponent from "./components/SearchInput";
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  let { width } = useWindowSize();
  return (
    <div className="text-white bg-dark-blue font-outfit md:py-6 lg:py-8 lg:flex lg:gap-x-9">
      {/* Header section */}
      <div className="md:mx-6 lg:ml-8 lg:mr-0">
        <MobileHeader />
        <SideBar />
      </div>

      {/* Search Section */}
      <div
        className="my-6 md:my-8 lg:mt-[18px]"
        style={{ width: width >= 1024 ? "calc(100% - 164px)" : "100%" }}
      >
        <SearchComponent />

        {/* Routes */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
