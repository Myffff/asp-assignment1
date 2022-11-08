import { Stack,Rating } from "@mui/material";
import { img_300 } from "../../config/config";
import { Link } from "react-router-dom";
import "./SingleContent.css";

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <Link to={`/${id}`}>
    <div className="media">
      
        <img className="poster" src={`${img_300}${poster}`} alt={title} />
        <div className="media_text">
          <Stack spacing={1}>
            <Rating name="half-rating-read" value={vote_average/2} precision={0.1} readOnly />
          </Stack>
          <b className="title">{title}</b> 
          <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
          </span>
        </div>
      
    </div>
    </Link>
  );
};

export default SingleContent;
