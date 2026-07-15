
const translations = {
  en: {
    families:"Families", educators:"Educators", community:"Community Resources",
    about:"About Us", contact:"Contact",
    welcome:"Welcome! Bienvenidos! Byenveni! Bem-vindos!",
    heroText:"Helping multilingual students, families, and educators connect with resources.",
    findResources:"Find Resources", askBridge:"Ask Bridge AI",
    familiesText:"Access guides, tools, and resources to support your child's education and success.",
    educatorsText:"Find lesson supports, differentiated instruction strategies, and AI-powered tools for your classroom.",
    communityText:"Discover local programs, services, and support for multilingual families.",
    missionTitle:"Our Mission",
    missionText:"Bridge ESOL empowers multilingual learners and the people who support them with information, tools, and opportunities to thrive.",
    schoolTitle:"Navigate school with confidence.",
    enrollTitle:"School Enrollment", enrollText:"Learn what documents to bring and what questions to ask.",
    conferenceTitle:"Parent Conferences", conferenceText:"Prepare questions about grades, language growth, and support.",
    homeTitle:"Learning at Home", homeText:"Use simple routines to build reading and vocabulary skills.",
    contactTitle:"Help us improve Bridge ESOL.", email:"Send an Email"
  },
  es: {
    families:"Familias", educators:"Educadores", community:"Recursos comunitarios",
    about:"Nosotros", contact:"Contacto",
    welcome:"¡Bienvenidos a Bridge ESOL!",
    heroText:"Ayudamos a estudiantes multilingües, familias y educadores a conectarse con recursos.",
    findResources:"Buscar recursos", askBridge:"Preguntar a Bridge AI",
    familiesText:"Acceda a guías, herramientas y recursos para apoyar la educación y el éxito de su hijo.",
    educatorsText:"Encuentre apoyo para lecciones, estrategias diferenciadas y herramientas de IA para su salón.",
    communityText:"Descubra programas, servicios y apoyo local para familias multilingües.",
    missionTitle:"Nuestra misión",
    missionText:"Bridge ESOL empodera a los estudiantes multilingües y a quienes los apoyan con información, herramientas y oportunidades.",
    schoolTitle:"Navegue la escuela con confianza.",
    enrollTitle:"Inscripción escolar", enrollText:"Conozca qué documentos llevar y qué preguntas hacer.",
    conferenceTitle:"Conferencias de padres", conferenceText:"Prepare preguntas sobre calificaciones, desarrollo del idioma y apoyo.",
    homeTitle:"Aprendizaje en casa", homeText:"Use rutinas sencillas para fortalecer la lectura y el vocabulario.",
    contactTitle:"Ayúdenos a mejorar Bridge ESOL.", email:"Enviar un correo"
  },
  ht: {
    families:"Fanmi", educators:"Edikatè", community:"Resous kominotè",
    about:"Konsènan nou", contact:"Kontak",
    welcome:"Byenveni nan Bridge ESOL!",
    heroText:"N ap ede elèv ki pale plizyè lang, fanmi ak edikatè konekte ak resous.",
    findResources:"Jwenn resous", askBridge:"Mande Bridge AI",
    familiesText:"Jwenn gid, zouti ak resous pou sipòte edikasyon ak siksè pitit ou.",
    educatorsText:"Jwenn sipò pou leson, estrateji diferansye ak zouti AI pou klas ou.",
    communityText:"Dekouvri pwogram, sèvis ak sipò lokal pou fanmi ki pale plizyè lang.",
    missionTitle:"Misyon nou",
    missionText:"Bridge ESOL bay elèv ki pale plizyè lang ak moun k ap sipòte yo enfòmasyon, zouti ak opòtinite.",
    schoolTitle:"Navige lekòl avèk konfyans.",
    enrollTitle:"Enskripsyon lekòl", enrollText:"Aprann ki dokiman pou pote ak ki kesyon pou poze.",
    conferenceTitle:"Konferans paran", conferenceText:"Prepare kesyon sou nòt, devlopman lang ak sipò.",
    homeTitle:"Aprantisaj lakay", homeText:"Sèvi ak woutin senp pou devlope lekti ak vokabilè.",
    contactTitle:"Ede nou amelyore Bridge ESOL.", email:"Voye yon imèl"
  },
  pt: {
    families:"Famílias", educators:"Educadores", community:"Recursos comunitários",
    about:"Sobre nós", contact:"Contato",
    welcome:"Bem-vindos ao Bridge ESOL!",
    heroText:"Ajudando alunos multilíngues, famílias e educadores a se conectarem com recursos.",
    findResources:"Encontrar recursos", askBridge:"Perguntar ao Bridge AI",
    familiesText:"Acesse guias, ferramentas e recursos para apoiar a educação e o sucesso de seu filho.",
    educatorsText:"Encontre apoio para aulas, estratégias diferenciadas e ferramentas de IA para sua sala.",
    communityText:"Descubra programas, serviços e apoio local para famílias multilíngues.",
    missionTitle:"Nossa missão",
    missionText:"O Bridge ESOL fortalece alunos multilíngues e as pessoas que os apoiam com informações, ferramentas e oportunidades.",
    schoolTitle:"Navegue pela escola com confiança.",
    enrollTitle:"Matrícula escolar", enrollText:"Saiba quais documentos levar e quais perguntas fazer.",
    conferenceTitle:"Reuniões com professores", conferenceText:"Prepare perguntas sobre notas, desenvolvimento linguístico e apoio.",
    homeTitle:"Aprendizagem em casa", homeText:"Use rotinas simples para desenvolver leitura e vocabulário.",
    contactTitle:"Ajude-nos a melhorar o Bridge ESOL.", email:"Enviar e-mail"
  }
};

function changeLanguage(lang){
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(dict[key]) el.textContent = dict[key];
  });
  localStorage.setItem("bridgeLanguage",lang);
}

const selector=document.getElementById("languageSelect");
const saved=localStorage.getItem("bridgeLanguage")||"en";
selector.value=saved;
changeLanguage(saved);
selector.addEventListener("change",e=>changeLanguage(e.target.value));

document.getElementById("askBridge").addEventListener("click",()=>{
  alert("Bridge AI is coming soon.");
});
