import axios from "axios";

export const LoginFormSubmit = async ({
  e,
  setLoggedIn,
  navigate,
  setError,
}) => {
  e.preventDefault();
  console.log("testing123");
  const formData = new FormData(e.target);

  try {
    await axios.post(`/api/user/login`, {
      email: formData.get("email"),
      password: formData.get("password"),
    });
    setError("");
    setLoggedIn(true);
    navigate("/welcomepage");
  } catch (error) {
    setError(error.response.data.message);
    console.log(error.response.data.message);
  }
};
