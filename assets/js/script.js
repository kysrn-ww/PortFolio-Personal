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
    sendMessage: "Send Message"
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
    sendMessage: "Enviar mensaje"
  },
  fr: {
    aboutTitle: "À propos de moi",
    aboutText1: "Je suis Directeur Créatif et Designer UI/UX d'ARGENTINE travaillant dans le développement web et les logiciels C++. J'aime transformer les problèmes complexes en designs simples, beaux et intuitifs.",
    aboutText2: "Je suis un développeur passionné qui cherche toujours de nouveaux défis et des opportunités d'apprendre et de grandir. <strong>Bilingue en anglais et espagnol</strong>, je peux communiquer efficacement avec des clients et des équipes internationaux. Parlez-moi de votre projet et réalisons-le!",
    resumeTitle: "CV",
    educationTitle: "Éducation",
    experienceTitle: "Expérience",
    skillsTitle: "Mes compétences",
    portfolioTitle: "Portfolio",
    contactTitle: "Contact",
    contactFormTitle: "Formulaire de contact",
    fullName: "Nom complet",
    emailAddress: "Adresse e-mail",
    yourMessage: "Votre message",
    sendMessage: "Envoyer le message"
  },
  de: {
    aboutTitle: "Über mich",
    aboutText1: "Ich bin Creative Director und UI/UX Designer aus ARGENTINIEN und arbeite an Webentwicklung und C++ Software. Ich genieße es, komplexe Probleme in einfache, schöne und intuitive Designs umzuwandeln.",
    aboutText2: "Ich bin ein leidenschaftlicher Entwickler, der immer nach neuen Herausforderungen und Möglichkeiten zum Lernen und Wachsen sucht. <strong>Zweisprachig in Englisch und Spanisch</strong>, kann ich effektiv mit internationalen Kunden und Teams kommunizieren. Erzählen Sie mir von Ihrem Projekt und lassen Sie es geschehen!",
    resumeTitle: "Lebenslauf",
    educationTitle: "Ausbildung",
    experienceTitle: "Erfahrung",
    skillsTitle: "Meine Fähigkeiten",
    portfolioTitle: "Portfolio",
    contactTitle: "Kontakt",
    contactFormTitle: "Kontaktformular",
    fullName: "Vollständiger Name",
    emailAddress: "E-Mail-Adresse",
    yourMessage: "Ihre Nachricht",
    sendMessage: "Nachricht senden"
  },
  it: {
    aboutTitle: "Su di me",
    aboutText1: "Sono Direttore Creativo e Designer UI/UX dall'ARGENTINA che lavora nello sviluppo web e software C++. Mi piace trasformare problemi complessi in design semplici, belli e intuitivi.",
    aboutText2: "Sono uno sviluppatore appassionato che cerca sempre nuove sfide e opportunità per imparare e crescere. <strong>Bilingue in inglese e spagnolo</strong>, posso comunicare efficacemente con clienti e team internazionali. Parlammi del tuo progetto e realizziamolo!",
    resumeTitle: "Curriculum",
    educationTitle: "Educazione",
    experienceTitle: "Esperienza",
    skillsTitle: "Le mie competenze",
    portfolioTitle: "Portfolio",
    contactTitle: "Contatto",
    contactFormTitle: "Modulo di contatto",
    fullName: "Nome completo",
    emailAddress: "Indirizzo email",
    yourMessage: "Il tuo messaggio",
    sendMessage: "Invia messaggio"
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
    sendMessage: "Enviar mensagem"
  },
  zh: {
    aboutTitle: "关于我",
    aboutText1: "我来自阿根廷，是创意总监和UI/UX设计师，从事网页开发和C++软件开发。我喜欢将复杂的问题转化为简单、美观和直观的设计。",
    aboutText2: "我是一个充满热情的开发者，总是在寻找新的挑战和学习成长的机会。<strong>英语和西班牙语双语</strong>，我可以与国际客户和团队有效沟通。告诉我您的项目，让我们实现它！",
    resumeTitle: "简历",
    educationTitle: "教育",
    experienceTitle: "经验",
    skillsTitle: "我的技能",
    portfolioTitle: "作品集",
    contactTitle: "联系",
    contactFormTitle: "联系表单",
    fullName: "全名",
    emailAddress: "电子邮件地址",
    yourMessage: "您的消息",
    sendMessage: "发送消息"
  },
  ja: {
    aboutTitle: "私について",
    aboutText1: "私はアルゼンチン出身のクリエイティブディレクター兼UI/UXデザイナーで、ウェブ開発とC++ソフトウェアに携わっています。複雑な問題をシンプルで美しく直感的なデザインに変えることを楽しんでいます。",
    aboutText2: "私は常に新しい挑戦と学び、成長する機会を探している情熱的な開発者です。<strong>英語とスペイン語のバイリンガル</strong>で、国際的なクライアントやチームと効果的にコミュニケーションできます。あなたのプロジェクトについて教えてください、一緒に実現しましょう！",
    resumeTitle: "履歴書",
    educationTitle: "学歴",
    experienceTitle: "経験",
    skillsTitle: "私のスキル",
    portfolioTitle: "ポートフォリオ",
    contactTitle: "連絡先",
    contactFormTitle: "連絡フォーム",
    fullName: "氏名",
    emailAddress: "メールアドレス",
    yourMessage: "メッセージ",
    sendMessage: "メッセージを送信"
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
    sendMessage: "메시지 보내기"
  },
  ru: {
    aboutTitle: "О себе",
    aboutText1: "Я креативный директор и UI/UX дизайнер из АРГЕНТИНЫ, работающий в веб-разработке и программном обеспечении C++. Я люблю превращать сложные проблемы в простые, красивые и интуитивные дизайны.",
    aboutText2: "Я страстный разработчик, который всегда ищет новые вызовы и возможности для обучения и роста. <strong>Двуязычный в английском и испанском</strong>, я могу эффективно общаться с международными клиентами и командами. Расскажите мне о вашем проекте, и давайте сделаем это!",
    resumeTitle: "Резюме",
    educationTitle: "Образование",
    experienceTitle: "Опыт",
    skillsTitle: "Мои навыки",
    portfolioTitle: "Портфолио",
    contactTitle: "Контакт",
    contactFormTitle: "Форма контакта",
    fullName: "Полное имя",
    emailAddress: "Адрес электронной почты",
    yourMessage: "Ваше сообщение",
    sendMessage: "Отправить сообщение"
  }
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

  // Update other sections
  const resumeTitle = document.querySelector('.resume .h2.article-title');
  const educationTitle = document.querySelector('.resume .h3');
  const experienceTitles = document.querySelectorAll('.resume .h3');
  const skillsTitle = document.querySelector('.skill .h3');
  const portfolioTitle = document.querySelector('.portfolio .h2.article-title');
  const contactTitle = document.querySelector('.contact .h2.article-title');
  const contactFormTitle = document.querySelector('.contact-form .h3');

  if (resumeTitle) resumeTitle.textContent = trans.resumeTitle;
  if (educationTitle && educationTitle.textContent.includes('Education')) educationTitle.textContent = trans.educationTitle;
  if (experienceTitles) {
    experienceTitles.forEach(title => {
      if (title.textContent.includes('Experience')) title.textContent = trans.experienceTitle;
    });
  }
  if (skillsTitle) skillsTitle.textContent = trans.skillsTitle;
  if (portfolioTitle) portfolioTitle.textContent = trans.portfolioTitle;
  if (contactTitle) contactTitle.textContent = trans.contactTitle;
  if (contactFormTitle) contactFormTitle.textContent = trans.contactFormTitle;

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