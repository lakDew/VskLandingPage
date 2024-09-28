import { FaEnvelope, FaPhone } from "react-icons/fa";
import { siteContent } from "../constants/content"
import "../styles/ContactUs.css";
import { FaLocationDot } from "react-icons/fa6";
import { Box, Button, Grid, Grid2, InputLabel, TextField } from "@mui/material";
import Footer from "../component/Footer";
import { useFormik } from "formik";
import * as Yup from 'yup'
import NaveBar from "../component/NaveBar";
import GovtBanner from "../component/GovtBanner";
import GovtHeader from "../component/GovtHeader";
import Location from "../component/Location";

export default function  ContactUs(){

    const formik=useFormik({
        initialValues:{
            fName:"",
            lName:"",
            phone:"",
            email:"",
            message:""
        },
        validationSchema: Yup.object({
            fName: Yup.string().required('First name is required'),
            lName: Yup.string().required('Last name is required'),
            phone: Yup.string()
            .required('Phone No is required')
            .matches(/^[0-9]+$/, 'Invalid phone number')  
            .min(10, 'Phone number must be  10 digits')  
            .max(10, 'Phone number must be  10 digits'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
            message: Yup.string().required('Message is required'),
          }),

          onSubmit: async (values, { resetForm }) => {
            console.log('The form values are', values);
            resetForm();
           
          },

    })

    const {contactUs:contactUsData}=siteContent;
     console.log(contactUsData)
    return(
        <>
        <GovtHeader/>
        <NaveBar/>
        <div className="contact-us-wrapper">
         
          
        <div>
        <div className="contact-us-hero-title">{contactUsData.heroTitle}</div>
        <div className="contact-us-hero-sub-title"><span>{contactUsData.heroSubTitle}</span></div>
        </div>
           
           <div className="contact-bottom-wrapper">

            <div className="contact-info-wrapper">
                <div className="contact-info-title">{contactUsData.contactUsInfo.title}</div>
                <div className="contact-info-sub-title">{contactUsData.contactUsInfo.subTitle}</div>
                <div className="contact-phone-wrapper">
                    <div><FaPhone/></div>
                    <div>{contactUsData.contactUsInfo.phoneNo}</div>
                </div>
                <div className="contact-email-wrapper">
                    <div><FaEnvelope/></div>
                    <div>{contactUsData.contactUsInfo.email}</div>
                </div>
                <div className="contact-address-wrapper">
                    <div><FaLocationDot/></div>
                    <div className="contact-address">{contactUsData.contactUsInfo.address}</div>
                </div>
                
                
            </div>

            
            <div className="contact-form-wrapper">
           
        <form onSubmit={formik.handleSubmit}>
         
           <div className=" contact-name">  

            
              <TextField
                fullWidth
                label="First Name"
                id="fName"
                {...formik.getFieldProps('fName')}
                error={formik.touched.fName && Boolean(formik.errors.fName)}
                helperText={formik.touched.fName && formik.errors.fName}                
              />
             
             
              <TextField
                fullWidth
                label="Last Name"
                id="lName"
                {...formik.getFieldProps('lName')}
                error={formik.touched.lName && Boolean(formik.errors.lName)}
                helperText={formik.touched.lName && formik.errors.lName}
              />
          </div>




          <div className="contact-email-phone">           
              <TextField
                fullWidth
                label="Phone No"
                id="phone"
                {...formik.getFieldProps('phone')}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
             
              <TextField
                fullWidth
                label="Email"
                id="email"
                {...formik.getFieldProps('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
          </div>
        
       
          <TextField
               multiline
            //    sx={{ width: '90%' }} 
            fullWidth
                rows={4} 
                maxRows={10} 
                variant="outlined"
                label="Message"
                id="message"
                placeholder="Type your message here..."
                {...formik.getFieldProps('message')}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />




             



           <div className="conatct-from-button-wrapper">
           <button  className="conatct-from-submit-button"type="submit">
                SUBMIT
              </button>
           </div>
       
           
            </form>
            
            </div>
            
            </div>

           
            
        </div>

        <Location/>
        <Footer/>
        </>
    )
}