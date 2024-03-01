// Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
 import { useTranslation } from "react-i18next";
const Login: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
     
     };
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
     const changeLanguage = (language: string) => {
       i18n.changeLanguage(language);
     };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4"> {t("login")}</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              {t("username")}
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              {t("password")}
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleLogin}
          >
            {t("login")}
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-10"
            onClick={() => changeLanguage("")}
          >
            <Link to="/registration"> {t("register")}</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
