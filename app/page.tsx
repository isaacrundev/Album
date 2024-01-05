import LoginForm from "../components/login/LoginForm";

const Home = () => {
  return (
    <main className="bg-primary flex flex-col justify-between h-screen">
      <LoginForm />
      <footer className="flex justify-center">
        <p className="p-5">All rights reserved. content privacy</p>
      </footer>
    </main>
  );
};

export default Home;
