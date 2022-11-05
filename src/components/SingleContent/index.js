import { Stack,Rating } from "@mui/material";
import { img_300 } from "../../config/config";
import "./SingleContent.css";

const SingleContent = ({ poster, title, date, media_type, vote_average }) => {
  return (
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
  );
};

export default SingleContent;
