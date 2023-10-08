import axios from 'axios';

const URL = 'https://youtube-v31.p.rapidapi.com/search'

// const options = {
//   url: URL,
//   params: {
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };



// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async ( selectedCategory ) => {

  const options = {
    // method: 'GET',
    // url: URL,
    params: {
      q: selectedCategory,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '9'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.get(URL, options);
    // console.log(response.data.items);

    return response;

  } catch (error) {
    console.error(error);
  }
}

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${URL}/${url}`, options);
// }


/*
export default const fetchFromAPI = async () => {

  const options = {

  }

  try {
    const response = await axios.get(URL, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

... in Feed.jsx:

import fetchFromAPI from '../utils/fetchFromAPI'

useEffect(() => {
  fetchFromAPI()
    .then ((response) => {
      const videoData = response.data.items;
      console.log(videoData);
    })
});

*/