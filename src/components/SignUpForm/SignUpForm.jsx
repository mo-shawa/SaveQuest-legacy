import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css"

function SignUpForm(props) {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const navigate = useNavigate()

  const handleChange = (evt) => {
    const { name, value } = evt.target

    setForm((state) => {
      return {
        ...state,
        [name]: value
      }
    })
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      props.setUserInState(userDoc);
      navigate('../app')
    } catch (err) {
      console.log("SignupForm error", err);
      setForm((state) => {
        return {
          ...state, error: "Sign Up Failed - Try Again"
        }
      });
    }
  };

  const disable = form.password !== form.confirm;
  return (
    <div>
      <div className="form-container">
        <form className="SignupForm" autoComplete="off" onSubmit={handleSubmit}>
          <label className="SignUpLabel" >Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          <label className="SignUpLabel">Email
          </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          <label className="SignUpLabel">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          
          <label className="SignUpLabel">Confirm</label>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
        <p className="error-message">&nbsp;{form.error}</p>
      </div>
    </div>
  );

}

export default SignUpForm;