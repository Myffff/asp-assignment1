import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import axios from "axios";
import {  noPicture } from "../../config/config";
import PeopleCredit from "../PeopleCredit/index";

const root =(theme)=>({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    height: "70%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 5,
    color: "white",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
  },
});


export default function TransitionsModal({ id, children}) {
  const img_500 = "http://image.tmdb.org/t/p/w500";
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
  };


  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={root.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
          {content && (
            <div className={root.paper}>
              <div className="ContentModal">
                <img
                  src={content.profile_path? `${img_500}/${content.profile_path}` :  noPicture}
                  alt={content.name}
                  className="ContentModal__portrait"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name} (
                      {(
                      content.birthday ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>

                  <span className="ContentModal__description">
                    {content.biography}
                  </span>
                  <div>
                    <PeopleCredit id={id} />
                  </div>

                </div>
              </div>
            </div>
          )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}