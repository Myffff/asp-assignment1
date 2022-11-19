import React, {useState, lazy, Suspense} from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
// import SimpleBottomNavigation from "./components/MainNav";
// import Movies from "./Pages/Movies/index";
// import Series from "./Pages/Series/index";
// import TopRating from "./Pages/TopRating/index";
import Trending from "./Pages/Trending";
// import Search from "./Pages/Search/index";
// import People from "./Pages/People";
// import MaterialUISwitch from "./components/Switch";
import FormControlLabel from '@mui/material/FormControlLabel';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const Movies = lazy(() => import("./Pages/Movies/index"));
const Series = lazy(() => import("./Pages/Series/index"));
const TopRating = lazy(() => import("./Pages/TopRating/index"));
const Search= lazy(() => import("./Pages/Search/index"));
const People= lazy(() => import("./Pages/People/index"));
const MaterialUISwitch = lazy(() => import("./components/Switch"));
const SimpleBottomNavigation = lazy(() => import("./components/MainNav"));

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

  const [color, setColor] = useState('#39445a')
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
      setChecked(event.target.checked);
      if (color === '#39445a') {
        setColor('#d2c3b0')
      } else {
        setColor('#39445a')
      }
  };

  return (
    <div style={{backgroundColor: color}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Suspense>
        <FormControlLabel
          control={
              <MaterialUISwitch/>
          }
          checked={checked}
          onChange={handleChange}
          sx={{marginTop: "100px",
            marginLeft: "20px",
            }}
        />
        </Suspense>
        <Suspense>
          <Routes>
            <Route path="/" element={<Trending/>} />
            <Route path="/topRating" element={<TopRating/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/people" element={<People/>} />
            {/* add some more */}
          </Routes>
        </Suspense>
        <Suspense>
          <SimpleBottomNavigation />
        </Suspense>
        
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </div>
  );
}

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App/>)
