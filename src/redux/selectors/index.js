import { useSelector } from 'react-redux';

export const selectFavMovies = () => useSelector((state) => state.user.favourites);

export const selectFavMovieById = (id) => {
  const favs = useSelector((state) => state.user.favourites);
  return !!favs.find((fav) => fav.id === id);
};
