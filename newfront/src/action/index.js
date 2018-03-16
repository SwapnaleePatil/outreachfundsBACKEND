
import axios from 'axios';
export const  businessLogin=(data)=>{
    return (dispatch)=>{
        axios({method:'post',url:'http://localhost:3000/api/businessOwner/loginPassport',data}).then((response)=>{

           if(response.data.message==="login successful"){
                dispatch({
                    type:'BUSINESS_LOGIN',
                    payload:response
                });
                console.log('login', response.data);
                localStorage.setItem('user', response.data.token);
                window.location = "/home"
            }

        }).catch((e)=>{
            console.log(e);
        })
    }
};
export const  studentLogin=(data)=>{
    return (dispatch)=>{
        axios({method:'post',url:'http://localhost:3000/api/student/login',data}).then((response)=>{
            if(response){
                dispatch({
                    type:'STUDENT_LOGIN',
                    payload:response
                });
debugger;
                console.log('slogin',response.data);
                if(response.data.message==="login successful") {
         debugger;
                    console.log('login', response.data);
                    localStorage.setItem('user', response.data.token);
                    window.location = "/home"
                }
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
};

export const scheduleevents=(data)=>{
    return(dispatch)=>{
        axios({method:'post',url:'http://localhost:3000/api/event',data}).then((response)=>{
            if(response){
                dispatch({
                    type:'SCHEDULE_EVENT',
                    payload:response.data.record
                })
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
};

// /api/business/profile/fetchById

export const eventslist=()=>{
    return(dispatch)=>{
        axios({method:'get',url:'http://localhost:3000/api/event'}).then((response)=>{
            if(response){
                dispatch({
                    type:'EVENT_LIST',
                    payload:response.data.record
                })
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
};