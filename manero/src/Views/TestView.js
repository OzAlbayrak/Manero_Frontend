import { useAddressContext } from "../contexts/AddressContext";
import { useProfileContext } from "../contexts/ProfileContext";

const TestView = () => {
  const { profile } = useProfileContext();
  const { addresses } = useAddressContext();

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
    </div>
  );
};

export default TestView;
