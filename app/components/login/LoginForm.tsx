const LoginForm = () => {
  return (
    <div className="flex justify-center items-center grow">
      <div className="flex flex-col gap-2">
        <input
          className="w-[700px] md:h-[50px] px-2 text-primary"
          type="text"
          placeholder="User ID"
        />
        <button className="bg-white text-primary md:w-[700px] md:h-[50px]">
          Login
        </button>
        <p className="text-center">Don’t have an account?</p>
        <div className="flex justify-between">
          <button className="bg-white text-primary md:w-[340px] md:h-[50px]">
            Register
          </button>
          <button className="bg-white text-primary md:w-[340px] md:h-[50px]">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
