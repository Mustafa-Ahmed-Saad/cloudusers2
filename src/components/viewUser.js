import React from 'react';

function ViewUser(props) {
   const handelback = () => {
      window.history.back();
   };
   return (
      <div className="user-conrainer">
         <div className="conatiner">
            <h2>user: {props.user.name}</h2>
            <div className="overlay">
               <div>name: {props.user.name}</div>
               <div>email: {props.user.email}</div>
               <div>city: {props.user.address.city}</div>
               {/* error here and i dont know why??????? /// because we should in the first time userpage component load it will done the render in firt befor componentdidmount so we will find error so we should't call viewuser in first time of load render userpage because user in it's state is not found so we shoud check if it exext or not befor calling viewuser component*/}
               <div>company name: {props.user.company.name}</div>
            </div>
            <div className="back">
               <button className="btn btn-secondary" onClick={handelback}>
                  back to all users
               </button>
            </div>
         </div>
      </div>
   );
}

export default ViewUser;
