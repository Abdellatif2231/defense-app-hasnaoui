import React, { useState } from "react";
import "./App.css";

const flags = {
  en: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  fr: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  ar: "https://flagcdn.com/w80/dz.png",
};

export default function App() {
  const [lang, setLang] = useState(null);

  const sections = {
    en: {
      title: "Welcome to my PhD Dissertation Defense",
      text: "I am honored by your presence on this important milestone in my academic journey.",
      info: "This is a personal academic presentation website. No personal or sensitive data is collected.",
      bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    },
    fr: {
      title: "Bienvenue à ma soutenance de doctorat",
      text: "Je suis honorée de votre présence en ce moment important de mon parcours académique.",
      info: "Ceci est un site académique personnel. Aucune donnée sensible n'est collectée.",
      bg: "linear-gradient(135deg, #42275a, #734b6d, #dd5e89)",
    },
    ar: {
      title: "مرحبا بكم في مناقشة أطروحتي للدكتوراه",
      text: "يشرفني حضوركم في هذه اللحظة المهمة من مسيرتي الأكاديمية.",
      info: "هذا موقع أكاديمي شخصي، ولا يتم جمع أي معلومات أو بيانات حساسة.",
      bg: "linear-gradient(135deg, #004d40, #00695c, #00796b)",
    },
  };

  return (
    <div
      className="container"
      style={{
        background: lang
          ? sections[lang].bg
          : "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="card">

        {!lang && (
          <>
            <h2 style={{ color: "white", marginTop: "20px" }}>
             PhD Dissertation Defense
            </h2>

            <p style={{ color: "white", fontSize: "14px", opacity: 0.8 }}>
              Academic presentation platform for PhD dissertation defense.
            </p>

            <div className="buttons">
              <button onClick={() => setLang("en")}>
                <img src={flags.en} className="flag" alt="English flag" /> English
              </button>
              <button onClick={() => setLang("fr")}>
                <img src={flags.fr} className="flag" alt="French flag" /> Français
              </button>
              <button onClick={() => setLang("ar")}>
                <img src={flags.ar} className="flag" alt="Arabic flag" /> عربي
              </button>
            </div>
          </>
        )}

        {lang && (
          <div className={`section ${lang === "ar" ? "rtl-center" : ""} fade-in`}>
            <h2>{sections[lang].title}</h2>
            <p>{sections[lang].text}</p>

            <p style={{ marginTop: "15px", fontSize: "13px", opacity: 0.85 }}>
              {sections[lang].info}
            </p>

            <button className="back-btn" onClick={() => setLang(null)}>
              {lang === "ar" ? "العودة" : "Back"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}