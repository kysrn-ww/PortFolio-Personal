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

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



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

// project modal variables
const projectItem = document.querySelectorAll("[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");

// project modal elements
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalText = document.querySelector("[data-project-modal-text]");

// project modal toggle function
const projectModalFunc = function () {
  console.log("🎭 projectModalFunc called");
  console.log("📦 projectModalContainer:", projectModalContainer);
  console.log("🌑 projectOverlay:", projectOverlay);
  
  if (projectModalContainer) {
    projectModalContainer.classList.toggle("active");
    console.log("✅ Modal container class toggled, now has 'active':", projectModalContainer.classList.contains("active"));
  } else {
    console.error("❌ projectModalContainer not found!");
  }
  
  if (projectOverlay) {
    projectOverlay.classList.toggle("active");
    console.log("✅ Overlay class toggled, now has 'active':", projectOverlay.classList.contains("active"));
  } else {
    console.error("❌ projectOverlay not found!");
  }
}

// add click event to all project items
for (let i = 0; i < projectItem.length; i++) {
  projectItem[i].addEventListener("click", function (e) {
    console.log("🔍 Click detectado en proyecto (LI)");
    e.preventDefault();
    e.stopPropagation();
    
    // Obtener la información del proyecto desde el HTML
    const img = this.querySelector(".project-img img");
    const title = this.querySelector(".project-title");
    const category = this.querySelector(".project-category");
    console.log("📷 Imagen:", img?.src);
    console.log("📝 Título:", title?.textContent);
    console.log("🏷️ Categoría:", category?.textContent);
    
    // Actualizar el contenido del modal con la información del proyecto
    if (projectModalImg && img) {
      projectModalImg.src = img.src;
      projectModalImg.alt = img.alt;
    }
    
    if (projectModalTitle && title) {
      projectModalTitle.textContent = title.textContent;
    }
    
    if (projectModalCategory && category) {
      projectModalCategory.textContent = category.textContent;
    }
    
    // Agregar descripción del proyecto (puedes personalizarla después)
    if (projectModalText) {
      projectModalText.innerHTML = `<p>Detailed description of the ${title ? title.textContent : 'project'}. Professional project showcasing advanced development skills and modern technologies.</p>`;
    }
    
    console.log("✅ Abriendo modal...");
    console.log("🎭 Llamando projectModalFunc...");
    projectModalFunc();
  });
}

// Hacer que los enlaces de proyectos abran el modal
const projectLinks = document.querySelectorAll("[data-filter-item] a");
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("� Click en enlace, abriendo modal desde aquí");
    
    // Obtener el elemento li padre
    const parentItem = this.closest('[data-filter-item]');
    if (parentItem) {
      // Obtener la información del proyecto desde el HTML
      const img = parentItem.querySelector(".project-img img");
      const title = parentItem.querySelector(".project-title");
      const category = parentItem.querySelector(".project-category");
      console.log("📷 Imagen:", img?.src);
      console.log("📝 Título:", title?.textContent);
      console.log("🏷️ Categoría:", category?.textContent);
      
      // Actualizar el contenido del modal con la información del proyecto
      if (projectModalImg && img) {
        projectModalImg.src = img.src;
        projectModalImg.alt = img.alt;
      }
      
      if (projectModalTitle && title) {
        projectModalTitle.textContent = title.textContent;
      }
      
      if (projectModalCategory && category) {
        projectModalCategory.textContent = category.textContent;
      }
      
      // Agregar descripción del proyecto
      if (projectModalText) {
        projectModalText.innerHTML = `<p>Detailed description of the ${title ? title.textContent : 'project'}. Professional project showcasing advanced development skills and modern technologies.</p>`;
      }
      
      console.log("✅ Abriendo modal desde enlace...");
      projectModalFunc();
    }
  });
}

// add click event to project modal close button
projectModalCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);


// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}