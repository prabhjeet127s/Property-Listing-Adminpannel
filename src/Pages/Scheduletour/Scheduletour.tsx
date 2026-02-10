import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import Pagination from '../../components/Pagination';
import { getallscheduletour } from '../../apiservice/Scheduletour/Scheduletour'

const Scheduletour = () => {
    const [limits, setLimit] = useState(10);
    const [offset, setOffset] = useState<number>(0);

    
    const { data,isLoading } = useQuery({
        queryKey: ["getallscheduletour", offset, limits],
        queryFn: async () => {
            const query = [
                `offset=${offset}`,
                `limit=${limits}`,
            ].join("&");
            return await getallscheduletour(query)
        }
    })
  if (isLoading) {
    return <p className="p-6 text-gray-600">Loading users...</p>;
  }

    const tours = data?.data?.data?.bookings;
    const totalcount=data?.data?.data?.totalCount;

    console.log(data)

    console.log(tours)
    return (
        <div className=' bg-gray-50 p-10  w-[1500px] ml-52   pt-10' >

            <table className=" p-4  w-full border-none  text-left">
                <thead className="text-gray-500 border-none p-3 m-3 text-sm uppercase border-b">
                    <tr>
                        <th className="py-4">S/N</th>
                        <th className="py-4">NAME</th>
                        <th className="py-4">EMAIL</th>
                        <th className="py-4">STATUS</th>
                        <th className="py-4">DATE</th>
                        <th className="py-4">TIME</th>
                        <th className="py-4">ACTION</th>
                    </tr>
                </thead>

                <tbody className="  border-none text-gray-700">
                    {
                        tours?.map((item, index: number) => (
                            <tr
                                key={item.ListingKey}
                                className=" border-none hover:bg-gray-50 transition"
                            >
                                <td className="py-6 text-lg">{offset+index + 1}.</td>

                                <td className="py-6 text-lg font-medium">
                                    {item.userName}
                                </td>

                                <td className="py-6 text-lg">
                                    {item.email}
                                </td>

                                <td className="py-6 text-lg">
                                    {item.status}
                                </td>

                                <td className="py-6 text-lg">
                                    {item.creationDate}
                                </td>

                                <td className="py-6 text-lg">
                                    {item.bookingDateAndTime}
                                </td>
                                <td>
                                    <div className='py-6 text-lg'  >
                                        <button className='px-2' ><CiTimer className='size-10' /></button>
                                        <button className='px-2' ><CiCalendarDate className='size-10' /></button>
                                    </div>
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
    )
}

export default Scheduletour








