const useLogOut = () => {
  const handleLogOut = () => {
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };
  return { handleLogOut };
};

export { useLogOut };
