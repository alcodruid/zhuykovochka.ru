// Language translations
const translations = {
    ru: {
        nav: {
            home: "Главная",
            skills: "Стек",
            projects: "Проекты",
            experience: "Опыт",
            contact: "Контакты",
            logoName: "Алина Жуйкова"
        },
        hero: {
            title: "Алина Жуйкова",
            subtitle: "Нативный Android-разработчик | Инженер ИС",
            description: `Перспективный Junior/Trainee Android-разработчик. Завершено 5 семестров, с интересом и воодушевлением продолжаю обучение по специальности.<br>
                Обладаю практическим опытом реализации полного цикла разработки: от анализа требований и проектирования архитектуры MVVM
                до интеграции REST API и отладки приложений.<br>
                Мой профиль усилен глубоким пониманием алгоритмов, архитектуры ИС, сетей и баз данных.`,
            portfolio: "Портфолио",
            contact: "Связаться",
            downloadResume: "Скачать резюме"
        },
        skills: {
            title: "Технический Стек",
            android: "Android Development",
            engineering: "Engineering & Languages",
            tools: "Tools & Network",
            soft: "Soft Skills"
        },
        projects: {
            title: "Проекты",
            disclaimer: "Все проекты разработаны самостоятельно, без использования генерируемого кода ИИ.",
            github: "GitHub",
            items: {
                libraryApp: {
                    name: "LibraryApp",
                    role: "Android (Kotlin, MVVM)",
                    desc: "Android-приложение на Kotlin, реализующее каталог и управление библиотеками с хранением данных в базе Room и загрузкой информации из внешнего JSON API.",
                    features: [
                        "Полная реализация <strong>CRUD-функциональности</strong> для управления данными.",
                        "<strong>Успешная интеграция с внешним REST API</strong> для синхронизации данных.",
                        "Архитектура MVVM + Room для локального хранения.",
                        "Material Design UI с адаптивными компонентами."
                    ]
                },
                timeConverter: {
                    name: "TimeConverter",
                    role: "Android (Kotlin)",
                    desc: "Мобильное приложение для конвертации единиц времени, разработанное на Kotlin для Android.",
                    features: [
                        "Поддержка <strong>10 направлений перевода</strong>: секунды, минуты, часы, дни, недели, месяцы, годы, декады, века, тысячелетия.",
                        "Интуитивный интерфейс с мгновенной конвертацией.",
                        "Оптимизированная работа с различными единицами времени."
                    ]
                },
                metroNavigator: {
                    name: "MetroSPB-Navigator",
                    role: "C# / Desktop Application",
                    desc: "Приложение для поиска кратчайшего пути в метрополитене Санкт-Петербурга.",
                    features: [
                        "Использует <strong>алгоритм Дейкстры</strong> для расчета оптимального маршрута.",
                        "Учитывает время в пути и пересадки между станциями.",
                        "Визуализация маршрута и расчет времени поездки."
                    ]
                },
                krasnodarMap: {
                    name: "KrasnodarMapApp",
                    role: "Android (Yandex MapKit)",
                    desc: "Приложение геолокации для Краснодара с расширенной картографией и навигацией.",
                    features: [
                        "Интеграция <strong>Яндекс Карты API</strong> с кастомными маркерами.",
                        "Реализация навигации и геолокационных сервисов.",
                        "Оптимизация рендеринга карты для плавной работы."
                    ]
                },
                airHockey: {
                    name: "AirHockey (Аэрохоккей)",
                    role: "C++ / Game Development",
                    desc: "Захватывающая 3D-игра для ПК, где скорость, стратегия и реакция играют ключевую роль.",
                    features: [
                        "Реализация <strong>физического движка</strong> с обработкой столкновений.",
                        "Алгоритмы обработки инерции и динамики объектов.",
                        "Оптимизированный Game Loop для плавного геймплея.",
                        "Мультиплеер для игры с друзьями."
                    ]
                },
                teaShop: {
                    name: "TeaShop Simulator",
                    role: "C# / Desktop WinForms",
                    desc: "Десктопное приложение на C# (WinForms), имитирующее работу чайного магазина с реалистичной системой покупок.",
                    features: [
                        "<strong>Система учета и отчетности</strong> с базой данных.",
                        "Управление инвентарем и складскими операциями.",
                        "Реалистичная симуляция процесса покупок.",
                        "Интерфейс на WinForms с интеграцией SQL."
                    ]
                }
            }
        },
        experience: {
            title: "Опыт и Образование",
            tbank: {
                company: "T-Банк (FinTech)",
                role: "Специалист по депозитным продуктам (Чат-поддержка)",
                description: "Работа в высокопроизводительной среде финтех-компании, развитие профессиональных навыков.",
                achievements: [
                    "<strong>Многозадачность:</strong> Развила навык быстрого принятия решений и эффективного управления потоком информации.",
                    "<strong>Клиентоориентированность:</strong> Применение навыков коммуникации для решения сложных вопросов.",
                    "<strong>Инициативность:</strong> Произвела впечатление готовностью к обучению и проактивным подходом.",
                    "Взаимодействие с техническими командами в условиях высоких нагрузок."
                ]
            },
            education: {
                university: "ГУАП",
                dates: "2023 – Настоящее время",
                degree: "Бакалавриат • Информационные системы и технологии",
                profile: "Профиль: <strong>Информационные технологии в медиаиндустрии</strong>.",
                practice: "<em>Практика:</em> Пройдено 6 недель учебной практики (во 2-м и 4-м семестрах).",
                courses: "<strong>Ключевые дисциплины:</strong> Технологии программирования, Архитектура ИС, Инфокоммуникационные системы и сети, Разработка и анализ требований, Алгоритмы и структуры данных, Архитектура ЭВМ, Вычислительная математика."
            }
        },
        contact: {
            title: "Контакты"
        },
        footer: "Built with High-Tech Aspirations."
    },
    en: {
        nav: {
            home: "Home",
            skills: "Stack",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
            logoName: "Alina Zhuykova"
        },
        hero: {
            title: "Alina Zhuykova",
            subtitle: "Native Android Developer | IS Engineer",
            description: `Promising Junior/Trainee Android Developer. 5 semesters completed, continuing my studies in the specialty with interest and enthusiasm.<br>
                I have practical experience implementing the full development cycle: from requirements analysis and MVVM architecture design
                to REST API integration and application debugging.<br>
                My profile is strengthened by a deep understanding of algorithms, IS architecture, networks, and databases.`,
            portfolio: "Portfolio",
            contact: "Contact Me",
            downloadResume: "Download Resume"
        },
        skills: {
            title: "Technical Stack",
            android: "Android Development",
            engineering: "Engineering & Languages",
            tools: "Tools & Network",
            soft: "Soft Skills"
        },
        projects: {
            title: "Projects",
            disclaimer: "All projects were developed independently, without the use of AI-generated code.",
            github: "GitHub",
            items: {
                libraryApp: {
                    name: "LibraryApp",
                    role: "Android (Kotlin, MVVM)",
                    desc: "Android application in Kotlin implementing a catalog and library management with data storage in Room database and loading information from external JSON API.",
                    features: [
                        "Full implementation of <strong>CRUD functionality</strong> for data management.",
                        "<strong>Successful integration with external REST API</strong> for data synchronization.",
                        "MVVM + Room architecture for local storage.",
                        "Material Design UI with adaptive components."
                    ]
                },
                timeConverter: {
                    name: "TimeConverter",
                    role: "Android (Kotlin)",
                    desc: "Mobile application for time unit conversion, developed in Kotlin for Android.",
                    features: [
                        "Supports <strong>10 conversion directions</strong>: seconds, minutes, hours, days, weeks, months, years, decades, centuries, millennia.",
                        "Intuitive interface with instant conversion.",
                        "Optimized work with various time units."
                    ]
                },
                metroNavigator: {
                    name: "MetroSPB-Navigator",
                    role: "C# / Desktop Application",
                    desc: "Application for finding the shortest path in the St. Petersburg metro.",
                    features: [
                        "Uses <strong>Dijkstra's algorithm</strong> to calculate the optimal route.",
                        "Considers travel time and transfers between stations.",
                        "Route visualization and travel time calculation."
                    ]
                },
                krasnodarMap: {
                    name: "KrasnodarMapApp",
                    role: "Android (Yandex MapKit)",
                    desc: "Geolocation application for Krasnodar with advanced mapping and navigation.",
                    features: [
                        "Integration of <strong>Yandex Maps API</strong> with custom markers.",
                        "Implementation of navigation and geolocation services.",
                        "Map rendering optimization for smooth performance."
                    ]
                },
                airHockey: {
                    name: "AirHockey",
                    role: "C++ / Game Development",
                    desc: "Exciting 3D PC game where speed, strategy, and reaction play a key role.",
                    features: [
                        "Implementation of <strong>physics engine</strong> with collision detection.",
                        "Algorithms for processing inertia and object dynamics.",
                        "Optimized Game Loop for smooth gameplay.",
                        "Multiplayer for playing with friends."
                    ]
                },
                teaShop: {
                    name: "TeaShop Simulator",
                    role: "C# / Desktop WinForms",
                    desc: "Desktop application in C# (WinForms) simulating a tea shop with a realistic purchasing system.",
                    features: [
                        "<strong>Accounting and reporting system</strong> with database.",
                        "Inventory and warehouse operations management.",
                        "Realistic simulation of the purchasing process.",
                        "WinForms interface with SQL integration."
                    ]
                }
            }
        },
        experience: {
            title: "Experience & Education",
            tbank: {
                company: "T-Bank (FinTech)",
                role: "Deposit Products Specialist (Chat Support)",
                description: "Working in a high-performance fintech environment, developing professional skills.",
                achievements: [
                    "<strong>Multitasking:</strong> Developed the skill of quick decision-making and effective information flow management.",
                    "<strong>Client-oriented:</strong> Applying communication skills to solve complex issues.",
                    "<strong>Initiative:</strong> Made an impression with readiness to learn and a proactive approach.",
                    "Interaction with technical teams under high load conditions."
                ]
            },
            education: {
                university: "SUAI",
                dates: "2023 – Present",
                degree: "Bachelor's • Information Systems and Technologies",
                profile: "Profile: <strong>Information Technologies in Media Industry</strong>.",
                practice: "<em>Practice:</em> Completed 6 weeks of educational practice (in 2nd and 4th semesters).",
                courses: "<strong>Key disciplines:</strong> Programming Technologies, IS Architecture, Infocommunication Systems and Networks, Requirements Development and Analysis, Algorithms and Data Structures, Computer Architecture, Computational Mathematics."
            }
        },
        contact: {
            title: "Contact"
        },
        footer: "Built with High-Tech Aspirations."
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'ru';

// Update page language
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update language toggle button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];

        for (const key of keys) {
            translation = translation[key];
        }

        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Update specific sections that need special handling
    updateHeroSection(lang);
    updateProjectsSection(lang);
    updateExperienceSection(lang);
    updateFooter(lang);
}

