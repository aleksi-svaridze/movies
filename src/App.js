import SideBar from "./components/Sidebar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import SearchComponent from "./components/SearchInput";
import { useWindowSize } from "@uidotdev/usehooks";
import SingleMovie from "./pages/SingleMovie";
import { useState } from "react";

function App() {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedTvSeries, setBookmarkedTvSeries] = useState([]);

  const setMoviesToFavoriteList = (id) => {
    console.log(id);
  };
  let { width } = useWindowSize();

  return (
    <div className="text-white bg-dark-blue font-outfit md:py-6 lg:py-8 lg:flex lg:gap-x-9">
      <SideBar />
      <div
        className="my-6 md:my-8 lg:mt-[18px] lg:pl-24 bg-dark-blue w-full"
        style={{ width: width >= 1024 ? "calc(100% - 68px)" : "100%" }}
      >
        <SearchComponent />

        {/* Routes */}
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                setMoviesToFavoriteList={setMoviesToFavoriteList}
                bookmarkedMovies={bookmarkedMovies}
              />
            }
          />
          <Route path="/movies" element={<Movies />}>
            <Route path="/movies/:id" element={<SingleMovie />} />
          </Route>
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
