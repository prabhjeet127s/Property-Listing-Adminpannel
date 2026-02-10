import axiosInstance from "../../utils/axiosInstance"



export const getUsersList = async (offset?: number, limit?: number, userId?: number, search?: string) => {
    let url = `/api/user/list?offset=${offset}&limit=${limit}`;

    if (userId !== null) {
        url += `&userId=${userId}`;
    }
    if (search) {
        url += `&text=${search}`;
    }
    const response = await axiosInstance.get(url);
    return response;
}


export const getAllUsersList = async (query: string) => {
  try {
    const response = await axiosInstance.get(`/api/user/list?${query}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};



export const changeuserstatus = async (formData: FormData) => {
  try {
    const response = await axiosInstance.put(
      `/api/user/status`,
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};


