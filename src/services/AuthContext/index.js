import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../../config/config';
import asyncStorageService from "../AsyncStorage/asyncStorageService.js";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authData, setAuthData] = useState(null);

  const handleAuthData = (dataToSet) => {
    console.log("SETTING AUTHDATA WITH:", dataToSet);
    setAuthData(dataToSet);
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/streamplus/movie/`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Error al obtener las películas');
      }
      const { message } = await response.json();
      setMovies(message);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncStorageService.getData('authData')
      .then(data => {
        console.log("Found something???", data);
        if (data) {
          handleAuthData(data);
        }
      })
      .catch(error => {
        console.log("Error fetching authData from AsyncStorage:", error);
      })
      .finally(() => {
        setLoading(false)
        fetchMovies();
      });
  }, []);

  useEffect(() => {
    if (authData) {
      console.log('Usuario logueado');
      asyncStorageService.storeData('authData', authData);
    } else {
      console.log('Usuario deslogueado');
      asyncStorageService.clearAll();
    }
  }, [authData]);

  return (
    <MovieContext.Provider value={{ movies, loading, error, handleAuthData, authData, setLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