function updateHeroSection(lang) {
    const t = translations[lang].hero;

    const title = document.querySelector('.glitch-text');
    if (title) {
        title.textContent = t.title;
        title.setAttribute('data-text', t.title);
    }

    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = t.subtitle;

    const description = document.querySelector('.description');
    if (description) description.innerHTML = t.description;

    const buttons = document.querySelectorAll('.cta-buttons .btn');
    if (buttons[0]) buttons[0].textContent = t.portfolio;
    if (buttons[1]) buttons[1].textContent = t.contact;

    // Update Resume Button text and link
    const resumeBtn = document.getElementById('download-resume-btn');
    if (resumeBtn) {
        // Update text preserving icon
        const icon = resumeBtn.querySelector('svg');
        const iconHTML = icon ? icon.outerHTML : '';
        resumeBtn.innerHTML = `${iconHTML} ${t.downloadResume}`;

        // Update link href based on language
        if (lang === 'ru') {
            resumeBtn.setAttribute('href', 'cv_russian.pdf');
            resumeBtn.setAttribute('download', 'Alina_Zhuykova_CV_RU.pdf');
        } else {
            resumeBtn.setAttribute('href', 'cv_english.pdf');
            resumeBtn.setAttribute('download', 'Alina_Zhuykova_CV_EN.pdf');
        }
    }
}

