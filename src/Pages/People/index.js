import axios from "axios";
import { useEffect, useState } from "react";
import PeopleContent from "../../components/PeopleContent";
import CustomPagination from "../../components/pagination/index";

const People = () => {
  const [page,setPage] = useState(1);
  const [content, setContent] = useState([]);

  const handleChange = (e, value) => {
    setPage(value)
  }

  const fetchRating = async () => {
    const { data } = await axios.get(
      
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data.results);
    console.log(data.results)
  };


  useEffect(() => {
    fetchRating();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">People</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <PeopleContent
              key={c.id}
              id={c.id}
              poster={c.profile_path}
              name={c.name}
            />
          ))}
      </div>

      <CustomPagination handleChange={handleChange} />
    </div>
  );
};

export default People;
