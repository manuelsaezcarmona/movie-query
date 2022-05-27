import { API_KEY, DEFAULT_LANGUAGE, API_URL } from './constants';

/** Get Configuration settings
 * @returns {object} configuration API
 */

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
 * Gets movie detail data
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
 * @param {number} page search
 * @returns {{
 *  page: number,
 *  results: object,
 *  total_pages: number,
 *  total_results: number
 * }} movies search result
 */
export const getMoviesByTerm = async (term, page = 1) => {
  try {
    const resp = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${term}&language=${DEFAULT_LANGUAGE}&page=${page}`
    );
    const data = resp.json();

    return data;
  } catch (error) {
    return error;
  }
};
