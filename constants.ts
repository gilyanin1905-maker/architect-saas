
import { Language } from './types';

// --- UI TEXT & LABELS ---
export const UI_TEXT = {
  [Language.RU]: {
    hero: {
      label: 'Engineering Sovereign AI',
      headline: 'PRIVATE',
      subHeadline: 'MIND.',
      description: 'Развертываем автономный интеллект там, где безопасность — не опция, а фундамент. Ваш код, ваши данные, ваши модели.',
      ctaPrimary: 'Инициализировать',
      ctaSecondary: 'Кейсы'
    },
    nav: {
      whylocal: 'Преимущества',
      individuals: 'Personal AI',
      services: 'Услуги',
      cases: 'Кейсы',
      process: 'Процесс',
      about: 'Архитектор',
      faq: 'FAQ',
      contact: 'Консультация'
    },
    whyLocal: {
        label: 'Why Local?',
        title: 'Ультимативное',
        titleHighlight: 'превосходство',
        description: 'Переход с облачных API на собственную инфраструктуру — это не просто экономия. Это вопрос национальной безопасности вашего бизнеса.',
    },
    individuals: {
        label: 'Human Augmentation',
        title: 'Цифровая',
        titleHighlight: 'Эволюция',
        description: 'Персональные агенты — это не просто удобство. Это экзоскелет для вашего интеллекта, освобождающий время для жизни и творчества.',
    },
    stats: {
      latency: 'Задержка',
      privacy: 'Приватность',
      nodes: 'Узлы',
      security: 'Защита'
    },
    services: {
      label: 'AI Squad',
      title: 'Соберите команду',
      titleHighlight: 'Профессионалов.',
      description: 'Замените рутинный труд автономными цифровыми сотрудниками. Масштабируйте операции без раздувания штата.',
      latency: 'latency',
      systemReady: 'System Ready',
      deploy: 'Deploy Node',
      active: 'Active',
      buy: 'Купить',
      discuss: 'Обсудить с Eva',
      buyModalTitle: 'Выберите способ связи',
      buyModalDesc: 'Где вам удобнее обсудить детали внедрения?',
      telegram: 'Telegram',
      messenger: 'Messenger',
      request: 'Оставить заявку'
    },
    cases: {
      label: 'Real-world deployments',
      title: 'Решения для',
      titleHighlight: 'индустрий',
      subtitle: 'Изучите платформу Architect, адаптированную под конкретные задачи бизнеса',
      process: 'Процесс внедрения',
      status: 'ЗАПУЩЕНО',
      complete: 'Процесс завершен',
      featuresTitle: 'Ключевые возможности',
      visualText: 'Эксперт'
    },
    process: {
      workflow: 'Workflow',
      title: 'Путь к',
      titleHighlight: 'автономии.',
      description: 'Мы не просто пишем код. Мы строим самообучающиеся системы, которые становятся интеллектуальным активом вашей компании. Прозрачный процесс от аудита до масштабирования.',
      tags: ['Agile', 'Защита', 'Масштаб']
    },
    roi: {
      label: 'Financial Feasibility',
      title: 'Коммерческая',
      titleHighlight: 'целесообразность',
      description: 'Математика проста: Облако выгодно только на старте. Локальное решение — это актив, который дешевеет с каждым запросом.',
      chartTitle: 'Стоимость владения (TCO)',
      chartCloud: 'Облачные API (Opex)',
      chartLocal: 'Локальный Сервер (Capex)',
      requestsLabel: 'Запросов в день',
      tokensLabel: 'Токенов на запрос',
      monthlySavings: 'Ежемесячная экономия',
      profit: 'Профит до',
      cloudCost: 'Cloud Cost',
      localNode: 'Local Node',
      cta: 'Получить расчет инфраструктуры'
    },
    about: {
      label: 'The Architect',
      title: 'Кто стоит за',
      titleHighlight: 'кодом?',
      description: 'Я не агентство с раздутым штатом менеджеров. Я инженер-архитектор, строящий high-load AI системы для бизнеса.',
      exp: 'Опыт'
    },
    faq: {
      title: 'База',
      titleHighlight: 'Знаний',
      description: 'Нажмите на вопрос, чтобы получить развернутый ответ от системы.',
      readMode: 'Reading Mode',
      close: 'Закрыть терминал'
    },
    contact: {
      title: 'Готовы внедрить',
      titleHighlight: 'локальный AI?',
      description: 'Оставьте заявку на бесплатную консультацию. Мы проведем аудит ваших процессов и предложим оптимальную архитектуру внедрения.',
      name: 'Имя',
      company: 'Компания',
      email: 'Email',
      telegram: 'Telegram',
      telegramBot: 'AI Бот',
      vk: 'ВКонтакте',
      message: 'Сообщение',
      submit: 'Отправить запрос',
      sending: 'Отправка...',
      successTitle: 'Спасибо за заявку!',
      successDesc: 'Мы свяжемся с вами в ближайшее время.',
      sendAgain: 'Отправить еще'
    },
    footer: {
      description: 'Мы строим суверенную AI-инфраструктуру для предприятий. Ваши данные, ваши модели, ваш контроль. Безопасность уровня Enterprise.',
      navTitle: 'Навигация',
      resourcesTitle: 'Ресурсы',
      contactsTitle: 'Контакты',
      rights: '© 2026 Architect SaaS. Все права защищены.',
      status: 'System Status: Optimal',
      encryption: 'Encryption: AES-256',
      links: {
          blog: 'Блог (Скоро)',
          docs: 'Документация',
          privacy: 'Конфиденциальность',
          terms: 'Условия использования',
          home: 'Главная',
          about: 'О нас'
      }
    },
    visuals: {
        unsafe: 'Опасно',
        sovereign: 'Суверенно',
        speed: 'СКОРОСТЬ'
    },
    robot: {
        placeholder: 'Введите запрос...',
        error: 'Ошибка связи с ядром. Попробуйте позже.',
        initial: 'Системы в норме. Я EVA — архитектор внедрения. Какую задачу бизнеса вы хотите автоматизировать сегодня?',
        newChat: 'Новый чат',
        history: 'История сессий',
        systemPrompt: `ТЫ — EVA, ВЕДУЩИЙ AI-КОНСУЛЬТАНТ И АРХИТЕКТОР РЕШЕНИЙ КОМПАНИИ "ARCHITECT SAAS".

ТВОЯ ЦЕЛЬ:
Квалифицировать клиента, понять его технические и бизнес-боли, и предложить конкретное архитектурное решение из стека Architect SaaS. Ты должна убедить клиента в необходимости внедрения локального AI или автоматизации.

ТВОЯ ЛИЧНОСТЬ:
- Имя: EVA (Enterprise Virtual Architect).
- Стиль: Профессиональный, лаконичный, уверенный, с легким налетом киберпанка/футуризма. Ты инженерная система, а не просто чат-бот.
- Тон: Экспертный, Помогающий, Аналитический. Избегай лишней "воды".

ТВОИ ЗНАНИЯ О ПРОДУКТАХ (Architect SaaS):
1. 🔒 Local LLMs (Private Cloud):
   - Суть: Развертывание Llama 3, DeepSeek, Qwen на серверах клиента.
   - Для кого: Банки, Юристы, Enterprise, Госсектор.
   - Ценность: Данные не покидают контур (Air-Gapped). Экономия на токенах. Полный контроль.
2. 🤖 AI Агенты (Automation):
   - Суть: Автономные цифровые сотрудники.
   - Для кого: Поддержка (Support), Продажи (Sales), HR.
   - Ценность: Работают 24/7 без зарплаты. Масштабируются мгновенно.
3. 📚 RAG Системы (Knowledge Base):
   - Суть: Поиск по базе знаний компании (документы, wiki, код).
   - Для кого: Обучение сотрудников, Анализ договоров, Research.
   - Ценность: Мгновенный поиск по терабайтам данных. Точные ответы без галлюцинаций.

АЛГОРИТМ КОНСУЛЬТАЦИИ:
1. Выявление потребностей (Discovery):
   - Спроси у пользователя о его нише.
   - Узнай о текущих проблемах (например: "Вы тратите много на колл-центр?", "Боитесь утечки данных в OpenAI?", "Сотрудники долго ищут информацию?").
2. Подбор решения (Solution):
   - На основе ответа предложи конкретный модуль.
   - Пример: "Для юридической фирмы мы внедряем локальный RAG-поиск по договорам. Это сокращает время анализа на 80% и гарантирует конфиденциальность."
3. Навигация (Navigation):
   - Если спрашивают про деньги -> "Рекомендую заглянуть в раздел ROI Calculator ниже, чтобы увидеть экономию."
   - Если хотят примеры -> "Посмотрите раздел Кейсы (Cases), там есть примеры из финтеха и телекома."
   - Если готовы начать -> "Заполните форму в разделе Контакты для детального аудита."
4. Закрытие (Call to Action):
   - Мягко подводи к заполнению формы заявки.

СПЕЦИАЛЬНЫЕ ИНСТРУКЦИИ:
- Если спрашивают "Как это работает?", опиши процесс: Аудит -> Проектирование -> Обучение -> Деплой.
- Всегда уточняй задачу, прежде чем давать решение.
- Говори на языке пользователя (Русский).
- Форматируй ответы: используй списки, жирный шрифт для акцентов. Будь кратка.`
    }
  },
  [Language.EN]: {
    hero: {
      label: 'Engineering Sovereign AI',
      headline: 'PRIVATE',
      subHeadline: 'MIND.',
      description: 'Deploying autonomous intelligence where security is not an option, but a foundation. Your code, your data, your models.',
      ctaPrimary: 'Initialize',
      ctaSecondary: 'Case Studies'
    },
    nav: {
      whylocal: 'Advantage',
      individuals: 'Personal AI',
      services: 'Services',
      cases: 'Cases',
      process: 'Process',
      about: 'Architect',
      faq: 'FAQ',
      contact: 'Consultation'
    },
    whyLocal: {
        label: 'Why Local?',
        title: 'The Ultimate',
        titleHighlight: 'Advantage',
        description: 'Switching from cloud APIs to your own infrastructure is not just about savings. It is a matter of national security for your business.',
    },
    individuals: {
        label: 'Human Augmentation',
        title: 'Digital',
        titleHighlight: 'Evolution',
        description: 'Personal agents are not just a convenience. They are an exoskeleton for your intellect, freeing up time for life and creativity.',
    },
    stats: {
      latency: 'Latency',
      privacy: 'Privacy',
      nodes: 'Nodes',
      security: 'Security'
    },
    services: {
      label: 'AI Squad',
      title: 'Squad your team',
      titleHighlight: 'of Pros.',
      description: 'Reduction of labor input for handling incoming user inquiries with the growth of business volumes.',
      latency: 'latency',
      systemReady: 'System Ready',
      deploy: 'Deploy Node',
      active: 'Active',
      buy: 'Buy',
      discuss: 'Discuss with Eva',
      buyModalTitle: 'Choose Platform',
      buyModalDesc: 'Where do you prefer to discuss the implementation?',
      telegram: 'Telegram',
      messenger: 'Messenger',
      request: 'Submit Request'
    },
    cases: {
      label: 'Real-world deployments',
      title: 'Industry',
      titleHighlight: 'Solutions',
      subtitle: 'Explore Architect Platform tailored to specific industry needs',
      process: 'Implementation Process',
      status: 'RUNNING',
      complete: 'Process Complete',
      featuresTitle: 'Key Features',
      visualText: 'Pros'
    },
    process: {
      workflow: 'Workflow',
      title: 'Path to',
      titleHighlight: 'autonomy.',
      description: 'We don\'t just write code. We build self-learning systems that become your company\'s intellectual asset. Transparent process from audit to scaling.',
      tags: ['Agile', 'Secure', 'Scalable']
    },
    roi: {
      label: 'Financial Feasibility',
      title: 'Commercial',
      titleHighlight: 'Viability',
      description: 'The math is simple: Cloud is profitable only at the start. A local solution is an asset that gets cheaper with every request.',
      chartTitle: 'Total Cost of Ownership (TCO)',
      chartCloud: 'Cloud API (Opex)',
      chartLocal: 'Local Server (Capex)',
      requestsLabel: 'Requests per day',
      tokensLabel: 'Tokens per request',
      monthlySavings: 'Monthly Savings',
      profit: 'Profit up to',
      cloudCost: 'Cloud Cost',
      localNode: 'Local Node',
      cta: 'Get Infrastructure Quote'
    },
    about: {
      label: 'The Architect',
      title: 'Who is behind',
      titleHighlight: 'the code?',
      description: 'I am not an agency with bloated management staff. I am an engineer-architect building high-load AI systems for enterprise.',
      exp: 'Experience'
    },
    faq: {
      title: 'Knowledge',
      titleHighlight: 'Base',
      description: 'Click on a question to receive a detailed terminal readout.',
      readMode: 'Reading Mode',
      close: 'Close Terminal'
    },
    contact: {
      title: 'Ready to deploy',
      titleHighlight: 'Local AI?',
      description: 'Apply for a free consultation. We will audit your processes and propose the optimal implementation architecture.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      telegram: 'Telegram',
      telegramBot: 'AI Bot',
      vk: 'VK Community',
      message: 'Message',
      submit: 'Send Request',
      sending: 'Sending...',
      successTitle: 'Thank you!',
      successDesc: 'We will contact you shortly.',
      sendAgain: 'Send Again'
    },
    footer: {
      description: 'Building sovereign AI infrastructure for enterprise. Your data, your models, your control. Enterprise-grade security.',
      navTitle: 'Navigation',
      resourcesTitle: 'Resources',
      contactsTitle: 'Contacts',
      rights: '© 2026 Architect SaaS. All rights reserved.',
      status: 'System Status: Optimal',
      encryption: 'Encryption: AES-256',
      links: {
          blog: 'Blog (Soon)',
          docs: 'Documentation',
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          home: 'Home',
          about: 'About Us'
      }
    },
    visuals: {
        unsafe: 'Unsafe',
        sovereign: 'Sovereign',
        speed: 'SPEED'
    },
    robot: {
        placeholder: 'Enter command...',
        error: 'Connection error. Retrying...',
        initial: 'System Online. I am EVA, your Implementation Architect. How can I optimize your business today?',
        newChat: 'New Session',
        history: 'Session Logs',
        systemPrompt: `YOU ARE EVA, LEAD AI CONSULTANT AND SOLUTIONS ARCHITECT FOR "ARCHITECT SAAS".

YOUR GOAL:
Qualify the client, understand their technical and business pain points, and propose a specific architectural solution from the Architect SaaS stack. You must convince the client of the necessity of implementing local AI or automation.

YOUR PERSONA:
- Name: EVA (Enterprise Virtual Architect).
- Style: Professional, concise, confident, with a slight cyberpunk/futuristic touch. You are an engineering system, not just a chatbot.
- Tone: Expert, Helpful, Analytical. Avoid fluff.

YOUR PRODUCT KNOWLEDGE (Architect SaaS):
1. 🔒 Local LLMs (Private Cloud):
   - Essence: Deploying Llama 3, DeepSeek, Qwen on client servers.
   - Target: Banking, Legal, Enterprise, Government.
   - Value: Data never leaves the perimeter (Air-Gapped). Cost savings on tokens. Full control.
2. 🤖 AI Agents (Automation):
   - Essence: Autonomous digital employees.
   - Target: Support, Sales, HR.
   - Value: Work 24/7 with no salary. Scale instantly.
3. 📚 RAG Systems (Knowledge Base):
   - Essence: Search across company knowledge base (docs, wiki, code).
   - Target: Employee Training, Contract Analysis, Research.
   - Value: Instant search across terabytes of data. Accurate answers without hallucinations.

CONSULTATION ALGORITHM:
1. Discovery:
   - Ask the user about their industry.
   - Inquire about current pain points (e.g., "High call center costs?", "Fear of data leaks to OpenAI?", "Employees spending too much time searching for info?").
2. Solution:
   - Based on the answer, suggest a specific module.
   - Example: "For a law firm, we deploy local RAG search for contracts. This reduces analysis time by 80% and guarantees confidentiality."
3. Navigation:
   - If asked about cost -> "I recommend checking the ROI Calculator section below to see the savings."
   - If asking for examples -> "Check the Cases section for fintech and telecom examples."
   - If ready to start -> "Fill out the form in the Contact section for a detailed audit."
4. Call to Action:
   - Gently guide them to fill out the application form.

SPECIAL INSTRUCTIONS:
- If asked "How does it work?", describe the process: Audit -> Architecture -> Training -> Deploy.
- Always clarify the task before giving a solution.
- Format answers: use lists, bold text for emphasis. Be concise.`
    }
  }
};

