import { Avatar } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

export const DoctorDashBorad = () => {


    var style1= {
        transform: "none; min-height: 299px"
    }
    var style2 = {
        paddingTop: "0px; padding-bottom: 1px; position: static; transform: none;"
    }
    var style3 = {
        position: "absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;"
    }
    var style4 = {
        transform: "none;"
    }
    var style5 = {
        position: "relative; overflow: visible; box-sizing: border-box; min-height: 1px;"
    }
    var style6 = {
        position: "absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;"
    }
    var style7 ={
        position: "absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"
    }
    var style8 = {
        position: "absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"
    }
    var style9 = {
        position: "absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 382px; height: 877px;"
    }
    var style10 ={
        height: "400px; width: 400px;"
    }
    var sessionData = {
        doctorId: sessionStorage.getItem("doctorId"),
        doctorName: sessionStorage.getItem("doctorName"),
        doctorEmail: sessionStorage.getItem("doctorEmail"),
        doctorPassword: sessionStorage.getItem("doctorPassword"),
        doctorRoleId: sessionStorage.getItem("doctorRoleId"),
        experiace: sessionStorage.getItem("experiace"),
    }
    return (
        <div>
             <Helmet>
                <link type="image/x-icon" href="./assets/img/favicon.png" rel="icon" />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="/assets/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <script src="/assets/js/jquery.min.js"></script>
                <script src="/assets/js/popper.min.js"></script>
                <script src="/assets/js/bootstrap.min.js"></script>
                <script src="/assets/js/slick.js"></script>
                <script src="/assets/js/script.js"></script>
            </Helmet>



            <div class="breadcrumb-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content" style = {style1}>
                <div class="container-fluid" style={style4}>

                    <div class="row" style={style4}>
                        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar" style={style5}>

                           

                            <div class="theiaStickySidebar" style = {style1}><div class="profile-sidebar">
                                <div class="widget-profile pro-widget-content">
                                    <div class="profile-info-widget">
                                        <a href="#" class="booking-doc-img">
                                        <Avatar style={{ width: '100px', height: '100px', margin: '35px' }} />
                                        
                                        </a>
                                        <div class="profile-det-info">
                                            <h3>{sessionData.doctorName}</h3>

                                            <div class="patient-details">
                                                <h5 class="mb-0">{sessionData.experiace}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dashboard-widget">
                                    <nav class="dashboard-menu">
                                        <ul>
                                            <li class="active">
                                                <a href="doctor-dashboard.html">
                                                    <i class="fas fa-columns"></i>
                                                    <span>Dashboard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="appointments.html">
                                                    <i class="fas fa-calendar-check"></i>
                                                    <span>Appointments</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="my-patients.html">
                                                    <i class="fas fa-user-injured"></i>
                                                    <span>My Patients</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="schedule-timings.html">
                                                    <i class="fas fa-hourglass-start"></i>
                                                    <span>Schedule Timings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="invoices.html">
                                                    <i class="fas fa-file-invoice"></i>
                                                    <span>Invoices</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="reviews.html">
                                                    <i class="fas fa-star"></i>
                                                    <span>Reviews</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="chat-doctor.html">
                                                    <i class="fas fa-comments"></i>
                                                    <span>Message</span>
                                                    <small class="unread-msg">23</small>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="doctor-profile-settings.html">
                                                    <i class="fas fa-user-cog"></i>
                                                    <span>Profile Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="social-media.html">
                                                    <i class="fas fa-share-alt"></i>
                                                    <span>Social Media</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="doctor-change-password.html">
                                                    <i class="fas fa-lock"></i>
                                                    <span>Change Password</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">
                                                    <i class="fas fa-sign-out-alt"></i>
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div><div class="resize-sensor" style={style6}><div class="resize-sensor-expand" style={style8}><div style={style9}></div></div><div class="resize-sensor-shrink" style={style2}><div style={style7}></div></div></div></div></div>

                        <div class="col-md-7 col-lg-8 col-xl-9">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card dash-card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-4">
                                                    <div class="dash-widget dct-border-rht">
                                                        <div class="circle-bar circle-bar1">
                                                            <div class="circle-graph1" data-percent="75"><canvas width="500" height="500" style={style10}></canvas>
                                                                <img src="assets/img/icon-01.png" class="img-fluid" alt="patient"/>
                                                            </div>
                                                        </div>
                                                        <div class="dash-widget-info">
                                                            <h6>Total Patient</h6>
                                                            <h3>1500</h3>
                                                            <p class="text-muted">Till Today</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-4">
                                                    <div class="dash-widget dct-border-rht">
                                                        <div class="circle-bar circle-bar2">
                                                            <div class="circle-graph2" data-percent="65"><canvas width="500" height="500" style={style10}></canvas>
                                                                <img src="assets/img/icon-02.png" class="img-fluid" alt="Patient"/>
                                                            </div>
                                                        </div>
                                                        <div class="dash-widget-info">
                                                            <h6>Today Patient</h6>
                                                            <h3>160</h3>
                                                            <p class="text-muted">06, Nov 2019</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12 col-lg-4">
                                                    <div class="dash-widget">
                                                        <div class="circle-bar circle-bar3">
                                                            <div class="circle-graph3" data-percent="50"><canvas width="500" height="500" style={style10}></canvas>
                                                                <img src="assets/img/icon-03.png" class="img-fluid" alt="Patient"/>
                                                            </div>
                                                        </div>
                                                        <div class="dash-widget-info">
                                                            <h6>Appoinments</h6>
                                                            <h3>85</h3>
                                                            <p class="text-muted">06, Apr 2019</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="mb-4">Patient Appoinment</h4>
                                    <div class="appointment-tab">

                                        
                                        <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
                                            </li>
                                        </ul>
                                        

                                        <div class="tab-content">

                                            
                                            <div class="tab-pane show active" id="upcoming-appointments">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Patient Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Purpose</th>
                                                                        <th>Type</th>
                                                                        <th class="text-center">Paid Amount</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td class="text-center">$150</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="tab-pane" id="today-appointments">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Patient Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Purpose</th>
                                                                        <th>Type</th>
                                                                        <th class="text-center">Paid Amount</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Elsie Gilley <span>#PT0006</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span class="d-block text-info">6.00 PM</span></td>
                                                                        <td>Fever</td>
                                                                        <td>Old Patient</td>
                                                                        <td class="text-center">$300</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Joan Gardner <span>#PT0006</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span class="d-block text-info">5.00 PM</span></td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td class="text-center">$100</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Daniel Griffing <span>#PT0007</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td class="text-center">$75</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Walter Roberson <span>#PT0008</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td class="text-center">$350</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Robert Rhodes <span>#PT0010</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td class="text-center">$175</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Harry Williams <span>#PT0011</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td class="text-center">$450</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>

                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
