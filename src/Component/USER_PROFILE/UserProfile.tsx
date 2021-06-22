
import NavigationProfile from "./NavigationProfile";
import SIDE_BAR_HEADER from "./SIDE_BAR_HEADER";
import SIDE_BAR_LEFT from "./SIDE_BAR_LEFT";
import SIDE_BAR_RIGHT from "./SIDE_BAR_RIGHT";
import Footer from "./Footer";

function App() {
	return (
		<div className='color-theme-blue mont-font'>
			<div className="preloader"></div>

			<div className='main-wrap'>
				{/* <!-- navigation --> */}
				<NavigationProfile />


				{/* <!-- main content --> */}
				<div className="course-details pb-lg--7 pt-4 pb-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<SIDE_BAR_LEFT />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
				
		
	);
}

export default App;