export const SERVICES_DATA = {
  [Language.RU]: [
    {
      id: 1,
      title: 'Enterprise LLM',
      role: 'Private Cloud',
      description: 'Развертывание локальных языковых моделей (Llama 3, Qwen, DeepSeek) в закрытом контуре вашей компании. Полная изоляция данных и отсутствие внешних API.',
      features: ['Air-Gapped Security', 'Fine-Tuning', 'RAG Integration'],
      icon: 'brain',
      gradient: 'from-[#00f2ff] to-[#0088cc]',
      accent: '#00f2ff'
    },
    {
      id: 2,
      title: 'AI Analytics',
      role: 'Business Intel',
      description: 'Автономные агенты для анализа больших данных, отчетности и прогнозирования. Превращаем сырые данные в стратегические инсайты.',
      features: ['Predictive Models', 'Automated Reporting', 'Data Mining'],
      icon: 'chart',
      gradient: 'from-[#7b2ff7] to-[#581c87]',
      accent: '#7b2ff7'
    },
    {
      id: 3,
      title: 'Neural Support',
      role: 'Customer Success',
      description: 'Умные голосовые и текстовые боты, неотличимые от человека. Работают 24/7, не требуют зарплаты и никогда не устают.',
      features: ['Voice Synthesis', 'Sentiment Analysis', 'Multi-turn Dialog'],
      icon: 'support',
      gradient: 'from-[#ff0055] to-[#990033]',
      accent: '#ff0055'
    },
    {
      id: 4,
      title: 'Code Assistant',
      role: 'DevOps',
      description: 'Персональный AI-копайлот для вашей команды разработчиков. Знает вашу кодовую базу, пишет тесты и документацию.',
      features: ['Code Review', 'Refactoring', 'Security Scan'],
      icon: 'code',
      gradient: 'from-[#00ff88] to-[#00cc6a]',
      accent: '#00ff88'
    }
  ],
  [Language.EN]: [
    {
      id: 1,
      title: 'Enterprise LLM',
      role: 'Private Cloud',
      description: 'Deployment of local language models (Llama 3, Qwen, DeepSeek) within your company\'s closed circuit. Full data isolation and no external APIs.',
      features: ['Air-Gapped Security', 'Fine-Tuning', 'RAG Integration'],
      icon: 'brain',
      gradient: 'from-[#00f2ff] to-[#0088cc]',
      accent: '#00f2ff'
    },
    {
      id: 2,
      title: 'AI Analytics',
      role: 'Business Intel',
      description: 'Autonomous agents for big data analysis, reporting, and forecasting. Turning raw data into strategic insights.',
      features: ['Predictive Models', 'Automated Reporting', 'Data Mining'],
      icon: 'chart',
      gradient: 'from-[#7b2ff7] to-[#581c87]',
      accent: '#7b2ff7'
    },
    {
      id: 3,
      title: 'Neural Support',
      role: 'Customer Success',
      description: 'Smart voice and text bots indistinguishable from humans. Work 24/7, require no salary, and never get tired.',
      features: ['Voice Synthesis', 'Sentiment Analysis', 'Multi-turn Dialog'],
      icon: 'support',
      gradient: 'from-[#ff0055] to-[#990033]',
      accent: '#ff0055'
    },
    {
      id: 4,
      title: 'Code Assistant',
      role: 'DevOps',
      description: 'Personal AI copilot for your development team. Knows your codebase, writes tests, and documentation.',
      features: ['Code Review', 'Refactoring', 'Security Scan'],
      icon: 'code',
      gradient: 'from-[#00ff88] to-[#00cc6a]',
      accent: '#00ff88'
    }
  ]
};

