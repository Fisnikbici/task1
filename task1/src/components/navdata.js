import React from "react";
import "../styles/style.css";
import { FaGlobe, FaRuler, FaLanguage, FaAward, FaSearch, FaBullhorn, FaShoppingCart, FaLightbulb, FaKeyboard } from "react-icons/fa";

const domains = [
  { icon: <FaGlobe />, title: "The TLD", description: "Does the domain extension match the language of the domain name?" },
  { icon: <FaRuler />, title: "Domain Length", description: "Is the domain short enough to remember?" },
  { icon: <FaLanguage />, title: "Language", description: "How complex is the actual domain name?" },
  { icon: <FaAward />, title: "International recognition", description: "Can the domain name be used on an international scale?" },
  { icon: <FaSearch />, title: "Search engine", description: "Does the domain follow search engine guidelines?" },
  { icon: <FaBullhorn />, title: "Advertising Potential", description: "Could the domain be used for advertising campaigns?" },
  { icon: <FaShoppingCart />, title: "Sales Opportunities", description: "Can the domain name be used on an international scale?" },
  { icon: <FaKeyboard />, title: "Typo susceptibility", description: "How high is the risk of mistyping the domain name?" },
  { icon: <FaLightbulb />, title: "Business potential", description: "Can the domain be used as your company address?" },
  
];



export default domains;
