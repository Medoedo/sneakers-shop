import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, ShopPage, FavouriteItemsPage } from '../pages';
import './app.scss';

import ModalCart from '../modal/ModalCart';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="container">
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/shop' element={<ShopPage />} />
						<Route path='/favorite' element={<FavouriteItemsPage />} />
					</Routes>
					<ModalCart/>
				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
