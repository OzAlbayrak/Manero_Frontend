import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
import { getCreditCards } from '../utilities/api';

const CreditCardContext = createContext();

export const useCreditCardContext = () => {
	return useContext(CreditCardContext);
};

export const CreditCardProvider = ({ children }) => {
	const [creditCards, setCreditCards] = useState({});

	const getToken = () => {
		return sessionStorage.getItem('apiAccessToken');
	};

	const getUserCreditCards = useCallback(async () => {
		const token = getToken();
		if (token !== null) {
			try {
				const response = await getCreditCards(token);
				if (response.ok) {
					const creditCardData = await response.json();
					setCreditCards(creditCardData);
					console.log('creditcarddata:', creditCardData);
				} else if (response.status === 404) {
					const error = await response.text();
					console.log(error);
				}
			} catch (error) {
				console.log('error:', error);
			}
		}
	}, []);

	useEffect(() => {
		getUserCreditCards();
	}, [getUserCreditCards]);

	return (
		<CreditCardContext.Provider
			value={{
				creditCards,
				getUserCreditCards,
				setCreditCards,
			}}
		>
			{children}
		</CreditCardContext.Provider>
	);
};
