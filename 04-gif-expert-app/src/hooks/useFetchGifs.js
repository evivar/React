import { useEffect, useState } from "react";
import searchGifs from "../helpers/getGifs";

/**
 * Es un custom hook, generado con el snippet rafc, pero en vez de devolver un jsx, HTML + JS
 * devuelve un objeto
 * @param {String} category categoria a buscar
 * @returns {Object}
 */
export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getGifsFromAPI = async () => {
    const gifsAPI = await searchGifs(category);
    setGifs(gifsAPI);
    setIsLoading(false);
  }
  
  /**
   * Este hook se utiliza para disparar "efectos secundarios", procesos a ejecutar cuando algo sucede
   * Sus argumentos son una funcion callback y unas dependencias
   * Es similar al mounted de Vue
   * No puede ser un async la funcion del primer parametro
   * 
   * En este caso, para obtener los Gifs una sola vez lo que hacemos es crear fuera del useEffect
   * una función que obtenga los gifs del helper y llame al setGifs del useState, y dentro del useEffect
   * llamamos a esa función, en este caso getGifsFromAPI
   */
  useEffect(
    () => {
      // Codigo a ejecutar
      getGifsFromAPI();
    },
    // Dependencias, si se quedan vacias solo se disparará la primera vez que se crea este componente
    []
  );

    return {
        gifs,
        isLoading
    }

}

export default useFetchGifs;
