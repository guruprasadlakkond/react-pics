import axios from "axios";

async function getImages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: term
    },
    headers: {
      authorization:""
        
    }
  });

  return response.data.results;
}

export { getImages };
