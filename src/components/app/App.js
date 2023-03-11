import React from 'react';
// import MainPage from '../pages/MainPage';
import { MainPage, ShopPage, FavouriteItemsPage } from '../pages';
import './app.scss';

function App() {
	return (
		<div className="App">
			<div className="container">
				{/* <MainPage /> */}
				{/* <ShopPage/> */}
				<FavouriteItemsPage/>
			</div>
		</div>
	);
}

export default App;
