import { Stack,Rating } from "@mui/material";
import { img_300, noPicture } from "../../config/config";
// import { Link } from "react-router-dom";
import "./SingleContent.css";
import MovieDetails from "../MovieDetails/index"

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    // <Link to={`/${id}`}>Link Test</Link>
      <MovieDetails media_type={media_type} id={id}>
          <img className="poster" src={({poster})?`${img_300}${poster}`:noPicture} alt={title} />
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
        
      </MovieDetails>
  );
};

export default SingleContent;
