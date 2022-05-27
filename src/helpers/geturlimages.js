import { IMAGE_URL, DEFAULT_WIDTH_POSTER } from '../services/constants';

export const getURLImage = (width = DEFAULT_WIDTH_POSTER) => `${IMAGE_URL}/${width}`;
