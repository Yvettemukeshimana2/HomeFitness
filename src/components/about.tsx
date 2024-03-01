
 import { useTranslation } from "react-i18next";

 const About = () => {
   const { t, i18n } = useTranslation();

   const changeLanguage = (language: string) => {
     i18n.changeLanguage(language);
   };

   return (
     <div>
       <div>about us</div>
       <div onClick={() => changeLanguage("")}>
         {t("abo")}
       </div>
       <img src="./images/im4.jpg" alt="" />
     </div>
   );
 };

 export default About;
