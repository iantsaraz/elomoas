

function App() {
	return (
		<>
		<div className="middle-sidebar-right scroll-bar">
                    <div className="middle-sidebar-right-content">

                        <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
                            <div className="card-body p-2 d-block text-center bg-no-repeat bg-image-topcenter" style={{backgroundImage: 'url(images/user-pattern.png)'}}>
                                <a href="#" className="position-absolute right-0 mr-4"><i className="feather-edit text-grey-500 font-xs"></i></a>
                                <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90"><img src="https://via.placeholder.com/100x100.png" alt="" className="float-right shadow-sm rounded-circle w-100"/></figure>
                                <div className="clearfix"></div>
                                <h2 className="text-black font-xss lh-3 fw-700 mt-3 mb-1">Hendrix Stamp</h2>
                                <h4 className="text-grey-500 font-xssss mt-0"><span className="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                                <div className="clearfix"></div>
                                <div className="col-12 text-center mt-4 mb-2">
                                    <a href="#" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-comment-alt font-sm"></i></a>
                                    <a href="#" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-lock font-sm"></i></a>
                                    <a href="#" className="p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                </div>
                                <ul className="list-inline border-0 mt-4">
                                    <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">500+ <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                    <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">88.7 k <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                    <li className="list-inline-item text-center"><h4 className="fw-700 font-md">1,334 <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                </ul>

                                <div className="col-12 pl-0 mt-4 text-left">
                                    <h4 className="text-grey-800 font-xsss fw-700 mb-3 d-block">My Skill <a href="#"><i className="ti-angle-right font-xsssss text-grey-700 float-right "></i></a></h4>
                                    <div className="carousel-card owl-carousel owl-theme overflow-visible nav-none">
                                        <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                    </div>
                                </div>  

                            </div>
                        </div>

                        <div className="card theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">
                            <div className="card-body d-flex justify-content-between align-items-end p-4">
                                <div>
                                    <h4 className="font-xsss text-grey-900 mb-2 d-flex align-items-center justify-content-between mt-2 fw-700">
                                        Dark Mode
                                    </h4>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input dark-mode-switch" id="darkmodeswitch"/>
                                    <label className="custom-control-label bg-success" htmlFor="darkmodeswitch"></label>
                                </div>

                            </div>
                        </div>

                        <div className="card theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">
                            <div className="card-body d-flex justify-content-between align-items-end pl-4 pr-4 pt-4 pb-3">
                                <h4 className="fw-700 font-xsss">My className</h4>
                                <a href="#" className="position-absolute right-0 mr-4"><i className="ti-more-alt text-grey-500 font-xs"></i></a>
                            </div>
                            <div className="card-body pl-4 pr-4 pt-0 pb-3 border-0 w-100 d-block">
                                <div className="row">
                                    <div className="col-3 p-0">
                                        <a href="#" className="btn-round-lg rounded-lg bg-lightblue ml-3">
                                            <img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-1 w-100"/>
                                        </a>  
                                    </div>
                                    <div className="col-9 pr-3">
                                        <h4 className="font-xssss d-block fw-700 mt-2">Advanced Python Sass <span className="float-right mt-1 font-xsssss text-grey-500">87%</span></h4>
                                        <div className="progress mt-2 h5 w-100">
                                          <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={87} aria-valuemin={0} aria-valuemax={87} style={{width: '87%'}}></div>
                                        </div>        
                                    </div>
                                </div>
                            </div>

                            <div className="card-body pl-4 pr-4 pt-0 pb-3 border-0 w-100 d-block">
                                <div className="row">
                                    <div className="col-3 p-0">
                                        <a href="#" className="btn-round-lg rounded-lg bg-lightblue ml-3">
                                            <img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-1 w-100"/>
                                        </a>  
                                    </div>
                                    <div className="col-9 pr-3">
                                        <h4 className="font-xssss d-block fw-700 mt-2">Bootstrap SASS CSS <span className="float-right mt-1 font-xsssss text-grey-500">65%</span></h4>
                                        <div className="progress mt-2 h5 w-100">
                                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={65} style={{width: '65%'}}></div>
                                        </div>        
                                    </div>
                                </div>
                            </div>

                            <div className="card-body pl-4 pr-4 pt-0 pb-3 border-0 w-100 d-block">
                                <div className="row">
                                    <div className="col-3 p-0">
                                        <a href="#" className="btn-round-lg rounded-lg bg-lightblue ml-3">
                                            <img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-1 w-100"/>
                                        </a>  
                                    </div>
                                    <div className="col-9 pr-3">
                                        <h4 className="font-xssss d-block fw-700 mt-2">Basic JAVA <span className="float-right mt-1 font-xsssss text-grey-500">75%</span></h4>
                                        <div className="progress mt-2 h5 w-100">
                                          <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={75} style={{width: '75%'}}></div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pl-4 pr-4 pt-0 pb-3 border-0 w-100 d-block">
                                <div className="row">
                                    <div className="col-3 p-0">
                                        <a href="#" className="btn-round-lg rounded-lg bg-lightblue ml-3">
                                            <img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-1 w-100"/>
                                        </a>  
                                    </div>
                                    <div className="col-9 pr-3">
                                        <h4 className="font-xssss d-block fw-700 mt-2">Advance React <span className="float-right mt-1 font-xsssss text-grey-500">96%</span></h4>
                                        <div className="progress mt-2 h5 w-100">
                                          <div className="progress-bar bg-success" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={96} style={{width: '96%'}}></div>
                                        </div>        
                                    </div>
                                </div>
                            </div>

                            <div className="card-body pl-4 pr-4 pt-0 pb-4 border-0 w-100 d-block">
                                <div className="row">
                                    <div className="col-3 p-0">
                                        <a href="#" className="btn-round-lg rounded-lg bg-lightblue ml-3">
                                            <img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-1 w-100"/>
                                        </a>  
                                    </div>
                                    <div className="col-9 pr-3">
                                        <h4 className="font-xssss d-block fw-700 mt-2">Mongodb Database <span className="float-right mt-1 font-xsssss text-grey-500">73%</span></h4>
                                        <div className="progress mt-2 h5 w-100">
                                          <div className="progress-bar bg-info" role="progressbar" aria-valuenow={73} aria-valuemin={0} aria-valuemax={73} style={{width: '73%'}}></div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">
                            <div className="card-body d-flex justify-content-between align-items-end pl-4 pr-4 pt-4 pb-3">
                                <h4 className="fw-700 font-xsss">Profile Scrore</h4>
                                <a href="#" className="position-absolute right-0 mr-4"><i className="ti-more-alt text-grey-500 font-xs"></i></a>
                            </div>
                            <div id="chart-multipleitem"></div>
                            <div className="card-body d-block pt-0 pb-0 pl-md-5 pr-md-5">
                                <div className="row">
                                    <div className="col-4 text-center mb-3">
                                        <h4 className="text-warning font-xssss fw-700">HTML <span className="d-block mt-1 font-xsssss fw-500 text-grey-500">67%</span></h4>
                                    </div>
                                    <div className="col-4 text-center mb-3">
                                        <h4 className="text-danger font-xssss fw-700">JAVA <span className="d-block mt-1 font-xsssss fw-500 text-grey-500">55%</span></h4>
                                    </div>
                                    <div className="col-4 text-center mb-3">
                                        <h4 className="text-primary font-xssss fw-700">HTML <span className="d-block mt-1 font-xsssss fw-500 text-grey-500">44%</span></h4>
                                    </div>
                                </div>
                            </div>
                             
                        </div>

                        <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
                            <div className="card-body d-block text-left">
                                <h1 className="text-grey-800 font-xl fw-900 mb-4 lh-3">Sign up for our newsletter</h1>
                                <form action="#" className="mt-3">
                                    <div className="form-group icon-input">
                                        <i className="ti-email text-grey-500 font-sm"></i>
                                        <input type="text" className="form-control mb-2 bg-greylight border-0 style1-input pl-5" placeholder="Enail address"/>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label=""/>
                                        <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox">By checking this box, you confirm that you have read and are agreeing to our terms of use regarding.</label>
                                    </div>
                                </form>
                                <ul className="d-flex align-items-center justify-content-between mt-3">
                                    <li><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                                    <li><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                                    <li><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                                    <li><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                                    <li><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
                <button className="btn btn-circle text-white btn-neutral sidebar-right">
                    <i className="ti-angle-left"></i>  
                </button>
          
		</>
	);
}

export default App;
