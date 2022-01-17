import { useState } from "react";
import "./LoginForm.css"
import { useNavigate } from "react-router-dom";

export default function SignUpForm(props) {

  const [form, setForm] = useState({
    email: '',
    password: '',
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
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();
      // localStorage.removeItem('token')
      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      console.log(userDoc)
      props.setUserInState(userDoc);
      navigate('../app')
    } catch (err) {
      console.log("SignupForm error", err);
      setForm((state) => {
        return {
          ...state,
          error: "Sign Up Failed - Try Again"
        }
      })
    }
  };

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="LoginForm" autoComplete="off">
          <label>Email:</label>
          <input
            type="tex`t"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{form.error}</p>
    </div>
  );

}
