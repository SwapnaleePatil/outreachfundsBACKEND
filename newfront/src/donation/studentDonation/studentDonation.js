import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Table,Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {getDonationAction} from './../actions/addDonationAction'
import {approveDonation} from './../actions/addDonationAction'
import {FetchStudent} from './../actions/getUserAction'
import {getEventDataAction} from '../actions/getEventsDataAction'
import {fetchAllSchoolDetails} from './../../students/action/index'

class StudentDonation extends Component{
    constructor(){
        super();

    }
    componentDidMount(){
        this.props.getDonationAction();
        this.props.FetchStudent();
        this.props.getEventDataAction();
        this.props.fetchAllSchoolDetails();
    };
    componentWillReceiveProps(nextProps){
        console.log('req',nextProps.organizationData);

    }
    Approved=(id)=>{
        let data={
            '_id':id
        };
        this.props.approveDonation(data);
    };
    render(){
        return(
            <div>
                <center><h1>Donation Information</h1></center>
                <div className="col-sm-6">
                    <h2>Donation Information</h2>
                    <Table>
                        <tr>
                            <th>Donation Date</th>
                            <th>Event Name</th>
                            <th>Organization Name</th>
                            {/*<th>Business Name</th>*/}
                            <th>Location</th>
                            <th>Amount</th>
                        </tr>
                        {
                            this.props.donationData.map((value,index)=>{
                                return<tr>
                                    <td>{value.donationDate}</td>
                                    <td>{
                                        this.props.eventsData.map((e)=>{
                                            if(value.eventId === e._id){
                                                return e.eventName
                                            }
                                        })
                                    }</td>
                                    <td>{
                                        this.props.organizationData.map((e)=>{
                                            if(value.organizationId === e._id){
                                                return e.organisationName
                                            }
                                        })
                                    }</td>
                                    {/*<td>{
                                        this.props.businessInfo.map((e)=>{
                                            if(value.businessId === e._id){
                                                return e.businessInfo.businessName
                                            }
                                        })
                                    }</td>*/}
                                    <td>{value.location}</td>
                                    <td>{value.amount}</td>
                                    <td>
                                        {
                                            value.status?
                                                <Button>Approved</Button>
                                                :
                                                <Button onClick={()=>{this.Approved(value._id)}}>Pending</Button>
                                        }
                                    </td>
                                </tr>
                            })
                        }
                    </Table>
                </div>
                <div className="col-sm-6">
                    <h2>Donation Graph</h2>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        donationData:state.donation,
        requests:state.requests,
        studentLogged:state.studentLogged,
        organizationData:state.schools,
        businessInfo:state.businessInfo,
        eventsData:state.events
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        getDonationAction,
        approveDonation,
        FetchStudent,
        getEventDataAction,
        fetchAllSchoolDetails,
    },dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(StudentDonation)