import {
  Achievement,
  Certification,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  ProjectVideo,
  SkillCategory
} from '../models/portfolio.models';

export const  PROFILE = {
  firstName: 'Roland Junior Désiré',
  lastName: 'BINI',
  displayName: 'Junior Bini',
  title: 'Développeur Fullstack, Data Scientist Junior & Élève Ingénieur',
  tagline: 'Recherche d\'une alternance en Data Science de 12 mois, à partir de septembre 2026',
  location: 'Brest, France',
  phone: '+33 7 62 69 31 77',
  email: 'kouassi.bini@imt-atlantique.net',
  photo: '',
  drivingLicense: 'Permis B',
  summary:
    'Élève ingénieur à IMT Atlantique en spécialité Mathematical & Computational Engineering, avec un solide background en développement logiciel et des compétences en data science, traitement et analyse de données et machine learning. Fort de plusieurs projets en développement fullstack (Angular, React, FastAPI, Node.js) et d\'une solide base en programmation, je souhaite aujourd\'hui m\'orienter vers la Data Science. Je recherche une alternance qui me permettra d\'approfondir mes compétences en modélisation, IA appliquée et valorisation des données au sein d\'une équipe innovante.',
  about:
    'Élève ingénieur à IMT Atlantique en spécialité Mathematical & Computational Engineering, en double diplôme avec l\'ESATIC, je mets à profit un solide socle en développement logiciel pour me spécialiser en Data Science, Machine Learning et Intelligence Artificielle. Mes expériences chez Orange Digital Academy, Bridge Bank Group et IFREMER m\'ont permis de concevoir des applications, développer des API et exploiter des données sur des projets concrets. Aujourd\'hui, je souhaite mettre mes compétences en mathématiques appliquées, analyse de données et IA au service de projets innovants, capables de transformer les données en solutions à fort impact.',
  cvFile: 'CV_alternance_DS_JuniorBini.pdf',
  socials: {
    github: 'https://github.com/j4niro',
    linkedin: 'https://www.linkedin.com/in/junior-bini-9463372a2/',
    email: 'mailto:kouassi.bini@imt-atlantique.net'
  }
};

