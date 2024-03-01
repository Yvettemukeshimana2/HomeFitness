
 import { Link } from "react-router-dom";
 import des1 from "./images/th (1).jpg";
 import des2 from "./images/im4.jpg";
 import { useTranslation } from "react-i18next";

 const Home = () => {
   const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
      i18n.changeLanguage(language);
    };

   return (
     <div>
       <nav className="bg-gray-30 p-4 mx-auto relative container">
         <div className="flex item-center justify-between">
           <div className="pt-2  text-lg font-bold  ml-0">
             <img className="h-12 w-9" src={des1} alt="" />
           </div>
           <div className="hidden xs:flex mr-20 w-100">
             <ul className="flex space-x-10 ">
               <li>
                 <Link to="/" className="text-gray-900 hover:text-gray-500">
                   {t("home")}
                 </Link>
               </li>
               <li>
                 <Link
                   to="/about"
                   className="text-gray-800  hover:text-gray-500"
                 >
                   {t("about")}
                 </Link>
               </li>
               <li>
                 <Link
                   to="/contact"
                   className="text-gray-800 hover:text-gray-500"
                 >
                   {t("contact")}
                 </Link>
               </li>
               <li>
                 <Link
                   to="/login"
                   className="text-gray-800 hover:text-gray-300"
                 >
                   {t("login")}
                 </Link>
               </li>
               <select
                 id="language"
                 onChange={(e) => changeLanguage(e.target.value)}
                 value={i18n.language}
                 className="bg-gray-400 rounded-half baseline"
                 onClick={() => changeLanguage("")}
               >
                 <option value="en">English</option>
                 <option value="fr">Français</option>
                 <option value="kiny">Kinyarwanda</option>
               </select>
             </ul>
           </div>
         </div>
       </nav>
       <div className="text-gray-800 text-lg font-bold w-100 ml-0">
         <img src={des2} alt="" />
       </div>
     </div>
   );
 };
 export default Home;
