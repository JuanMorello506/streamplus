import React, { createContext, useState, useEffect } from 'react';
import { err } from 'react-native-svg';
const defaultAuthData = true;
// URL base de tu API
const BASE_URL = 'http://192.168.0.8:8080/streamplus/movie';

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
          const response = await fetch(BASE_URL,{
            method: 'GET'
          }); 
          if (!response.ok) {
            throw new Error('Error al obtener las películas');
          }
          const {message} = await response.json();
          console.log(message)
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
    console.log("MVOIES:" + movies)
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, error, setAuthData, authData}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