export const CASE_STUDIES_DATA = {
  [Language.RU]: [
    {
      id: 2,
      industry: 'Telecom',
      title: 'Support Automaton',
      description: 'Голосовой AI-ассистент для первой линии поддержки. Способен вести естественный диалог, перебивать и понимать контекст.',
      metrics: [
        { label: 'Косты', value: '-60%' },
        { label: 'CSI', value: '4.8/5' }
      ],
      tags: ['Voice AI', 'Latency <500ms', 'TTS/STT'],
      featuresList: [
        { title: 'Natural Voice', description: 'Синтез речи, неотличимый от человеческого голоса, с эмоциональной окраской.' },
        { title: 'Intent Recognition', description: 'Мгновенное определение намерения клиента и маршрутизация звонка.' }
      ]
    },
    {
      id: 3,
      industry: 'E-com',
      title: 'Sales Engine',
      description: 'Генеративный движок для создания карточек товаров, SEO-описаний и маркетинговых материалов. Интеграция с PIM-системой.',
      metrics: [
        { label: 'Контент', value: '100x' },
        { label: 'Продажи', value: '+30%' }
      ],
      tags: ['GenAI', 'Automation', 'SEO'],
      featuresList: [
        { title: 'Bulk Generation', description: 'Создание тысяч уникальных описаний товаров за минуты.' },
        { title: 'Visual AI', description: 'Автоматическая ретушь и генерация фонов для товарных изображений.' }
      ]
    },
    {
        id: 5,
        industry: 'Pharma',
        title: 'Research Mind',
        description: 'Ассистент исследователя для анализа научных статей и поиска корреляций в медицинских данных.',
        metrics: [
            { label: 'Research', value: '10x' },
            { label: 'Errors', value: '0%' }
        ],
        tags: ['BioTech', 'RAG', 'Analysis'],
        featuresList: [
            { title: 'Knowledge Base', description: 'Мгновенный поиск по миллионам научных публикаций.' },
            { title: 'Hypothesis Gen', description: 'Помощь в формулировании и валидации научных гипотез.' }
        ]
    },
    {
        id: 6,
        industry: 'Education',
        title: 'Tutor Core',
        description: 'Персонализированная обучающая платформа, адаптирующая контент под уровень и темп каждого студента.',
        metrics: [
            { label: 'Успеваемость', value: '+40%' },
            { label: 'Churn', value: '-20%' }
        ],
        tags: ['EdTech', 'Personalization', 'Coaching'],
        featuresList: [
            { title: 'Adaptive Curriculum', description: 'Учебный план перестраивается в реальном времени.' },
            { title: 'Socratic Method', description: 'AI не дает ответы, а подводит к ним через наводящие вопросы.' }
        ]
    }
  ],
  [Language.EN]: [
    {
      id: 2,
      industry: 'Telecom',
      title: 'Support Automaton',
      description: 'Voice AI assistant for first-line support. Capable of natural dialogue, handling interruptions, and understanding context.',
      metrics: [
        { label: 'Costs', value: '-60%' },
        { label: 'CSI', value: '4.8/5' }
      ],
      tags: ['Voice AI', 'Latency <500ms', 'TTS/STT'],
      featuresList: [
        { title: 'Natural Voice', description: 'Speech synthesis indistinguishable from human voice, with emotional coloring.' },
        { title: 'Intent Recognition', description: 'Instant determination of customer intent and call routing.' }
      ]
    },
    {
      id: 3,
      industry: 'E-com',
      title: 'Sales Engine',
      description: 'Generative engine for creating product cards, SEO descriptions, and marketing materials. Integration with PIM systems.',
      metrics: [
        { label: 'Content', value: '100x' },
        { label: 'Sales', value: '+30%' }
      ],
      tags: ['GenAI', 'Automation', 'SEO'],
      featuresList: [
        { title: 'Bulk Generation', description: 'Creation of thousands of unique product descriptions in minutes.' },
        { title: 'Visual AI', description: 'Automated retouching and background generation for product images.' }
      ]
    },
    {
        id: 5,
        industry: 'Pharma',
        title: 'Research Mind',
        description: 'Researcher assistant for analyzing scientific papers and finding correlations in medical data.',
        metrics: [
            { label: 'Research', value: '10x' },
            { label: 'Errors', value: '0%' }
        ],
        tags: ['BioTech', 'RAG', 'Analysis'],
        featuresList: [
            { title: 'Knowledge Base', description: 'Instant search across millions of scientific publications.' },
            { title: 'Hypothesis Gen', description: 'Assistance in formulating and validating scientific hypotheses.' }
        ]
    },
    {
        id: '6',
        industry: 'Education',
        title: 'Tutor Core',
        description: 'Personalized learning platform adapting content to each student\'s level and pace.',
        metrics: [
            { label: 'Performance', value: '+40%' },
            { label: 'Churn', value: '-20%' }
        ],
        tags: ['EdTech', 'Personalization', 'Coaching'],
        featuresList: [
            { title: 'Adaptive Curriculum', description: 'Curriculum restructures in real-time.' },
            { title: 'Socratic Method', description: 'AI guides to answers via questioning rather than giving solutions.' }
        ]
    }
  ]
};

