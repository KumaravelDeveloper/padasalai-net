// Padasalai.Net Educational Database
const PADASALAI_DATA = {
  siteMeta: {
    title: "Padasalai.Net - No.1 Educational Website",
    viewsText: "80 கோடி பார்வைகள் - பாடசாலை.நெட் - நன்றி தமிழகம்!",
    viewsTextEn: "800 Million Views - Padasalai.Net - Thank You Tamil Nadu!",
    tagline: "Tamil Nadu's Premier Learning & Examination Resource Hub",
    socialLinks: {
      twitter: "https://x.com/PadasalaiNet",
      facebook: "https://www.facebook.com/padasalai.net",
      youtube: "https://www.youtube.com/@Padasalai-net",
      instagram: "https://www.instagram.com/padasalainet/",
      telegram: "https://t.me/Padasalai_official",
      whatsapp: "https://whatsapp.com/channel/0029VaAqUqk9Bb672tBn033m",
      email: "mailto:padasalai.net@gmail.com"
    }
  },

  featuredGuide: {
    title: "Featured Guide",
    name: "SURA Guides 2026-2027",
    subtitle: "Get Exam-Ready with Sura's Guides for Class 10th, 11th & 12th",
    tag: "Top Rated",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidQ4GzPCGPUE9UO7cKX3IEIDM4PLW2RgLsOKFLLe3JaxccDjqY68CWGVaMaWfjAZ7yc-serFU_p3RW10CzHhdIbRcbFD-n2OUbgZSyOwlJRjs562wF_b7fs8Ka-pOmcnMsl-VgbLflI3e8T97YXJHs3lT1hN0gW-3zC69YTs-aycIEgaFjfyhKGxwDlA/w1200-h630-p-k-no-nu/11th%20Important%20Collections.jpg",
    link: "https://www.padasalai.net/2026/05/Tamilnadu-Schools-Notes-Guides-All-Subjects-PDF-Download..html",
    mediums: ["Tamil Medium", "English Medium"],
    highlights: ["Complete Book Back Q&A", "Important 2M/3M/5M Questions", "Model Question Papers with Keys"]
  },

  schoolGuides: [
    {
      id: "sura-12",
      class: "12th",
      name: "12th SURA Guides",
      desc: "Complete All Subjects Study Guide (TM / EM)",
      badge: "Popular",
      icon: "fa-book",
      color: "gradient-violet",
      url: "https://www.padasalai.net/p/12th-standard-important-collection.html"
    },
    {
      id: "sura-11",
      class: "11th",
      name: "11th SURA Guides",
      desc: "New Syllabus Complete Guides & Notes",
      badge: "Updated",
      icon: "fa-graduation-cap",
      color: "gradient-blue",
      url: "https://www.padasalai.net/p/11th-standard-important-collection.html"
    },
    {
      id: "sura-10",
      class: "10th",
      name: "10th SURA Guides",
      desc: "SSLC Full Subject Question Bank & Solutions",
      badge: "Essential",
      icon: "fa-bookmark",
      color: "gradient-orange",
      url: "https://www.padasalai.net/p/10th-standard-important-collection.html"
    },
    {
      id: "school-10",
      class: "10th",
      name: "10th School Guides",
      desc: "Loyola, Don & Way to Success Guides",
      badge: "Top Choice",
      icon: "fa-file-alt",
      color: "gradient-emerald",
      url: "https://www.padasalai.net/2026/05/Tamilnadu-Schools-Notes-Guides-All-Subjects-PDF-Download..html"
    }
  ],

  classes: [
    { id: "11th", name: "11th Standard", label: "Class 11 (Plus One)", count: "450+ Materials" },
    { id: "12th", name: "12th Standard", label: "Class 12 (Plus Two)", count: "520+ Materials" },
    { id: "10th", name: "10th Standard", label: "Class 10 (SSLC)", count: "380+ Materials" },
    { id: "9th", name: "9th Standard", label: "Class 9", count: "210+ Materials" },
    { id: "8th", name: "8th Standard", label: "Class 8", count: "180+ Materials" },
    { id: "7th", name: "7th Standard", label: "Class 7", count: "150+ Materials" },
    { id: "6th", name: "6th Standard", label: "Class 6", count: "140+ Materials" },
    { id: "primary", name: "1st - 5th Standard", label: "Primary School", count: "120+ Materials" }
  ],

  booksAndSyllabus: {
    "11th": {
      booksUrl: "https://www.padasalai.net/2026/05/Tamilnadu-Class-11-Text-Books-PDF-Download-2026-2027.html",
      syllabusUrl: "https://www.padasalai.net/2024/05/11th-Standard-Syllabus-2024-2025-All-Subjects-PDF-Download.html",
      practicalUrl: "https://www.padasalai.net/2019/01/11th-practical-books-study-materials-question-paper-answer-keys-download.html"
    },
    "12th": {
      booksUrl: "https://www.padasalai.net/2026/05/Tamilnadu-Class-12-Text-Books-PDF-Download-2026-2027.html",
      syllabusUrl: "https://www.padasalai.net/2024/05/12th-Standard-Syllabus-2024-2025-All-Subjects-PDF-Download.html",
      practicalUrl: "https://www.padasalai.net/2019/01/12th-practical-books-study-materials-question-paper-answer-keys-download.html"
    },
    "10th": {
      booksUrl: "https://www.padasalai.net/2026/05/Tamilnadu-Class-10-Text-Books-PDF-Download-2026-2027.html",
      syllabusUrl: "https://www.padasalai.net/2024/05/10th-Standard-Syllabus-2024-2025-All-Subjects-PDF-Download.html",
      practicalUrl: "https://www.padasalai.net/2019/01/10th-practical-books-study-materials-question-paper-answer-keys-download.html"
    },
    "default": {
      booksUrl: "https://www.padasalai.net/2026/05/Tamilnadu-Schools-Notes-Guides-All-Subjects-PDF-Download..html",
      syllabusUrl: "https://www.padasalai.net/2026/05/Tamilnadu-Schools-Notes-Guides-All-Subjects-PDF-Download..html",
      practicalUrl: "https://www.padasalai.net/2026/05/Tamilnadu-Schools-Notes-Guides-All-Subjects-PDF-Download..html"
    }
  },

  subjects: {
    "11th": [
      { name: "Tamil", nameTa: "தமிழ்", icon: "fa-language", color: "gradient-rose", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Iyal-wise Notes, Grammar, Guide & Model Q&A" },
      { name: "English", nameTa: "ஆங்கிலம்", icon: "fa-font", color: "gradient-blue", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Prose, Poem, Supplementary, Grammar & Vocabulary" },
      { name: "Mathematics", nameTa: "கணிதம்", icon: "fa-calculator", color: "gradient-indigo", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Volume 1 & 2 Worked Solutions & Important Formulae" },
      { name: "Physics", nameTa: "இயற்பியல்", icon: "fa-atom", color: "gradient-cyan", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Derivations, Numerical Problems & Practical Guides" },
      { name: "Chemistry", nameTa: "வேதியியல்", icon: "fa-flask", color: "gradient-teal", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Organic, Inorganic, Physical Chem Notes & Equations" },
      { name: "Biology", nameTa: "உயிரியல்", icon: "fa-leaf", color: "gradient-emerald", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Botany + Zoology Combined Question Bank & Diagrams" },
      { name: "Botany", nameTa: "தாவரவியல்", icon: "fa-seedling", color: "gradient-green", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Plant Anatomy, Physiology & Bio-Botany Notes" },
      { name: "Zoology", nameTa: "விலங்கியல்", icon: "fa-dna", color: "gradient-orange", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Human Physiology, Animal Kingdom & Bio-Zoology" },
      { name: "Computer Science", nameTa: "கணினி அறிவியல்", icon: "fa-laptop-code", color: "gradient-violet", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "C++, Python, Data Structures & Practical Programs" },
      { name: "Computer Applications", nameTa: "கணினி பயன்பாடுகள்", icon: "fa-desktop", color: "gradient-purple", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "HTML, CSS, PageMaker, PHP & MySQL Notes" },
      { name: "Business Maths", nameTa: "வணிக கணிதம்", icon: "fa-chart-line", color: "gradient-pink", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Statistics, Matrices, Financial Maths & Calculus" },
      { name: "Commerce", nameTa: "வணிகவியல்", icon: "fa-briefcase", color: "gradient-amber", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Business Organisation, Banking & Trade Notes" },
      { name: "Accountancy", nameTa: "கணக்குப்பதிவியல்", icon: "fa-file-invoice-dollar", color: "gradient-blue", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Ledgers, Journal Entries, Final Accounts Solutions" },
      { name: "Economics", nameTa: "பொருளியல்", icon: "fa-coins", color: "gradient-yellow", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Micro & Macro Economics, Indian Economy Notes" },
      { name: "History", nameTa: "வரலாறு", icon: "fa-landmark", color: "gradient-brown", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Ancient, Medieval & Modern Indian History Guides" },
      { name: "Computer Technology", nameTa: "கணினி தொழில்நுட்பம்", icon: "fa-microchip", color: "gradient-slate", url: "https://www.padasalai.net/2025/05/plus-one-Class-11th-standard-study-materials-english-medium-tamil-medium-pdf-download.html", desc: "Vocational Stream Hardware & Tech Study Material" }
    ],
    "12th": [
      { name: "Tamil", nameTa: "தமிழ்", icon: "fa-language", color: "gradient-rose", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Plus Two Iyal-wise Full Guides, Grammar & Prose Q&A" },
      { name: "English", nameTa: "ஆங்கிலம்", icon: "fa-font", color: "gradient-blue", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Paragraphs, Synonyms & Antonyms, Poem Exercises, Guide" },
      { name: "Mathematics", nameTa: "கணிதம்", icon: "fa-calculator", color: "gradient-indigo", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Volume 1 & 2 Chapter Questions, Full Solutions & Keys" },
      { name: "Physics", nameTa: "இயற்பியல்", icon: "fa-atom", color: "gradient-cyan", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Electrostatics, Optics, Magnetism Problems & Diagrams" },
      { name: "Chemistry", nameTa: "வேதியியல்", icon: "fa-flask", color: "gradient-teal", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Chemical Kinetics, Metallurgy, Organic Transformations & Tips" },
      { name: "Biology", nameTa: "உயிரியல்", icon: "fa-leaf", color: "gradient-emerald", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Full Biology Notes, Practice Tests & Model Board Papers" },
      { name: "Botany", nameTa: "தாவரவியல்", icon: "fa-seedling", color: "gradient-green", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Bio-Botany Genetics & Biotechnology Detailed Guides" },
      { name: "Zoology", nameTa: "விலங்கியல்", icon: "fa-dna", color: "gradient-orange", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Human Reproduction, Evolution & Health Notes" },
      { name: "Computer Science", nameTa: "கணினி அறிவியல்", icon: "fa-laptop-code", color: "gradient-violet", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Python Programming, SQL Database & Practical Programs" },
      { name: "Commerce", nameTa: "வணிகவியல்", icon: "fa-briefcase", color: "gradient-amber", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Management Principles, Financial Markets & Consumerism" },
      { name: "Accountancy", nameTa: "கணக்குப்பதிவியல்", icon: "fa-file-invoice-dollar", color: "gradient-blue", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "Partnership Accounts, Ratio Analysis, Tally & Solutions" },
      { name: "Economics", nameTa: "பொருளியல்", icon: "fa-coins", color: "gradient-yellow", url: "https://www.padasalai.net/2025/05/12th-study-materials.html", desc: "National Income, Monetary Economics, Fiscal Economics" }
    ],
    "10th": [
      { name: "Tamil", nameTa: "தமிழ்", icon: "fa-language", color: "gradient-rose", url: "https://www.padasalai.net/2025/05/10th-study-materials.html", desc: "SSLC Tamil Iyal Notes, Grammar & Model Q&A" },
      { name: "English", nameTa: "ஆங்கிலம்", icon: "fa-font", color: "gradient-blue", url: "https://www.padasalai.net/2025/05/10th-study-materials.html", desc: "Grammar Rules, Paragraphs, Vocabulary & Model Papers" },
      { name: "Mathematics", nameTa: "கணிதம்", icon: "fa-calculator", color: "gradient-indigo", url: "https://www.padasalai.net/2025/05/10th-study-materials.html", desc: "Geometry, Algebra, Trigonometry & Matrices Solutions" },
      { name: "Science", nameTa: "அறிவியல்", icon: "fa-flask", color: "gradient-teal", url: "https://www.padasalai.net/2025/05/10th-study-materials.html", desc: "Physics, Chemistry & Biology Integrated Notes & Solutions" },
      { name: "Social Science", nameTa: "சமூக அறிவியல்", icon: "fa-globe-americas", color: "gradient-brown", url: "https://www.padasalai.net/2025/05/10th-study-materials.html", desc: "History, Geography, Civics & Economics Maps & Timelines" }
    ],
    "default": [
      { name: "All Subject Materials", nameTa: "அனைத்து பாடங்கள்", icon: "fa-book-open", color: "gradient-slate", url: "https://www.padasalai.net/2020/07/12th-11th-10th-9th-1st-standard-all-standards-latest-study-materials-english-medium-tamil-medium-download.html", desc: "Full study guides, textbooks and model questions." }
    ]
  },

  examArchives: {
    "11th": {
      quarterly: [
        { year: "2026", title: "2026 - 11th Quarterly Exam Question Papers & Keys", url: "https://www.padasalai.net/2026/05/11th-quarterly-exam-question-papers-2026-answer-keys-time-table-download-plus-one.html", badge: "Latest 2026", highlight: true },
        { year: "2025", title: "2025 - 11th Quarterly Exam Original Papers", url: "https://www.padasalai.net/2025/06/11th-quarterly-exam-question-papers-2025-answer-keys-time-table-download-plus-one.html", badge: "Official Keys" },
        { year: "2024", title: "2024 - 11th Quarterly Exam Question Papers", url: "https://www.padasalai.net/2024/07/11th-quarterly-exam-question-papers-2024-answer-keys-time-table-download-plus-one.html", badge: "All Districts" },
        { year: "2023", title: "2023 - 11th Quarterly Exam Question Papers", url: "https://www.padasalai.net/2023/07/11th-quarterly-exam-2023-question-papers-answer-keys-time-table-download-plus-one.html", badge: "Archive" },
        { year: "2022", title: "2022 - 11th Quarterly Exam Question Papers", url: "https://www.padasalai.net/2022/08/plus-one-11th-quarterly-exam-question-paper-answer-keys-pdf-download-2022-2023.html", badge: "Archive" },
        { year: "2021", title: "2021 - 11th Quarterly Exam Question Papers", url: "https://www.padasalai.net/2019/08/Plus-One-11th-quarterly-exam-key-question-papers-answer-keys-download-2019-2020.html", badge: "Archive" },
        { year: "2019", title: "2019 - 11th Quarterly Exam Question Papers", url: "https://www.padasalai.net/2019/09/11th-quarterly-exam-question-papers-and.html", badge: "Archive" },
        { year: "Model", title: "11th Quarterly Exam Model Question Papers", url: "https://www.padasalai.net/2019/09/11th-quarterly-exam-question-papers-and.html", badge: "Practice Set" }
      ],
      halfYearly: [
        { year: "2026", title: "2026 - 11th Half Yearly Exam Question Papers & Keys", url: "https://www.padasalai.net/2026/05/11th-standrd-Half-Yearly-Question-Papers-2026-2027-Answer-Keys-Download-plus-one-class-Time-Table.html", badge: "New 2026", highlight: true },
        { year: "2025", title: "2025 - 11th Half Yearly Exam Question Papers", url: "https://www.padasalai.net/2025/07/11th-Half-Yearly-Question-Papers-2025-Answer-Keys-Download-plus-one-class-Time-Table-2026.html", badge: "Answer Keys" },
        { year: "2024", title: "2024 - 11th Half Yearly Exam Question Papers", url: "https://www.padasalai.net/2024/08/Plus-One-11th-Half-Yearly-Exam-Question-Papers-2024-2025-Answer-Keys-Time-Table-PDF-Download.html", badge: "PDF Download" },
        { year: "2023", title: "2023 - 11th Half Yearly Exam Question Papers", url: "https://www.padasalai.net/2023/10/Plus-One-11th-Half-Yearly-Exam-2023-2024-Question-Papers-Answer-Keys-Time-Table-PDF-Download.html", badge: "Archive" },
        { year: "2022", title: "2022 - 11th Half Yearly Exam Original Papers", url: "https://www.padasalai.net/2022/11/Plus-One-11th-Half-Yearly-Exam-2022-2023-Original-Question-Papers-Answer-Keys-PDF-Download.html", badge: "Original" },
        { year: "Model", title: "11th Half Yearly Model Exam Question Papers", url: "https://www.padasalai.net/2019/10/Plus-One-11th-Half-Yearly-Exam-Question-Papers-and-Answer-Keys-Download.html", badge: "Model Papers" }
      ],
      publicExam: [
        { year: "2027", title: "2027 March - 11th Public Exam Question Papers & Time Table", url: "https://www.padasalai.net/2025/07/Plus-One-11th-Public-Exam-Question-Papers-2026-March-Answer-Keys-Time-Table-Results-Download.html", badge: "Upcoming 2027", highlight: true },
        { year: "2026 March", title: "2026 March - 11th Public Exam Question Papers", url: "https://www.padasalai.net/2025/07/Plus-One-11th-Public-Exam-Question-Papers-2026-March-Answer-Keys-Time-Table-Results-Download.html", badge: "Official" },
        { year: "2025 March", title: "2025 March - 11th Public Exam Question Papers", url: "https://www.padasalai.net/2024/10/Plus-One-11th-Public-Exam-Question-Papers-2025-March-Answer-Keys-Time-Table-Results-Download.html", badge: "Answer Keys" },
        { year: "2024 March", title: "2024 March - 11th Public Exam Question Papers", url: "https://www.padasalai.net/2024/02/11th-Public-Exam-Question-Papers-2024-March-Answer-Keys-Time-Table-Download.html", badge: "Complete Key" },
        { year: "2023 March", title: "2023 March - 11th Public Exam Question Papers", url: "https://www.padasalai.net/2023/01/11th-public-exam-march-2023-question-papers-answer-keys-time-table-download.html", badge: "Archive" }
      ]
    },
    "12th": {
      quarterly: [
        { year: "2026", title: "2026 - 12th Quarterly Exam Question Papers & Keys", url: "https://www.padasalai.net/2026/05/12th-quarterly-exam-question-papers.html", badge: "Latest 2026", highlight: true },
        { year: "2025", title: "2025 - 12th Quarterly Exam Original Papers", url: "https://www.padasalai.net/2025/06/12th-quarterly-exam-question-papers.html", badge: "Official Keys" },
        { year: "2024", title: "2024 - 12th Quarterly Exam Original Papers", url: "https://www.padasalai.net/2024/07/12th-quarterly-exam-question-papers.html", badge: "All Districts" },
        { year: "Model", title: "12th Quarterly Exam Model Question Papers", url: "https://www.padasalai.net/2020/07/12th-study-materials.html", badge: "Practice Set" }
      ],
      halfYearly: [
        { year: "2026", title: "2026 - 12th Half Yearly Exam Question Papers & Keys", url: "https://www.padasalai.net/2026/05/12th-half-yearly-exam-papers.html", badge: "New 2026", highlight: true },
        { year: "2025", title: "2025 - 12th Half Yearly Exam Original Papers", url: "https://www.padasalai.net/2025/07/12th-half-yearly-exam-papers.html", badge: "Answer Keys" },
        { year: "Model", title: "12th Half Yearly Model Exam Question Papers", url: "https://www.padasalai.net/2020/07/12th-study-materials.html", badge: "Model Papers" }
      ],
      publicExam: [
        { year: "2027", title: "2027 March - 12th Public Board Exam Time Table & Keys", url: "https://www.padasalai.net/2025/07/12th-public-exam-papers.html", badge: "Upcoming 2027", highlight: true },
        { year: "2026 March", title: "2026 March - 12th Public Exam Original Papers & Keys", url: "https://www.padasalai.net/2025/07/12th-public-exam-papers.html", badge: "Official" },
        { year: "2025 March", title: "2025 March - 12th Public Exam Original Papers & Keys", url: "https://www.padasalai.net/2024/10/12th-public-exam-papers.html", badge: "Complete Keys" }
      ]
    },
    "10th": {
      quarterly: [
        { year: "2026", title: "2026 - 10th Quarterly Exam Question Papers & Keys", url: "https://www.padasalai.net/2026/05/10th-quarterly-exam-papers.html", badge: "Latest 2026", highlight: true },
        { year: "2025", title: "2025 - 10th Quarterly Exam Papers", url: "https://www.padasalai.net/2025/06/10th-quarterly-exam-papers.html", badge: "Official Keys" },
        { year: "Model", title: "10th SSLC Quarterly Exam Model Papers", url: "https://www.padasalai.net/2020/07/10th-study-materials.html", badge: "Practice Set" }
      ],
      halfYearly: [
        { year: "2026", title: "2026 - 10th Half Yearly Exam Question Papers", url: "https://www.padasalai.net/2026/05/10th-half-yearly-exam-papers.html", badge: "New 2026", highlight: true },
        { year: "2025", title: "2025 - 10th Half Yearly Exam Papers", url: "https://www.padasalai.net/2025/07/10th-half-yearly-exam-papers.html", badge: "Answer Keys" }
      ],
      publicExam: [
        { year: "2027", title: "2027 March - 10th Public Board Exam Time Table", url: "https://www.padasalai.net/2025/07/10th-public-exam-papers.html", badge: "Upcoming 2027", highlight: true },
        { year: "2026 March", title: "2026 March - 10th Board Exam Question Papers & Keys", url: "https://www.padasalai.net/2025/07/10th-public-exam-papers.html", badge: "Official" }
      ]
    },
    "default": {
      quarterly: [
        { year: "2026", title: "2026 - School Quarterly Term-1 Question Papers", url: "https://www.padasalai.net/2020/07/12th-11th-10th-9th-1st-standard-all-standards-latest-study-materials-english-medium-tamil-medium-download.html", badge: "All Classes" }
      ],
      halfYearly: [
        { year: "2026", title: "2026 - School Half Yearly Term-2 Question Papers", url: "https://www.padasalai.net/2020/07/12th-11th-10th-9th-1st-standard-all-standards-latest-study-materials-english-medium-tamil-medium-download.html", badge: "All Classes" }
      ],
      publicExam: [
        { year: "2026", title: "2026 - Annual Board & Year-End Exam Papers", url: "https://www.padasalai.net/2020/07/12th-11th-10th-9th-1st-standard-all-standards-latest-study-materials-english-medium-tamil-medium-download.html", badge: "All Classes" }
      ]
    }
  },

  quickLinksSection: [
    { title: "Quarterly Exam Questions 2026", url: "https://www.padasalai.net/2026/05/quarterly-exam-term-1-exam-time-table-syllabus-2026-2027-question-papers-with-answer-keys-download.html", icon: "fa-calendar-check" },
    { title: "Quarterly Exam Syllabus 2026", url: "https://www.padasalai.net/2026/07/Tamilnadu-Quarterly-Term-1-Exams-Syllabus-2026-Download.html", icon: "fa-book-open" },
    { title: "Quarterly Exam Time Table PDF", url: "https://www.padasalai.net/2026/06/Quarterly-Term-1-Exam-2026-Time-Table-PDF-Download.html", icon: "fa-clock" },
    { title: "First Mid Term Questions 2026", url: "https://www.padasalai.net/2026/05/1st-mid-term-exam-time-table-syllabus-2026-2027-question-papers-with-answer-keys-download.html", icon: "fa-edit" },
    { title: "Full Study Materials Download (1st-12th)", url: "https://www.padasalai.net/2020/07/12th-11th-10th-9th-1st-standard-all-standards-latest-study-materials-english-medium-tamil-medium-download.html", icon: "fa-folder-open" },
    { title: "All Class Guides / Notes PDF", url: "https://www.padasalai.net/2026/05/Tamilnadu-Schools-Notes-Guides-All-Subjects-PDF-Download..html", icon: "fa-file-pdf" },
    { title: "Monthly Test Questions & Keys", url: "https://www.padasalai.net/search/label/Monthly%20Test%20Question%20Papers%20and%20Answer%20Keys", icon: "fa-list-ol" }
  ],

  competitiveExams: [
    { name: "NEET Exam", desc: "Medical Entrance Study Materials, Model Tests & Keys", url: "https://www.padasalai.net/2018/05/neet-exam-study-materials-download.html", icon: "fa-user-md", color: "gradient-blue" },
    { name: "TNTET Exam", desc: "Tamil Nadu Teacher Eligibility Test Syllabi & Papers", url: "https://www.trbtnpsc.com/2013/08/tet-study-materials-latest-schedules.html", icon: "fa-chalkboard-teacher", color: "gradient-emerald" },
    { name: "PGTRB Exam", desc: "Post Graduate Teacher TRB Question Banks & Syllabi", url: "https://www.trbtnpsc.com/2013/07/trb-questions-and-study-materials.html", icon: "fa-user-graduate", color: "gradient-violet" },
    { name: "Polytechnic TRB", desc: "Polytechnic Lecturer Recruitment Exam Study Notes", url: "https://www.trbtnpsc.com/2017/05/polytechnic-study-materials-latest.html", icon: "fa-cogs", color: "gradient-orange" },
    { name: "NMMS Exam", desc: "National Means Cum Merit Scholarship Materials", url: "https://www.padasalai.net/2017/01/nmms-exam-syllabus-study-materials.html", icon: "fa-award", color: "gradient-amber" },
    { name: "NTSE & TRUST", desc: "Talent Search Examination Model Question Papers", url: "https://www.padasalai.net/2017/08/ntse-exam-study-materials.html", icon: "fa-trophy", color: "gradient-cyan" }
  ],

  tableOfContents: [
    { id: "sec-books", title: "School Textbooks & Syllabus", icon: "fa-book" },
    { id: "sec-lesson-plans", title: "Teachers Corner", icon: "fa-chalkboard-teacher" },
    { id: "sec-study-materials", title: "Subject Study Materials", icon: "fa-folder-open" },
    { id: "sec-quarterly", title: "Quarterly Exam Papers", icon: "fa-file-alt" },
    { id: "sec-halfyearly", title: "Half Yearly Exam Papers", icon: "fa-file-signature" },
    { id: "sec-public", title: "Public Exam Papers", icon: "fa-award" },
    { id: "sec-exams", title: "Competitive & Entrance Exams", icon: "fa-graduation-cap" }
  ]
};
