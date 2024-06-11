// !! Components
import { useGetProfile } from "../../../../hooks/profile/use-http";
import { ProfileIcon } from "../Icon";

const Profile = () => {
  const { data } = useGetProfile();
  return (
    <section className="flex items-center gap-2">
      <span className="text-sm">{data?.getProfile.data.user.username}</span>
      <ProfileIcon width="24" height="24" color="black" />
    </section>
  );
};

export default Profile;
