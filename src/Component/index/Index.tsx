
import Navigation from "./Navigation";
import SIDE_BAR_MENU_HEADER from "./SIDE_BAR_MENU_HEADER";
import SIDE_BAR_MENU_LEFT from "./SIDE_BAR_MENU_LEFT";
import SIDE_BAR_MENU_RIGHT from "./SIDE_BAR_MENU_RIGHT";
import FOOTER from "./FOOTER";

function Index() {
	return (
		<div className='color-theme-blue mont-font'>
			<div className="preloader"></div>
			<div className="main-wrapper">
				{/* <!-- navigation --> */}
				<Navigation />
		

				{/* <!-- main content --> */}
				<div className="main-content">
					<SIDE_BAR_MENU_HEADER />
					<div className="middle-sidebar-bottom">
						<SIDE_BAR_MENU_LEFT />
						<SIDE_BAR_MENU_RIGHT />
					</div>
				</div>
				<FOOTER />
			</div>
		</div>
	);
}

export default Index;
