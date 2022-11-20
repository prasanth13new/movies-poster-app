import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';
import CustomPagination from './Pagination/CustomPagination';

function App() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue, page]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row1">
        <MovieList movies={movies} />
      </div>
      {/* <CustomPagination setPage={setPage}/> */}
      {searchValue ? <CustomPagination setPage={setPage} /> : ""}
    </div>
  );
}

export default App;
