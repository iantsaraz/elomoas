

function App() {
	return (
		<>
		          <div className="middle-sidebar-right scroll-bar">
                    <div className="middle-sidebar-right-content">

                        <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
                            <div className="card-body p-3 d-block text-left">
                                 <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i className="feather-shield font-lg text-current position-absolute left-0"></i> Experience <span className="d-block text-grey-500 mt-1 font-xssss">0 - 2 Year </span></h4>
                                 <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i className="feather-database font-lg text-current position-absolute left-0"></i> Language <span className="d-block text-grey-500 mt-1 font-xssss">English, Germen, Spanish </span></h4>
                                 <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i className="feather-home font-lg text-current position-absolute left-0"></i> Gender <span className="d-block text-grey-500 mt-1 font-xssss">Male </span></h4>
                                 <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i className="feather-shield font-lg text-current position-absolute left-0"></i> Education <span className="d-block text-grey-500 mt-1 font-xssss">MBA </span></h4>
                                 <h4 className="pl-35 mb-4 font-xsss fw-600 text-grey-900 position-relative"><i className="feather-flag font-lg text-current position-absolute left-0"></i> Company <span className="d-block text-grey-500 mt-1 font-xssss">Github </span></h4>
                                 <h4 className="pl-35 mb-0 font-xsss fw-600 text-grey-900 position-relative"><i className="feather-award font-lg text-current position-absolute left-0"></i> Age <span className="d-block text-grey-500 mt-1 font-xssss">32 Year </span></h4>
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
                                <form action="" className="mt-3">
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
