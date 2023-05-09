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
import CartView from './Views/CartView';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/Reset' element={<ResetedPassword />} />
					<Route path='/Created' element={<AccountCreated />} />
					<Route path='/GetStarted' element={<GetStartedHomeView />} />
					<Route path='/GetStartedWelcome' element={<GetStartedWelcomeView />} />
					<Route path='/VerifyNumber' element={<VerifyNumberView />} />
					<Route path='/ConfirmCode' element={<ConfirmCodeView />} />
					<Route path='/SignIn' element={<SignIn />} />
					<Route path='/SignUp' element={<SignUp />} />
					<Route path='/CartView' element={<CartView />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
