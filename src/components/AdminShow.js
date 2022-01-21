import React from 'react';

const AdminShow = ({show, user, setShow}) => {

    const close = () => {
        setShow(false)
    }


    return (
        <>
        {
            show?(
                <div>  
                    <button onClick={close}>x</button> 
                    {user.first_name}
                    {user.last_name}
                </div>
            ):<></>
        }
    </>
    );
};

export default AdminShow;
