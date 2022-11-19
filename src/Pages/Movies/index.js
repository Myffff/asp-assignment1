import axios from "axios";
import { useEffect, useState,  lazy, Suspense } from "react";
// import Genres from "../../components/Genres/index";
import useGenre from "../../hooks/useGenre";
import SingleContent from "../../components/SingleContent/index";
// import CustomPagination from "../../components/pagination/index";

const Genres = lazy(() => import("../../components/Genres/index"));
const CustomPagination = lazy(() => import("../../components/pagination/index"));
const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [content, setContent] = useState([]);
  const [numOfPage, setNumOfPage] = useState();
  const genreforURL = useGenre(selectedGenres);

  let [page,setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(value)
  }

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPage(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page,genreforURL]);
  
  return(
    <div>
      <span className="pageTitle">Movies</span>
      <Suspense>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
      </Suspense>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPage > 1 && (
        <Suspense>
          <CustomPagination handleChange={handleChange} numOfPage={numOfPage} />
        </Suspense>
      )}
      
    </div>
  ) 
};

export default Movies;
