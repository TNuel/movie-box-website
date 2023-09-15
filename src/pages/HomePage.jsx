import React, { useEffect, useState } from "react";
import axios from "axios";
import Poster from "../assets/poster.svg";
import Logo from "../assets/logo.png";
import hamButton from "../assets/Menu.png";
import Right from "../assets/Chevron_right.png";
import Play from "../assets/Plays.png";
import imbdLogo from "../assets/imbd.png";
import LogoImg from "../assets/tv.png";
import rottenTomatoesLogo from "../assets/rotten-tomatoes.png";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";

function HomePage() {
  const [posterMovieData, setPosterMovieData] = useState(null);
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const apiKey = "7a529b24ef789e4a50de476f2a2bbd35";
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=John+Wick&api_key=${apiKey}`
        );
        console.log(response.data.results);
        setPosterMovieData(response.data.results[3]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching poster:", error);
        setLoading(false);
      }
    };
    fetchPoster();
  }, []);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const apiKey = "7a529b24ef789e4a50de476f2a2bbd35";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`
        );
        console.log(response.data.results);
        const top10Movies = response.data.results.slice(0, 10);
        setTopMovies(top10Movies);
      } catch (error) {
        console.error("Error fetching top movies:", error);
        toast.error("An error occurred , try again later.");
      }
    };

    fetchTopMovies();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const apiKey = "7a529b24ef789e4a50de476f2a2bbd35";
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`
      );
      setSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error searching for movies:", error);
      toast.error("Oops! No Movies Found");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className="w-[100vw] md:w-screen h-[50vh] lg:h-[80vh] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${Poster})`,
        }}
      >
        <header>
          <div className="flex items-center justify-between w-full lg:py-10 lg:px-40 px-10 py-4">
            <img src={Logo} alt="" className="cursor-pointer hidden md:flex" />
            <img
              src={LogoImg}
              alt="Only logo"
              className="cursor-pointer flex md:hidden w-5 h-5"
            />
            <div className="relative text-xs md:text-base flex items-center">
              <input
                type="text"
                placeholder="What do you want to watch?"
                className="lg:h-10 h-6 md:w-96 w-1/2 rounded-md border md:border-2 md:border-solid px-3 py-2 text-white bg-transparent"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
              <div onClick={handleSearch}>
                <SearchIcon className="absolute md:right-4 md:-top-1 translate-y-1/2 text-white cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-center items-center md:gap-x-3">
              <span className="text-white text-xs lg:text-base font-bold">
                Sign in
              </span>
              <img
                src={hamButton}
                alt=""
                className="cursor-pointer w-6 h-6 lg:w-12 lg:h-12"
              />
            </div>
          </div>
          {posterMovieData ? (
            <section className="text-left md:ml-40 md:mt-28 ml-10 mt-12 flex flex-col gap-y-4">
              <h2 className="text-white text-lg md:text-6xl font-semibold md:w-2/5 w-1/2">
                {posterMovieData.title}
              </h2>
              <div className="flex gap-x-8">
                <img src={imbdLogo} alt="" />
                <img src={rottenTomatoesLogo} alt="" />
              </div>
              <p className="text-white text-left text-xs lg:text-lg w-3/5 md:w-2/5">
                {posterMovieData.overview}
              </p>
              <button className=" h-12 bg-[#BE123C] w-1/4 lg:w-1/6 px-4 text-xs lg:text-base lg:px-10 gap-x-2 lg:gap-x-6 rounded-lg capitalize lg:uppercase text-white flex items-center justify-between py-4 cursor-pointer">
                <img src={Play} alt="Play Icon" />
                Watch Trailer
              </button>
            </section>
          ) : (
            <p className="text-white">Loading....</p>
          )}
        </header>
        <main className="mt-20">
          <section>
            {loading ? (
              <Spinner />
            ) : (
              <>
                {Array.isArray(searchResults) &&
                  searchQuery &&
                  searchResults.length > 0 && (
                    <div className="mb-12">
                      <h1 className="text-left text-xl mb-8">Search Results</h1>
                      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 lg:mx-40 gap-16 my-8 lg:my-20">
                        {searchResults.map((movie) => (
                          <MovieCard key={movie.id} movie={movie} />
                        ))}
                      </section>
                    </div>
                  )}
                <div className="flex justify-between items-center mx-10 lg:mx-40 mt-24 lg:mt-40">
                  <h1 className="text-left text-lg lg:text-3xl lg:mb-4 text-textMain font-bold">
                    Featured Movie
                  </h1>
                  <div className="text-sm lg:text-lg text-activeColor font-semibold hover:border hover:px-4 hover:py-3 hover:border-activeColor hover:rounded-md flex justify-between items-center w-20 lg:w-28 hover:w-40 cursor-pointer">
                    <span>See more</span>
                    <img src={Right} alt="right icon" />
                  </div>
                </div>
                {Array.isArray(topMovies) && topMovies.length > 0 && (
                  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 lg:mx-40 gap-16 my-8 lg:my-20">
                    {topMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </section>
                )}
              </>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
