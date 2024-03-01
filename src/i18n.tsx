import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          login: "login",
          home: "home",
          about: "about",
          contact: "contact",
          username: "Username",
          password: "password",
          register: "Register",
          email: "email",
          abo:"Welcome to the tutorial! We'll be building a small, but feature-rich appthat lets you keep track of your contacts. We expect it to take between30-60m if you're following along.",
        },
      },
      fr: {
        translation: {
          login: "se connecter",
          home: "première place",
          about: "à propos",
          contact: "contact",
          username: "nom d'utilisateur",
          password: "mot de passe",
          register: "registre",
          email: "e-mail",
          abo:"Bienvenue dans le tutoriel ! Nous allons créer une petite application riche en fonctionnalités qui vous permet de garder une trace de vos contacts. Nous prévoyons que cela prendra entre 30 à 60 m si vous suivez."
        },
      },
      kiny: {
        translation: {
          login: "injira",
          home: "Ahabanza",
          about: "ibindi",
          contact: "kuvugana",
          username: "izina ukoresha",
          password: "Ijambobanga",
          register: "fungura konte",
          email: "imeri",
          abo:"Murakaza neza kuriyi nyigisho! Tuzaba twubaka porogaramu ntoya, ariko iranga ibintu byinshi ibyo bigufasha gukurikirana amakuru yawe. Turateganya ko bizafata hagati 30-60m niba ukurikira hamwe.",
        },
      },
    },
  });
