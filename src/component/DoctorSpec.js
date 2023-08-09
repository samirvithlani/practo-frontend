import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { margin } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DoctorSpec = () => {

    const [doctors, setdoctors] = useState([])

    const getAllDoctors = async () => {

        await axios.get("http://localhost:8080/doctor").then(res => {

            setdoctors(res.data)
            console.log(res.data)

        })
    }


    useEffect(() => {

        getAllDoctors()

        return () => {

        }
    }, [])

    var style1 = {
        width: "100% display: inline-block"
    }
    var style2 = {
        opacity: "1  width: 40000px transform: translate3d(-280px, 0px, 0px)"
    }
    return (
        <div>
            <section class="section section-doctor">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="section-header ">
                                <h2>Book Our Doctor</h2>
                                <p>Lorem Ipsum is simply dummy text </p>
                            </div>
                            <div class="about-content">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                                <a href="javascript:;">Read More..</a>
                            </div>
                        </div>



                        {
                            doctors.map(doctor => {
                                return (
                                    <div class="row">
                                        
                                    
                                        <div class="doctor-slider slider slick-initialized slick-slider"><button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button><div class="slick-list draggable"><div class="slick-track" style={style2}><div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1"><div><div class="profile-widget" style={style1}>
                                            <div class="doctor-slider slider">
                                                <div class="profile-widget">
                                                    <div class="doc-img">
                                                        <a href="doctor-profile.html">
                                                            {/* <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg" /> */}
                                                            <Avatar style={{ width: '100px', height: '100px', margin: '35px' }} />
                                                        </a>
                                                        <a href="javascript:void(0)" class="fav-btn">
                                                            <i class="far fa-bookmark"></i>
                                                        </a>
                                                    </div>
                                                    <div class="pro-content">
                                                        <h3 class="title">
                                                            <a href="doctor-profile.html">{doctor.doctorName}</a>
                                                            <i class="fas fa-check-circle verified"></i>
                                                        </h3>
                                                        <p class="speciality">{doctor.specilization}</p>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating">(52)</span>
                                                        </div>
                                                        <ul class="available-info">
                                                            <li>
                                                                <i class="fas fa-map-marker-alt"></i> {doctor.city_name}
                                                            </li>
                                                            <li>
                                                                <i class="far fa-clock"></i> {doctor.available}
                                                            </li>
                                                            <li>
                                                                <i class="far fa-money-bill-alt"></i> ${doctor.fees}
                                                                <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                            </li>
                                                        </ul>
                                                        <div class="row row-sm">
                                                            <div class="col-6">
                                                                <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                                                            </div>
                                                            <div class="col-6">
                                                                <a href="booking.html" class="btn book-btn">Book Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div></div></div></div><button class="slick-next slick-arrow" aria-label="Next" type="button" >Next</button></div>
                                    
                                    </div>
                                )
                            })

                        }




                    </div>
                </div>
            </section>
        </div>
    )
}
