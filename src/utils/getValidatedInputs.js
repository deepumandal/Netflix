export const getValidatedInputs = (email, password) => {
  const emailTest = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const passwordTest =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!emailTest) return "Please enter valid email address";
  if (!passwordTest) return "Please enter valid password";

  return "";
};
