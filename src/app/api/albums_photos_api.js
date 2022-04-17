import axios from "../../utils/axios"

export const getAlbumUser = async (idUser) => {
  try {
    const response = await axios.get("albums?userId=" + idUser)
    return response
  } catch (error) {
    throw error
  }
}

export const getPhotoAlbum = async (idAlbum) => {
  try {
    const response = await axios.get("photos?albumId=" + idAlbum)
    return response
  } catch (error) {
    throw error
  }
}