import axios from "axios";

const baseURL = `https://www.tabnews.com.br/api/v1`;

export const listAllContent = async (page) => {
  try {
    const axiosResponse = await axios.get(`${baseURL}/contents?page=${page}&per_page=10&strategy=relevant`);
    return axiosResponse.data;
  } catch (error) {
    console.log(`An error occurred in the request: ${error}`);

    if (error.response && error.response.status === 429)
    {
      console.log("Retrying after 1 second");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return listAllContent(page);
    }
  }
}

export const showPostContent = async (user, slug) => {
  try {
    const axiosResponse = await axios.get(`${baseURL}/contents/${user}/${slug}`);
    return axiosResponse.data;
  } catch (error) {
    console.log(`An error occurred in the request: ${error}`);

    if (error.response && error.response.status === 429)
    {
      console.log("Retrying after 1 second");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return listAllContent(page);
    }
  }
}