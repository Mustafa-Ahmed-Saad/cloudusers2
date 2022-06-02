import React, { useState, useEffect } from 'react';
import { GetUser, updateUser } from '../api/users';
import UsersForm from '../components/usersForm';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Loading from '../components/loading';

const EditUserPage = () => {
  const [user, setUser] = useState({ name: 'mm', email: '', username: '', address: { city: '' }, company: { name: '' } });
  const { userId } = useParams();
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();

  // get user user from server
  useEffect(() => {
    setLoad(true);
    GetUser(userId)
      .then((response) => {
        setUser({ ...response.data });
        setLoad(false);
        setError(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(true);
        alert('get user error', error.message);
      });
  }, [userId]);

  // when user want to edit user and click edit button to submit
  const checkAndUpdate = (values) => {
    const id = user.id;
    if (values.name === user.name && values.email === user.email && values.username === user.username) {
      alert('you dont edit any think (there are same name, email and username)');
    } else {
      setLoad(true);
      updateUser(id, values)
        .then(() => {
          setLoad(false);
          setError(false);
          alert('user edited success');
          history.push('/#cloudusers2/users');
        })
        .catch((error) => {
          setLoad(false);
          setError(true);
          alert('edit user error');
        });
    }
  };

  if (load) {
    return <Loading />;
  } else if (error) {
    return <div className="apiError">error please tray again later</div>;
  } else {
    return (
      <div className="container-edituser">
        <h2>edit user</h2>
        <UsersForm values={user} onSubmit={checkAndUpdate} />
        <div className="back">
          <Link className="btn btn-secondary" to="/cloudusers2/users/">
            back to all users
          </Link>
        </div>
      </div>
    );
  }
};

export default EditUserPage;
