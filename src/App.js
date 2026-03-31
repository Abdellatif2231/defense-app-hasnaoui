import React, { useState } from "react";
import "./App.css";

const flags = {
  en: "🇬🇧",
  fr: "🇫🇷",
  ar: "🇩🇿",
};

export default function App() {
  const [lang, setLang] = useState(null);

  const sections = {
    en: {
      title: "Welcome to my PhD Dissertation Defense",
      summaryLabel: "Summary",
      text:
        "This study investigates the use of electronic portfolios as an alternative formative assessment tool in EFL writing instruction, in response to the increasing role of technology in education and the limitations of traditional assessment methods. Conducted at the English Department of Sidi Bel Abbès University, the research aimed to explore both teachers' and students' attitudes toward e-portfolios and to evaluate their effectiveness in developing writing skills. Adopting a mixed-methods approach that combined a case study with an experimental design, a preliminary case study was first conducted to examine the existing teaching and learning conditions of writing and identify learners' challenges and deficiencies. The experimental phase then involved two groups of third-year EFL students: an experimental group assessed through e-portfolios and a control group evaluated using traditional assessment methods. Teacher and peer feedback were systematically integrated, and data were collected through post-tests and questionnaires. The findings revealed that students assessed through e-portfolios significantly outperformed those evaluated traditionally. Overall, the results highlight the importance of emphasizing formative, continuous assessment to enhance learner involvement and improve writing skills in EFL contexts.",
      keywords:
        "Key words: Electronic portfolio; formative assessment; EFL writing; Alternative assessment.",
      thanks: "Thank you for your support and encouragement.",
      backLabel: "Back",
      bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    },
    fr: {
      title: "Bienvenue à ma soutenance de doctorat",
      summaryLabel: "Résumé",
      text:
        "Cette étude porte sur l'utilisation de l'outil e-portfolio, portfolio numérique, comme moyen alternatif d'évaluer les écrits et les apprentissages des étudiants en anglais langue étrangère (EFL). Cette méthode formative d'évaluation est une réponse au rôle croissant de la technologie dans l'éducation et aux limites des méthodes traditionnelles d'évaluation. Menée au département d'anglais de Sidi Bel Abbès, elle consistait à explorer les attitudes des enseignants et des étudiants à l'égard du e-portfolio et à évaluer son efficacité dans le développement des compétences en écriture. Une méthodologie mixte combinant une étude de cas et un dispositif expérimental a été adoptée. Les résultats montrent que les étudiants évalués par e-portfolio ont obtenu de meilleures performances que ceux évalués par des méthodes traditionnelles, avec des attitudes plus positives, un engagement accru et une plus grande responsabilité dans leurs apprentissages.",
      keywords:
        "Mots clés : Portfolio numérique ; évaluation formative ; ELF écrits ; évaluation alternative.",
      thanks: "Merci pour votre soutien et vos encouragements.",
      backLabel: "Retour",
      bg: "linear-gradient(135deg, #42275a, #734b6d, #dd5e89)",
    },
    ar: {
      title: "مرحبا بكم في مناقشة أطروحتي للدكتوراه",
      summaryLabel: "الملخص",
      text:
        "تتناول هذه الدراسة استخدام أداة الحافظة الإلكترونية، الملف الرقمي، كوسيلة بديلة لتقويم الكتابات والتعلمات لدى طلبة اللغة الإنجليزية كلغة أجنبية. ويأتي هذا الأسلوب التكويني في التقويم استجابة للدور المتزايد للتكنولوجيا في المجال التعليمي، وللحدود التي تفرضها أساليب التقويم التقليدية. أُجريت هذه الدراسة بقسم اللغة الإنجليزية بجامعة سيدي بلعباس، وهدفت إلى استكشاف اتجاهات كل من الأساتذة والطلبة نحو استخدام الحافظة الإلكترونية، وتقييم فعاليتها في تطوير مهارات الكتابة. واعتمدت الدراسة منهجية بحث مختلطة جمعت بين دراسة حالة وتصميم تجريبي، وأظهرت النتائج أن الطلبة الذين تم تقويمهم باستخدام الحافظة الإلكترونية حققوا أداءً أفضل مقارنة بالطلبة الذين خضعوا لأساليب التقويم التقليدية، مع مشاركة أعلى ومسؤولية أكبر في تعلمهم.",
      keywords:
        "الكلمات المفتاحية: الحافظة الإلكترونية، التقويم التكويني المستمر، الكتابة في اللغة الإنجليزية كلغة أجنبية، التقويم البديل.",
      thanks: "شكراً لدعمكم وتشجيعكم.",
      backLabel: "العودة",
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
                <span className="flag-emoji" aria-hidden="true">{flags.en}</span> English
              </button>
              <button onClick={() => setLang("fr")}>
                <span className="flag-emoji" aria-hidden="true">{flags.fr}</span> Français
              </button>
              <button onClick={() => setLang("ar")}>
                <span className="flag-emoji" aria-hidden="true">{flags.ar}</span> عربي
              </button>
            </div>
          </>
        )}

        {lang && (
          <div className={`section ${lang === "ar" ? "rtl-center" : ""} fade-in`}>
            <h2>{sections[lang].title}</h2>
            <h3 className="summary-title">{sections[lang].summaryLabel}</h3>
            <p className="summary-text">{sections[lang].text}</p>
            <p className="keywords">{sections[lang].keywords}</p>
            <p className="thanks-message">{sections[lang].thanks}</p>

            <button className="back-btn" onClick={() => setLang(null)}>
              {sections[lang].backLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}