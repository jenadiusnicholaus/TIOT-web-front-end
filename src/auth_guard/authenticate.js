export default (to, from, next) => {
  console.log("From:", from.path);
  console.log("To:", to.path);
  const userInfo =
    sessionStorage.getItem("userInfo") != null
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : null;

  if (from.path === "/app/sessions/signUp") {
    next("/sessions/validate");
    return;
  }
  if (to.path === "/") {
    next("/sessions/signIn");
    return;
  }

  if (userInfo === null) {
    next("/sessions/signIn");
    return;
  }

  if (userInfo?.access !== null) {
    next();
    return;
  } else {
    next("/sessions/signIn");
    return;
  }
};
