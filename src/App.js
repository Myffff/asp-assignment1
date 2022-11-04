import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/index";
import Series from "./Pages/Series/index";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search/index";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Trending/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Container>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
