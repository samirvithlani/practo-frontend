import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const AppoinmentTime = () => {
    var id = useParams().id;
    const [doctor, setdoctor] = useState('')
    const getDoctorById = async () => {
        await axios.get(`http://localhost:8080/doctor/${id}`).then(res => {
            setdoctor(res.data)
        })
    }
    const [comment, setcomment] = useState('')
    const [reference, setreference] = useState('')
    const [complain, setcomplain] = useState('')
    const [appoinmentTime, setappoinmentTime] = useState('')
    const createappoinment = async () => {

        alert(appoinmentTime)
        var data = {
            userId: localStorage.getItem('userId'),
            doctorId: id,
            appoinmentStatus: false,
            comment: comment,
            reference: reference,
            complain: complain,
            appoinmentTime: appoinmentTime,
            clinicId: 0
        }

        await axios.post('http://localhost:8080/bookapoinment', data).then(res => {

            console.log(res.data)
            
        })
    }

    useEffect(() => {

        getDoctorById()
        return () => {

        }
    })

    return (
        <div>
            <div class="content" style={{ minHeight: "299px" }}>
                <div class="container">

                    <div class="row">
                        <div class="col-12">

                            <div class="card">
                                <div class="card-body">
                                    <div class="booking-doc-info">
                                        <a href="doctor-profile.html" class="booking-doc-img">
                                            <Avatar style={{ width: '50px', height: '40px', margin: '35px' }} />
                                        </a>
                                        <div class="booking-info">
                                            <h4><a href="doctor-profile.html">{doctor.doctorName}</a></h4>
                                            <div class="rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="d-inline-block average-rating">35</span>
                                            </div>
                                            <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card-body">
                                <form onSubmit = {createappoinment}>


                                    <div class="info-widget">
                                        <h4 class="card-title">Personal Information</h4>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Comment</label>
                                                    <input class="form-control" type="text" onChange={(e) => setcomment(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>REFERENCE</label>
                                                    <input class="form-control" type="text" onChange={(e) => setreference(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Complain</label>
                                                    <input class="form-control" type="text" onChange={(e) => setcomplain(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Time</label>
                                                    <input class="form-control" type="text" onChange={(e) => setappoinmentTime(e.target.value)} />
                                                </div>
                                            </div>

                                        </div>
                                        <div class="exist-customer">Existing Customer? <a href="#">Click here to login</a></div>
                                    </div>



                                    <div class="submit-section proceed-btn text-right">
                                        <button class="btn btn-primary submit-btn">Proceed to Book</button>
                                    </div>
                                </form>




                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

