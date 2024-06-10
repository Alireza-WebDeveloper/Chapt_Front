import { useLogOut } from "../../../hooks/Logout";
import { useGetProfile } from "../../../hooks/profile/use-http";
import CustomLink from "../Main/CustomLink";
import ToggleTheme from "../Main/ToggleTheme";
import ButtonContainer from "../Main/button-container";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { handleLogOut } = useLogOut();
  const { data } = useGetProfile();

  const showLoginLink = !data?.getProfile?.data?.user?._id;
  const showLogoutButton = !!data?.getProfile?.data?.user?._id;

  return (
    <div className="flex p-4 bg-primary-200 items-center justify-around w-full flex-wrap">
      <div className="flex gap-10 flex-wrap">
        <CustomLink to="/">home</CustomLink>

        {showLoginLink && <CustomLink to="/login">login</CustomLink>}
      </div>
      <ToggleTheme />

      {showLogoutButton && (
        <ButtonContainer onClick={handleLogOut}>logout</ButtonContainer>
      )}
    </div>
  );
};

export default Header;