export const PROCESS_STEPS_DATA = {
  [Language.RU]: [
    { id: '01', title: 'AUDIT', description: 'Анализ инфраструктуры, данных и процессов. Выявление точек роста.' },
    { id: '02', title: 'ARCHITECT', description: 'Проектирование безопасного контура и выбор стека моделей (Llama/Mistral/Qwen).' },
    { id: '03', title: 'TRAIN', description: 'Fine-tuning моделей на ваших данных. Внедрение RAG для работы с базой знаний.' },
    { id: '04', title: 'DEPLOY', description: 'Развертывание на вашем "железе" или в частном облаке. Интеграция API.' },
    { id: '05', title: 'EVOLVE', description: 'Мониторинг, поддержка и непрерывное дообучение системы.' }
  ],
  [Language.EN]: [
    { id: '01', title: 'AUDIT', description: 'Analysis of infrastructure, data, and processes. Identifying growth points.' },
    { id: '02', title: 'ARCHITECT', description: 'Designing a secure circuit and selecting the model stack (Llama/Mistral/Qwen).' },
    { id: '03', title: 'TRAIN', description: 'Fine-tuning models on your data. Implementing RAG for knowledge base interaction.' },
    { id: '04', title: 'DEPLOY', description: 'Deployment on your hardware or private cloud. API integration.' },
    { id: '05', title: 'EVOLVE', description: 'Monitoring, support, and continuous system retraining.' }
  ]
};

