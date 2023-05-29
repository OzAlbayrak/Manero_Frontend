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
import CheckoutView from './Views/CheckoutView';
import ShippmentView from './Views/ShippmentView';
import AllReviewsView from './Views/AllReviewsView';
import LeaveReviewView from './Views/LeaveReviewView';
import PaymentView from './Views/PaymentView';
import OrderCompletedView from './Views/OrderCompletedView';
import OrderFailedView from './Views/OrderFailedView';
import TestView from './Views/TestView';
import FilterView from './Views/FilterView';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/home' element={<HomeView />} />
					<Route path='/bestSellers' element={<BestSellerView />} />
					<Route path='/filter' element={<FilterView />} />
					<Route path='/reset' element={<ResetedPassword />} />
					<Route path='/created' element={<AccountCreated />} />
					<Route path='/description' element={<DescriptionView />} />
					<Route path='/reviews' element={<AllReviewsView />} />
					<Route path='/' element={<GetStartedHomeView />} />
					<Route path='/getStartedWelcome' element={<GetStartedWelcomeView />} />
					<Route path='/verifyNumber' element={<VerifyNumberView />} />
					<Route path='/confirmCode' element={<ConfirmCodeView />} />
					<Route path='/search' element={<SearchView />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/signUp' element={<SignUp />} />
					<Route path='/forgotPassword' element={<ForgotPassword />} />
					<Route path='/resetPassword' element={<ResetPassword />} />
					<Route path='/Cart' element={<CartView />} />
					<Route path='/Wishlist' element={<WishlistView />} />
					<Route path='/PromoCode' element={<PromocodesView />} />
					<Route path='/Order' element={<OrderView />} />
					<Route path='/Checkout' element={<CheckoutView />} />
					<Route path='/Shippment' element={<ShippmentView />} />
					<Route path='/leaveReview' element={<LeaveReviewView />} />
					<Route path='/Payment' element={<PaymentView />} />
					<Route path='/OrderCompleted' element={<OrderCompletedView />} />
					<Route path='/test' element={<TestView />} />
					<Route path='/OrderFailed' element={<OrderFailedView />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
