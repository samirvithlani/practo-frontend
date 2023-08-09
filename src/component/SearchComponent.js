import React from 'react'
import { Helmet } from 'react-helmet'

export const SearchComponent = () => {
    var style1 = {
        
    }
    var style2 = {
        
    }
    return (
        <div>
            <Helmet>
                <link type="image/x-icon" href="assets/img/favicon.png" rel="icon" />
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/slick.js"></script>
                <script src="assets/js/script.js"></script>
            </Helmet>


            <section class="section section-search">
                <div class="container-fluid">
                    <div class="banner-wrapper">
                        <div class="banner-header text-center">
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
                        </div>


                        <div class="search-box">
                            <form action="templateshub.net">
                                <div class="form-group search-location">
                                    <input type="text" class="form-control" placeholder="Search Location" />
                                    <span class="form-text">Based on your Location</span>
                                </div>
                                <div class="form-group search-info">
                                    <input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                                    <span class="form-text">Ex: Dental or Sugar Check up etc</span>
                                </div>
                                <button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
            <div class="container-fluid">
                <div class="section-header text-center">
                    <h2>Clinic and Specialities</h2>
                    <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-9">

                        <div class="specialities-slider slider slick-initialized slick-slider slick-dotted"><div class="slick-list draggable"><div class="slick-track" style={style2}><div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Dentist</p>
                        </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="tabpanel" id="slick-slide00"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-01.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Urology</p>
                        </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide01"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-02.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Neurology</p>
                        </div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide02"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Orthopedic</p>
                        </div></div></div><div class="slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide03"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Cardiologist</p>
                        </div></div></div><div class="slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide04"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Dentist</p>
                        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-01.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Urology</p>
                        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-02.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Neurology</p>
                        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Orthopedic</p>
                        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Cardiologist</p>
                        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1"><div><div class="speicality-item text-center" style={style1}>
                            <div class="speicality-img">
                                <img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>Dentist</p>
                        </div></div></div></div></div><ul class="slick-dots" style={style2} role="tablist"><li class="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabindex="0" aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 5" tabindex="-1">2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 5" tabindex="-1">3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 5" tabindex="-1">4</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 5" tabindex="-1">5</button></li></ul></div>


                    </div>
                </div>
            </div>
        </div>
    )
}
