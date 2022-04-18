import axios from "../../utils/axios"

export const getPostComment = async (idPost) => {
  try {
    const response = await axios.get("comments?postId="+idPost)
    return response
  } catch (error) {
    throw error
  }
}