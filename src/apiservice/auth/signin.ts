import axiosInstance from "../../utils/axiosInstance"

export const singin=async(data: { email: string; password: string })=>{
    const response=await axiosInstance.post('/api/admin/login',data)
    return response
    
}