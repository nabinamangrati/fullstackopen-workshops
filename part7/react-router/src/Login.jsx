const Login = ({ setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    setUser(event.target.username.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <button>submit</button>
    </form>
  );
};

export default Login;