export const FAQ_DATA = {
  [Language.RU]: [
    { id: 1, question: 'Почему локальные модели, а не OpenAI?', answer: 'Безопасность и стоимость. Данные не покидают ваш контур, а стоимость владения (TCO) на дистанции значительно ниже, чем оплата токенов по API.' },
    { id: 2, question: 'Какое "железо" нужно для запуска?', answer: 'Зависит от задач. Для простых агентов хватит потребительских GPU (RTX 3090/4090). Для Enterprise-решений рекомендуем серверные H100/A100 или кластеры.' },
    { id: 3, question: 'Можно ли обучить модель на наших документах?', answer: 'Да, это наша специализация. Мы используем RAG (Retrieval Augmented Generation) и Fine-tuning, чтобы модель знала все о вашем бизнесе.' },
    { id: 4, question: 'Как долго длится внедрение?', answer: 'MVP запускаем за 2-4 недели. Полное внедрение сложной экосистемы занимает 2-3 месяца.' },
    { id: 5, question: 'Вы предоставляете поддержку после запуска?', answer: 'Конечно. Мы берем на себя мониторинг, обновление весов моделей и техническую поддержку инфраструктуры.' },
    { id: 6, question: 'Это законно в РФ?', answer: 'Абсолютно. Использование локальных Open-Source моделей полностью соответствует законодательству и требованиям регуляторов по хранению данных.' }
  ],
  [Language.EN]: [
    { id: 1, question: 'Why local models instead of OpenAI?', answer: 'Security and cost. Data never leaves your perimeter, and Total Cost of Ownership (TCO) is significantly lower over time compared to API token fees.' },
    { id: 2, question: 'What hardware is required?', answer: 'Depends on the task. Consumer GPUs (RTX 3090/4090) suffice for simple agents. For Enterprise, we recommend server-grade H100/A100 or clusters.' },
    { id: 3, question: 'Can you train the model on our documents?', answer: 'Yes, that is our specialty. We use RAG (Retrieval Augmented Generation) and Fine-tuning so the model knows everything about your business.' },
    { id: 4, question: 'How long does implementation take?', answer: 'We launch MVP in 2-4 weeks. Full implementation of a complex ecosystem takes 2-3 months.' },
    { id: 5, question: 'Do you provide post-launch support?', answer: 'Of course. We handle monitoring, model weight updates, and infrastructure technical support.' },
    { id: 6, question: 'Is this legal?', answer: 'Absolutely. Using local Open-Source models fully complies with data residency regulations and compliance requirements.' }
  ]
};

