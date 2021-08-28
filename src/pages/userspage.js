import React, { Component } from 'react';
import { GetUsers } from '../api/users';
import { Link } from 'react-router-dom';
import { DeleteUser } from '../api/users';

export default class UsersPage extends Component {
   state = {
      users: [],
   };

   componentDidMount = () => {
      GetUsers()
         .then((response) => {
            // console.log(response);
            this.setState({
               users: response.data,
            });
         })
         .catch((error) => {
            alert('get users error');
         });
   };

   deleteUser = (user) => {
      // delete user from server
      DeleteUser(user.id)
         .then(() => {
            // delete user from dom by delet it from state (after deletit from server)
            let users = this.state.users;
            const index = users.indexOf(user);
            users.splice(index, 1);
            this.setState({
               users: users,
            });
            // or we can write users only inested of users: users
            // this.setState({
            //    users,
            // });
         })
         .catch((error) => {
            // console.error(error);
            alert('api delete requerst error');
         });
   };

   render() {
      return (
         <div className="all-users">
            <h2>users</h2>
            {/* <div className="container-all-users"> */}
            {this.state.users.length > 0 ? (
               <ul>
                  {this.state.users.map((user) => {
                     return (
                        <li className="row justify-content-center" key={user.id}>
                           <span className="col-12 text-center col-md-5 text-md-start mb-1">{user.name}</span> {'  '}
                           <span className="col-12 col-sm-4 text-center col-md-2 text-md-start mb-1">
                              <Link className="btn btn-primary" to={'/cloudusers2/users/' + user.id}>
                                 view &nbsp;<i className="far fa-eye"></i>
                              </Link>
                           </span>
                           <span className="col-12 col-sm-4 text-center col-md-2 text-md-start mb-1">
                              <Link className="btn btn-success" to={'/cloudusers2/users/edit/' + user.id}>
                                 edit &nbsp;<i className="far fa-edit"></i>
                              </Link>
                           </span>
                           <span className="col-12 col-sm-4 text-center col-md-2 text-md-start mb-1">
                              <span className="btn btn-danger" onClick={() => this.deleteUser(user)}>
                                 delete &nbsp;<i className="fas fa-trash-alt"></i>
                              </span>
                           </span>
                        </li>
                     );
                  })}
               </ul>
            ) : (
               <h4 style={{ textAlign: 'center' }}>No users to show</h4>
            )}
            <div className="adduser-div">
               <span>
                  <Link className="btn btn-warning" to="/cloudusers2/users/create/">
                     add user &nbsp;<i className="far fa-plus-square"></i>
                  </Link>
               </span>
            </div>
            {/* </div> */}
         </div>
      );
   }
}
