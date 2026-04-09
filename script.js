// ========== NAVEGAÇÃO ENTRE SEÇÕES ==========
function scrollToSection(sectionId) {
  // Remove active de todas as seções
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Remove active de todos os links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
  });

  // Adiciona active na seção clicada
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Adiciona active no link correspondente
    const targetLink = document.querySelector(
      `.nav-links a[data-section="${sectionId}"]`,
    );
    if (targetLink) {
      targetLink.classList.add("active");
    }
  }
}

// Event listeners para os links de navegação
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      scrollToSection(sectionId);
    });
  });

  // Animação das barras de progresso quando a seção resume é exibida
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll(".skill-progress");
          progressBars.forEach((bar) => {
            const width = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
        }
      });
    },
    { threshold: 0.2 },
  );

  const resumeSection = document.getElementById("resume");
  if (resumeSection) {
    observer.observe(resumeSection);
  }
});

// ========== TEMA CLARO/ESCURO ==========
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const themeIcon = document.querySelector(".theme-toggle i");
  if (document.body.classList.contains("light-mode")) {
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.className = "fas fa-moon";
    localStorage.setItem("theme", "dark");
  }
}

// Carregar tema salvo
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.querySelector(".theme-toggle i");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  }
});

// ========== IDIOMA ==========
let currentLanguage = "pt";