export const EDUCATION: EducationItem[] = [
  {
    period: '2025 - 2027',
    degree: 'Diplôme d\'Ingénieur Généraliste',
    school: 'IMT Atlantique',
    location: 'Brest, France',
    details: [
      'Spécialisation 2025–26 : Développement Collaboratif de Logiciels',
      'Spécialisation 2026–27 : Mathematical & Computational Engineering'
    ]
  },
  {
    period: '2024 - 2027',
    degree: 'Master en Systèmes d\'Information et Génie Logiciel (double diplôme)',
    school: 'ESATIC',
    location: 'Abidjan, Côte d\'Ivoire'
  },
  {
    period: '2021 - 2024',
    degree: 'Licence en Systèmes Réseaux Informatiques et Télécommunications - Mention Très Bien',
    school: 'ESATIC',
    location: 'Abidjan, Côte d\'Ivoire'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Stagiaire Développeur Logiciel',
    company: 'Bridge Bank Group',
    type: 'Stage',
    period: 'Mai - Sept. 2026 · 4 mois',
    location: 'Département Architecture et Solutions',
    context: 'Fiabiliser et monitorer les performances des API internes critiques de la banque.',
    action:
      'Développement d\'une application de test de performance des API internes (concurrent, sequentiel, stress, sécurité) avec tableau de bord temps réel (latence, throughput, taux d\'erreur).',
    result: 'Outil opérationnel identifiant les goulots d\'étranglement avant mise en production.',
    technologies: ['Angular', 'FastAPI', 'Python', 'TypeScript']
  },
  {
    role: 'Développeur Logiciel',
    company: 'IFREMER - Projet KOSMOS',
    type: 'Projet',
    period: 'Sept. - Déc. 2025 · 3 mois',
    location: 'Logiciel d\'analyse de données vidéo sous-marines',
    context: 'Faciliter l\'analyse de vidéos sous-marines issues de campagnes océanographiques.',
    action:
      'Développement d\'un logiciel d\'analyse vidéo (Python PyQt) et documentation technique pour une prise en main autonome.',
    result: 'Outil livré conforme aux exigences, réduisant significativement le temps d\'analyse manuel.',
    technologies: ['Python', 'Qt']
  },
  {
    role: 'Stagiaire Développeur Logiciel',
    company: 'Orange Digital Academy',
    type: 'Stage',
    period: 'Avr. - Sept. 2024 · 6 mois',
    location: 'Application de suivi en temps réel de la consommation énergétique des sites techniques',
    context: 'Absence de visibilité en temps réel sur la consommation énergétique des infrastructures.',
    action:
      'Développement d\'une application de suivi en temps réel (collecte, traitement et visualisation des données) avec déploiement CI/CD.',
    result: 'Amélioration mesurable de la précision et de la réactivité du suivi de consommation énergétique.',
    technologies: ['Python', 'React JS', 'Flutter', 'Figma']
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Front-end',
    icon: '',
    skills: ['Angular', 'ReactJS', 'TypeScript', 'JavaScript', 'HTML/CSS']
  },
  {
    category: 'Back-end & API',
    icon: '',
    skills: ['Node.js', 'FastAPI', 'Python', 'Java', 'APIs REST', 'SQL', 'PHP']
  },
  {
    category: 'Data Science & IA',
    icon: '',
    skills: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook', 'Machine Learning']
  },
  {
    category: 'Mobile & Desktop',
    icon: '',
    skills: ['Flutter', 'Qt']
  },
  {
    category: 'Bases de données',
    icon: '',
    skills: ['SQL', 'MySQL','NoSQL']
  },
  {
    category: 'DevOps & Outils',
    icon: '',
    skills: ['Git', 'GitHub','Gitlab', 'Docker', 'CI/CD', 'Figma']
  },
  {
    category: 'Langues',
    icon: '',
    skills: ['Français (natif)', 'Anglais (professionnel)']
  },
  {
    category: 'Savoir-être',
    icon: '',
    skills: [
      'Communication écrite et orale',
      'Esprit d\'équipe',
      'Gestion de projet',
      'Gestion du stress',
      'Créativité',
      'Prise de parole en public',
      'Autonomie',
      'Esprit critique'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Application de test de performance des API internes critiques de la banque',
    category: 'Full Stack · DevOps',
    period: 'Mai - Sept. 2026',
    context: 'Bridge Bank Group - Département Architecture et Solutions',
    description:
      'Application de tests (concurrent, sequentiel, stress, sécurité) pour fiabiliser et monitorer les performances des API internes critiques de la banque, avec un tableau de bord temps réel (latence, throughput, taux d\'erreur) permettant d\'identifier les goulots d\'étranglement avant mise en production.',
    technologies: ['Angular', 'FastAPI', 'Python', 'TypeScript']
  },
  {
    title: 'Logiciel d\'analyse de vidéos sous-marines - KOSMOS',
    category: 'Software Engineering · Recherche',
    period: 'Sept. - Déc. 2025',
    context: 'IFREMER',
    description:
      'Logiciel d\'analyse de données vidéo issues de campagnes océanographiques sous-marines, développé pour l\'IFREMER, accompagné d\'une documentation technique permettant une prise en main autonome par les équipes scientifiques.',
    technologies: ['Python', 'PyQt', 'OpenCV'],
    githubUrl: 'https://github.com/sohaibelkarmi/Projet-KOSMOS/tree/main'
  },
      {
    title : 'Application de visualisation des anomalies de températures',
    category :'Web Development',
    period : '',
    context :'IMT Atlantique - UE ISI 2025-2026',
    description:'Projet réalisé dans le cadre de l\'UE ISI 2025-2026 à IMT Atlantique. L\'application permet de visualiser les anomalies de température à la surface du globe entre 1880 et 2025, à partir des données NASA GISTEMP fournies par l\'enseignant au format tempanomaly_4x4grid.json.',
    technologies : [ 'ReactJS', 'TypeScript', 'Redux' ],
    githubUrl : 'https://github.com/j4niro/BigEyes'
  },
  /*{
    title : '',
    category :'',
    period : '',
    context :'IMT Atlantique - UE CONC 2025-2026',
    description:'',
    technologies : ['Java']
  },*/
  {
    title : 'Contribution à un logiciel libre - ARSMEDICATECH',
    category :'Full Stack · Software Engineering',
    period : '',
    context :'IMT Atlantique - UE IDL 2025-2026',
    description:'ArsMedicaTech est une application web de gestion médicale destinée aux cabinets médicaux, cliniques, hôpitaux et aux patients.Elle permet de dématérialiser et de gérer les dossiers des patients, d’optimiser les rendez-vous et plannings, de visualiser et analyser les données médicales, d’aider au diagnostic grâce à des modules d’intelligence artificielle.',
    technologies : ['ReactJS', 'TypeScript', 'Docker'],
    githubUrl : 'https://github.com/ArsMedicaTech/arsmedicatech-frontend/pull/11'
  },
  {
    title : 'Modélisation du réseau de PETRI',
    category :'Software Engineering · Modélisation Mathématique',
    period : '',
    context :'IMT Atlantique - UE MAPD 2025-2026',
    description:'Un réseau de Petri est un modèle mathématique servant à représenter divers systèmes (infor-matiques, industriels. . .). Il permet de modéliser et de vérifier le comportement dynamique des systèmes à événements discrets comme les systèmes manufacturiers, les systèmes de télécommunications ou les réseaux de transport.',
    technologies : ['Java']
  },
  {
    title: 'Application de suivi en temps réel de la consommation énergétique',
    category: 'Full Stack · IoT',
    period: 'Avr. - Sept. 2024',
    context: 'Orange Digital Academy',
    description:
      'Application de suivi en temps réel de la consommation énergétique des sites techniques d\'Orange : collecte, traitement et visualisation des données, avec un pipeline de déploiement continu (CI/CD).',
    technologies: ['Python', 'React JS', 'Flutter', 'Figma']
  },
  {
    title: 'Sign to Speech - Traduction de la langue des signes ivoirienne',
    category: 'IA · Machine Learning',
    period: 'En cours',
    context: 'Cellule d\'Innovation et de Développement (CID) - ESATIC',
    description:
      'Développement d\'un modèle de reconnaissance des gestes de la langue des signes ivoirienne et d\'une application web de traduction automatique vers les langues locales, avec des tests d\'interprétation en conditions réelles pour ajuster le modèle. Objectif : favoriser la communication bidirectionnelle et valoriser la langue des signes comme patrimoine ivoirien.',
    technologies: ['Machine Learning', 'Python', 'React JS']
  },
  {
    title: 'Valorisation du secteur vivrier en Côte d\'Ivoire',
    category: 'Développement Web (Projet académique - APP3)',
    period: 'ESATIC',
    context: 'Apprentissage par projet',
    description:
      'Prototype web contribuant à la digitalisation du secteur vivrier et à la visibilité des acteurs locaux, de la production à la commercialisation. Programmation front-end et modélisation de la base de données.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Système d\'enchères en ligne sécurisé',
    category: 'Développement Web (Projet académique - APP2)',
    period: 'ESATIC',
    context: 'Apprentissage par projet',
    description:
      'Système d\'enchères sécurisé et fonctionnel avec base de données optimisée et gestion dynamique des offres. Modélisation de la base de données et programmation back-end.',
    technologies: ['PHP', 'JavaScript', 'MySQL']
  },
  {
    title: 'Valorisation du système éducatif en Côte d\'Ivoire',
    category: 'Développement Web (Projet académique - APP1)',
    period: 'ESATIC',
    context: 'Apprentissage par projet',
    description:
      'Prototype web visant à améliorer la visibilité et la valorisation du système éducatif national, favorisant l\'engagement des jeunes dans la formation.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];

// No demo videos were supplied yet — placeholders are left intentionally
// so real recordings/links can be dropped in later without touching the template.
export const PROJECT_VIDEOS: ProjectVideo[] = [
  {
    title: 'Application de test de performance des API internes critiques',
    description: 'Démonstration du tableau de bord temps réel (latence, throughput, taux d\'erreur) — Bridge Bank Group.',
    technologies: ['Angular', 'FastAPI'],
    thumbnailPlaceholder: 'BBG',
    videoUrl: '/assets/videos/vid_apitester.mp4'
  },
  {
    title: 'Application de visualisation des anomalies de températures',
    description: 'Démonstration de l\'application de visualisation des anomalies de température à la surface du globe entre 1880 et 2025.',
    technologies: ['ReactJS', 'TypeScript', 'Redux'],
    thumbnailPlaceholder: 'BigEyes',
    videoUrl: '/assets/videos/bigeyes_demo.mp4'
  },
  {
    title: 'Logiciel d\'analyse vidéo sous-marine - KOSMOS',
    description: 'Aperçu du logiciel d\'analyse de vidéos océanographiques développé pour l\'IFREMER.',
    technologies: ['Python', 'Qt'],
    thumbnailPlaceholder: 'KOSMOS',
    videoUrl: '/assets/videos/kosmos_demo.mp4'
  },
  {
    title: 'Application de suivi de consommation énergétique',
    description: 'Démonstration de l\'application de suivi temps réel développée chez Orange Digital Academy.',
    technologies: ['React JS', 'Flutter'],
    thumbnailPlaceholder: 'ODA',
    videoUrl: '/assets/videos/simulationKania.mp4'
  },
  {
    title: 'Sign to Speech',
    description: 'Démonstration du modèle de reconnaissance de la langue des signes ivoirienne et de sa traduction en langues locales.',
    technologies: ['Machine Learning', 'React JS'],
    thumbnailPlaceholder: 'S2S',
    videoUrl: ''
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Python for Data Science and AI',
    issuer: 'IBM',
    domain: 'Data Science et Intelligence Artificielle',
    skills: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook'],
    result: 'Certification validée - manipulation de données'
  },
  {
    title: 'Python Project for Data Engineering',
    issuer: 'IBM',
    domain: 'Data Engineering',
    skills: ['Python', 'Web scraping'],
    result: 'Certification validée - réalisation d\'un mini-projet d\'ingénierie de données'
  },
  {
    title: 'Introduction to DevOps',
    issuer: 'IBM',
    domain: 'CI/CD, culture DevOps',
    skills: ['CI/CD', 'DevOps'],
    result: 'Certification validée - compréhension du cycle DevOps et des outils associés'
  },
  {
    title: 'Programming in Python',
    issuer: 'Meta',
    domain: 'Développement logiciel',
    skills: ['Python', 'Structures de données', 'POO'],
    result: 'Certification obtenue avec maîtrise des bases de la programmation Python'
  },
  {
    title: 'Version Control',
    issuer: 'Meta',
    domain: 'Développement collaboratif',
    skills: ['Git', 'GitHub', 'Pull Requests'],
    result: 'Maîtrise des outils de versionnement et bonnes pratiques DevOps'
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    domain: 'Développement Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
    result: 'Certification validée - prototype d\'interface front-end fonctionnel'
  },
  {
    title: 'Introduction to Back-End Development',
    issuer: 'Meta',
    domain: 'Développement Web',
    skills: ['APIs REST'],
    result: 'Certification validée - gestion des requêtes et réponses serveur'
  },
  {
    title: 'Computer and Online Essentials',
    issuer: 'ICDL',
    domain: 'Compétences numériques de base',
    skills: ['PC', 'Gestion de fichiers', 'Navigation Internet', 'Sécurité'],
    result: 'Certification ICDL validée'
  },
  {
    title: 'Applications Essentials',
    issuer: 'ICDL',
    domain: 'Outils bureautiques',
    skills: ['Word', 'Excel', 'PowerPoint'],
    result: 'Certification ICDL validée — création de documents et présentations professionnels'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '2ᵉ place - Hackathon African Digital Week',
    event: 'IA citoyenne : Services publics intelligents et accessibles',
    period: '30 — 31 mai 2026',
    description:
      'Conception et configuration d\'un chatbot basé sur un modèle existant, adapté pour répondre aux besoins des citoyens.',
    result: 'Chatbot fonctionnel présenté devant le jury — Lauréat de la 2ᵉ place du hackathon.'
  },
  {
    title: '2ᵉ place - Technovore Hackathon',
    event: 'Assistant de paiement électronique sur Messenger',
    period: '',
    description:
      'Création d\'un chatbot via un outil no-code, définition du scénario de conversation et des parcours utilisateurs, intégration de boutons et messages automatiques dans Messenger.',
    result: 'Chatbot fonctionnel présenté au jury — obtention de la 2ᵉ place du hackathon.'
  },
  {
    title: 'Secrétaire Générale du Club Informatique',
    event: 'ESATIC',
    period: '',
    description:
      'Gestion administrative du club et coordination des activités internes : organisation de réunions et rédaction des procès-verbaux.',
    result: 'Leadership, organisation et communication au service du club informatique.'
  }
];
