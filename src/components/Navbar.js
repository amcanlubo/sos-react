import { useNavigate } from "react-router";
import { toggle } from "../utils/toggle";
import { logout } from "../utils/logout";

const Navbar = ({archiveMode, setArchiveMode}) => {
    let navigate = useNavigate()
    
    return (
        <div className="w-full top-0 container flex justify-between pt-3 ">
            <div>
                {
                window.location.href.includes('/users')
                ?<><button onClick={()=>{navigate('/admin')}} class="fas fa-home text-white px-2 text-xl hover:text-gray-300"></button><button onClick={()=>{navigate('/admin/register')}} class="fas fa-user-plus text-white px-2 text-xl hover:text-gray-300"></button></>
                :window.location.href.includes('/admin/register')
                ?<button className="fas fa-users text-white px-2 text-xl hover:text-gray-300" onClick={()=>{navigate("/users")}}></button>
                :window.location.href.includes('/admin')
                ?<><button className="fas fa-users text-white px-2 text-xl hover:text-gray-300" onClick={()=>{navigate("/users")}}></button><button className="fas fa-archive text-white px-2 text-xl hover:text-gray-300" onClick={()=>{toggle(archiveMode,setArchiveMode)}}></button></>
                :window.location.href.includes('/info')
                ?<button onClick={()=>{navigate('/home')}} class="fas fa-home text-white px-2 text-xl hover:text-gray-300"></button>
                
                :<a className="fas fa-user px-2 text-xl text-white hover:text-gray-300" href="/info"></a>

                }
            </div>
            <button onClick={()=>{logout(navigate)}} className="fas fa-sign-out-alt text-white px-2 text-xl hover:text-gray-300"></button>
            
        </div>
    );
};

export default Navbar;
