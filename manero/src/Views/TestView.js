import { useAddressContext } from "../contexts/AddressContext";
import { useCreditCardContext } from "../contexts/CreditCardContext";
import { useProfileContext } from "../contexts/ProfileContext";

const TestView = () => {
  const { profile } = useProfileContext();
  const { addresses } = useAddressContext();
  const { creditCards } = useCreditCardContext();

  return (
    <div>
      {profile.name} - {profile.email} - {profile.roleId}
      <br />
      {profile.imageSrc && <img src={profile.imageSrc} />}
      {Array.isArray(addresses) &&
        addresses.map((address) => (
          <div key={address.addressId}>
            <br />
            {address.title}
            <br />
            {address.streetName}
            <br />
            {address.postalCode}, {address.city}
          </div>
        ))}
      {Array.isArray(creditCards) &&
        creditCards.map((creditcard) => (
          <div key={creditcard.creditCardId}>
            <br />
            Creditcard Name:
            <br />
            {creditcard.cardName}
            <br />
            Creditcard number:
            <br />
            {creditcard.cardNumber}
            <br />
            Expire:
            <br />
            {creditcard.expireMonth} / {creditcard.expireYear}
            <br />
            CVV:
            <br />
            {creditcard.cvvCode}
          </div>
        ))}
    </div>
  );
};

export default TestView;
