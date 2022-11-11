import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent";
import CustomPagination from "../../components/pagination/index";

const TopRating = () => {
  const [page,setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchRating = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };


  useEffect(() => {
    fetchRating();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Top Rating</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>

      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default TopRating;