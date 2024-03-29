import React from 'react';
import {  useState } from "react";
import toast ,{Toaster} from "react-hot-toast";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register() {

    const [user,setUser]=useState({
        name:"",
        email:"",
        mobile:null,
        college:"",
        course:"",
        city:"",
        pin_code:null,
        password:""
    })
    const handleInput=(e)=>{
        e.persist();
        setUser({...user,[e.target.name]:e.target.value})
    }
    const userSubmit=(e)=>{
  
        e.preventDefault();
        const data={
            name:user.name,
            email:user.email,
            mobile:user.mobile,
            college:user.college,
            course:user.course,
            city:user.city,
            pin_code:user.pin_code,
            password:user.password,
        }
        console.log(data);
        axios.post('https://edu-tech-bwe5.onrender.com/v1/registration',data).then(res=>{ 
          console.log(res); 
        if(res.data.Success===true){
            toast.success(res.data.Message)        
        }
        else{
            toast.error(res.data.Message)
        }
    
})
    }




  return (
    <MDBContainer fluid>
        <Toaster
                position="top-center"
                reverseOrder={false}
                />
<form onSubmit={userSubmit}>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
            
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' name='name' type='text' onChange={handleInput} className='w-100'/>
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' name='email' onChange={handleInput} type='email'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size='lg'/>
                <MDBInput label='Your Mobile Number' name='mobile' onChange={handleInput} type='number'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="university me-3" size='lg'/>
                <MDBInput label='Your College' name='college' type='text' onChange={handleInput} className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="laptop me-3" size='lg'/>
                <MDBInput label='Your Course' name='course' type='text' onChange={handleInput} className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="city me-3" size='lg'/>
                <MDBInput label='Your City' name='city' type='text'  onChange={handleInput} className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="map-marked-alt me-3" size='lg'/>
                <MDBInput label='Your Pin Code' name='pin_code' type='number' onChange={handleInput} className='w-100'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' name='password' onChange={handleInput} type='password'/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4'  type="submit" size='lg'>Register</MDBBtn>

            </MDBCol>
           
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </form>
    </MDBContainer> 
  );
}

export default Register;