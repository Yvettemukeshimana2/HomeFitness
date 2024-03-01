 // Registration.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Registration: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    // Add your registration logic here
    console.log(
      `Registering with username: ${username}, email: ${email}, and password: ${password}`
    );
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">{t("register")}</h2>
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            className="mb-4"
            onClick={() => changeLanguage("")}
          >
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
            onClick={handleRegistration}
          >
            {t("register")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
