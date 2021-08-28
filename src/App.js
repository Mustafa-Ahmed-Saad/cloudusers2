import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import UsersPage from './pages/userspage';
import UserPage from './pages/userpage';
import EditUserPage from './pages/EditUserPage';
import CreateUser from './pages/createUserPage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import './App.css';

const HomePage = () => {
   return (
      <div className="home">
         <div className="container">
            <div className="overlay">
               <h2>Home page</h2>
               <div>
                  this app created using react, you can get, add, edit and delet any user you want, And all this is done by http ajax request / api (mock api). if you add or edit user application will send http ajax request to api and If there is any problem or error, it will appear as alert and if
                  you want to see requests (get, delete, put, post) when get or edit or delet or add user you can open inspect then network
               </div>
            </div>
         </div>
      </div>
   );
};
const AboutPage = () => {
   return (
      <div className="about-us">
         <div className="container">
            <div className="overlay">
               <h2>About Us</h2>
               <div>
                  <p>Name: Mustafa Ahmed Saad</p>
                  <p>Email: mustafasaad19970@gmail.com</p>
                  <p>Phone: 01007107894</p>
               </div>
            </div>
         </div>
      </div>
   );
};

class App extends Component {
   render() {
      return (
         <div className="App">
            <HashRouter hashType="noslash">
               <NavBar />
               {/* <MyNavLink to="/">Home</MyNavLink> <MyNavLink to="/users">Users</MyNavLink> <MyNavLink to="/about">About</MyNavLink> <MyNavLink to="/users/create">create user</MyNavLink> */}
               <Switch>
                  <Route className="nav-link" path="/cloudusers2" exact component={HomePage} />
                  <Route className="nav-link" path="/cloudusers2/users/" exact component={UsersPage} />
                  <Route className="nav-link" path="/cloudusers2/about/" component={AboutPage} />
                  <Route className="nav-link" path={'/cloudusers2/users/create/'} exact component={CreateUser} />
                  {/* this route will Inconsistent with route '/users/:userId' so we will use switch */}
                  {/* و في ال سويتش الترتيب مهم لان طريقة عمل السويتش هي انها اول ما بتجيب اول روت يتطابق بتجيب الكومبوننت اللي في الراوت و بعدين تطلع مش بتكمل تشيك علي اللي بعد كدا علشان كدا بنخلي الديناميك داتا او البراميتر اللي في اليو ار ال في الاخر و اليو ار ال الثابتة في الاول علشان ميحصلش تعارض و يجيبلك تاكومبوننت التاني بتاع اليو ار الي اللي فية الديناميك داتا او البراميتر و احنا مش عاوزينكدا */}
                  <Route className="nav-link" path={'/cloudusers2/users/:userId'} exact component={UserPage} />
                  <Route className="nav-link" path={'/cloudusers2/users/edit/:userId'} exact component={EditUserPage} />
                  {/* we can write url dinamic data or paramiter like that (:anyVariable) this id will come from  */}
                  {/* هتتنفز في حالة اللينك كان سلاش و بعدين يوزرز و بعدين سلاش و بعدين اي حاجة بعد كدا مش هتفرق و هياخد الكلمة دي يحطها في البراميتر اللي بيتبعت مع البروبس و هيساويها بالكلام اللي هيتكتب بعد السلاش التانية */}
                  <Route className="nav-link" path={'/'} component={HomePage} />
                  <Route className="nav-link" component={NotFound} />
               </Switch>
            </HashRouter>
         </div>
      );
   }
}

export default App;
