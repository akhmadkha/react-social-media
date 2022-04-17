import axios from "../../utils/axios"

export const getUsers = async () => {
  try {
    const response = await axios.get("users")
    return response
  } catch (error) {
    throw error
  }
}

export const getDetailUsers = async (params) => {
  try {
    const response = await axios.get("users/" + params)
    return response
  } catch (error) {
    throw error
  }
}