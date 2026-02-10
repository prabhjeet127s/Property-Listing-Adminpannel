import axiosInstance from "../../utils/axiosInstance";

export const getallscheduletour=async(query:string)=>{

try{
    const response=axiosInstance.get(`/api/tour/bookings/?${query}`);
    return response;
}  
catch(error){
    console.log(error);
    
}

}

