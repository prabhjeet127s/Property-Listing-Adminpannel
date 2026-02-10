
import { getallproperty } from '../../apiservice/Property/Property'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import Pagination from '../../components/Pagination'


interface Listing {
    ListingKey: string;
    PropertySubType: string;
    Country: string;
    City: string;
    LeaseAmount?: number | string;
    LeaseAmountFrequency?: string;
    BusinessType?: string;
}




const Property = () => {

    const [isAdmin, setIsAdmin] = useState(true);
    const [offset, setOffset] = useState<number>(0);
    const limits = 10;






    const { data: propertydata, isLoading} = useQuery({
        queryKey: ["getallpropertiesdata", offset, limits, isAdmin],
        queryFn: async () => {
            const query = [
                `isAdminProperty=${isAdmin}`,
                `offset=${offset}`,
                `limit=${limits}`,
            ].join("&");
            return await getallproperty(query);
        },
        enabled: true
    });
  if (isLoading) {
        return <p className="p-6 text-gray-600">Loading users...</p>;
    }



    const data = propertydata?.data?.data?.propertyList;
    const totalcount = propertydata?.data?.data?.totalCount;
    console.log(totalcount + " property count")




    return (
        <div className="  bg-yellow-50 p-10    w-375 ml-52  ">

            <div className="text-sm text-gray-500 mb-4">
                Home &gt; <span className="text-gray-700 font-medium">Property</span>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6">

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Admin Properties
                    </h1>

                    <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg transition">

                        Add Property
                    </button>
                </div>


                <div className="flex justify-between items-center bg-gray-50 border rounded-lg p-4 mb-6">
                    <div className="text-gray-600 text-sm">
                        Showing <span className="font-medium">0</span> Results
                    </div>

                    <div className="   flex items-center gap-3">

                        <button onClick={() => setIsAdmin(true)}
                            className={` ${isAdmin == true && " bg-yellow-500 text-black "}  p-4  rounded-lg text-lg font-medium transition`} >
                            Admin Property
                        </button>



                        <button onClick={() => setIsAdmin(false)}
                            className={` ${isAdmin == false && " bg-yellow-500 text-black "}  hover:bg-yellow-600  p-4  rounded-lg text-lg font-medium transition `} >
                            MLS Property
                        </button>
                    </div>
                </div>

                {isAdmin ? <div className='text-center  ' >
                    <h3 className='text-xl font-semibold'>No Data Found</h3>
                </div> : <div className="overflow-x-auto  h-1/2 ">
                    <table className="w-full  text-left border-none ">
                        <thead className="text-gray-500 border-none p-3 m-3 text-sm uppercase border-b">
                            <tr>
                                <th className="py-4 ">S/N</th>
                                <th className="py-4">Property Subtype</th>
                                <th className="py-4">Country</th>
                                <th className="py-4">City</th>
                                <th className="py-4">Documents Available</th>
                                <th className="py-4">Lease Amount</th>
                                <th className="py-4">Lease Amount Frequency</th>
                                <th className="py-4">Business Type</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-700 border-none ">
                            {
                                data?.map((item: Listing, index: number) => (
                                    <tr
                                        key={item.ListingKey}
                                        className="border-none hover:bg-gray-50 transition"
                                    >
                                        <td className="py-6">{offset + index + 1}.</td>
                                        <td className="py-6 font-medium">
                                            {item.PropertySubType}
                                        </td>
                                        <td className="py-6">
                                            {item.Country}
                                        </td>
                                        <td className="py-6">
                                            {item.City}
                                        </td>
                                        <td className="py-6">--</td>
                                        <td className="py-6">
                                            {item.LeaseAmount || "--"}
                                        </td>
                                        <td className="py-6">
                                            {item.LeaseAmountFrequency || "--"}
                                        </td>
                                        <td className="py-6">
                                            {item.BusinessType || "--"}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <Pagination
                        totalCount={totalcount}
                        limit={limits}
                        offset={offset}
                        setOffset={setOffset}
                    />
                </div>
                }
            </div>
        </div>
    )
}

export default Property