const translations = {
  pt: {
    nav: {
      home: "Home",
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
    },
    home: {
      name: "MATHEUS",
      highlight: "POMPEI",
      subtitle: "Desenvolvedor Front-End",
      btnResume: "Resume",
      btnPortfolio: "Portfolio",
    },
    about: {
      title: "ABOUT",
      email: "matheus.pompei7@gmail.com",
      p1: "Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> com foco em desenvolvimento Front-End moderno. Experiência em criar interfaces responsivas e intuitivas utilizando as mais recentes tecnologias web.",
      p2: "Minha jornada começou com curiosidade sobre como as interfaces conectam pessoas a soluções digitais. Hoje, aplico esse conhecimento no desenvolvimento de aplicações web que priorizam a experiência do usuário e performance.",
      p3: "Com <strong>formação técnica em Multimídia</strong> e especialização em <strong>UX/UI Design</strong>, combino habilidades de design e desenvolvimento para criar produtos digitais completos e de alta qualidade.",
      location: "São Paulo, Brasil",
    },
    resume: {
      softwareSkills: "SOFTWARE SKILLS",
      languages: "LANGUAGES",
      portuguese: "Português",
      english: "Inglês",
      personalSkills: "PERSONAL SKILLS",
      personalList:
        "Criatividade • Trabalho em Equipe • Organização • Resolução de Problemas • Comunicação",
      experience: "EXPERIENCE",
      exp1: {
        company: "FAST PAY",
        role: "Desenvolvedor Front-End React",
        desc: "Desenvolvimento de plataforma de carteira de criptomoedas utilizando React e Supabase. Implementação de interfaces responsivas e integração com APIs.",
      },
      exp2: {
        company: "GAME ONLINE",
        role: "Desenvolvedor Front-End",
        desc: "Ajustes e melhorias de interface em jogo online. Manipulação de banco de dados SQL e otimização de performance.",
      },
      exp3: {
        company: "SECURITY PAY",
        role: "UI/UX Designer & Front-End",
        desc: "Prototipação completa no Figma e implementação da interface com React. Foco em segurança e experiência do usuário.",
      },
      education: "EDUCATION",
      edu1: {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "SENAC - São Paulo (2026 - 2028)",
      },
      edu2: {
        course: "Ensino Médio Técnico em Multimídia",
        institution: "SENAC - São Paulo (2023 - 2025)",
      },
      whatCanIDo: "WHAT CAN I DO?",
      services: [
        "Logo & Identidade Visual",
        "Desenvolvimento Web",
        "Newsletters & Email Marketing",
        "Design Responsivo",
        "Prototipação UI/UX",
        "Otimização de Performance",
      ],
      designSkills: "DESIGN SKILLS",
      designList: [
        "Criatividade & Estratégia",
        "Tipografia & Layout",
        "Grid & Teoria das Cores",
        "Design Systems",
        "Prototipagem Interativa",
      ],
      hobbies: "HOBBIES & INTERESTS",
      hobbyList: ["Fotografia", "Música", "Leitura", "Viagens"],
    },
    portfolio: {
      title: "PORTFOLIO",
      proj1: {
        name: "Fast Pay",
        desc: "Carteira de Criptomoedas",
      },
      proj2: {
        name: "Game Online",
        desc: "Interface de Jogo",
      },
      proj3: {
        name: "Security Pay",
        desc: "Plataforma de Pagamentos",
      },
      proj4: {
        name: "UI/UX Design",
        desc: "Projetos Diversos",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
    },
    home: {
      name: "MATHEUS",
      highlight: "POMPEI",
      subtitle: "Front-End Developer",
      btnResume: "Resume",
      btnPortfolio: "Portfolio",
    },
    about: {
      title: "ABOUT",
      email: "matheus.pompei7@gmail.com",
      p1: "<strong>Systems Analysis and Development</strong> student focused on modern Front-End development. Experience in creating responsive and intuitive interfaces using the latest web technologies.",
      p2: "My journey began with curiosity about how interfaces connect people to digital solutions. Today, I apply this knowledge in developing web applications that prioritize user experience and performance.",
      p3: "With <strong>technical training in Multimedia</strong> and specialization in <strong>UX/UI Design</strong>, I combine design and development skills to create complete, high-quality digital products.",
      location: "São Paulo, Brazil",
    },
    resume: {
      softwareSkills: "SOFTWARE SKILLS",
      languages: "LANGUAGES",
      portuguese: "Portuguese",
      english: "English",
      personalSkills: "PERSONAL SKILLS",
      personalList:
        "Creativity • Teamwork • Organization • Problem Solving • Communication",
      experience: "EXPERIENCE",
      exp1: {
        company: "FAST PAY",
        role: "React Front-End Developer",
        desc: "Development of cryptocurrency wallet platform using React and Supabase. Implementation of responsive interfaces and API integration.",
      },
      exp2: {
        company: "GAME ONLINE",
        role: "Front-End Developer",
        desc: "UI improvements and adjustments in online game. SQL database manipulation and performance optimization.",
      },
      exp3: {
        company: "SECURITY PAY",
        role: "UI/UX Designer & Front-End",
        desc: "Complete prototyping in Figma and interface implementation with React. Focus on security and user experience.",
      },
      education: "EDUCATION",
      edu1: {
        course: "Systems Analysis and Development",
        institution: "SENAC - São Paulo (2026 - 2028)",
      },
      edu2: {
        course: "Technical High School in Multimedia",
        institution: "SENAC - São Paulo (2023 - 2025)",
      },
      whatCanIDo: "WHAT CAN I DO?",
      services: [
        "Logo & Brand Identity",
        "Web Development",
        "Newsletters & Email Marketing",
        "Responsive Design",
        "UI/UX Prototyping",
        "Performance Optimization",
      ],
      designSkills: "DESIGN SKILLS",
      designList: [
        "Creativity & Strategy",
        "Typography & Layout",
        "Grid & Color Theory",
        "Design Systems",
        "Interactive Prototyping",
      ],
      hobbies: "HOBBIES & INTERESTS",
      hobbyList: ["Photography", "Music", "Reading", "Travel"],
    },
    portfolio: {
      title: "PORTFOLIO",
      proj1: {
        name: "Fast Pay",
        desc: "Cryptocurrency Wallet",
      },
      proj2: {
        name: "Game Online",
        desc: "Game Interface",
      },
      proj3: {
        name: "Security Pay",
        desc: "Payment Platform",
      },
      proj4: {
        name: "UI/UX Design",
        desc: "Various Projects",
      },
    },
  },
};

function toggleLanguage() {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  const t = translations[currentLanguage];

  // Atualizar botão de idioma
  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) {
    langBtn.textContent = currentLanguage === "pt" ? "EN" : "PT";
  }

  // Atualizar navegação
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link, index) => {
    const keys = ["home", "about", "resume", "portfolio"];
    link.textContent = t.nav[keys[index]];
  });

  // Atualizar Home
  document.querySelector(".subtitle").textContent = t.home.subtitle;
  document.querySelectorAll(".home-buttons .btn-outline")[0].textContent =
    t.home.btnResume;
  document.querySelectorAll(".home-buttons .btn-outline")[1].textContent =
    t.home.btnPortfolio;

  // Atualizar About
  document.querySelectorAll(".section-title")[0].textContent = t.about.title;
  const aboutPs = document.querySelectorAll(".about-description p");
  aboutPs[0].innerHTML = t.about.p1;
  aboutPs[1].innerHTML = t.about.p2;
  aboutPs[2].innerHTML = t.about.p3;
  document.querySelector(".location span").textContent = t.about.location;

  // Atualizar Resume
  const columnTitles = document.querySelectorAll(".column-title");
  columnTitles[0].textContent = t.resume.softwareSkills;
  columnTitles[1].textContent = t.resume.languages;
  columnTitles[2].textContent = t.resume.personalSkills;
  columnTitles[3].textContent = t.resume.experience;
  columnTitles[4].textContent = t.resume.education;
  columnTitles[5].textContent = t.resume.whatCanIDo;
  columnTitles[6].textContent = t.resume.designSkills;
  columnTitles[7].textContent = t.resume.hobbies;

  // Línguas
  const langLabels = document.querySelectorAll(
    ".resume-column:nth-child(1) .skill-item:nth-child(7) .skill-header span, .resume-column:nth-child(1) .skill-item:nth-child(8) .skill-header span",
  );
  if (langLabels[0]) langLabels[0].textContent = t.resume.portuguese;
  if (langLabels[1]) langLabels[1].textContent = t.resume.english;

  // Personal Skills
  document.querySelector(".personal-skills").textContent =
    t.resume.personalList;

  // Experience
  const experiences = document.querySelectorAll(".experience-item");
  experiences[0].querySelector("h4").textContent = t.resume.exp1.company;
  experiences[0].querySelector(".role").textContent = t.resume.exp1.role;
  experiences[0].querySelector(".description").textContent =
    t.resume.exp1.desc;

  experiences[1].querySelector("h4").textContent = t.resume.exp2.company;
  experiences[1].querySelector(".role").textContent = t.resume.exp2.role;
  experiences[1].querySelector(".description").textContent =
    t.resume.exp2.desc;

  experiences[2].querySelector("h4").textContent = t.resume.exp3.company;
  experiences[2].querySelector(".role").textContent = t.resume.exp3.role;
  experiences[2].querySelector(".description").textContent =
    t.resume.exp3.desc;

  // Education
  const educations = document.querySelectorAll(".education-item");
  educations[0].querySelector("strong").textContent = t.resume.edu1.course;
  educations[0].querySelector(".institution").textContent =
    t.resume.edu1.institution;
  educations[1].querySelector("strong").textContent = t.resume.edu2.course;
  educations[1].querySelector(".institution").textContent =
    t.resume.edu2.institution;

  // Services
  const serviceItems = document.querySelectorAll(
    ".resume-column:nth-child(3) .services-list:first-of-type li",
  );
  t.resume.services.forEach((service, index) => {
    if (serviceItems[index]) serviceItems[index].textContent = service;
  });

  // Design Skills
  const designItems = document.querySelectorAll(
    ".resume-column:nth-child(3) .services-list:last-of-type li",
  );
  t.resume.designList.forEach((skill, index) => {
    if (designItems[index]) designItems[index].textContent = skill;
  });

  // Hobbies
  const hobbyItems = document.querySelectorAll(".hobby-item span");
  t.resume.hobbyList.forEach((hobby, index) => {
    if (hobbyItems[index]) hobbyItems[index].textContent = hobby;
  });

  // Portfolio
  document.querySelector("#portfolio .section-title").textContent =
    t.portfolio.title;
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const projKeys = ["proj1", "proj2", "proj3", "proj4"];
  portfolioItems.forEach((item, index) => {
    item.querySelector("h3").textContent = t.portfolio[projKeys[index]].name;
    item.querySelector("p").textContent = t.portfolio[projKeys[index]].desc;
  });
}

// ========== FUNÇÕES AUXILIARES ==========
function irLinkedin() {
  window.open("https://www.linkedin.com/in/matheus-pompei", "_blank");
}

function irGithub() {
  window.open("https://github.com/oPompeii", "_blank");
}

// Fullscreen toggle
document.addEventListener("DOMContentLoaded", () => {
  const fullscreenBtns = document.querySelectorAll(".fullscreen-toggle");
  fullscreenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        btn.querySelector("i").classList.replace("fa-expand", "fa-compress");
      } else {
        document.exitFullscreen();
        btn.querySelector("i").classList.replace("fa-compress", "fa-expand");
      }
    });
  });
});

// Detectar mudança de fullscreen
document.addEventListener("fullscreenchange", () => {
  const fullscreenBtns = document.querySelectorAll(".fullscreen-toggle i");
  if (document.fullscreenElement) {
    fullscreenBtns.forEach((icon) =>
      icon.classList.replace("fa-expand", "fa-compress"),
    );
  } else {
    fullscreenBtns.forEach((icon) =>
      icon.classList.replace("fa-compress", "fa-expand"),
    );
  }
});
