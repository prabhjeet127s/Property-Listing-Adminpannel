import axiosInstance from "../../utils/axiosInstance"


export const getallproperty = async ( query : string) => {

    console.log("recived query" +query )

    try {
        const response = await axiosInstance.get(`/api/property?${query}`)
        return response

    } catch (error) {
        console.log(error, "add properties error")
    }






}

