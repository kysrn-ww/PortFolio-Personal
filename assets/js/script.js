'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// language selector functionality
const languageSelect = document.getElementById("languageSelect");

// translations object
const translations = {
  en: {
    aboutTitle: "About me",
    aboutText1: "I'm Creative Director and UI/UX Designer from ARGENTINA working in web development and C++ Software. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    aboutText2: "I'm a passionate developer who is always looking for new challenges and opportunities to learn and grow. <strong>Bilingual in English and Spanish</strong>, I can communicate effectively with international clients and teams. Tell me about your project and let's make it happen!",
    resumeTitle: "Resume",
    educationTitle: "Education",
    experienceTitle: "Experience",
    skillsTitle: "My skills",
    portfolioTitle: "Portfolio",
    contactTitle: "Contact",
    contactFormTitle: "Contact Form",
    fullName: "Full name",
    emailAddress: "Email address",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    // Resume specific translations
    universityTitle: "National University of Catamarca",
    universityDegree: "Bachelor's degree in Information Systems with specialization in software development and computer science.",
    technicalTitle: "Technical Institute Catamarca",
    technicalDegree: "Programming Technician with focus on web development and desktop applications.",
    fullStackTitle: "Full Stack Web Developer",
    fullStackDesc: "Development of complete web applications using modern technologies like HTML, CSS, JavaScript and frontend frameworks.",
    cppTitle: "C++ Developer",
    cppDesc: "High-performance software development and desktop applications using C++ and modern standards.",
    webDesign: "Web design",
    graphicDesign: "Graphic design",
    uiux: "UI/UX design",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
  },
  es: {
    aboutTitle: "Sobre mí",
    aboutText1: "Soy Director Creativo y Diseñador UI/UX de ARGENTINA trabajando en desarrollo web y software C++. Disfruto convertir problemas complejos en diseños simples, hermosos e intuitivos.",
    aboutText2: "Soy un desarrollador apasionado que siempre busca nuevos desafíos y oportunidades para aprender y crecer. <strong>Bilingüe en inglés y español</strong>, puedo comunicarme eficazmente con clientes y equipos internacionales. ¡Háblame de tu proyecto y hagámoslo realidad!",
    resumeTitle: "Currículum",
    educationTitle: "Educación",
    experienceTitle: "Experiencia",
    skillsTitle: "Mis habilidades",
    portfolioTitle: "Portafolio",
    contactTitle: "Contacto",
    contactFormTitle: "Formulario de contacto",
    fullName: "Nombre completo",
    emailAddress: "Dirección de correo",
    yourMessage: "Tu mensaje",
    sendMessage: "Enviar mensaje",
    // Resume specific translations
    universityTitle: "Universidad Nacional de Catamarca",
    universityDegree: "Licenciatura en Sistemas de Información con especialización en desarrollo de software y ciencias de la computación.",
    technicalTitle: "Instituto Técnico Catamarca",
    technicalDegree: "Técnico en Programación con enfoque en desarrollo web y aplicaciones de escritorio.",
    fullStackTitle: "Desarrollador Web Full Stack",
    fullStackDesc: "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como HTML, CSS, JavaScript y frameworks frontend.",
    cppTitle: "Desarrollador C++",
    cppDesc: "Desarrollo de software de alto rendimiento y aplicaciones de escritorio utilizando C++ y estándares modernos.",
    webDesign: "Diseño web",
    graphicDesign: "Diseño gráfico",
    uiux: "Diseño UI/UX",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
  },
  
  pt: {
    aboutTitle: "Sobre mim",
    aboutText1: "Sou Diretor Criativo e Designer UI/UX da ARGENTINA trabalhando em desenvolvimento web e software C++. Gosto de transformar problemas complexos em designs simples, bonitos e intuitivos.",
    aboutText2: "Sou um desenvolvedor apaixonado que sempre busca novos desafios e oportunidades para aprender e crescer. <strong>Bilíngue em inglês e espanhol</strong>, posso me comunicar efetivamente com clientes e equipes internacionais. Fale-me sobre seu projeto e vamos realizá-lo!",
    resumeTitle: "Currículo",
    educationTitle: "Educação",
    experienceTitle: "Experiência",
    skillsTitle: "Minhas habilidades",
    portfolioTitle: "Portfólio",
    contactTitle: "Contato",
    contactFormTitle: "Formulário de contato",
    fullName: "Nome completo",
    emailAddress: "Endereço de e-mail",
    yourMessage: "Sua mensagem",
    sendMessage: "Enviar mensagem",
    // Resume specific translations
    universityTitle: "Universidade Nacional de Catamarca",
    universityDegree: "Bacharelado em Sistemas de Informação com especialização em desenvolvimento de software e ciência da computação.",
    technicalTitle: "Instituto Técnico Catamarca",
    technicalDegree: "Técnico em Programação com foco em desenvolvimento web e aplicativos desktop.",
    fullStackTitle: "Desenvolvedor Web Full Stack",
    fullStackDesc: "Desenvolvimento de aplicações web completas usando tecnologias modernas como HTML, CSS, JavaScript e frameworks frontend.",
    cppTitle: "Desenvolvedor C++",
    cppDesc: "Desenvolvimento de software de alta performance e aplicativos desktop usando C++ e padrões modernos.",
    webDesign: "Web design",
    graphicDesign: "Design gráfico",
    uiux: "Design UI/UX",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
  },

  ko: {
    aboutTitle: "나에 대해",
    aboutText1: "저는 아르헨티나 출신의 크리에이티브 디렉터이자 UI/UX 디자이너로, 웹 개발과 C++ 소프트웨어 작업을 하고 있습니다. 복잡한 문제를 간단하고 아름다우며 직관적인 디자인으로 바꾸는 것을 즐깁니다.",
    aboutText2: "저는 항상 새로운 도전과 학습 및 성장의 기회를 찾는 열정적인 개발자입니다.<strong>영어와 스페인어 이중 언어 사용자</strong>로, 국제 고객 및 팀과 효과적으로 소통할 수 있습니다. 당신의 프로젝트에 대해 말해주세요, 함께 만들어봐요!",
    resumeTitle: "이력서",
    educationTitle: "교육",
    experienceTitle: "경험",
    skillsTitle: "제 기술",
    portfolioTitle: "포트폴리오",
    contactTitle: "연락처",
    contactFormTitle: "연락 양식",
    fullName: "전체 이름",
    emailAddress: "이메일 주소",
    yourMessage: "메시지",
    sendMessage: "메시지 보내기",
    // Resume specific translations
    universityTitle: "카타마르카 국립대학교",
    universityDegree: "소프트웨어 개발 및 컴퓨터 과학 전문 정보 시스템 학사 학위.",
    technicalTitle: "카타마르카 기술대학",
    technicalDegree: "웹 개발 및 데스크톱 응용 프로그램에 중점을 둔 프로그래밍 기술자.",
    fullStackTitle: "풀스택 웹 개발자",
    fullStackDesc: "HTML, CSS, JavaScript, 프론트엔드 프레임워크 등 현대 기술을 사용한 완전한 웹 응용 프로그램 개발.",
    cppTitle: "C++ 개발자",
    cppDesc: "C++ 및 현대 표준을 사용한 고성능 소프트웨어 및 데스크톱 응용 프로그램 개발.",
    webDesign: "웹 디자인",
    graphicDesign: "그래픽 디자인",
    uiux: "UI/UX 디자인",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
  },
};


