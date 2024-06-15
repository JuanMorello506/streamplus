import React, { createContext, useState, useEffect } from 'react';
import { err } from 'react-native-svg';
import { BASE_URL } from '../../config/config';
import categoryService from '../category.js';

const defaultAuthData = true;

// Crea un contexto con valor inicial nulo
const MovieContext = createContext();

// Componente proveedor del contexto
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authData, setAuthData] = useState(true);

    const fetchMovies = async () => {
        try {
          const response = await fetch(`${BASE_URL}/streamplus/movie/`,{
            method: 'GET'
          }); 
          if (!response.ok) {
            throw new Error('Error al obtener las películas');
          }
          const {message} = await response.json();
          setMovies(message);
        } catch (error) {
          setError(error.message);
          console.log(error)
        } finally {
          setLoading(false);

        }
      };


  useEffect(() => {
    fetchMovies();
    console.log("MOVIES:", movies)
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, error, setAuthData, authData}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
