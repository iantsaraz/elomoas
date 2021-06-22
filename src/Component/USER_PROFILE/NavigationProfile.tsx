

function App() {
    return (

        <>
            <div className="upper-header bg-greylight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-6 d-none d-block-md">
                            <ul className="list-inline list-item-style mt-0 float-left pl-1">
                                <li className="list-inline-item pl-0"><a href="/">(+1)866-540-3229</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-xs-6 d-none d-block-md">
                            <ul className="list-inline list-item-style mt-0 float-right">
                                <li className="list-inline-item"><a href="/"><i className="ti-user mr-2"></i> My Account</a></li>
                            </ul>
                        </div>
                        <div className="col-12 d-none d-lg-block">
                            <ul className="list-inline list-item-style mt-0 float-left pl-1">
                                <li className="list-inline-item pl-0"><a href="/">BECOME AN AGENT</a></li>
                                <li className="list-inline-item"><a href="/">PRIVACY</a></li>
                                <li className="list-inline-item"><a href="/">CUSTOMER SERVICE </a></li>
                            </ul>

                            <ul className="list-inline list-item-style mt-0 float-right">
                                <li className="list-inline-item"><a href="/"><i className="ti-location-pin mr-2"></i> Store Locator</a></li>
                                <li className="list-inline-item"><a href="/"><i className="ti-user mr-2"></i> My Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-wrapper pt-3 pb-3 shadow-xss">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 navbar pt-0 pb-0">
                            <a href="/"><h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">Elomoas <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">Online Learning Course</span></h1></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav nav-menu float-none text-center">
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Home <i className="ti-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="./home-1.html">Home One</a>
                                            <a className="dropdown-item" href="./home-2.html">Home Two</a>
                                            <a className="dropdown-item" href="./home-3.html">Home Three</a>
                                            <a className="dropdown-item" href="./home-4.html">Home Four</a>
                                            <a className="dropdown-item" href="./home-5.html">Home Five</a>
                                            <a className="dropdown-item" href="./home-6.html">Home Six</a>

                                            <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>

                                        </div>

                                    </li>
                                    <li className="nav-item dropdown"><a className="nav-link  dropdown-toggle" data-toggle="dropdown" href="/">Pages <i className="ti-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="./about.html">About</a>
                                            <a className="dropdown-item" href="./contact.html">Contact</a>
                                            <a className="dropdown-item" href="./contact-two.html">Contact 2</a>
                                            <a className="dropdown-item" href="./404.html">404</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Blog <i className="ti-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="./blog.html">Blog Default</a>
                                            <a className="dropdown-item" href="./blog-sidebar.html">Blog Sidebar</a>

                                            <a className="dropdown-item" href="./blog-single.html">Blog Single</a>

                                        </div>
                                    </li>
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Course <i className="ti-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="./courses-grid-1.html">Course Gird 1</a>
                                            <a className="dropdown-item" href="./courses-grid-2.html">Course Gird 2</a>
                                            <a className="dropdown-item" href="./courses-grid-3.html">Course Gird 3</a>
                                            <a className="dropdown-item" href="./course-details.html">Single Course 1</a>
                                            <a className="dropdown-item" href="./course-details-2.html">Single Course 2</a>
                                            <a className="dropdown-item" href="./user-profile.html">User Profile</a>
                                            <a className="dropdown-item" href="./author-profile.html">Author Profile</a>
                                        </div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 text-right d-none d-lg-block">
                            <a href="/" data-toggle="modal" data-target="#ModalCart" className="float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i className="ti-shopping-cart font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Cart</span> <span className="icon-count bg-current">3</span></a>
                            <a href="/" className="float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i className="ti-heart font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Saved</span> <span className="icon-count bg-current">2</span></a>
                            <a href="/" className="float-right d-none d-lg-block text-center mt-1 ml-4 text-grey-800"><i className="ti-user font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Account</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>



    );
}

export default App;
