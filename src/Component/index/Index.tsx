
import Navigation from "./Navigation";
import Side_Bar_Menu_Header from "./Side_Bar_Menu_Header";
function App() {
	return (
		<div className='color-theme-blue mont-font'>
			<div className='main-wrapper'>
				{/* <!-- navigation --> */}
				<Navigation />
				{/* <!-- navigation --> */}

				{/* <!-- main content --> */}
				<div className='main-content'>
					<Side_Bar_Menu_Header />
				</div>
			</div>
		</div>
	);
}

export default App;
