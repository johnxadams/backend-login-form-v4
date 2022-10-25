import axios from "axios";

export const RegisterFormSubmit = async (e, setError, navigate) => {
  e.preventDefault();
  console.log("testing123");
  const formData = new FormData(e.target);

  try {
    await axios.post(`/api/user/create`, {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      userName: formData.get("userName"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
    setError("");
    navigate("/login");
  } catch (error) {
    setError(error.response.data.error.errors[0]?.msg)
    console.log(error.response.data.message);
    console.log(error.response.data.error.errors[0]?.msg);
  }
};
