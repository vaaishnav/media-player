import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

//upload video -store video in http://localhost:3000/videos
export const uploadVideoAPI=async(video)=>{
    //send response to add component
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}

//getvideoapi called by viewvideo
export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}

//store watch histor by videoCard to http://localhost:3000/history
export const saveHistoryAPI=async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//create an api for get history http://localhost:3000/history to http://localhost:5173/Watch
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//creating an apicall for deleting yotube history from http://localhost:3000/history
export const removeHistoryAPI=async(videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//creating an api for removing video
export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

//creating an api for category component http://localhost:3000/categories
export const addCategoryAPI =async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

export const getCategoryAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

export const removeCategoryAPI=async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}

//to get a single video API add to categories through drag
export const getAVideoAPI=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}

//update category api
export const updateCategoryAPI=async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
}


//getSingleCategory api
export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}