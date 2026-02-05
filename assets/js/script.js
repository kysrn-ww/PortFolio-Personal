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
    sendMessage: "Envoyer le message",
    // Resume specific translations
    universityTitle: "Université Nationale de Catamarca",
    universityDegree: "Licence en Systèmes d'Information avec spécialisation en développement logiciel et informatique.",
    technicalTitle: "Institut Technique Catamarca",
    technicalDegree: "Technicien en Programmation avec focus sur développement web et applications de bureau.",
    fullStackTitle: "Développeur Web Full Stack",
    fullStackDesc: "Développement d'applications web complètes utilisant technologies modernes comme HTML, CSS, JavaScript et frameworks frontend.",
    cppTitle: "Développeur C++",
    cppDesc: "Développement de logiciels haute performance et applications de bureau utilisant C++ et standards modernes.",
    webDesign: "Design web",
    graphicDesign: "Design graphique",
    uiux: "Design UI/UX",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
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
    sendMessage: "Nachricht senden",
    // Resume specific translations
    universityTitle: "Nationale Universität Catamarca",
    universityDegree: "Bachelor in Informationssysteme mit Spezialisierung auf Softwareentwicklung und Informatik.",
    technicalTitle: "Technisches Institut Catamarca",
    technicalDegree: "Programmiertechniker mit Fokus auf Webentwicklung und Desktop-Anwendungen.",
    fullStackTitle: "Full Stack Web Entwickler",
    fullStackDesc: "Entwicklung kompletter Webanwendungen mit modernen Technologien wie HTML, CSS, JavaScript und Frontend-Frameworks.",
    cppTitle: "C++ Entwickler",
    cppDesc: "Hochleistungs-Softwareentwicklung und Desktop-Anwendungen mit C++ und modernen Standards.",
    webDesign: "Webdesign",
    graphicDesign: "Grafikdesign",
    uiux: "UI/UX Design",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
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
    sendMessage: "Invia messaggio",
    // Resume specific translations
    universityTitle: "Università Nazionale di Catamarca",
    universityDegree: "Laurea in Sistemi Informatici con specializzazione in sviluppo software e informatica.",
    technicalTitle: "Istituto Tecnico Catamarca",
    technicalDegree: "Tecnico Programmatore con focus su sviluppo web e applicazioni desktop.",
    fullStackTitle: "Sviluppatore Web Full Stack",
    fullStackDesc: "Sviluppo di applicazioni web complete usando tecnologie moderne come HTML, CSS, JavaScript e framework frontend.",
    cppTitle: "Sviluppatore C++",
    cppDesc: "Sviluppo software ad alte prestazioni e applicazioni desktop usando C++ e standard moderni.",
    webDesign: "Web design",
    graphicDesign: "Design grafico",
    uiux: "Design UI/UX",
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
    sendMessage: "发送消息",
    // Resume specific translations
    universityTitle: "卡塔马卡国立大学",
    universityDegree: "信息系统学士学位，专业软件开发和计算机科学。",
    technicalTitle: "卡塔马卡技术学院",
    technicalDegree: "编程技术员，专注于网页开发和桌面应用程序。",
    fullStackTitle: "全栈网页开发者",
    fullStackDesc: "使用现代技术开发完整网页应用程序，如HTML、CSS、JavaScript和前端框架。",
    cppTitle: "C++开发者",
    cppDesc: "使用C++和现代标准开发高性能软件和桌面应用程序。",
    webDesign: "网页设计",
    graphicDesign: "平面设计",
    uiux: "UI/UX设计",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
  },
  ja: {
    aboutTitle: "私について",
    aboutText1: "私はアルゼンチン出身のクリエイティブディレクター兼UI/UXデザイナーで、ウェブ開発とC++ソフトウェアに携わっています。複雑な問題をシンプルで美しく直感的なデザインに変えることを楽しんでいます。",
    aboutText2: "私は常に新しい挑戦と学び、成長の機会を探している情熱的な開発者です。<strong>英語とスペイン語のバイリンガル</strong>で、国際的なクライアントやチームと効果的にコミュニケーションできます。あなたのプロジェクトについて教えてください、一緒に実現しましょう！",
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
    sendMessage: "メッセージを送信",
    // Resume specific translations
    universityTitle: "カタマルカ国立大学",
    universityDegree: "ソフトウェア開発とコンピューターサイエンスを専門とする情報システム学士号。",
    technicalTitle: "カタマルカ技術学院",
    technicalDegree: "ウェブ開発とデスクトップアプリケーションに焦点を当てたプログラミング技術者。",
    fullStackTitle: "フルスタックウェブ開発者",
    fullStackDesc: "HTML、CSS、JavaScript、フロントエンドフレームワークなどの最新技術を使用した完全なウェブアプリケーションの開発。",
    cppTitle: "C++開発者",
    cppDesc: "C++と最新標準を使用した高性能ソフトウェアとデスクトップアプリケーションの開発。",
    webDesign: "ウェブデザイン",
    graphicDesign: "グラフィックデザイン",
    uiux: "UI/UXデザイン",
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
    sendMessage: "Отправить сообщение",
    // Resume specific translations
    universityTitle: "Национальный Университет Катамарки",
    universityDegree: "Бакалавр информационных систем со специализацией в разработке программного обеспечения и информатике.",
    technicalTitle: "Технический Институт Катамарки",
    technicalDegree: "Техник-программист с фокусом на веб-разработку и настольные приложения.",
    fullStackTitle: "Full Stack веб-разработчик",
    fullStackDesc: "Разработка полных веб-приложений с использованием современных технологий как HTML, CSS, JavaScript и фреймворки.",
    cppTitle: "C++ разработчик",
    cppDesc: "Разработка высокопроизводительного программного обеспечения и настольных приложений с использованием C++ и современных стандартов.",
    webDesign: "Веб-дизайн",
    graphicDesign: "Графический дизайн",
    uiux: "UI/UX дизайн",
    wordpress: "WordPress",
    cppSkill: "C++",
    csharpSkill: "C#",
    pythonSkill: "Python"
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
  const educationTitles = document.querySelectorAll('.resume .h3');
  const skillsTitle = document.querySelector('.skill .h3');
  const portfolioTitle = document.querySelector('.portfolio .h2.article-title');
  const contactTitle = document.querySelector('.contact .h2.article-title');
  const contactFormTitle = document.querySelector('.contact-form .h3');

  if (resumeTitle) resumeTitle.textContent = trans.resumeTitle;
  if (educationTitles) {
    educationTitles.forEach(title => {
      if (title.textContent.includes('Education') || title.textContent.includes('Educación') || 
          title.textContent.includes('Éducation') || title.textContent.includes('Ausbildung') ||
          title.textContent.includes('Educazione') || title.textContent.includes('Educação') ||
          title.textContent.includes('教育') || title.textContent.includes('学歴') ||
          title.textContent.includes('교육') || title.textContent.includes('Образование')) {
        title.textContent = trans.educationTitle;
      }
      if (title.textContent.includes('Experience') || title.textContent.includes('Experiencia') ||
          title.textContent.includes('Expérience') || title.textContent.includes('Erfahrung') ||
          title.textContent.includes('Esperienza') || title.textContent.includes('Experiência') ||
          title.textContent.includes('经验') || title.textContent.includes('経験') ||
          title.textContent.includes('경험') || title.textContent.includes('Опыт')) {
        title.textContent = trans.experienceTitle;
      }
    });
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

    // Update education items
    if (universityTitle) {
      if (universityTitle.textContent.includes('National') || universityTitle.textContent.includes('Universidad') || 
          universityTitle.textContent.includes('Université') || universityTitle.textContent.includes('Universität') ||
          universityTitle.textContent.includes('Università') || universityTitle.textContent.includes('Universidade') ||
          universityTitle.textContent.includes('大学') || universityTitle.textContent.includes('大学') ||
          universityTitle.textContent.includes('대학교') || universityTitle.textContent.includes('Университет')) {
        universityTitle.textContent = trans.universityTitle;
      }
    }
    if (universityDegree) {
      if (universityDegree.textContent.includes('Bachelor') || universityDegree.textContent.includes('Licenciatura') ||
          universityDegree.textContent.includes('Licence') || universityDegree.textContent.includes('Bachelor') ||
          universityDegree.textContent.includes('Laurea') || universityDegree.textContent.includes('Bacharelado') ||
          universityDegree.textContent.includes('学士') || universityDegree.textContent.includes('学士') ||
          universityDegree.textContent.includes('학사') || universityDegree.textContent.includes('Бакалавр')) {
        universityDegree.textContent = trans.universityDegree;
      }
    }
    
    if (technicalTitle) {
      if (technicalTitle.textContent.includes('Technical') || technicalTitle.textContent.includes('Instituto') ||
          technicalTitle.textContent.includes('Institut') || technicalTitle.textContent.includes('Istituto') ||
          technicalTitle.textContent.includes('Instituto') || technicalTitle.textContent.includes('学院') ||
          technicalTitle.textContent.includes('학원') || technicalTitle.textContent.includes('Техникум')) {
        technicalTitle.textContent = trans.technicalTitle;
      }
    }
    if (technicalDegree) {
      if (technicalDegree.textContent.includes('Programming') || technicalDegree.textContent.includes('Programación') ||
          technicalDegree.textContent.includes('Programmation') || technicalDegree.textContent.includes('Programmierung') ||
          technicalDegree.textContent.includes('Programmazione') || technicalDegree.textContent.includes('Programação') ||
          technicalDegree.textContent.includes('编程') || technicalDegree.textContent.includes('プログラミング') ||
          technicalDegree.textContent.includes('프로그래밍') || technicalDegree.textContent.includes('Программирование')) {
        technicalDegree.textContent = trans.technicalDegree;
      }
    }

    // Update experience items
    if (fullStackTitle) {
      if (fullStackTitle.textContent.includes('Full Stack') || fullStackTitle.textContent.includes('Full Stack') ||
          fullStackTitle.textContent.includes('Full Stack') || fullStackTitle.textContent.includes('Full Stack') ||
          fullStackTitle.textContent.includes('Full Stack') || fullStackTitle.textContent.includes('Full Stack')) {
        fullStackTitle.textContent = trans.fullStackTitle;
      }
    }
    if (fullStackDesc) {
      if (fullStackDesc.textContent.includes('Development of complete') || fullStackDesc.textContent.includes('Desarrollo') ||
          fullStackDesc.textContent.includes('Développement') || fullStackDesc.textContent.includes('Entwicklung') ||
          fullStackDesc.textContent.includes('Sviluppo') || fullStackDesc.textContent.includes('Desenvolvimento') ||
          fullStackDesc.textContent.includes('开发') || fullStackDesc.textContent.includes('開発') ||
          fullStackDesc.textContent.includes('개발') || fullStackDesc.textContent.includes('Разработка')) {
        fullStackDesc.textContent = trans.fullStackDesc;
      }
    }
    if (cppTitle) {
      if (cppTitle.textContent.includes('C++') || cppTitle.textContent.includes('C++')) {
        cppTitle.textContent = trans.cppTitle;
      }
    }
    if (cppDesc) {
      if (cppDesc.textContent.includes('High-performance') || cppDesc.textContent.includes('alto rendimiento') ||
          cppDesc.textContent.includes('Haute performance') || cppDesc.textContent.includes('Hochleistungs') ||
          cppDesc.textContent.includes('Alte prestazioni') || cppDesc.textContent.includes('alta performance') ||
          cppDesc.textContent.includes('高性能') || cppDesc.textContent.includes('고성능') ||
          cppDesc.textContent.includes('Высокопроизводительный')) {
        cppDesc.textContent = trans.cppDesc;
      }
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