import { useNavigate } from "react-router";

const AppName = () => {

  const navigate = useNavigate()
  return (
      <div  className="flex flex-col items-center text-white py-5">
          <h2 onClick={()=>{navigate('/home')}} className="text-6xl cursor-pointer font-extrabold">ACSC</h2>
          <p className="font-light">SOS App</p>
      </div>
  );
};

export default AppName;
