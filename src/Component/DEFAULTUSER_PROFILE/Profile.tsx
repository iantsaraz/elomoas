
import NavigationProfile from "./NavigationProfile";
import SIDE_BAR_HEADER from "./SIDE_BAR_HEADER";

function App() {
	return (
		<div className='color-theme-blue mont-font'>
			<div className='main-wrapper'>
				{/* <!-- navigation --> */}
				<NavigationProfile />
		

				{/* <!-- main content --> */}
				<div className='main-content'>
					
				<SIDE_BAR_HEADER/>
				</div>
				
			</div>
		</div>
	);
}

export default App;
