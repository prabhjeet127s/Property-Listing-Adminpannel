import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Pagination from "../../components/Pagination";
import {
  getAllUsersList,
  changeuserstatus,
} from "../../apiservice/User/Userlist";

interface User {
  userId: string;
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  status: "active" | "inactive";
}


const Userlist = () => {
  const limits=10;
  const [offset, setOffset] = useState<number>(0);

  
  const [openRowId, setOpenRowId] = useState<string | null>(null);

  const { data: alluserlist, isLoading, refetch } = useQuery({
    queryKey: ["getalluserlist", offset, limits],
    queryFn: async () => {
      const queryParams = `offset=${offset}&limit=${limits}`;
      return await getAllUsersList(queryParams);
    },
  });

  const users = alluserlist?.data?.data?.users || [];
  const totalcount = alluserlist?.data?.data?.totalCount || 0;

  
  const handleStatusChange = async (user:User) => {
    const newStatus =
      user.status === "active" ? "inactive" : "active";

    try {
      const formData = new FormData();
      formData.append("userId", user.userId);
      formData.append("status", newStatus);

      const response = await changeuserstatus(formData);

      if (response?.data?.statusCode === 200) {
        toast.success(`Status changed to ${newStatus}`);
        refetch();
        setOpenRowId(null);
      }
    } catch (error) {
      console.log(error)
    }
  };

  if (isLoading) {
    return <p className="p-6 text-gray-600">Loading users...</p>;
  }

  return (
    <div className=" bg-gray-50   w-375 ml-52   pt-10 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full  border-none border-collapse">
          <thead className="bg-gray-100  border-none ">
            <tr>
              <th className="px-4 py-3 text-left text-lg font-semibold text-gray-600">
                S/N
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold text-gray-600">
                Email
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold text-gray-600">
                Mobile
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold text-gray-600">
                Status
              </th>
              <th className="px-4 py-3 text-center text-lg font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody  className="border-none" >
            {users.map((user:User, index: number) => (
              <tr
                key={user.userId} 
                className="border-none hover:bg-gray-50"
              >
                <td className="px-4 py-6 text-lg text-gray-700">
                  {offset + index + 1}
                </td>

                <td className="px-4 py-6 text-lg text-gray-800 font-medium">
                  {user.name}
                </td>

                <td className="px-4 py-6 text-lg text-blue-600">
                  {user.email}
                </td>

                <td className="px-4 py-6 text-lg text-gray-700">
                  {user.countryCode}
                  {user.mobile}
                </td>

                <td className="px-4 py-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

              
                <td className="px-4 py-6 text-center relative">
                  <button
                    className="text-xl"
                    onClick={() =>
                      setOpenRowId(
                        openRowId === user.userId
                          ? null
                          : user.userId
                      )
                    }
                  >
                    ⋮
                  </button>

                  {openRowId === user.userId && (
                    <div className="absolute right-6 top-10 w-32 bg-white border rounded shadow-md z-10">
                      <button
                        onClick={() =>
                          handleStatusChange(user)
                        }
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {user.status === "active"
                          ? "Inactive"
                          : "Active"}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div  className="pb-10" >
        <Pagination
            totalCount={totalcount}
            limit={limits}
            offset={offset}
            setOffset={setOffset}
            />
            </div>
    </div>
  );
};

export default Userlist;