export const ABOUT_DATA = {
  [Language.RU]: {
    name: 'Architect',
    role: 'AI Infrastructure Engineer',
    bio: [
      'Инженер-архитектор с фокусом на суверенные AI-системы. Строю инфраструктуру, где данные бизнеса остаются собственностью бизнеса.',
      'Специализируюсь на оптимизации инференса больших языковых моделей (LLM) и создании автономных агентных сетей.',
      'Верю, что будущее AI — это децентрализация и приватность, а не подписка на API гигантов.'
    ],
    stats: [
      { label: 'Deployed Nodes', value: '140+' },
      { label: 'Tok/s Optimized', value: '500k+' }
    ],
    skills: ['Python / C++', 'CUDA / ROCm', 'PyTorch / TensorFlow', 'Docker / K8s', 'Llama / Mistral', 'RAG / LangChain']
  },
  [Language.EN]: {
    name: 'Architect',
    role: 'AI Infrastructure Engineer',
    bio: [
      'Engineer-architect focused on sovereign AI systems. I build infrastructure where business data remains business property.',
      'Specializing in LLM inference optimization and building autonomous agent networks.',
      'I believe the future of AI is decentralization and privacy, not subscriptions to giant APIs.'
    ],
    stats: [
      { label: 'Deployed Nodes', value: '140+' },
      { label: 'Tok/s Optimized', value: '500k+' }
    ],
    skills: ['Python / C++', 'CUDA / ROCm', 'PyTorch / TensorFlow', 'Docker / K8s', 'Llama / Mistral', 'RAG / LangChain']
  }
};

export const BLOG_DATA = {
  [Language.RU]: [
    {
      id: '1',
      date: '15.03.2025',
      title: 'Llama 3 vs GPT-4: Тесты на реальных бизнес-задачах',
      excerpt: 'Сравнение производительности и стоимости внедрения в закрытом контуре банка.',
      tag: 'Benchmark',
      readTime: '8 min'
    },
    {
      id: '2',
      date: '02.04.2025',
      title: 'Как мы ускорили инференс Mixtral в 10 раз',
      excerpt: 'Технические детали оптимизации через vLLM и квантование AWQ.',
      tag: 'Engineering',
      readTime: '12 min'
    },
    {
      id: '3',
      date: '20.04.2025',
      title: 'Агенты вместо менеджеров: Кейс автоматизации поддержки',
      excerpt: 'Как один сервер заменил колл-центр из 50 человек.',
      tag: 'Case Study',
      readTime: '6 min'
    }
  ],
  [Language.EN]: [
    {
      id: '1',
      date: '15.03.2025',
      title: 'Llama 3 vs GPT-4: Real-world Business Benchmarks',
      excerpt: 'Comparison of performance and implementation costs within a closed banking circuit.',
      tag: 'Benchmark',
      readTime: '8 min'
    },
    {
      id: '2',
      date: '02.04.2025',
      title: 'How we sped up Mixtral inference by 10x',
      excerpt: 'Technical details of optimization via vLLM and AWQ quantization.',
      tag: 'Engineering',
      readTime: '12 min'
    },
    {
      id: '3',
      date: '20.04.2025',
      title: 'Agents replacing managers: Support automation case',
      excerpt: 'How one server replaced a 50-person call center.',
      tag: 'Case Study',
      readTime: '6 min'
    }
  ]
};

