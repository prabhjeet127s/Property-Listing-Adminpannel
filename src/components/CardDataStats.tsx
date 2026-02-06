
import { Link } from 'react-router-dom';

interface prop{
  
  title:string,
  total:number,
  icon:string,
  url:string


}


const CardDataStats = ({ title, total, icon ,url}:prop) => {
    
  return (
    <div>
    <Link to={`/${url}`}>
    
    <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">

      <div>
        <h4 className="text-2xl font-bold ">{total}</h4>
        <p className="text-gray-600">{title}</p>
      </div>
      <img src={icon} className="w-10 h-10" />
      
    </div>
      </Link>


    </div>
    
  );
};

export default CardDataStats