function updateProjectsSection(lang) {
    const projects = translations[lang].projects.items;
    const projectCards = document.querySelectorAll('.project-card');

    const projectKeys = ['libraryApp', 'timeConverter', 'metroNavigator', 'krasnodarMap', 'airHockey', 'teaShop'];

    projectCards.forEach((card, index) => {
        const projectKey = projectKeys[index];
        if (!projectKey || !projects[projectKey]) return;

        const project = projects[projectKey];

        // Update project name
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = project.name;

        // Update project role
        const role = card.querySelector('.project-role');
        if (role) role.textContent = project.role;

        // Update project description
        const desc = card.querySelector('.project-desc');
        if (desc) desc.textContent = project.desc;

        // Update project features
        const featuresList = card.querySelector('.project-features');
        if (featuresList && project.features) {
            featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
        }
    });
}


function updateExperienceSection(lang) {
    const t = translations[lang].experience;

    // Update section title
    const sectionTitle = document.querySelector('#education .section-title');
    if (sectionTitle) sectionTitle.textContent = t.title;

    // Update T-Bank experience
    const tbankContent = document.querySelectorAll('.timeline-item')[0];
    if (tbankContent) {
        const h3 = tbankContent.querySelector('h3');
        const h4 = tbankContent.querySelector('h4');
        const p = tbankContent.querySelector('p');
        const ul = tbankContent.querySelector('ul');

        if (h3) h3.textContent = t.tbank.company;
        if (h4) h4.textContent = t.tbank.role;
        if (p) p.textContent = t.tbank.description;
        if (ul) {
            ul.innerHTML = t.tbank.achievements.map(item => `<li>${item}</li>`).join('');
        }
    }

    // Update Education
    const eduContent = document.querySelectorAll('.timeline-item')[1];
    if (eduContent) {
        const h3 = eduContent.querySelector('h3');
        const h4 = eduContent.querySelector('h4');
        const paragraphs = eduContent.querySelectorAll('p');

        if (h3) h3.textContent = t.education.university;
        if (h4) h4.textContent = t.education.degree;
        if (paragraphs[0]) paragraphs[0].innerHTML = t.education.profile;
        if (paragraphs[1]) paragraphs[1].innerHTML = t.education.practice;
        if (paragraphs[2]) paragraphs[2].innerHTML = t.education.courses;
    }
}

function updateFooter(lang) {
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Alina Zhuykova. ${translations[lang].footer}`;
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    // Add language toggle event listener
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            updateLanguage(newLang);
        });
    }
});