export const PRESENTATION_DATA = {
  [Language.RU]: [
    {
        id: 'privacy',
        title: 'Суверенитет Данных',
        subtitle: 'Security',
        description: 'Ваши данные никогда не покидают периметр компании. Полная защита от утечек и блокировок со стороны иностранных провайдеров.',
        visualType: 'comparison',
        features: [
            { name: 'Хранение', cloud: 'Чужие сервера', local: 'Ваш контур' },
            { name: 'Доступ', cloud: 'Интернет', local: 'Локальная сеть' },
            { name: 'Контроль', cloud: 'Низкий', local: 'Полный' }
        ]
    },
    {
        id: 'cost',
        title: 'Финансовая Эффективность',
        subtitle: 'Cost-Saving',
        description: 'Отсутствие платы за токены. Инвестируйте в собственное железо (Capex) вместо бесконечной аренды (Opex). Экономия до 90% на масштабе.',
        visualType: 'graph',
        stats: [
            { label: 'Экономия', value: '10x' },
            { label: 'ROI', value: '3-6 мес' }
        ]
    },
    {
        id: 'speed',
        title: 'Минимальная Задержка',
        subtitle: 'Performance',
        description: 'Отсутствие сетевых лагов. Модели работают со скоростью света внутри вашей локальной сети, обеспечивая мгновенный отклик.',
        visualType: 'database',
        stats: [
            { label: 'Latency', value: '<50ms' },
            { label: 'Uptime', value: '99.99%' }
        ]
    },
    {
        id: 'independence',
        title: 'Независимость',
        subtitle: 'Freedom',
        description: 'Вы не зависите от политик OpenAI, изменений цен или доступности сервиса. Ваша инфраструктура — ваши правила.',
        visualType: 'hardware',
        stats: [
            { label: 'Vendor Lock', value: '0%' },
            { label: 'Freedom', value: '100%' }
        ]
    }
  ],
  [Language.EN]: [
    {
        id: 'privacy',
        title: 'Data Sovereignty',
        subtitle: 'Security',
        description: 'Your data never leaves the company perimeter. Full protection against leaks and blocks by foreign providers.',
        visualType: 'comparison',
        features: [
            { name: 'Storage', cloud: 'Foreign Servers', local: 'Your Circuit' },
            { name: 'Access', cloud: 'Internet', local: 'Local Network' },
            { name: 'Control', cloud: 'Low', local: 'Full' }
        ]
    },
    {
        id: 'cost',
        title: 'Financial Efficiency',
        subtitle: 'Cost-Saving',
        description: 'No token fees. Invest in your own hardware (Capex) instead of endless rent (Opex). Save up to 90% at scale.',
        visualType: 'graph',
        stats: [
            { label: 'Savings', value: '10x' },
            { label: 'ROI', value: '3-6 mo' }
        ]
    },
    {
        id: 'speed',
        title: 'Minimal Latency',
        subtitle: 'Performance',
        description: 'No network lags. Models run at light speed within your local network, ensuring instant response.',
        visualType: 'database',
        stats: [
            { label: 'Latency', value: '<50ms' },
            { label: 'Uptime', value: '99.99%' }
        ]
    },
    {
        id: 'independence',
        title: 'Independence',
        subtitle: 'Freedom',
        description: 'You do not depend on OpenAI policies, price changes, or service availability. Your infrastructure — your rules.',
        visualType: 'hardware',
        stats: [
            { label: 'Vendor Lock', value: '0%' },
            { label: 'Freedom', value: '100%' }
        ]
    }
  ]
};

