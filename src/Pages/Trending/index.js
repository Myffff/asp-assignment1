import axios from "axios";
import "./Trending.css";
import { useState } from "react";
import SingleContent from "../../components/SingleContent";
import CustomPagination from "../../components/pagination/index";
import { useQuery } from "react-query";

const Trending = () => {
  let [page,setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(value)
  }

  const fetchTrending = async (args) => {
    const [, pagePart] = args.queryKey
    const {page} = pagePart
    const {data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    return data
  };

  const { data , error, isLoading, isError } = useQuery(
    [`Trending${page}`, {page: page}], fetchTrending
  );


  if (isLoading) {
    return <p>isLoading</p>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {data.results &&
          data.results.map((c) => (
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

      <CustomPagination handleChange={handleChange}/>
    </div>
  );
};

export default Trending;
