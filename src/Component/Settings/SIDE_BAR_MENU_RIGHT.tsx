

function App() {
	return (
		<>
		<div className="middle-sidebar-right scroll-bar">
                    <div className="middle-sidebar-right-content">

                        <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
                            <div className="card-body p-2 d-block text-center bg-no-repeat bg-image-topcenter" style={{backgroundImage: 'url(images/user-pattern.png)'}}>
                                <a href="/" className="position-absolute right-0 mr-4"><i className="feather-edit text-grey-500 font-xs"></i></a>
                                <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90"><img src="https://via.placeholder.com/100x100.png" alt="" className="float-right shadow-sm rounded-circle w-100"/></figure>
                                <div className="clearfix"></div>
                                <h2 className="text-black font-xss lh-3 fw-700 mt-3 mb-1">Hendrix Stamp</h2>
                                <h4 className="text-grey-500 font-xssss mt-0"><span className="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                                <div className="clearfix"></div>
                                <div className="col-12 text-center mt-4 mb-2">
                                    <a href="/" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-comment-alt font-sm"></i></a>
                                    <a href="/" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-lock font-sm"></i></a>
                                    <a href="/" className="p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                </div>
                                <ul className="list-inline border-0 mt-4">
                                    <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">500+ <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                    <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">88.7 k <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                    <li className="list-inline-item text-center"><h4 className="fw-700 font-md">1,334 <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                </ul>

                                <div className="col-12 pl-0 mt-4 text-left">
                                    <h4 className="text-grey-800 font-xsss fw-700 mb-3 d-block">My Skill <a href="/"><i className="ti-angle-right font-xsssss text-grey-700 float-right "></i></a></h4>
                                    <div className="carousel-card owl-carousel owl-theme overflow-visible nav-none">
                                        <div className="item"><a href="/" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="/" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="/" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="/" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
                                        <div className="item"><a href="/" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3"/></a></div>
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
                                    <li><a href="/" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                                    <li><a href="/" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                                    <li><a href="/" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                                    <li><a href="/" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                                    <li><a href="/" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></li>
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
