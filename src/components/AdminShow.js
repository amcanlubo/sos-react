import { toggle } from "../utils/toggle";
import profileVector from "../profileVector.svg";
import { useEffect } from "react";

const AdminShow = ({show, user, setShow, isEditing, setIsEditing, userToggle, deleteUser}) => {

    useEffect(() => {
        show || isEditing?document.body.style.overflow = 'hidden':document.body.style.overflow = 'unset';
    }, [show || isEditing]);

    return (
        <>
        {
            show?(
                <div className="fixed w-screen h-screen bg-gray-900/75 flex justify-center items-center top-0">
                    <div className="bg-white flex flex-col w-full rounded-md  md:w-4/5 mx-2 p-2">
                        <button className="self-end px-2 fas fa-times-circle hover:text-red-500" onClick={()=>{toggle(show,setShow)}}></button>
                        <div className="flex h-full">
                            <img className="w-2/4 p-4" src={profileVector}/>
                            <div className="flex flex-col w-full py-1 w-2/4 justify-between">
                                <div><span className="font-light">Name: </span><br/><span className="font-extrabold text-xl">{user.first_name} {user.last_name}</span></div>
                                <div><span className="font-light">Email: </span><br/><span className="font-extrabold text-xl">{user.email}</span></div>
                                <div><span className="font-light">Mobile No.:</span><br/><span className="font-extrabold text-xl">{user.mobile_number}</span></div>
                                <div className="self-end ">
                                    <button className="far fa-edit text-yellow-500 hover:text-yellow-600 px-1" onClick={()=>{userToggle(isEditing,setIsEditing,user); toggle(show,setShow)}}></button>
                                    <button className="fas fa-user-times text-red-500 hover:text-red-600 px-1" onClick={()=>{deleteUser(user.id)}}></button>
                                </div>
                            </div>
                                
                            
                        </div>
                    </div>
                </div>
            ):<></>
        }
    </>
    );
};

export default AdminShow;
