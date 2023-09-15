import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import Play from "../assets/play.png";
import TwoTickets from "../assets/TwoTickets.png";
import Lists from "../assets/Lists.png";
import Staricon from "../assets/Star.png";
// import Listicon from '../assets/list.png'
// import Ticketicon from '../assets/ticket.png'
function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [genreNames, setGenreNames] = useState([]);

  const formatToUTCYear = (dateString) => {
    const localDate = new Date(dateString);
    const utcYear = localDate.getUTCFullYear();
    return utcYear.toString();
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "7a529b24ef789e4a50de476f2a2bbd35";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const formattedDate = formatToUTCYear(response.data.release_date);

        // Fetch genre data
        const genreResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );

        // Map genre IDs to genre names
        const genreNames = response.data.genres.map(
          (genre) =>
            genreResponse.data.genres.find((g) => g.id === genre.id).name
        );

        setGenreNames(genreNames); // Store genre names in state
        const updatedMovieDetails = {
          ...response.data,
          release_date: formattedDate,
        };
        setMovieDetails(updatedMovieDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="flex items-center w-screen h-screen">
      <NavBar className="hidden md:flex" />
      <>
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Spinner />
          </div>
        ) : movieDetails ? (
          <Container className="">
            <div className="relative overflow-hidden w-[70vw] h-[60vh]  text-center inline-block">
              <img
                className=" rounded-xl w-full h-full absolute bg-cover bg-no-repeat -z-10 text-center"
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={movieDetails.title}
                data-testid="movie-poster"
              />
              <div className="text-white z-10 h-full flex items-center justify-center my-auto flex-col">
                <img src={Play} alt="Play Button" />
                <h4 className="mb-6 text-xl font-semibold">Watch Trailer</h4>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-3/4 text-textMain text-lg font-semibold">
                <div className="flex justify-start items-center gap-x-6">
                  <p data-testid="movie-title">
                    {movieDetails.title} <span>.</span>
                  </p>
                  <p data-testid="movie-release-date">
                    {movieDetails.release_date} <span>.</span>
                  </p>
                  <p data-testid="movie-runtime">{movieDetails.runtime} min</p>
                  <div className="flex flex-wrap gap-x-4 text-activeColor">
                    {/* Display genre names in separate divs */}
                    {genreNames.map((genreName, index) => (
                      <div
                        className="border border-solid text-lg rounded-full py-2 px-4 my-2 border-[#dcbfc7]"
                        key={index}
                      >
                        {genreName}
                      </div>
                    ))}
                  </div>
                </div>
                <p
                  data-testid="movie-overview"
                  className="text-left text-textMinor text-lg"
                >
                  {movieDetails.overview}
                </p>
              </div>
              <div className="w-1/4 mt-2 ml-3">
                <div className="flex justify-end items-center font-semibold text-textMain gap-x-6">
                  <img src={Staricon} alt="star rating" />
                  <span className="text-gray-200 text-lg">
                    {movieDetails.vote_average}
                  </span>
                  | {movieDetails.vote_count}
                </div>
                <div className="mt-4 w-full text-end">
                  <button className="flex w-full gap-4 text-white text-base py-3 px-6 rounded-lg justify-center items-center hover:bg-bgActive hover:text-textMinor font-semibold bg-activeColor">
                    <img src={TwoTickets} alt="Two Tickets" />
                    <span>See Showtimes</span>
                  </button>
                  <button className="flex w-full mt-4 gap-4 border-[#BE123C] border-2  text-textMinor py-3 px-6 text-base rounded-lg justify-center items-center hover:bg-activeColor hover:text-white font-semibold bg-bgActive">
                    <img src={Lists} alt="Two Tickets" />
                    <span>Watch more movies</span>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        ) : (
          <div className="w-full flex items-center justify-center">
            <p className="text-activeColor" style={{ color: "red" }}>
              Unable to load movie details, try again later
            </p>
          </div>
        )}
      </>
    </div>
  );
}

export default MovieDetails;