// language change function
function changeLanguage(lang) {
  const trans = translations[lang];
  if (!trans) return;

  // Update about section
  const aboutTitle = document.querySelector('.about .h2.article-title');
  const aboutText1 = document.querySelector('.about-text p:first-of-type');
  const aboutText2 = document.querySelector('.about-text p:last-of-type');

  if (aboutTitle) aboutTitle.textContent = trans.aboutTitle;
  if (aboutText1) aboutText1.textContent = trans.aboutText1;
  if (aboutText2) aboutText2.innerHTML = trans.aboutText2;

  // Update other sections - always update regardless of current language
  const resumeTitle = document.querySelector('.resume .h2.article-title');
  const educationTitles = document.querySelectorAll('.resume .h3');
  const skillsTitle = document.querySelector('.skill .h3');
  const portfolioTitle = document.querySelector('.portfolio .h2.article-title');
  const contactTitle = document.querySelector('.contact .h2.article-title');
  const contactFormTitle = document.querySelector('.contact-form .h3');

  if (resumeTitle) resumeTitle.textContent = trans.resumeTitle;
  if (educationTitles) {
    // First h3 is Education, second h3 is Experience
    if (educationTitles[0]) educationTitles[0].textContent = trans.educationTitle;
    if (educationTitles[1]) educationTitles[1].textContent = trans.experienceTitle;
  }
  if (skillsTitle) skillsTitle.textContent = trans.skillsTitle;
  if (portfolioTitle) portfolioTitle.textContent = trans.portfolioTitle;
  if (contactTitle) contactTitle.textContent = trans.contactTitle;
  if (contactFormTitle) contactFormTitle.textContent = trans.contactFormTitle;

  // Update resume timeline items - use more robust selectors
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length >= 4) {
    // Education items
    const universityTitle = timelineItems[0].querySelector('h4');
    const universityDegree = timelineItems[0].querySelector('p');
    const technicalTitle = timelineItems[1].querySelector('h4');
    const technicalDegree = timelineItems[1].querySelector('p');
    
    // Experience items
    const fullStackTitle = timelineItems[2].querySelector('h4');
    const fullStackDesc = timelineItems[2].querySelector('p');
    const cppTitle = timelineItems[3].querySelector('h4');
    const cppDesc = timelineItems[3].querySelector('p');

    // Update education items - always update regardless of current language
    if (universityTitle) {
      universityTitle.textContent = trans.universityTitle;
    }
    if (universityDegree) {
      universityDegree.textContent = trans.universityDegree;
    }
    
    if (technicalTitle) {
      technicalTitle.textContent = trans.technicalTitle;
    }
    if (technicalDegree) {
      technicalDegree.textContent = trans.technicalDegree;
    }

    // Update experience items - always update regardless of current language
    if (fullStackTitle) {
      fullStackTitle.textContent = trans.fullStackTitle;
    }
    if (fullStackDesc) {
      fullStackDesc.textContent = trans.fullStackDesc;
    }
    if (cppTitle) {
      cppTitle.textContent = trans.cppTitle;
    }
    if (cppDesc) {
      cppDesc.textContent = trans.cppDesc;
    }
  }

  // Update skills
  const skillItems = document.querySelectorAll('.skills-item .h5');
  skillItems.forEach((item, index) => {
    const text = item.textContent.toLowerCase();
    if (text.includes('web design') || text.includes('diseño web') || text.includes('design web') ||
        text.includes('webdesign') || text.includes('웹 디자인') || text.includes('веб-дизайн')) {
      item.textContent = trans.webDesign;
    }
    if (text.includes('graphic design') || text.includes('diseño gráfico') || text.includes('design graphique') ||
        text.includes('grafikdesign') || text.includes('design grafico') || text.includes('design gráfico') ||
        text.includes('平面设计') || text.includes('그래픽 디자인') || text.includes('графический дизайн')) {
      item.textContent = trans.graphicDesign;
    }
    if (text.includes('ui/ux') || text.includes('ui/ux') || text.includes('ui/ux') ||
        text.includes('ui/ux') || text.includes('ui/ux') || text.includes('ui/ux')) {
      item.textContent = trans.uiux;
    }
    if (text.includes('wordpress') || text.includes('wordpress') || text.includes('wordpress') ||
        text.includes('wordpress') || text.includes('wordpress') || text.includes('wordpress')) {
      item.textContent = trans.wordpress;
    }
    if (text.includes('c++') || text.includes('c++') || text.includes('c++') ||
        text.includes('c++') || text.includes('c++') || text.includes('c++')) {
      item.textContent = trans.cppSkill;
    }
    if (text.includes('c#') || text.includes('c#') || text.includes('c#') ||
        text.includes('c#') || text.includes('c#') || text.includes('c#')) {
      item.textContent = trans.csharpSkill;
    }
    if (text.includes('python') || text.includes('python') || text.includes('python') ||
        text.includes('python') || text.includes('python') || text.includes('python')) {
      item.textContent = trans.pythonSkill;
    }
  });

  // Update form placeholders
  const fullNameInput = document.querySelector('input[name="fullname"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');
  const sendButton = document.querySelector('.form-btn span');

  if (fullNameInput) fullNameInput.placeholder = trans.fullName;
  if (emailInput) emailInput.placeholder = trans.emailAddress;
  if (messageTextarea) messageTextarea.placeholder = trans.yourMessage;
  if (sendButton) sendButton.textContent = trans.sendMessage;
}