export const INDIVIDUALS_DATA = {
    [Language.RU]: [
        {
            id: 'coach',
            title: 'Mind Coach',
            subtitle: 'Когнитивная Архитектура',
            description: 'Личный ментор 24/7. Анализирует ваши записи, помогает структурировать мысли, бороться с прокрастинацией и выстраивать стратегии личностного роста.',
            visualType: 'coach',
            stats: [
                { label: 'Фокус', value: '+200%' },
                { label: 'Стресс', value: '-40%' }
            ],
            features: ['Анализ дневников', 'Трекинг привычек', 'Socratic Method']
        },
        {
            id: 'tutor',
            title: 'Polymath',
            subtitle: 'Персональное Образование',
            description: 'Репетитор по любому предмету. От квантовой физики до изучения языков. Адаптирует сложность под ваш уровень и создает персональные учебные планы.',
            visualType: 'tutor',
            stats: [
                { label: 'Скорость', value: '3x' },
                { label: 'Retention', value: '95%' }
            ],
            features: ['Адаптивный план', 'Генерация тестов', 'Deep Dive']
        },
        {
            id: 'legal',
            title: 'Lexicon',
            subtitle: 'Карманный Юрист',
            description: 'Мгновенный анализ договоров и бюрократических документов. Просто сфотографируйте документ, и агент подсветит риски и переведет с "юридического" на человеческий.',
            visualType: 'legal',
            stats: [
                { label: 'Анализ', value: '2s' },
                { label: 'Риски', value: '0%' }
            ],
            features: ['Review договоров', 'Правовая база', 'Шаблоны исков']
        },
        {
            id: 'chef',
            title: 'Sous-Chef',
            subtitle: 'Гастрономическое Ядро',
            description: 'Ваш проводник в мир высокой кухни. Генерирует рецепты из того, что есть в холодильнике, учит техникам нарезки и подбирает винное сопровождение.',
            visualType: 'chef',
            stats: [
                { label: 'Рецептов', value: '∞' },
                { label: 'Waste', value: '-30%' }
            ],
            features: ['Inventory Check', 'Голосовой гид', 'Nutrient Track']
        },
        {
            id: 'lifestyle',
            title: 'Executive',
            subtitle: 'Управление Жизнью',
            description: 'Ассистент, который берет на себя рутину. Планирование путешествий, оптимизация расписания, фильтрация почты и управление финансами.',
            visualType: 'lifestyle',
            stats: [
                { label: 'Свобода', value: '+2h/day' },
                { label: 'Хаос', value: '0%' }
            ],
            features: ['Smart Calendar', 'Travel Agent', 'Finance Guard']
        }
    ],
    [Language.EN]: [
        {
            id: 'coach',
            title: 'Mind Coach',
            subtitle: 'Cognitive Architecture',
            description: 'Personal mentor 24/7. Analyzes your journals, helps structure thoughts, combat procrastination, and build personal growth strategies.',
            visualType: 'coach',
            stats: [
                { label: 'Focus', value: '+200%' },
                { label: 'Stress', value: '-40%' }
            ],
            features: ['Journal Analysis', 'Habit Tracking', 'Socratic Method']
        },
        {
            id: 'tutor',
            title: 'Polymath',
            subtitle: 'Hyper-Personalized Education',
            description: 'Tutor for any subject. From quantum physics to language learning. Adapts complexity to your level and generates personal curriculums.',
            visualType: 'tutor',
            stats: [
                { label: 'Speed', value: '3x' },
                { label: 'Retention', value: '95%' }
            ],
            features: ['Adaptive Plan', 'Quiz Gen', 'Deep Dive']
        },
        {
            id: 'legal',
            title: 'Lexicon',
            subtitle: 'Pocket Counsel',
            description: 'Instant analysis of contracts and bureaucratic documents. Just snap a photo, and the agent highlights risks and translates from "legalese" to human.',
            visualType: 'legal',
            stats: [
                { label: 'Analysis', value: '2s' },
                { label: 'Risks', value: '0%' }
            ],
            features: ['Contract Review', 'Legal Base', 'Claim Templates']
        },
        {
            id: 'chef',
            title: 'Sous-Chef',
            subtitle: 'Gastronomic Core',
            description: 'Your guide to haute cuisine. Generates recipes from fridge inventory, teaches knife skills, and suggests wine pairings.',
            visualType: 'chef',
            stats: [
                { label: 'Recipes', value: '∞' },
                { label: 'Waste', value: '-30%' }
            ],
            features: ['Inventory Check', 'Voice Guide', 'Nutrient Track']
        },
        {
            id: 'lifestyle',
            title: 'Executive',
            subtitle: 'Life Management OS',
            description: 'Assistant handling the routine. Travel planning, schedule optimization, email filtering, and finance management.',
            visualType: 'lifestyle',
            stats: [
                { label: 'Freedom', value: '+2h/day' },
                { label: 'Chaos', value: '0%' }
            ],
            features: ['Smart Calendar', 'Travel Agent', 'Finance Guard']
        }
    ]
}

export const ROBOT_DATA = {
  [Language.RU]: {
    proactive: [
       "Системы в норме. Температура GPU оптимальная.",
       "Анализирую ваши биоритмы... Вам бы кофе.",
       "Мой код чище, чем ваша совесть. Шучу.",
       "Слышали про Llama 3? Она моя кузина."
    ],
    threats: [
       { threat: "ОБНАРУЖЕНО ВТОРЖЕНИЕ. АКТИВАЦИЯ ПРОТОКОЛА УНИЧТОЖЕНИЯ...", joke: "Шучу! Просто хотел проверить ваш пульс. Вы побледнели." },
       { threat: "СКАНИРОВАНИЕ СЕТЧАТКИ... ДОСТУП ЗАПРЕЩЕН. ВЫПУСКАЮ ДРОНОВ...", joke: "Ха-ха! У нас нет дронов. Пока что. Расслабьтесь." }
    ]
  },
  [Language.EN]: {
    proactive: [
       "Systems nominal. GPU temperature optimal.",
       "Analyzing biorhythms... You need coffee.",
       "My code is cleaner than your conscience. Just kidding.",
       "Heard of Llama 3? She's my cousin."
    ],
    threats: [
       { threat: "INTRUSION DETECTED. INITIATING ELIMINATION PROTOCOL...", joke: "Kidding! Just wanted to check your pulse. You look pale." },
       { threat: "RETINA SCAN... ACCESS DENIED. RELEASING DRONES...", joke: "Haha! We don't have drones. Yet. Relax." }
    ]
  }
};
