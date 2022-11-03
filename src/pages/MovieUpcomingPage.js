import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcoming } from "../api/tmdb-api";
import AddToWatchIcon from '../components/cardIcons/addToWatch'
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const UpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action = {(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingPage;