import { getdashboarData } from '../../apiservice/Dashboard/Index'
import React from 'react'
import CardDataStats from '../../components/CardDataStats'


import { useQuery } from '@tanstack/react-query';


import { Doughnut } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend);



/*1 chart start here Doughnut*/
interface DashboardData {
  totaluser: number;
  totaltour: number;
}
const DashboardChart = ({ totaltour, totaluser }: DashboardData) => {
  const data = {
    labels: ['Users', 'Schedule Tour'],
    datasets: [
      {
        label: 'Count',
        data: [
          totaltour,
          totaluser
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Dashboard Overview', // Changed from "Line Chart"
      },
    },
    maintainAspectRatio: false, // Important for container sizing
  };

  return (

    <div className='h-[400px]'    >
      <Doughnut className=''
        data={data} options={options} />
    </div>

  );
};
/*1 chart end here Doughnut*/

/* 2 chart start here bar chart*/
interface BookingData {
  year: string;
  booking: number;
}
interface B {
  alldata: BookingData[];
}
const BookingBarChart = ({ alldata }: B) => {

  const chartData = {
    labels: alldata.map(item => item.year),
    datasets: [
      {
        label: 'Bookings',
        data: alldata.map(item => item.booking),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Bookings in ${alldata.map(item => item.year)}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  return (


    <div className='h-[100%]'    >

      <Bar className='' data={chartData} options={options} />
    </div>




  );
};
/* 2 chart start here bar chart*/
/* 3 chart start here  chart*/


const Dashboard = () => {

  const bookingData = [
    { year: "2020", booking: 120 },
    { year: "2021", booking: 180 },
    { year: "2022", booking: 250 },
    { year: "2023", booking: 300 },
  ];
  const { data: dashboard } = useQuery({
    queryKey: ['posts'],
    queryFn: getdashboarData
  })
  /*
    const { data: dashboarddata } = useQuery({
      queryKey: ['data'],
      queryFn: getalldashboarddata
    })
    const { data: dashboarddatamonth } = useQuery({
      queryKey: ['data'],
      queryFn: getalldashdatamonthly
    })
  
    const {data:dashboarddatayearly}=useQuery({
      queryKey:['year'],
      queryFn:getalldashdatayearly
  
    })*/



  const totaluser = dashboard?.data?.data?.totalUsers;
  const totalScheduledTours = dashboard?.data?.data?.totalScheduledTours;



  return (

    <div className={`mx-auto max-w-screen-2xl   md:p-6 2xl:p-10`} >
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardDataStats
          title="Users"
          total={dashboard?.data?.data?.totalUsers}
          icon="/images copy/grouppic.png"
          url="user"
        />

        <CardDataStats
          title="Properties"
          total={19971}
          icon="/images copy/dashproperty.png"
          url="property"
        />

        <CardDataStats
          title="Schedule Tour"
          total={56}
          icon="/images copy/appointment.png"
          url="tour"

        />
      </div>


      <div className='flex  my-10 gap-9 w-auto h-auto  mr-12 md:grid-cols-3 ' >


        <div className="w-[600px] h-[700px]  p-5  md:h-[400px]">
          <DashboardChart totaluser={totaluser} totaltour={totalScheduledTours} />
        </div>




        <div className=" w-[600px] h-[700px] p-5 md:h-[400px]">
          <BookingBarChart alldata={bookingData} />
        </div>

      </div>


    </div>

  )
}

export default Dashboard
