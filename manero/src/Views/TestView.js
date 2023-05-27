import { useProfileContext } from "../contexts/ProfileContext";

const TestView = () => {
  const { profile, addresses } = useProfileContext();

  return (
    <div>
      {profile.name} - {profile.email} - {profile.roleId} -{" "}
      {addresses[1].streetName}
    </div>
  );
};

export default TestView;
