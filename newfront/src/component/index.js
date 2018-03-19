import React from 'react'
import HomePage from "./homepage";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Switch,Route,BrowserRouter,Redirect} from 'react-router-dom'
import MainPage from "./mainpage";
import Schedule from './schedule'
import Donation from "./donation";
import DisplayForm from './../donation/donationComponent/addDonation'
import DashBoard from "./dashboard";
import BusinessList from './businesslisting'
import BusinessFullPage from '../business/components/businessFullPage'
import StudentSignUpPage from '../students/components/signUpPage'
import StudentDonation from './../donation/studentDonation/studentDonation'
import BusinessProfile from '../business/components/businessProfile'
import ProfilePage from "../business/components/profilePage";
import AcceptSignupRequest from '../students/components/AcceptSignupRequest';

class Main extends React.Component {
    render() {
        const logout=()=>{
            window.location="/"
                localStorage.removeItem('user');
        };
        const Private = ({...props}) => {
            return localStorage.getItem('user')?   <div>
                    <MainPage/>  <Route {...props}/></div> :
                    <Redirect to="/"/>
        };
        const Public = ({...props}) => {

            return !localStorage.getItem('user')?
                <div><Route {...props}/></div>:
                    <Redirect to="/home"/>

        };
        const about=()=>(
            <div>
                new
            </div>
        );
        return (
            <BrowserRouter>
                <Switch>
                    <Private exact path="/logout" component={logout} />
                    <Public exact path="/" component={HomePage}/>
                    <Public exact path="/main/businessSignUp" component={BusinessFullPage}/>
                    <Public exact path="/main/studentSignUp" component={StudentSignUpPage}/>
                    <Private exact path="/main/schedule" component={Schedule}/>
                    <Route exact path="/main/donation" component={Donation}/>
                    <Route exact path="/main/studentdonation" component={StudentDonation}/>
                    <Private exact path="/home" component={BusinessList}/>

                    <Route exact path="/dashboard" component={DashBoard}/>
                
                    <Private exact path="/viewProfile" component={BusinessProfile}/>

                      <Private exact path="/main/requests" component={AcceptSignupRequest}/>

                    <Private exact path="/editProfile" component={BusinessProfile}/>

                </Switch>
            </BrowserRouter>
        );
    }
}
export default(Main)