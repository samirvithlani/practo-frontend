import { Avatar} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const Appoinment = () => {
    var style1 = {
        position: "relative; overflow: visible; box-sizing: border-box; min-height: 1px"
    }
    var style2 = {
        paddingTop: "0px; padding-bottom: 1px; position: static; transform: none"
    }
    var style3 = {
        position: "absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"
    }
    var style4 = {
        position: "absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"
    }
    var style5 = {
        position: "absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden"
    }
    var style6 = {
        position: "absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 382px; height: 1776px;"
    }
    var style7 = {
        position: "absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"
    }
    var doctorId = useParams().id

    

    const [doctors, setdoctors] = useState([])
    const getDoctors = async () => {
        await axios.get("http://localhost:8080/doctor").then(res => {
            setdoctors(res.data)
        })
    }

    useEffect(() => {

        getDoctors()

        return () => {

        }
    }, [])

    return (
        <div>Appoinment
            <Helmet>
                <link type="image/x-icon" href="./assets/img/favicon.png" rel="icon" />
                <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./assets/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="./assets/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="./assets/css/style.css" />
                <script src="./assets/js/jquery.min.js"></script>
                <script src="./assets/js/popper.min.js"></script>
                <script src="./assets/js/bootstrap.min.js"></script>
                <script src="./assets/js/slick.js"></script>
                <script src="./assets/js/script.js"></script>
            </Helmet>
            <div class="content" style={{ transform: "none", minHeight: "299px" }}>
                <div class="container-fluid" style={{ transform: "none" }}>

                    <div class="row" style={{ transform: "none" }}>
                        <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar" style={style1}>


                            <div class="theiaStickySidebar" style={style2}><div class="card search-filter">
                                <div class="card-header">
                                    <h4 class="card-title mb-0">Search Filter</h4>
                                </div>
                                <div class="card-body">
                                    <div class="filter-widget">
                                        <div class="cal-icon">
                                            <input type="text" class="form-control datetimepicker" placeholder="Select Date" />
                                        </div>
                                    </div>
                                    <div class="filter-widget">
                                        <h4>Gender</h4>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="gender_type" checked="" />
                                                <span class="checkmark"></span> Male Doctor
                                            </label>
                                        </div>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span class="checkmark"></span> Female Doctor
                                            </label>
                                        </div>
                                    </div>
                                    <div class="filter-widget">
                                        <h4>Select Specialist</h4>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" checked="" />
                                                <span class="checkmark"></span> Urology
                                            </label>
                                        </div>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" checked="" />
                                                <span class="checkmark"></span> Neurology
                                            </label>
                                        </div>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span class="checkmark"></span> Dentist
                                            </label>
                                        </div>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span class="checkmark"></span> Orthopedic
                                            </label>
                                        </div>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span class="checkmark"></span> Cardiologist
                                            </label>
                                        </div>
                                        <div>
                                            <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span class="checkmark"></span> Cardiologist
                                            </label>
                                        </div>
                                    </div>
                                    <div class="btn-search">
                                        <button type="button" class="btn btn-block">Search</button>
                                    </div>
                                </div>
                            </div><div class="resize-sensor" style={style4}>
                                    <div class="resize-sensor-expand" style={style5}>
                                        <div style={style6}>
                                        </div></div>
                                    <div class="resize-sensor-shrink" style={style7}>
                                        <div style={style3}></div></div></div></div></div>

                        <div class="col-md-12 col-lg-8 col-xl-9">


                            {
                                doctors.map((doctor) => {
                                    return (
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="doctor-widget">
                                                    <div class="doc-info-left">
                                                        <div class="doctor-img">
                                                            <a href="doctor-profile.html">
                                                                <Avatar style={{ width: '100px', height: '100px', margin: '35px' }} />
                                                            </a>
                                                        </div>

                                                        <div class="doc-info-cont">
                                                            <h4 class="doc-name"><a href="doctor-profile.html">{doctor.doctorName}</a></h4>
                                                            <p class="doc-speciality">{doctor.qualification}</p>
                                                            <h5 class="doc-department"><img src="../assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />{doctor.specialization}</h5>
                                                            <div class="rating">
                                                                <i class="fas fa-star filled"></i>
                                                                <i class="fas fa-star filled"></i>
                                                                <i class="fas fa-star filled"></i>
                                                                <i class="fas fa-star filled"></i>
                                                                <i class="fas fa-star"></i>
                                                                <span class="d-inline-block average-rating">(17)</span>
                                                            </div>
                                                            <div class="clinic-details">
                                                                <p class="doc-location"><i class="fas fa-map-marker-alt"></i> {doctor.cityName}</p>
                                                                <ul class="clinic-gallery">
                                                                    <li>
                                                                        <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                            <img src="../assets/img/features/feature-01.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                                            <img src="../assets/img/features/feature-02.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                                            <img src="../assets/img/features/feature-03.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="../assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                                            <img src="../assets/img/features/feature-04.jpg" alt="Feature" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="clinic-services">
                                                                <span>Dental Fillings</span>
                                                                <span> Whitneing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="doc-info-right">
                                                        <div class="clini-infos">
                                                            <ul>
                                                                <li><i class="far fa-thumbs-up"></i> 98%</li>
                                                                <li><i class="far fa-comment"></i> 17 Feedback</li>
                                                                <li><i class="fas fa-map-marker-alt"></i> Florida, USA</li>
                                                                <li><i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Lorem Ipsum"></i> </li>
                                                            </ul>
                                                        </div>
                                                        <div class="clinic-booking">
                                                            <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                                            <Link class="apt-btn" to = {`/bookappoinmenttime/${doctor.doctorId}`}>Book Appointment</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            <div class="load-more text-center">
                                <a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>



    )
}

