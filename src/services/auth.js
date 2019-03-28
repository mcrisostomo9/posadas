export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = ({ password }) => {
  if (password === `08302019`) {
    return setUser({
      isAuth: true,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  const user = getUser();
  console.log(`is auth: ${user.isAuth}`);
  return user.isAuth && !undefined;
};
