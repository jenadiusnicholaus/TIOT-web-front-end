export default (to, from, next) => {
  try {
    const userInfo =
      sessionStorage.getItem("registeredUser") != null
        ? JSON.parse(sessionStorage.getItem("registeredUser"))
        : null;

    console.log("User info:", userInfo);

    if (userInfo != null) {
      if (userInfo.is_active === false) {
        next("/sessions/validate");
      }
    } else {
      next("/sessions/signIn");
    }
  } catch (error) {
    next("/sessions/signIn");
    return;
  }
};
