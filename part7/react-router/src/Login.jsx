import { useNavigate } from "react-router-dom";
// import { TextField, Button } from "@mui/material";
import { Button, Input } from "./components/Button";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    setUser(event.target.username.value);
    navigate("/");
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input label="username" name="username" />
        </div>
        <Button type="submit">submit</Button>
      </form>
    </>
  );
};

export default Login;
