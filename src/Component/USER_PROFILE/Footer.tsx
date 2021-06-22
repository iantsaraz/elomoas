import { SearchOutline } from 'react-ionicons'

function App() {
	return (
		<>
			{/* // <!-- FOOTER --> */}
			<div className="app-footer border-0 shadow-lg">
            <a href="default.html" className="nav-content-bttn nav-center"><i className="feather-home"></i></a>
            <a href="default-follower.html" className="nav-content-bttn"><i className="feather-package"></i></a>
            <a href="default-live-stream.html" className="nav-content-bttn" data-tab="chats"><i className="feather-layout"></i></a>            
            <a href="/" className="nav-content-bttn sidebar-layer"><i className="feather-layers"></i></a>
            <a href="default-settings.html" className="nav-content-bttn"><img src="https://via.placeholder.com/50x50.png" alt="user" className="w30 shadow-xss"/></a>
        </div>

        <div className="app-header-search">
            <form className="search-form">
                <div className="form-group searchbox mb-0 border-0 p-1">
                    <input type="text" className="form-control border-0" placeholder="Search..."/>
                    <i className="input-icon">
                        <SearchOutline />
                    </i>
                    <a href="/" className="ml-1 mt-1 d-inline-block close searchbox-close">
                        <i className="ti-close font-xs"></i>
                    </a>
                </div>
            </form>
        </div>
			{/* // <!-- FOOTER --> */}
  
	</>
	);
}

export default App;