// add event listener to language selector
if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
  });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");
const modalIcon = document.querySelector("[data-modal-icon]");
const projectExtra = document.querySelector("[data-project-extra]");
const projectTech = document.querySelector("[data-project-tech]");
const projectFeatures = document.querySelector("[data-project-features]");
const projectGithub = document.querySelector("[data-project-github]");

// modal toggle function
const modalToggleFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all testimonial items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    
    // Reset project specific fields
    if (modalIcon) {
      modalIcon.src = "./assets/images/icon-quote.svg";
      modalIcon.alt = "quote icon";
    }
    if (projectExtra) projectExtra.style.display = "none";
    if (modalDate) modalDate.style.display = "block";

    modalToggleFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", modalToggleFunc);
overlay.addEventListener("click", modalToggleFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// project details variables
const projectItems = document.querySelectorAll("[data-filter-item]");

// project details data
const projectData = {
  "Web development": {
    tech: "HTML, CSS, JavaScript, React, Node.js",
    description: "Modern web applications with responsive design and interactive user interfaces.",
    features: "• Responsive design, • Interactive UI components, • RESTful API integration, • Performance optimization",
    github: "https://github.com/kysrn-ww/web-development-project"
  },
  "Fivem Software": {
    tech: "C++, Qt, OpenGL, SQL",
    description: "High-performance desktop application with advanced features and modern UI.",
    features: "• Multi-threading support, • Custom UI framework, • Database integration, • Cross-platform compatibility",
    github: "https://github.com/kysrn-ww/fivem-software"
  },
  "Trust Loader": {
    tech: "C++, WinAPI, File System",
    description: "Secure file loading utility with advanced features and enterprise-level security.",
    features: "• Drag & drop interface, • File validation, • Progress tracking, • Multi-format support",
    github: "https://github.com/kysrn-ww/trust-loader"
  },
  "Host Loader": {
    tech: "C++, Networking, Security",
    description: "Network-based host loader with advanced security features and performance monitoring.",
    features: "• Secure protocol implementation, • Performance monitoring, • Custom configuration, • Real-time updates",
    github: "https://github.com/kysrn-ww/host-loader"
  },
  "DSM.": {
    tech: "C++, WinAPI, System Services",
    description: "Desktop service manager with comprehensive system monitoring and management capabilities.",
    features: "• Service monitoring, • Performance optimization, • Automatic updates, • System integration",
    github: "https://github.com/kysrn-ww/dsm"
  },
  "MetaSpark": {
    tech: "JavaScript, Node.js, Express, MongoDB",
    description: "Web-based task management platform with real-time collaboration and advanced features.",
    features: "• Real-time collaboration, • Task automation, • Analytics dashboard, • Mobile responsive design",
    github: "https://github.com/kysrn-ww/metaspark"
  },
  "Summary": {
    tech: "JavaScript, React, Redux, Local Storage",
    description: "Personal productivity dashboard with data visualization and task tracking capabilities.",
    features: "• Data visualization, • Task analytics, • Progress tracking, • Offline functionality",
    github: "https://github.com/kysrn-ww/summary"
  },
  "Arrival": {
    tech: "JavaScript, Canvas, WebGL",
    description: "Interactive 3D visualization platform with advanced rendering capabilities.",
    features: "• 3D rendering engine, • Real-time collaboration, • Advanced shaders, • Performance optimization",
    github: "https://github.com/kysrn-ww/arrival"
  },
  "Task Manager": {
    tech: "C#, .NET, SQL Server",
    description: "Enterprise task management solution with comprehensive features and team collaboration.",
    features: "• Team collaboration, • Advanced reporting, • Workflow automation, • Integration capabilities",
    github: "https://github.com/kysrn-ww/task-manager"
  }
};

// add click event to all project items
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    
    const img = this.querySelector("img");
    const title = this.querySelector(".project-title").innerText.trim();
    const category = this.querySelector(".project-category").innerText;
    
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.innerText = title;
    if (modalDate) {
      modalDate.innerText = category;
      modalDate.style.display = "block";
    }
    
    if (modalIcon) {
      modalIcon.src = "./assets/images/icon-design.svg";
      modalIcon.alt = "design icon";
    }

    const data = projectData[title];
    if (data) {
      modalText.innerHTML = `<p>${data.description}</p>`;
      if (projectExtra) {
        projectExtra.style.display = "block";
        projectTech.innerText = data.tech;
        projectFeatures.innerText = data.features;
        projectGithub.href = data.github;
      }
    } else {
      modalText.innerHTML = "<p>No description available for this project.</p>";
      if (projectExtra) projectExtra.style.display = "none";
    }
    
    modalToggleFunc();
  });
}