import React, { useState, useEffect } from 'react';
import { GetUsers } from '../api/users';
import { Link } from 'react-router-dom';
import { DeleteUser } from '../api/users';
import CustomAlert from './../components/customAlert';
import Loading from './../components/loading';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  // GetUsers from server using api
  useEffect(() => {
    setLoad(true);
    GetUsers()
      .then((response) => {
        setUsers(response.data);
        setLoad(false);
        setError(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(true);
        alert('get users error', error.message);
      });
  }, []);

  // when user check on delete button
  const checkAndDeleteUser = (user) => {
    setUserToDelete(user);
    setShowPrompt(true);
  };

  // if user check no of custom alert
  const hidePrompt = () => {
    setShowPrompt(false);
  };

  // if user check yes of custom alert
  const deleteUser = (user) => {
    setLoad(true);
    // delete user from server
    DeleteUser(user.id)
      .then(() => {
        // delete user from dom by delete it from state (after delete it from server)
        let newUsers = [...users];
        let index = newUsers.indexOf(user);
        newUsers.splice(index, 1);
        setUsers(newUsers);
        setShowPrompt(false);
        setLoad(false);
        setError(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(true);
        // console.error(error);
        alert('api delete requerst error', error.message);
      });
  };

  if (load) {
    return <Loading />;
  } else if (error) {
    return <div className="apiError">error please tray again later</div>;
  } else {
    return (
      <div className="all-users">
        <h2>users</h2>

        {users.length > 0 ? (
          <ul>
            {users.map((user) => {
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
                    <span className="btn btn-danger" onClick={() => checkAndDeleteUser(user)}>
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

        <CustomAlert
          show={showPrompt}
          confirmYes={() => {
            deleteUser(userToDelete);
          }}
          confirmNo={hidePrompt}
          text={'Are you sure you want to delete this user?'}
        />
      </div>
    );
  }
};

export default UsersPage;
