
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("askBridgeButton").addEventListener("click", () => {
  alert("Ask Bridge AI is planned for a future version. For now, explore the family, educator, and community resource sections.");
});

const translations = {
  en: {
    navFamilies:"Families", navEducators:"Educators", navCommunity:"Community Resources", navAbout:"About Us", navContact:"Contact",
    welcome:"Welcome! Bienvenidos! Byenveni! Bem-vindos!",
    heroCopy:"Helping multilingual students, families, and educators connect with resources.",
    findResources:"⌕  Find Resources", askBridge:"◌  Ask Bridge AI",
    familiesTitle:"Families", familiesText:"Access guides, tools, and resources to support your child's education and success.", familiesLink:"Explore Family Resources →",
    educatorsTitle:"Educators", educatorsText:"Find lesson supports, differentiated instruction strategies, and AI-powered tools for your classroom.", educatorsLink:"Explore Educator Tools →",
    communityTitle:"Community Resources", communityText:"Discover local programs, services, and support for multilingual families in our community.", communityLink:"Explore Community Resources →",
    missionTitle:"Our Mission", missionText:"Bridge ESOL empowers multilingual learners and the people who support them with information, tools, and opportunities to thrive.",
    familyEyebrow:"For Families", familyHeading:"Navigate school with confidence.", familyIntro:"Start with one of these practical guides.",
    enrollTitle:"School Enrollment", enrollText:"Learn what documents to bring and what questions to ask.",
    conferenceTitle:"Parent Conferences", conferenceText:"Prepare questions about grades, language growth, and support.",
    homeTitle:"Learning at Home", homeText:"Use simple routines to build reading and vocabulary skills.",
    educatorEyebrow:"For Educators", educatorHeading:"Differentiate without starting over.", educatorIntro:"Practical tools for supporting English learners.",
    lessonTitle:"Lesson Differentiation", lessonText:"Adjust language supports while keeping the same learning goal.",
    framesTitle:"Sentence Frames", framesText:"Give students language structures for speaking and writing.",
    familyCommTitle:"Family Communication", familyCommText:"Create clear, respectful, translation-ready messages.",
    communityEyebrow:"Community Support", communityHeading:"Connect with local help.", communityIntro:"This directory will grow as verified community partners are added.",
    adultTitle:"Adult English Classes", adultText:"Find local language-learning opportunities for adults.",
    foodTitle:"Food and Family Support", foodText:"Locate food assistance and family support services.",
    libraryTitle:"Libraries and Learning", libraryText:"Explore free programs, technology, books, and tutoring.",
    contactEyebrow:"Contact", contactHeading:"Help us improve Bridge ESOL.", contactText:"Share a resource idea or tell us what your family, classroom, or community needs.", contactButton:"Send an Email",
    footer:"Connecting multilingual families, educators, and communities."
  },
  es: {
    navFamilies:"Familias", navEducators:"Educadores", navCommunity:"Recursos comunitarios", navAbout:"Nosotros", navContact:"Contacto",
    welcome:"¡Bienvenidos a Bridge ESOL!",
    heroCopy:"Ayudamos a estudiantes multilingües, familias y educadores a conectarse con recursos.",
    findResources:"⌕  Buscar recursos", askBridge:"◌  Preguntar a Bridge AI",
    familiesTitle:"Familias", familiesText:"Acceda a guías, herramientas y recursos para apoyar la educación y el éxito de su hijo.", familiesLink:"Explorar recursos para familias →",
    educatorsTitle:"Educadores", educatorsText:"Encuentre apoyos para lecciones, estrategias diferenciadas y herramientas de IA para su salón.", educatorsLink:"Explorar herramientas para educadores →",
    communityTitle:"Recursos comunitarios", communityText:"Descubra programas, servicios y apoyo local para familias multilingües.", communityLink:"Explorar recursos comunitarios →",
    missionTitle:"Nuestra misión", missionText:"Bridge ESOL empodera a los estudiantes multilingües y a quienes los apoyan con información, herramientas y oportunidades para prosperar.",
    familyEyebrow:"Para familias", familyHeading:"Navegue la escuela con confianza.", familyIntro:"Comience con una de estas guías prácticas.",
    enrollTitle:"Inscripción escolar", enrollText:"Conozca qué documentos llevar y qué preguntas hacer.",
    conferenceTitle:"Conferencias de padres", conferenceText:"Prepare preguntas sobre calificaciones, desarrollo del idioma y apoyo.",
    homeTitle:"Aprendizaje en casa", homeText:"Use rutinas sencillas para fortalecer la lectura y el vocabulario.",
    educatorEyebrow:"Para educadores", educatorHeading:"Diferencie sin comenzar de nuevo.", educatorIntro:"Herramientas prácticas para apoyar a estudiantes de inglés.",
    lessonTitle:"Diferenciación de lecciones", lessonText:"Ajuste los apoyos lingüísticos manteniendo el mismo objetivo.",
    framesTitle:"Marcos de oraciones", framesText:"Ofrezca estructuras lingüísticas para hablar y escribir.",
    familyCommTitle:"Comunicación familiar", familyCommText:"Cree mensajes claros, respetuosos y listos para traducir.",
    communityEyebrow:"Apoyo comunitario", communityHeading:"Conéctese con ayuda local.", communityIntro:"Este directorio crecerá a medida que se añadan socios verificados.",
    adultTitle:"Clases de inglés para adultos", adultText:"Encuentre oportunidades locales para aprender inglés.",
    foodTitle:"Alimentos y apoyo familiar", foodText:"Localice asistencia alimentaria y servicios para familias.",
    libraryTitle:"Bibliotecas y aprendizaje", libraryText:"Explore programas gratuitos, tecnología, libros y tutoría.",
    contactEyebrow:"Contacto", contactHeading:"Ayúdenos a mejorar Bridge ESOL.", contactText:"Comparta una idea de recurso o díganos qué necesita su familia, salón o comunidad.", contactButton:"Enviar un correo",
    footer:"Conectando a familias multilingües, educadores y comunidades."
  },
  ht: {
    navFamilies:"Fanmi", navEducators:"Edikatè", navCommunity:"Resous kominotè", navAbout:"Konsènan nou", navContact:"Kontak",
    welcome:"Byenveni nan Bridge ESOL!",
    heroCopy:"N ap ede elèv ki pale plizyè lang, fanmi ak edikatè konekte ak resous.",
    findResources:"⌕  Jwenn resous", askBridge:"◌  Mande Bridge AI",
    familiesTitle:"Fanmi", familiesText:"Jwenn gid, zouti ak resous pou sipòte edikasyon ak siksè pitit ou.", familiesLink:"Gade resous pou fanmi →",
    educatorsTitle:"Edikatè", educatorsText:"Jwenn sipò pou leson, estrateji diferansye ak zouti AI pou klas ou.", educatorsLink:"Gade zouti pou edikatè →",
    communityTitle:"Resous kominotè", communityText:"Dekouvri pwogram, sèvis ak sipò lokal pou fanmi ki pale plizyè lang.", communityLink:"Gade resous kominotè →",
    missionTitle:"Misyon nou", missionText:"Bridge ESOL bay elèv ki pale plizyè lang ak moun k ap sipòte yo enfòmasyon, zouti ak opòtinite pou yo reyisi.",
    familyEyebrow:"Pou fanmi", familyHeading:"Navige lekòl avèk konfyans.", familyIntro:"Kòmanse ak youn nan gid pratik sa yo.",
    enrollTitle:"Enskripsyon lekòl", enrollText:"Aprann ki dokiman pou pote ak ki kesyon pou poze.",
    conferenceTitle:"Konferans paran", conferenceText:"Prepare kesyon sou nòt, devlopman lang ak sipò.",
    homeTitle:"Aprantisaj lakay", homeText:"Sèvi ak woutin senp pou devlope lekti ak vokabilè.",
    educatorEyebrow:"Pou edikatè", educatorHeading:"Diferansye san rekòmanse.", educatorIntro:"Zouti pratik pou sipòte elèv k ap aprann anglè.",
    lessonTitle:"Diferansyasyon leson", lessonText:"Ajiste sipò lang pandan w kenbe menm objektif la.",
    framesTitle:"Kad fraz", framesText:"Bay elèv yo estrikti lang pou pale ak ekri.",
    familyCommTitle:"Kominikasyon ak fanmi", familyCommText:"Kreye mesaj klè, respekte ak fasil pou tradui.",
    communityEyebrow:"Sipò kominotè", communityHeading:"Konekte ak èd lokal.", communityIntro:"Anyè sa a ap grandi pandan n ap ajoute patnè verifye.",
    adultTitle:"Klas anglè pou granmoun", adultText:"Jwenn opòtinite lokal pou aprann anglè.",
    foodTitle:"Manje ak sipò fanmi", foodText:"Jwenn asistans manje ak sèvis pou fanmi.",
    libraryTitle:"Bibliyotèk ak aprantisaj", libraryText:"Eksplore pwogram gratis, teknoloji, liv ak leson patikilye.",
    contactEyebrow:"Kontak", contactHeading:"Ede nou amelyore Bridge ESOL.", contactText:"Pataje yon lide resous oswa di nou sa fanmi, klas oswa kominote ou bezwen.", contactButton:"Voye yon imèl",
    footer:"Konekte fanmi ki pale plizyè lang, edikatè ak kominote."
  },
  pt: {
    navFamilies:"Famílias", navEducators:"Educadores", navCommunity:"Recursos comunitários", navAbout:"Sobre nós", navContact:"Contato",
    welcome:"Bem-vindos ao Bridge ESOL!",
    heroCopy:"Ajudando alunos multilíngues, famílias e educadores a se conectarem com recursos.",
    findResources:"⌕  Encontrar recursos", askBridge:"◌  Perguntar ao Bridge AI",
    familiesTitle:"Famílias", familiesText:"Acesse guias, ferramentas e recursos para apoiar a educação e o sucesso de seu filho.", familiesLink:"Explorar recursos para famílias →",
    educatorsTitle:"Educadores", educatorsText:"Encontre apoio para aulas, estratégias diferenciadas e ferramentas de IA para sua sala.", educatorsLink:"Explorar ferramentas para educadores →",
    communityTitle:"Recursos comunitários", communityText:"Descubra programas, serviços e apoio local para famílias multilíngues.", communityLink:"Explorar recursos comunitários →",
    missionTitle:"Nossa missão", missionText:"O Bridge ESOL fortalece alunos multilíngues e as pessoas que os apoiam com informações, ferramentas e oportunidades para prosperar.",
    familyEyebrow:"Para famílias", familyHeading:"Navegue pela escola com confiança.", familyIntro:"Comece com um destes guias práticos.",
    enrollTitle:"Matrícula escolar", enrollText:"Saiba quais documentos levar e quais perguntas fazer.",
    conferenceTitle:"Reuniões com professores", conferenceText:"Prepare perguntas sobre notas, desenvolvimento linguístico e apoio.",
    homeTitle:"Aprendizagem em casa", homeText:"Use rotinas simples para desenvolver leitura e vocabulário.",
    educatorEyebrow:"Para educadores", educatorHeading:"Diferencie sem começar do zero.", educatorIntro:"Ferramentas práticas para apoiar alunos de inglês.",
    lessonTitle:"Diferenciação de aulas", lessonText:"Ajuste os apoios linguísticos mantendo o mesmo objetivo.",
    framesTitle:"Estruturas de frases", framesText:"Ofereça estruturas linguísticas para falar e escrever.",
    familyCommTitle:"Comunicação com famílias", familyCommText:"Crie mensagens claras, respeitosas e prontas para tradução.",
    communityEyebrow:"Apoio comunitário", communityHeading:"Conecte-se com ajuda local.", communityIntro:"Este diretório crescerá à medida que parceiros verificados forem adicionados.",
    adultTitle:"Aulas de inglês para adultos", adultText:"Encontre oportunidades locais para aprender inglês.",
    foodTitle:"Alimentação e apoio familiar", foodText:"Localize assistência alimentar e serviços para famílias.",
    libraryTitle:"Bibliotecas e aprendizagem", libraryText:"Explore programas gratuitos, tecnologia, livros e tutoria.",
    contactEyebrow:"Contato", contactHeading:"Ajude-nos a melhorar o Bridge ESOL.", contactText:"Compartilhe uma ideia de recurso ou diga o que sua família, sala ou comunidade precisa.", contactButton:"Enviar e-mail",
    footer:"Conectando famílias multilíngues, educadores e comunidades."
  }
};

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  localStorage.setItem("bridgeESOLLanguage", language);
}

const languageSelect = document.getElementById("languageSelect");
const savedLanguage = localStorage.getItem("bridgeESOLLanguage") || "en";
languageSelect.value = savedLanguage;
applyLanguage(savedLanguage);
languageSelect.addEventListener("change", event => applyLanguage(event.target.value));
