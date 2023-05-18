import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import GetStartedHomeView from './Views/GetStartedHomeView';
import GetStartedWelcomeView from './Views/GetStartedWelcomeView';
import VerifyNumberView from './Views/VerifyNumberView';
import ConfirmCodeView from './Views/ConfirmCodeView';
import ResetedPassword from './components/sections/ResetedPassword';
import SignIn from './components/sections/SignIn';
import SignUp from './components/sections/SignUp';
import AccountCreated from './components/sections/AccountCreated';
import ForgotPassword from './components/sections/ForgotPassword';
import ResetPassword from './components/sections/ResetPassword';
import CartView from './Views/CartView';
import WishlistView from './Views/WishlistView';
import PromocodesView from './Views/PromocodesView';
import BestSellerView from './Views/BestSellerView';
import SearchView from './Views/SearchView';
import OrderView from './Views/OrderView';
import DescriptionView from './Views/DescriptionView';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/bestSellers' element={<BestSellerView/>} />
					<Route path='/Reset' element={<ResetedPassword />} />
					<Route path='/Created' element={<AccountCreated />} />
					<Route path='/DescriptionView' element={<DescriptionView />} />
					<Route path='/GetStarted' element={<GetStartedHomeView />} />
					<Route path='/GetStartedWelcome' element={<GetStartedWelcomeView />} />
					<Route path='/VerifyNumber' element={<VerifyNumberView />} />
					<Route path='/ConfirmCode' element={<ConfirmCodeView />} />
					<Route path='/Search' element={<SearchView />}/>
					<Route path='/SignIn' element={<SignIn />} />
					<Route path='/SignUp' element={<SignUp />} />
					<Route path='/ForgotPassword' element={<ForgotPassword />} />
					<Route path='/ResetPassword' element={<ResetPassword />} />
					<Route path='/Cart' element={<CartView />} />
					<Route path='/Wishlist' element={<WishlistView />} />
					<Route path='/Promo' element={<PromocodesView />} />
					<Route path='/Order' element={<OrderView />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
