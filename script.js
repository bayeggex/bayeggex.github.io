window.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    const langSelector = document.querySelector('.lang-selector');
    const langOptions = document.getElementById('lang-options');
    const langFlag = document.getElementById('lang-flag');
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
      } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      }
    });
  
    langSelector.addEventListener('click', (e) => {
      langOptions.classList.toggle('show');
    });
  
    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = option.getAttribute('data-lang');
        const newFlag = option.getAttribute('data-flag');
        updateLanguage(lang);
        langFlag.src = newFlag;
        langOptions.classList.remove('show');
      });
    });
  
    const translations = {
        tr: {
            heroTitle: "Merhaba, ben <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "Öğrenci 🎓 | Gömülü Sistemler ve Donanım Meraklısı ⚙️ | Kahve ile Çalışır ☕️ | Oyun Tutkunu 🎮❤️",
            aboutTitle: "Hakkımda",
            aboutText1: "Selam, ben Ege, nam-ı diğer bay Eggex. 2022'den beri yazılım ve donanım alanında çeşitli projeler üretiyorum. Oyun geliştirme ve mikrodenetleyiciler konusunda deneyim sahibiyim.",
            aboutText2: "Daha fazla bilgi için sosyal medya hesaplarıma göz atın.",
            projectsTitle: "Öne Çıkan Projeler",
            contactTitle: "İletişim"
        },
        zh: {
            heroTitle: "你好，我是 <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "学生 🎓 | 嵌入式系统和硬件极客 ⚙️ | 由咖啡驱动 ☕️ | 游戏爱好者 🎮❤️",
            aboutTitle: "关于我",
            aboutText1: "你好，我是 Ege，也被称为 bay Eggex。从2022年开始，我一直在软件和硬件领域制作各种项目。我在游戏开发和微控制器方面有经验。",
            aboutText2: "更多信息请查看我的社交媒体。",
            projectsTitle: "精选项目",
            contactTitle: "联系方式"
        },
        en: {
            heroTitle: "Hello, I'm <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "Student 🎓 | Embedded Systems & Hardware Geek ⚙️ | Powered by Coffee ☕️ | Gaming Enthusiast 🎮❤️",
            aboutTitle: "About Me",
            aboutText1: "Hi, I'm Ege, also known as bay Eggex. Since 2022, I've been producing various projects in software and hardware. I have experience in game development and microcontrollers.",
            aboutText2: "Check out my social media for more info.",
            projectsTitle: "Featured Projects",
            contactTitle: "Contact"
        },
        es: {
            heroTitle: "Hola, soy <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "Estudiante 🎓 | Apasionado de Sistemas Embebidos y Hardware ⚙️ | Impulsado por Café ☕️ | Entusiasta de los Videojuegos 🎮❤️",
            aboutTitle: "Sobre mí",
            aboutText1: "Hola, soy Ege, también conocido como bay Eggex. Desde 2022, he estado produciendo varios proyectos en software y hardware. Tengo experiencia en desarrollo de juegos y microcontroladores.",
            aboutText2: "Consulta mis redes sociales para más información.",
            projectsTitle: "Proyectos Destacados",
            contactTitle: "Contacto"
        },
        fr: {
            heroTitle: "Bonjour, je suis <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "Étudiant 🎓 | Passionné de Systèmes Embarqués et de Matériel ⚙️ | Alimenté par le Café ☕️ | Passionné de Jeux Vidéo 🎮❤️",
            aboutTitle: "À propos de moi",
            aboutText1: "Salut, je suis Ege, aussi connu sous le nom de bay Eggex. Depuis 2022, je produis divers projets en logiciels et en matériel. J'ai de l'expérience dans le développement de jeux et les microcontrôleurs.",
            aboutText2: "Consultez mes réseaux sociaux pour plus d'informations.",
            projectsTitle: "Projets en Vedette",
            contactTitle: "Contact"
        },
        ja: {
            heroTitle: "こんにちは、私は <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "学生 🎓 | 組み込みシステムとハードウェアオタク ⚙️ | コーヒーで動く ☕️ | ゲーム愛好者 🎮❤️",
            aboutTitle: "私について",
            aboutText1: "こんにちは、私は Ege、別名 bay Eggex です。2022年からソフトウェアとハードウェアの分野で様々なプロジェクトを制作しています。ゲーム開発やマイクロコントローラーに関する経験があります。",
            aboutText2: "詳細は私のソーシャルメディアをチェックしてください。",
            projectsTitle: "注目のプロジェクト",
            contactTitle: "お問い合わせ"
        },
        de: {
            heroTitle: "Hallo, ich bin <span class='name'>bay Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "Student 🎓 | Embedded-Systeme- und Hardware-Fan ⚙️ | Angetrieben von Kaffee ☕️ | Gaming-Enthusiast 🎮❤️",
            aboutTitle: "Über mich",
            aboutText1: "Hallo, ich bin Ege, auch bekannt als bay Eggex. Seit 2022 arbeite ich an verschiedenen Software- und Hardwareprojekten. Ich habe Erfahrung in der Spieleentwicklung und mit Mikrocontrollern.",
            aboutText2: "Weitere Informationen findest du auf meinen Social-Media-Seiten.",
            projectsTitle: "Ausgewählte Projekte",
            contactTitle: "Kontakt"
        },
        ru: {
            heroTitle: "Привет, я <span class='name'>бай Eggex</span> <span class='wave'>👋</span>",
            heroSubtitle: "Студент 🎓 | Гик в области встраиваемых систем и железа ⚙️ | Работает на кофе ☕️ | Любитель игр 🎮❤️",
            aboutTitle: "Обо мне",
            aboutText1: "Привет, я Эге, также известный как бай Eggex. С 2022 года я работаю над различными программными и аппаратными проектами. У меня есть опыт в разработке игр и работе с микроконтроллерами.",
            aboutText2: "Больше информации можно найти на моих страницах в социальных сетях.",
            projectsTitle: "Избранные проекты",
            contactTitle: "Контакты"
        }
    };
    
      
  
    function updateLanguage(lang) {
      const t = translations[lang];
      document.getElementById('hero-title').innerHTML = t.heroTitle;
      document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
      document.getElementById('about-title').textContent = t.aboutTitle;
      document.getElementById('about-text-1').textContent = t.aboutText1;
      document.getElementById('about-text-2').textContent = t.aboutText2;
      document.getElementById('projects-title').textContent = t.projectsTitle;
      document.getElementById('contact-title').textContent = t.contactTitle;
    }
  
    const slider = document.getElementById('projects-slider');
    const githubUsername = 'bayeggex';
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(repos => {
        const featuredRepos = repos.filter(repo => !repo.fork).slice(0, 6);
        featuredRepos.forEach(repo => {
          const slide = document.createElement('div');
          slide.classList.add('slide');
          slide.innerHTML = `
            <a href="${repo.html_url}" target="_blank">
              <img src="https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}" alt="${repo.name}">
            </a>
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : 'No description provided.'}</p>
          `;
          slider.appendChild(slide);
        });
        slider.innerHTML += slider.innerHTML;
      })
      .catch(error => {
        console.error('GitHub API error:', error);
        slider.innerHTML = '<p>Projects could not be loaded.</p>';
      });
  });
  