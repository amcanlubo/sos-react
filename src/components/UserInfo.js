import { useNavigate } from "react-router";
import AppName from "./AppName";
import Navbar from "./Navbar";
const UserInfo = () => {

    const navigate = useNavigate()

    let userData  = JSON.parse(sessionStorage.getItem('userData'))
    let token = sessionStorage.getItem('token')
    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest"
    }}
    if(!userData){
        navigate('/')
    }


    return (
            <div className="flex flex-col items-center p-2 bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen">
                    <Navbar/>
                    <AppName/>
                    <div className="bg-white flex flex-col w-full rounded-md  md:w-4/5 mx-2 p-6">
                            <div className="mb-4 flex justify-between">
                                <p className="text-2xl font-bold">ACCOUNT DETAILS</p>
                                <a className="fas fa-user-edit px-2 text-xl hover:text-gray-600" href="/edit"></a>
                            </div>
                            <div className="mb-4">
                            <label className="font-light">first name</label>
                            <p className="font-extrabold text-xl">{userData.first_name}</p>
                            </div>
                            <div className="mb-4">
                            <label className="font-light">last name</label>
                            <p className="font-extrabold text-xl">{userData.last_name}</p>
                            </div>
                            <div className="mb-4">
                            <label className="font-light">mobile number</label>
                            <p className="font-extrabold text-xl">{userData.mobile_number}</p>
                            </div>
                            <div className="mb-4">
                            <label className="font-light">email</label>
                            <p className="font-extrabold text-xl">{userData.email}</p>
                            </div>
                    </div>
                </div>
    
    );
};

export default UserInfo;
