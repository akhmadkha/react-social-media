import axios from "../../utils/axios"

export const getPosts = async () => {
  try {
    const response = await axios.get("posts")
    return response
  } catch (error) {
    throw error
  }
}

export const submitPost = async (body) => {
  try {
    const response = await axios.post("posts", body)
    return response
  } catch (error) {
    throw error
  }
}