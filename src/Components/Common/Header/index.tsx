// !! Request Function
import { useGetProfile } from "../../../hooks/profile/use-http";
// !! Components
import { useLogOut } from "../../../hooks/Logout";
import CustomLink from "../Main/CustomLink";
import ToggleTheme from "../Main/ToggleTheme";
import ButtonContainer from "../Main/button-container";
import Profile from "../Main/profile";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { handleLogOut } = useLogOut();
  const { data: profile } = useGetProfile();

  const hiddenProfile = !profile?.getProfile?.data?.user?._id;
  const visibleProfile = !!profile?.getProfile?.data?.user?._id;

  return (
    <div className="flex p-4 bg-primary-200 items-center justify-around w-full flex-wrap">
      <div className="flex gap-10 flex-wrap">
        <ToggleTheme />
        <CustomLink to="/">home</CustomLink>{" "}
        <CustomLink to="/chat">chat</CustomLink>
        {hiddenProfile && <CustomLink to="/login">login</CustomLink>}
      </div>

      <div className="flex items-center gap-10">
        {visibleProfile && (
          <ButtonContainer onClick={handleLogOut}>logout</ButtonContainer>
        )}{" "}
        {visibleProfile && <Profile />}
      </div>
    </div>
  );
};

export default Header;
