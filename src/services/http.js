/* eslint-disable no-unused-vars */
import { API_KEY, DEFAULT_LANGUAGE, IMAGE_URI, API_URL } from './constants';

/** Get Configuration settings
 * @returns {object} configuration API
 */

// * https://api.themoviedb.org/3/configuration?api_key=8f781d70654b5a6f2fa69770d1d115a3
export const getConfigurationAPI = async () => {
  try {
    const resp = await fetch(`${API_URL}/configuration?api_key=${API_KEY}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * Gets movie data
 * @param {number} id movie identifier
 * @returns {object} movie information
 */
export const getMovieById = async (id) => {
  try {
    const resp = await fetch(
      `${API_URL}/movie/${id}?api_key=${API_KEY}&language=${DEFAULT_LANGUAGE}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * Gets movies list by search term
 * @param {string} term search term
 * @returns {{
 *  page: number,
 *  results: object,
 *  total_pages: number,
 *  total_results: number
 * }} movies search result
 */
export const getMoviesByTerm = async (term) => {
  try {
    const resp = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${term}`
    );
    const data = resp.json();

    return data;
  } catch (error) {
    return error;
  }
};
