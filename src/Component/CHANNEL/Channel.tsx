import Navigation from "../index/Navigation";
import SIDE_BAR_HEADER from "./SIDE_BAR_HEADER";
import SIDE_BAR_LEFT from "./SIDE_BAR_LEFT";
import SIDE_BAR_RIGHT from "./SIDE_BAR_RIGHT";
import Footer from "./Footer";

function App() {
	return (
		<div className='color-theme-blue mont-font'>
   			<div className="preloader"></div>

			<div className='main-wrapper'>
				{/* <!-- navigation --> */}
				<Navigation />
		

				{/* <!-- main content --> */}
				<div className='main-content'>
					
					<SIDE_BAR_HEADER/>
					<div className="middle-sidebar-bottom">
						<SIDE_BAR_LEFT/>
						<SIDE_BAR_RIGHT/>
					</div>
					<Footer/>
				</div>
				
			</div>
		</div>
	);
}

export default App;
