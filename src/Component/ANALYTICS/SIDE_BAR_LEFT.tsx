

function App() {
	return (
		<>
			 
             <div className="middle-sidebar-left">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card w-100 bg-lightblue p-lg-5 p-4 border-0 rounded-lg d-block float-left">
                                <img src="https://via.placeholder.com/70x70.png" alt="icon" className="sm-mt-2 w75 position-relative top--10 float-left mr-2 mt--1 "/>
                                <h2 className="display1-size display2-md-size d-inline-block float-left mb-0 text-grey-900 fw-700"><span className="font-xssss fw-600 text-grey-500 d-block mb-2 ml-1">Welcome back</span> Hi, Sandeep have got 123 points!</h2>
                                <img src="https://via.placeholder.com/250x150.png" alt="icon" className="w250 right-15 top-0 position-absolute d-none d-xl-block"/>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 ">
                            <div className="card w-100 p-1 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4 className="fw-700 text-success font-xssss mt-0 mb-0 ">+45%</h4>
                                            <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">4563 </h2>
                                            <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0"> UNITS SALE</h4>                             
                                        </div>
                                        <div className="col-5 text-left">
                                            <div id="chart-users-blue"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 ">
                            <div className="card w-100 p-1 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4 className="fw-700 text-success font-xssss mt-0 mb-0 ">-27%</h4>
                                            <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">3325 </h2>
                                            <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0"> UNITS SALE</h4>                             
                                        </div>
                                        <div className="col-5 text-left">
                                            <div id="chart-users-blue1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 ">
                            <div className="card w-100 p-1 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4 className="fw-700 text-success font-xssss mt-0 mb-0 ">-15%</h4>
                                            <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">4455 </h2>
                                            <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0"> UNITS SALE</h4>                             
                                        </div>
                                        <div className="col-5 text-left">
                                            <div id="chart-users-blue2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfx"></div>
                        <div className="col-lg-12">
                            <div className="card w-100 p-3 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div id="chart-usersMultiplee"></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 ">
                            <div className="card w-100 p-3 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div id="chart-earnings-by-item"></div>
                                <div className="row mt-2">
                                    <div className="col-6 mb-1 text-center">
                                        <h2 className="font-xl text-grey-900 fw-700 ls-lg">4403</h2>
                                        <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase"><span className="mr-2 bg-facebook btn-round-xss d-inline-block mt-0 rounded-circle"></span> this week</h4>
                                    </div>
                                    <div className="col-6 mb-1 text-center">
                                        <h2 className="font-xl text-grey-900 fw-700 ls-lg">5432</h2>
                                        <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase"><span className="mr-2 bg-instagram btn-round-xss d-inline-block mt-0 rounded-circle"></span> this month</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 ">
                            <div className="card w-100 p-3 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div className="card-body p-3">
                                    <div className="row">                           
                                        <div className="col-12 p-0 mt-0">
                                            <div id="chart-round-center"></div>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 ">
                            <div className="card w-100 p-3 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div id="chart-multipleitem"></div>
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <h2 className="font-lg text-grey-900 fw-700 ls-lg">44%</h2>
                                        <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">Week</h4>
                                    </div>
                                    <div className="col-4 text-center">
                                        <h2 className="font-lg text-grey-900 fw-700 ls-lg">55%</h2>
                                        <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">Month</h4>
                                    </div>
                                    <div className="col-4 text-center">
                                        <h2 className="font-lg text-grey-900 fw-700 ls-lg">67%</h2>
                                        <h4 className="text-grey-500 d-flex justify-content-center fw-600 ls-lg font-xsssss text-uppercase">Day</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="col-lg-12">
                            <div className="card w-100 p-5 border-0 mt-4 rounded-lg bg-white shadow-xs overflow-hidden">
                                <div id="chart-candlestick"></div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
               
		</>
	);
}

export default App;
