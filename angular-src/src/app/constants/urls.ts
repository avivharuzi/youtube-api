const BASE_URL: string = 'http://localhost:3000';

export const DEFAULT_IMAGE_PATH: string = 'assets/images/defaults/default-image.png';
export const LOADING_GIF_PATH: string = 'assets/images/tools/loading.gif';

const BASE_API_URL: string = `${BASE_URL}/api`;

const BASE_YOUTUBE_URL: string = `${BASE_API_URL}/youtube`;

export const YOUTUBE_VIDEOS_SEARCH: string = `${BASE_YOUTUBE_URL}/videos/search`;
export const YOUTUBE_VIDEOS_PAGE_TOKEN: string = `${BASE_YOUTUBE_URL}/videos`;
export const YOUTUBE_VIDEOS_POPULAR: string = `${BASE_YOUTUBE_URL}/videos/popular`;
export const YOUTUBE_VIDEOS_DETAILS_BY_ID: string = `${BASE_YOUTUBE_URL}/videos/details`;
