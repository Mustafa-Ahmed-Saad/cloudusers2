import React, { Component } from 'react';
import { addUser } from '../api/users';
import UsersForm from '../components/usersForm';
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {
   state = {
      user: { name: '', email: '', username: '', address: { city: '' }, company: { name: '' } },
   };

   addUser = (values) => {
      // solution1 impity field part 1
      this.setState({
         user: {
            ...values,
         },
      });
      // add user api
      addUser(values)
         .then(() => {
            alert('add user success');
            // solution1 impity field part 2
            this.setState({
               // هنا عملنا شينج للستيت علشان الريندر يعشتغل من اول وجديد و الحقول تفضي و خلي بالك احنا فوق خلينا الستيت اليوزر اللي فيها ب القيم اللي كتبناها لاننا لو معملناش الخطوة اللي فوق دي و عملت الخوطة اللي في السطر دا هنا فقط هتلاقي لحلوق مش بتفضب لانك كد يعتبر مش غيرت التيت لان الستيت كانت بالقيم اللي انت بتمتبها دي بالظبط فكدا انت مش عملت تغير يعتبر في التيت
               user: {
                  ...this.state.user, // لو شلت السطر دا و الخطوة اللي فوق بتعت تغير ال شينج كدا اللي هيحصل ان الحقل هيفضي في اول مرة لانك يعتبر غيرت الستيت لان كان فيها السيتي و كدا لكن بعد كدا مش الحقول مش هتفضي لان خلاص انت كدا مبقتش يعتبر بتغير في القيم اللي فيها لان هيا القيم دا كانت فيها اصلا من اول القيم الفاضية دي
                  name: '',
                  email: '',
                  username: '',
               },
            });
            // solution2 impity field  can enpty this field using javascript
            // document.querySelector('input[name="name"]').value = '';
            // document.querySelector('input[name="email"]').value = '';
            // document.querySelector('input[name="username"]').value = '';
         })
         .catch((error) => {
            alert('add user error');
         });
   };

   handelback = () => {
      document.querySelector('a[href="#cloudusers2/users/create/"]').classList.remove('active');
      document.querySelector('a[href="#cloudusers2/users/"]').classList.add('active');
   };

   render() {
      return (
         <div className="create-user">
            {/* {console.log(this.state.user)} */}
            <h2>add user</h2>
            <UsersForm values={this.state.user} onSubmit={this.addUser} />
            {/* {this.state.user.id > 0 ? <ViewUser user={this.state.user} /> : null} */}
            {/* خلي بالك هنا انت لازم تتاكد ان ال ستيت بقي فيها اليوزر المطلوب لان الريندر هتتعمل قبل ال كومبوننت ديد ماونت فلو معملتش الشرط دا هتلاقي بيحصل ايرور لما تجيب السيتي او المدينة من الادرس اللي جوا اليوزر لان في الواقع الريندر حصل في الاول قبل ما اليوزر اللي في الستيت يكون موجود فراح عمل ريندر فلاقي اليوزر مفهوش ادرس و انت عاوز السيتي من الادرس فبيديك ايرور فالحل انك تتاكد ان اليوزر موجود الاول و بعدين تبدا تبدا تجيب الكومبوننت دا */}
            {/* و برضو ممكن نحل المشكلة دي عن طريق اننا ندي قيم افتراضية للحجات اللي احنا هنجيبها في كومبوننت ال فيو يوزر بحيث في اول ريندر يبدا بالقيم الافتراضية وليكن قيم فاضية و بعدين لما الستيت تتغير في الكومبوننت ديد ماونت هيبدا يعمل كومبوننت ديد ابديت و ريندر تاني و في الرندر التاني بقي هيكون الاوبجيكت اليوزر اللي احنا حطيناه فوق بقي فية القيم المطلوبة و المرادة وساعتها ممكن نلغي الاف كونديشن دي لان في اول ريندر بالفعل هيكون في اليوزر القيم الابتدائية للحجات اللي احنا عاوزينها فمش هيدي ايرور بل هيطلع القيم دي و بعديها بثواني قليلة جدا لا تحلاحظ هيبدا الستيت تتغير فهيبدا ينفز الكومبوننت دي ابديت و بعدين يعمل ريندر و يجيب القيم الجديدة المرادة */}
            <div className="back">
               <span onClick={this.handelback}>
                  <Link className="btn btn-secondary" to="/cloudusers2/users/">
                     back to all users
                  </Link>
               </span>
            </div>
         </div>
      );
   }
}
