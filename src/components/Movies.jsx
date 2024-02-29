import { Movie } from './Movie'; 
 
function Movies(props) { 
    const { movies } = props; 
 
    return ( 
        <div className="movies"> 
            {movies !== undefined 
                ? movies.map((movie) => ( 
                    <Movie key={movie.imdbID} {...movie} /> 
                )) 
                : <h5> Sorry, we cant find this movie :( </h5> 
            } 
        </div> 
    ); 
} 
 
export { Movies };