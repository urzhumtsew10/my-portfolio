import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          name: "Andrey",
          I: "I'm",
          developer: "Frontend Developer",
          portfolio: "Portfolio",
          hireMe: "Hire me",
          notationText:
            "Exclusively developed websites by me ensure pleasant use and code quality. Highly Recommended",
          years: "Years",
          experience: "Experience",
          my: "My",
          services: "Services",
          serviceText:
            "Here you can choose the type of service you need and write more details about the order",
          layout: "Layout",
          landingPage: "Landing page",
          fullstackApp: "Fullstack app",
          skills: "Skills",
          why: "Why",
          hireText:
            "I have experience working with websites of different types and complexities, I quickly find common ground and requirements from me, I develop high-quality, optimized and easily maintainable code.",
          project: "project completed",
          clients: "Happy clients",
          seeAll: "See All",
          electricStore: "Electrical store",
          chFood: "Chinese food restaurant",
          onlineClothes: "Online store clothes",
          cinema: "Cinema",
          april: "Apr",
          december: "Dec",
          august: "Aug",
          march: "Mar",
          ideaText: "Have an Awsome Project",
          idea: "Idea",
          discuss: "Let's Discuss",
          rating: "Average Ratings",
          award: "Winning Awards",
          certified: "Certified Product Developer",
          send: "Send",
          email: "Email Address",
          enter: "Enter",
          connect: "Lets Connect there",
          urzhumtsew: "urzhumtsew",
          footerText:
            "If you are in need of my services contact me on one of these networks. Describe clearly and briefly my task, it would not be bad to have a layout of the site or 2-3 links to sites that you like. I will contact you within two days.",
          navigation: "Navigation",
          contact: "Contact",
          info: "Get the latest information",
          home: "Home",
          service: "Service",
          about: "About",
          resume: "Resume",
          projects: "Project",
          example: "Example",
          details: "Write More Details",
          nameQ: "What's your name and surname?",
          contactQ: "How can I connect with you?",
          description: "Write please about your project",
          sended: "Sended",
          price: "price",
          time: "time",
          skill: "Skills",
          hire: "Hire me",
        },
      },
      ru: {
        translation: {
          name: "Андрей",
          I: "Я",
          developer: "Вэб Разработчик",
          portfolio: "Портфолио",
          hireMe: "Нанять",
          notationText:
            "Исключительно разработанные мной сайты обеспечивают приятное использование и качество кода. Настоятельно рекомендую",
          years: "Года",
          experience: "Опыта",
          my: "Мои",
          services: "Услуги",
          serviceText:
            "Здесь вы можете выбрать тип необходимой вам услуги и написать более подробную информацию о заказе",
          layout: "Верстка",
          landingPage: "Одностраничный сайт",
          fullstackApp: "Fullstack приложение",
          skills: "Навыки",
          why: "Почему",
          hireText:
            "У меня есть опыт работы с сайтами разных типов и сложности, я быстро нахожу общий язык и требования предъявляемые ко мне, разрабатываю качественный, оптимизированный и легко сопровождаемый код.",
          project: "Завершенных проектов",
          clients: "Довольных клиентов",
          seeAll: "Все проекты",
          electricStore: "Магазин техники",
          chFood: "Китайский ресторан",
          onlineClothes: "Онлайн магазин одежды",
          cinema: "Кинотеатр",
          april: "Апр",
          december: "Дек",
          august: "Авг",
          march: "Мар",
          ideaText: "У вас есть потрясающея идея",
          idea: "для проекта",
          discuss: "Давайте обсудим",
          rating: "Средняя оценка",
          award: "Наград",
          certified: "Разработчик сертифицированных продуктов",
          send: "Отправить",
          email: "электронную почту",
          enter: "Введите",
          connect: "Давайте Свяжемся",
          urzhumtsew: "Уржумцев",
          footerText:
            "Если вы нуждаетесь в моих услугах, свяжитесь co мной в одной из этих сетей. Опишите четко и кратко мою задачу, не помешает макет сайта или 2-3 ссылки на сайты, которые вам нравятся. Я свяжусь c вами в течение двух дней.",
          navigation: "Навигация",
          contact: "Контакт",
          info: "Получить последнюю информацию",
          home: "Домашняя",
          service: "Услуги",
          about: "Навыки",
          resume: "Резюме",
          projects: "Проекты",
          example: "Пример",
          details: "Напишите более детально",
          nameQ: "Какое ваше Имя и Фамилия?",
          contactQ: "Как я могу связаться с вами?",
          description: "Опишите пожалуйста ваш проект",
          sended: "Отправлено",
          price: "Цена",
          time: "Сроки",
          skill: "Навыки",
          hire: "Нанять меня",
        },
      },
      ua: {
        translation: {
          name: "Андрій",
          I: "Я",
          developer: "Веб Розробник",
          portfolio: "Портфоліо",
          hireMe: "Найняти",
          notationText:
            "Ексклюзивно розроблені мною сайти забезпечують приємне використання і якість коду. Я настійно рекомендую",
          years: "Роки",
          experience: "Досвіду",
          my: "Мої",
          services: "Послуги",
          serviceText:
            "Тут ви можете вибрати потрібний вам вид послуги і написати більше інформації про замовлення",
          layout: "Верстка",
          landingPage: "Односторінковий сайт",
          fullstackApp: "Fullstack додаток",
          skills: "Навички",
          why: "Чому",
          hireText:
            "У мене є досвід роботи з сайтами різних типів і складності, я швидко знаходжу спільну мову і вимоги до мене, розроблюю якісний, оптимізований і легко супроводжуванний код.",
          project: "Завершених проектів",
          clients: "Задоволенних клієнтів",
          seeAll: "Усі проекти",
          electricStore: "Магазин техніки",
          chFood: "Ресторан китайської кухні",
          onlineClothes: "Онлайн магазин одягу",
          cinema: "Кінотеатр",
          april: "Квт",
          december: "Грд",
          august: "Серп",
          march: "Бер",
          ideaText: "У вас є вражаюча ідея",
          idea: "для проекту",
          discuss: "Давайте обговоримо",
          rating: "Середня оцінка",
          award: "Нагород",
          certified: "Сертифікований розробник продуктів",
          send: "Відправити",
          email: "электронну пошту",
          enter: "Введіть",
          connect: "Давайте Зв'яжемося",
          urzhumtsew: "Уржумцев",
          footerText:
            "Якщо вам потрібні мої послуги, зв'яжіться зі мною в одній з цих мереж. Опишіть чітко і коротко своє завдання, не завадить верстка сайту або 2-3 посилання на вподобані сайти. Я зв'яжуся з вами протягом двох днів.",
          navigation: "Навігація",
          contact: "Зв'язок",
          info: "Отримати останню інформацію",
          home: "Домашня",
          service: "Послуги",
          about: "Навички",
          resume: "Резюме",
          projects: "Проекти",
          example: "Приклад",
          details: "Напишіть детально",
          nameQ: "Яке ваше ім'я та прізвище?",
          contactQ: "Як я можу зв'язатися з вами?",
          description: "Розпишіть більш детально о проекті",
          sended: "Відправлено",
          price: "Ціна",
          time: "Терміни",
          skill: "Навички",
          hire: "Найняти мене",
        },
      },
    },
  });
