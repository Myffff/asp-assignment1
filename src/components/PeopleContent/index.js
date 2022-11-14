import { img_300, noPicture } from "../../config/config";
import "./PeopleContent.css";
import PeopleDetails from "../PeopleDetails/index"

const PeopleContent = ({ id, poster, name}) => {
  return (
    <PeopleDetails id={id}>
          <img className="poster" src={({poster})?`${img_300}${poster}`:noPicture} alt={name} />
          <div className="media_text">
            <b className="title">{name}</b> 
          </div>
    </PeopleDetails>
  );
};

export default PeopleContent;
