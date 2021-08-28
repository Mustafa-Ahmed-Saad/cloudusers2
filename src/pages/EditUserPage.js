import React, { Component } from 'react';
import { GetUser, updateUser } from '../api/users';
import UsersForm from '../components/usersForm';
import { Link } from 'react-router-dom';

export default class EditUserPage extends Component {
   state = {
      user: { name: 'mm', email: '', username: '', address: { city: '' }, company: { name: '' } },
   };

   componentDidMount = () => {
      const userId = this.props.match.params.userId;
      GetUser(userId)
         .then((response) => {
            this.setState({ user: response.data });
         })
         .catch((error) => alert('get user error'));
   };

   updateUser = (values) => {
      const id = this.state.user.id;
      if (values.name === this.state.user.name && values.email === this.state.user.email && values.username === this.state.user.username) {
         alert('you dont edit any think (there are same name, email and username)');
      } else {
         updateUser(id, values)
            .then(() => {
               alert('user edited success');
               // this.props.history.push('/users'); // to redirect to another component (userspage) but in hash state in line this will not work
               // window.history.back(); // to redirect to another component (userspage)
               this.props.history.push('/#cloudusers2/users');
            })
            .catch((error) => {
               alert('edit user error');
            });
         // console.log('emty the inpot');
         // console.log(document.querySelectorAll('.form input'));
      }
   };

   handelback = () => {
      window.history.back();
   };

   render() {
      return (
         <div className="container-edituser">
            <h2>edit user</h2>
            <UsersForm values={this.state.user} onSubmit={this.updateUser} />
            {/* {this.state.user.id > 0 ? <ViewUser user={this.state.user} /> : null} */}
            {/* خلي بالك هنا انت لازم تتاكد ان ال ستيت بقي فيها اليوزر المطلوب لان الريندر هتتعمل قبل ال كومبوننت ديد ماونت فلو معملتش الشرط دا هتلاقي بيحصل ايرور لما تجيب السيتي او المدينة من الادرس اللي جوا اليوزر لان في الواقع الريندر حصل في الاول قبل ما اليوزر اللي في الستيت يكون موجود فراح عمل ريندر فلاقي اليوزر مفهوش ادرس و انت عاوز السيتي من الادرس فبيديك ايرور فالحل انك تتاكد ان اليوزر موجود الاول و بعدين تبدا تبدا تجيب الكومبوننت دا */}
            {/* و برضو ممكن نحل المشكلة دي عن طريق اننا ندي قيم افتراضية للحجات اللي احنا هنجيبها في كومبوننت ال فيو يوزر بحيث في اول ريندر يبدا بالقيم الافتراضية وليكن قيم فاضية و بعدين لما الستيت تتغير في الكومبوننت ديد ماونت هيبدا يعمل كومبوننت ديد ابديت و ريندر تاني و في الرندر التاني بقي هيكون الاوبجيكت اليوزر اللي احنا حطيناه فوق بقي فية القيم المطلوبة و المرادة وساعتها ممكن نلغي الاف كونديشن دي لان في اول ريندر بالفعل هيكون في اليوزر القيم الابتدائية للحجات اللي احنا عاوزينها فمش هيدي ايرور بل هيطلع القيم دي و بعديها بثواني قليلة جدا لا تحلاحظ هيبدا الستيت تتغير فهيبدا ينفز الكومبوننت دي ابديت و بعدين يعمل ريندر و يجيب القيم الجديدة المرادة */}
            <div className="back">
               <Link className="btn btn-secondary" to="/cloudusers2/users/">
                  back to all users
               </Link>
            </div>
         </div>
      );
   }
}
