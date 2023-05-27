import { useProfileContext } from "../contexts/ProfileContext";

const TestView = () => {
  const { profile } = useProfileContext();

  return (
    <div>
      {profile.name} - {profile.email} - {profile.roleId}{" "}
      {/*addresses[0].streetName */}
    </div>
  );
};

export default TestView;
