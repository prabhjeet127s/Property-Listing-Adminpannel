import axiosInstance from "../../utils/axiosInstance"


export const getalldashboarddata=async()=>{
    try {
        const response=await axiosInstance.get(`/api/dashboard/dailyTourBookings`)
        return response
    } catch (error) {
        console.log(error,"dashboarddata");
    }
}
export const getalldashdatamonthly=async()=>{
    try {
        const response=await axiosInstance.get(`/api/dashboard/monthlyTourBookings`)
        return response
    } catch (error) {
        console.log(error,"dashboarddata");
    }
}
export const getalldashdatayearly=async()=>{
    try {
        const response=await axiosInstance.get(`/api/dashboard/yearlyTourBookings`)
        return response
    } catch (error) {
        console.log(error,"dashboarddata");
    }
}