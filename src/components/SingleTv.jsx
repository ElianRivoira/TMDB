import React from 'react'
import { useParams } from 'react-router';
import {GoPrimitiveDot} from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";

const SingleTv = ({serie, handleFavorites}) => {
    const { name } = useParams();
    const poster = "https://image.tmdb.org/t/p/w342".concat(serie.poster_path);
  
    return (
      <div className='container'>
        <div className='divInfo1'>
          <h1>{name}</h1>
          <img className='img' src={serie.poster_path ? poster : ''} alt="poster" />
        </div>
        <div className='divInfo2'>
          <ul className='ulInfo'>
            <li><GoPrimitiveDot /> First_air_date: {serie.first_air_date} <button className="button favButton" onClick={()=>handleFavorites(name)}><MdFavoriteBorder /></button></li>
            <li><GoPrimitiveDot /> Last_air_date: {serie.last_air_date}</li>
            <li><GoPrimitiveDot /> Genres:{serie.genres ? serie.genres.map((genre)=>(<span key={genre.id}>{genre.name} </span>)):null}</li>
            <li><GoPrimitiveDot /> Original Language: {serie.original_language}</li>
            <li><GoPrimitiveDot /> Popularity: {serie.popularity}</li>
            <li><GoPrimitiveDot /> In production: {serie.in_production ? 'Yes' : 'No'}</li>
            <br />
            <br />
            <li>{serie.overview}</li>
          </ul>
        </div>
      </div>
    );
  };

export default SingleTv