import axiosInstance from "../../utils/axiosInstance"

export const getdashboarData=async()=>{
    const response= await axiosInstance.get('/api/dashboard/view')
    return response

    
}