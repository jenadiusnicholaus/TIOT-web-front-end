export default (to, from, next) => {
  console.log("From:", from.path);
  console.log("To:", to.path);
  const token =
    sessionStorage.getItem("access") != null
      ? JSON.parse(sessionStorage.getItem("access"))
      : null;

  if (from.path === "/app/sessions/signUp") {
    next("/sessions/validate");
    return;
  }
  
  if (to.path === "/" && token !== null) {
    next("/app/dashboard");
  }
  if (token !== null) {
    next();
    return;
  } else {
    next("/sessions/signIn");
    return;
  }
};
