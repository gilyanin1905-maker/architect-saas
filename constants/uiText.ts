export const UI_TEXT = {
  ru: {
    // Navbar
    navbar: {
      home: "Главная",
      features: "Возможности",
      solutions: "Решения",
      about: "О нас",
      contact: "Контакты",
      demo: "Демо",
      login: "Войти",
      signup: "Регистрация",
    },
    // Hero
    hero: {
      badge: "🚀 Локальный AI 2.0 уже здесь",
      title: "ИИ-ассистент для локального использования",
      subtitle:
        "Полный контроль над данными. Никаких облачных передач. Работает оффлайн с мощными LLM-моделями.",
      cta: "Начать бесплатно",
      secondary: "Посмотреть демо",
      features: [
        "Полная конфиденциальность",
        "Ваши данные никогда не покидают устройство",
        "Работает оффлайн",
        "Без интернета, без ограничений",
        "Мощные LLM-модели",
        "Llama 3, Mistral и другие",
      ],
    },
    // Features
    features: {
      title: "Почему выбирают нас",
      subtitle: "Революционный подход к локальному AI",
      items: [
        {
          icon: "🔒",
          title: "100% Приватность",
          description: "Все данные остаются на вашем устройстве. Никаких облачных передач.",
        },
        {
          icon: "⚡",
          title: "Мгновенный отклик",
          description: "Локальная обработка обеспечивает минимальную задержку.",
        },
        {
          icon: "💾",
          title: "Работает оффлайн",
          description: "Полная функциональность без подключения к интернету.",
        },
        {
          icon: "🎯",
          title: "Точная настройка",
          description: "Адаптируйте модели под ваши конкретные задачи.",
        },
        {
          icon: "🔧",
          title: "Простая интеграция",
          description: "Легко интегрируется с вашим существующим ПО.",
        },
        {
          icon: "💰",
          title: "Экономия средств",
          description: "Никаких подписок на облачные сервисы AI.",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Прозрачные тарифы",
      subtitle: "Выберите план, который подходит именно вам",
      monthly: "Ежемесячно",
      yearly: "Ежегодно",
      save: "Экономия 20%",
      plans: [
        {
          name: "Старт",
          price: "0",
          period: "/месяц",
          description: "Идеально для личного использования",
          features: ["1 LLM-модель", "Базовая поддержка", "Документация", "Сообщество"],
          cta: "Начать бесплатно",
          popular: false,
        },
        {
          name: "Профессионал",
          price: "49",
          period: "/месяц",
          description: "Для профессионалов и малых команд",
          features: [
            "5 LLM-моделей",
            "Приоритетная поддержка",
            "API доступ",
            "Расширенная документация",
            "Обновления",
          ],
          cta: "Начать",
          popular: true,
        },
        {
          name: "Корпоративный",
          price: "199",
          period: "/месяц",
          description: "Для крупных компаний",
          features: [
            "Безлимитные модели",
            "Выделенная поддержка 24/7",
            "Кастомные модели",
            "SLA гарантии",
            "Обучение сотрудников",
          ],
          cta: "Связаться с нами",
          popular: false,
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: "Что говорят наши клиенты",
      subtitle: "Отзывы реальных пользователей",
      reviews: [
        {
          name: "Александр Петров",
          role: "CTO, TechStartup",
          content:
            "Невероятный продукт! Полный контроль над данными и отличная производительность.",
          avatar: "👨‍💼",
        },
        {
          name: "Мария Иванова",
          role: "Data Scientist, BigCorp",
          content: "Локальный AI изменил наш подход к разработке. Рекомендую всем.",
          avatar: "👩‍💻",
        },
        {
          name: "Дмитрий Козлов",
          role: "Founder, AI Solutions",
          content: "Лучшее решение для компаний, которым важна безопасность данных.",
          avatar: "👨‍🔬",
        },
      ],
    },
    // Footer
    footer: {
      company: "Компания",
      product: "Продукт",
      resources: "Ресурсы",
      legal: "Правовая информация",
      copyright: "© 2025 Architect SaaS. Все права защищены.",
      links: {
        company: ["О нас", "Карьера", "Блог", "Контакты"],
        product: ["Возможности", "Цены", "Демо", "API"],
        resources: ["Документация", "Сообщество", "Помощь", "Статус системы"],
        legal: ["Политика конфиденциальности", "Условия использования", "Cookies"],
      },
    },
    // Chat
    chat: {
      placeholder: "Задайте вопрос...",
      send: "Отправить",
      thinking: "Ева думает...",
      error: "Произошла ошибка. Попробуйте снова.",
      welcome: "Привет! Я Ева, ваш AI-ассистент. Чем могу помочь?",
      suggestions: [
        "Как работает локальный AI?",
        "Какие модели поддерживаются?",
        "Как начать использование?",
      ],
    },
  },
  en: {
    // Navbar
    navbar: {
      home: "Home",
      features: "Features",
      solutions: "Solutions",
      about: "About",
      contact: "Contact",
      demo: "Demo",
      login: "Login",
      signup: "Sign Up",
    },
    // Hero
    hero: {
      badge: "🚀 Local AI 2.0 is here",
      title: "AI Assistant for Local Use",
      subtitle:
        "Full control over your data. No cloud transfers. Works offline with powerful LLM models.",
      cta: "Start Free",
      secondary: "Watch Demo",
      features: [
        "Complete Privacy",
        "Your data never leaves your device",
        "Works Offline",
        "No internet, no limits",
        "Powerful LLM Models",
        "Llama 3, Mistral and more",
      ],
    },
    // Features
    features: {
      title: "Why Choose Us",
      subtitle: "Revolutionary approach to local AI",
      items: [
        {
          icon: "🔒",
          title: "100% Privacy",
          description: "All data stays on your device. No cloud transfers.",
        },
        {
          icon: "⚡",
          title: "Instant Response",
          description: "Local processing ensures minimal latency.",
        },
        {
          icon: "💾",
          title: "Works Offline",
          description: "Full functionality without internet connection.",
        },
        {
          icon: "🎯",
          title: "Fine-tuning",
          description: "Customize models for your specific tasks.",
        },
        {
          icon: "🔧",
          title: "Easy Integration",
          description: "Easily integrates with your existing software.",
        },
        {
          icon: "💰",
          title: "Cost Effective",
          description: "No subscriptions to cloud AI services.",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Transparent Pricing",
      subtitle: "Choose the plan that fits your needs",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      plans: [
        {
          name: "Starter",
          price: "0",
          period: "/month",
          description: "Perfect for personal use",
          features: ["1 LLM model", "Basic support", "Documentation", "Community"],
          cta: "Start Free",
          popular: false,
        },
        {
          name: "Professional",
          price: "49",
          period: "/month",
          description: "For professionals and small teams",
          features: [
            "5 LLM models",
            "Priority support",
            "API access",
            "Extended documentation",
            "Updates",
          ],
          cta: "Get Started",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "199",
          period: "/month",
          description: "For large companies",
          features: [
            "Unlimited models",
            "Dedicated 24/7 support",
            "Custom models",
            "SLA guarantees",
            "Employee training",
          ],
          cta: "Contact Us",
          popular: false,
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Reviews from real users",
      reviews: [
        {
          name: "Alexander Petrov",
          role: "CTO, TechStartup",
          content: "Incredible product! Full control over data and excellent performance.",
          avatar: "👨‍💼",
        },
        {
          name: "Maria Ivanova",
          role: "Data Scientist, BigCorp",
          content: "Local AI changed our approach to development. Highly recommend.",
          avatar: "👩‍💻",
        },
        {
          name: "Dmitry Kozlov",
          role: "Founder, AI Solutions",
          content: "Best solution for companies that care about data security.",
          avatar: "👨‍🔬",
        },
      ],
    },
    // Footer
    footer: {
      company: "Company",
      product: "Product",
      resources: "Resources",
      legal: "Legal",
      copyright: "© 2025 Architect SaaS. All rights reserved.",
      links: {
        company: ["About", "Careers", "Blog", "Contact"],
        product: ["Features", "Pricing", "Demo", "API"],
        resources: ["Documentation", "Community", "Help", "System Status"],
        legal: ["Privacy Policy", "Terms of Service", "Cookies"],
      },
    },
    // Chat
    chat: {
      placeholder: "Ask a question...",
      send: "Send",
      thinking: "Eva is thinking...",
      error: "An error occurred. Please try again.",
      welcome: "Hi! I'm Eva, your AI assistant. How can I help?",
      suggestions: ["How does local AI work?", "What models are supported?", "How to get started?"],
    },
  },
};
