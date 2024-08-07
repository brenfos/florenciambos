document.addEventListener('DOMContentLoaded', function () {
    const textContent = {
        es: {
            /*Navbar*/
            about: "Sobre mí",
            home: "Inicio",
            studies: "Educación",
            services: "Servicios",
            subtitles: "Subtitulados",
            publicTranslations: "Traducciones Públicas",
            contact: "Contacto",
            /*Inicio*/
            hello: '¡Hola, Soy <span class="highlight">Flor!<svg class="brush-container" viewBox="0 0 250 150"><path id="brushPath" d="M30,75 Q60,20 120,20 T220,75 Q250,130 160,130 T30,60 Q10,30 90,30" fill="none" stroke="black" stroke-width="2" /></svg></span>',
            inicioprofesion: "Soy Traductora Pública y Audiovisual",
            iniciospeach: "Traduce tus visiones al mundo. Da vida a tus creaciones audiovisuales.",
            inicioenes: "TRADUCCIONES INGLÉS - ESPAÑOL",
            /*Sobre mí*/
            abouttext: "Soy traductora Pública y Audiovisual. Recibida en la Universidad CAECE de Mar del Plata en el año 2012, y desde entonces que me dedico activamente a la traducción. ",
            abouttitle: "Traducciones Inglés - Español",
            abouttext2: "¿Por qué elegí la traducción?",
            abouttext3: "Descubrí mi pasión por la lengua inglesa y la lingüística a muy temprana edad. Desde pequeña siempre consumí todo tipo de contenido en inglés, me interesaba escuchar cómo hablaban y entender culturas distintas a la mía. Lo primero que me cautivó de la lengua inglesa fue la música – me fascinaba entender lo que cantaban mis bandas favoritas, para mí era un superpoder. De adolescente, me empezó a maravillar el cine. <br> La magia de los subtítulos me permitió sumergirme aún más en mundos que, de otro modo, habrían permanecido separados. Esta fascinación por el cine y la música, junto con mi amor por el inglés, me llevaron a descubrir una carrera que une todas mis pasiones: la <strong>traducción audiovisual</strong>. <br>A lo largo de los años, he tenido el privilegio de trabajar en proyectos diversos que abarcan desde películas y series hasta videos empresariales y documentales, siempre con el objetivo de transmitir fielmente la esencia y el estilo del contenido original. Mi conocimiento de las diferentes culturas me permite localizar adecuadamente el contenido para la audiencia meta.<br> Mi formación académica y mi experiencia profesional me han permitido perfeccionar mis habilidades en este campo, y cada nuevo proyecto es una oportunidad para fusionar mi amor por la lengua y la cultura con mi deseo de conectar a personas de diferentes orígenes a través del poder de la traducción audiovisual.",
            abouttext4: "¿Cuál es mi especialización?",
            abouttext5: "Mi mayor área de especialización es el <strong>subtitulado</strong> y los <strong>subtítulos para personas sordas</strong> (SpS, CC o SDH). Traduzco todo tipo de contenido audiovisual: películas, series, documentales y videos empresariales. <br>También soy <strong>Traductora Pública</strong>, matriculada en el Colegio de Traductores Públicos de la Ciudad de Buenos Aires (CTPCBA).",      
            /*Educación*/
            caeceTitle1: "Universidad CAECE",
            caeceTitle2: " Mar del Plata, Argentina",
            swornTranslator: "Traductora Pública",
            techTranslator: "Traductora Técnico-Científica",
            caeceDates1: "Inglés - Español, 2008 - 2013",
            bsasTitle: "As. de Traductores Públicos\n en Buenos Aires",
            swornTranslatorCourse: "Miembro del Colegio de Traductores Públicos de la Ciudad de Buenos Aires (CTPCBA)",
            /*Cursos*/
            courses: "Cursos",
            curso1: "Introducción a OOONA",
            by1: "Curso dictado por Damián Santilli, Traductor Público y Audiovisual.",
            curso2: "Especialización en Subtitulado, nivel II",
            by2: "Curso dictado por Damián Santilli y Mariana Costa, Traductores Públicos y Audiovisuales.",
            curso3: "Especialización en Subtitulado, nivel I",
            curso4: "Inglés para Traducciones Legales",
            by4: "Cuso dictado por Ricardo Chiessa, Abogado y Traductor Público.",
            curso5: "Subtitulado y Doblaje",      
            by5: "Curso dictado por Silvina Pontrémoli, Traductora y Profesora de Inglés.",   
            curso6: "III Jornadas Internacionales de Traducción e Interpretación",   
            by6: "Disertantes: Xosé Castro Roig, Liliana Bernardita Mariotto, Damián Santilli, Mariana Costa, entre otros.",
            /*Subtitulados*/
            titlesub: "Subtitulados",
            contentsub: "¡Transforma tu contenido con precisión y profesionalismo!", 
            contentsub2: "¡Bienvenido a mis servicios de traducción y subtitulación! Aquí, transformaré tu contenido audiovisual en una experiencia accesible para audiencias globales:", 
            contentsub3: "Puedo llevar tu proyecto audiovisual al siguiente nivel. Con experiencia en múltiples producciones, garantizo resultados de alta calidad con un enfoque personalizado y eficiente.",
            titlesub2: "Ofrezco los siguientes servicios de traducción audiovisual:",
            subtipelis: "Subtitulado de Películas",
            subtitv: "Subtitulado de Programas<br> de TV y Animación",
            subtidocu: "Subtitulado de Producciones Documentales",
            videocorp: "Subtitulado de videos Corporativos",
            subtientre: "Subtitulado de Presentaciones<br>y Entrevistas",
            subtivideopromo: "Subtitulado de videos Promocionales",
            subtionline: "Subtitulado de Tutoriales <br>y Cursos en línea",
            subtiytb: "Subtitulado de contenido<br> para YouTube",
            /*Costos*/
            titlevalor: "¿Cómo se cobra un proyecto audiovisual?",
            textolongvalor: "Los costos para un proyecto de subtitulación dependen de múltiples aspectos, tales como:",
            valor1: "Duración",
            pvalor1: "El costo se calcula generalmente por minuto de video.",
            valor2: "Calidad",
            pvalor2: "¿La calidad del sonido es buena o mala? ¿Hay interferencias en el sonido?",
            valor3: "Vocabulario Técnico",
            pvalor3: "Contenido con terminología específica que puede requerir investigación adicional o conocimientos aplicados.",
            valor4: "Plazos",
            pvalor4: "¿Qué tan urgente es tu proyecto? ¿Necesitas una entrega rápida? ¿El proyecto requiere trabajo durante el fin de semana?",
            /*Traducciones Públcias*/        
            tradutitle: "Traducciones Públicas",
            ptradu1: "Una traducción pública es la traducción de un documento que, para que sea válido en la lengua meta, debe ser traducido por un traductor certificado, es decir, un traductor público. Los traductores públicos certifican los documentos que traducen con su firma y su sello. Esto significa que el traductor se hace completamente responsable de la fidelidad del documento. Esta garantía le da un valor legal, formal y oficial al documento y lo vuelve equivalente al documento original.",
            tradutitle2: "Ejemplos de documentos que requieren traducciones públicas:",
            certi: "Certificados de nacimiento, de defunción o de matrimonio",
            balance: "Balances comerciales e informes de auditorías",
            contrato: "Contratos",
            estatutos: "Estatutos",
            declajura: "Declaraciones juradas",
            diplo: "Diplomas",
            docuacad: "Documentos académicos",
            financial: "Documentos financieros",
            podnota: "Poderes notariales",
            /*Contacto*/
            contact2: "¡Contactame desde cualquier lugar del mundo!",
            pcontact2: "Contáctate conmigo:",
        },
        en: { 
            /*Navbar*/
            about: "About Me",
            home: "Home",
            studies: "Education",
            services: "Services",
            subtitles: "Subtitling",
            publicTranslations: "Sworn Translations",
            contact: "Contact",
            /*Home*/
            hello: 'Hello, I am <span class="highlight">Flor!<svg class="brush-container" viewBox="0 0 250 150"><path id="brushPath" d="M30,75 Q60,20 120,20 T220,75 Q250,130 160,130 T30,60 Q10,30 90,30" fill="none" stroke="black" stroke-width="2" /></svg></span>',
            inicioprofesion: "I am an Audiovisual and Sworn Translator.",
            iniciospeach: "Let's bring your stories to life, seamlessly bridging languages and cultures.",
            inicioenes: "ENGLISH - SPANISH TRANSLATIONS",
            /*About me*/
            abouttext: "I am a Sworn and Audiovisual Translator, actively working since the year 2012.",
            abouttitle: "English - Spanish Translations",
            abouttext2: "Why did I choose translation?",
            abouttext3: "I discovered my passion for the English language and linguistics very early on. Ever since I was a little kid, I have been consuming all types of English content, I thrived in listening to the language and understanding foreign cultures. The first thing that caught my attention was music – I was delighted by the idea of understanding what my favorite bands were singing. It felt like a super power. As a teenager, I was increasingly drawn to the world of movies.<br>The magic of subtitles allowed me to immerse myself in universes that would have been kept separate otherwise. My fascination for music and movies, plus my love for the English language, made me discover a career that connects all my passions – <strong> Audiovisual Translation.</strong> <br>Throughout the years, I have had the privilege of working in different projects that range from movies and TV shows to corporate videos and documentaries. My goal has always been to faithfully transmit the essence and style of the original content, and my knowledge of the different cultures makes it easy for me to localize the content for the target audience. <br>My academic background and professional experience have been crucial in shaping my skill set. Each new project presents an opportunity to blend my passion for language, linguistics, and Anglo-Saxon culture with my commitment to bridging cultural gaps through the power of audiovisual translation.",
            abouttext4: "What are my specialties?",
            abouttext5: "I specialize in <strong>Subtitling</strong>, <strong>Closed Captioning</strong>, <strong>SDH</strong>, and <strong>QC</strong> across a wide range of movies, TV shows, documentaries, and corporate videos. <br> Also, I am a <strong>Sworn Translator</strong>, I am enrolled in Sworn Translators Association in Buenos Aires (CTPCBA), so I am equipped to assist you with all your certified translation requirements.",
            /*Education*/
            caeceTitle1: "CAECE University",
            swornTranslator: "Sworn Translator",
            techTranslator: "Technical-Scientific Translator",
            caeceDates1: "English - Spanish, 2008 - 2013",
            bsasTitle: "Sworn Translators Association in Buenos Aires",
            swornTranslatorCourse: "Member of the Sworn Translators Association in Buenos Aires (CTPCBA)",
            /*Courses*/
            courses: "Courses",
            curso1: "Introduction to OOONA",
            by1: "Course given by Damián Santilli, Audiovisual and Sworn Translator.",
            curso2: "Specialization in Subtitling, level II",
            by2: "Course given by Damián Santilli and Mariana Costa, Audiovisual and Sworn Translators.",            
            curso3: "Specialization in Subtitling, level I",
            curso4: "English for Legal Translations",
            by4: "Course given by Lawyer and Sworn Translator Ricardo Chiessa.",
            curso5: "Subtitling and Dubbing",
            by5: "Course given by Silvina Pontrémoli, Translator and English Teacher.",
            curso6: "III International Seminar on Translation  and Interpretation",
            by6: "Special guest speakers: Xosé Castro Roig, Liliana Bernardita Mariotto, Damián Santilli, among others.",
            /*Subtitling*/
            contentsub: "Transform your content with precision and professionalism!",
            contentsub2: "Welcome to my translation and subtitling services! Here, I will transform your audiovisual content into an accessible experience for global audiences:",
            contentsub3: "I can take your audiovisual project to the next level. With experience in multiple productions, I guarantee high quality results with a personalized and efficient approach.", 
            titlesub2: "I offer the following audiovisual services:",
            subtipelis: "Subtitling of Movies",
            subtitv: "Subtitling of TV <br> and Animation shows" ,
            titlesub: "Subtitling",
            subtidocu: "Subtitling of Documentaries",
            videocorp: "Subtitling of Corporate videos",
            subtientre: "Subtitling of Presentations <br>  and Interviews",
            subtivideopromo: "Subtitling of Publicity videos",
            subtionline: "Subtitling of Tutorials <br> and Online Courses",
            subtiytb: "Subtitling of YouTube content",
            /*Coasts*/
            titlevalor: "What are the costs of an audiovisual project?",
            textolongvalor: "The costs for a subtitling project depend on multiple aspects, such as:",
            valor1: "Duration",
            pvalor1: "The cost is usually calculated per minute of video.",
            valor2: "Quality",
            pvalor2: "Is the sound quality good or bad? Are there interferences in the sound?",
            valor3: "Technical vocabulary",
            pvalor3: "Content with specific terminology that might require additional research or applied knowledge.",
            valor4: "Deadlines",
            pvalor4: "How urgent is your project? Do you need an overnight delivery? Does the project require me working on the weekend?",
            /*Sworn Translations*/
            tradutitle: "Sworn Translations",
            ptradu1: "A sworn translation is a translation of document which, in order to be legally valid in the target language, must have been translated by an officially accredited translator, a “sworn translator”. Only authorized, certified sworn translators can provide sworn translations.",
            ptradu2: "Sworn translators endorse the documents they translate with their signature and seal. This means that the translator takes full responsibility for the accuracy of the document. This endorsement grants the document an official, formal status and a legal value that is equivalent to the original document.",
            tradutitle2: "Examples of documents that require a sworn translation:",
            certi: "Birth, Death or Marriage certificate",
            balance: "Commercial Balance Sheets and Audit Reports",
            contrato: "General contracts",
            estatuto: "Articles of Incorporation and Bylaws",
            declajura: "Income Tax Returns",
            diplo: "Diploma",
            docuacad: "School Documents (Elementary and High School Certificates, University Diplomas and School Transcripts)",
            financial: "Financial Documents",
            podnota: "Powers of attorney",
            /*Contacto*/
            contact2: "Contact me from anywhere in the world!",
            pcontact2: "Contact me or follow me at:",
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(elem => {
            const key = elem.getAttribute('data-lang');
            if (key) {
                const text = textContent[lang][key];
                if (text) {
                    if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                        elem.placeholder = text;
                    } else {
                        elem.innerHTML = text;
                    }
                    if (elem.hasAttribute('title')) {
                        elem.title = text;
                    }
                }
            }
        });
    }

    document.getElementById('esButton').addEventListener('click', () => {
        setLanguage('es');
        localStorage.setItem('language', 'es');
    });
    document.getElementById('enButton').addEventListener('click', () => {
        setLanguage('en');
        localStorage.setItem('language', 'en');
    });

    // Guardar lenguaje predeterminado en ls
    const savedLanguage = localStorage.getItem('language') || 'es';
    setLanguage(savedLanguage);
});

$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});