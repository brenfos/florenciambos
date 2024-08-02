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
            inicioprofesion: "Soy Traductora Pública y Audiovisual",
            iniciospeach: "Traduce tus visiones al mundo. Da vida a tus creaciones audiovisuales.",
            inicioenes: "TRADUCCIONES INGLÉS - ESPAÑOL",
            /*Sobre mí*/
            abouttext: "Soy traductora Pública y Audiovisual. Recibida en la Universidad CAECE de Mar del Plata en el año 2012, y desde entonces que me dedico activamente a la traducción. ",
            abouttitle: "Traducciones Inglés - Español",
            abouttext2: "¿Por qué elegí la traducción?",
            abouttext3: "Descubrí mi pasión por la lengua inglesa y la lingüística a muy temprana edad. Desde pequeña siempre consumí todo tipo de contenido en inglés, me interesaba escuchar cómo hablaban y entender culturas distintas a la mía. Lo primero que me cautivó de la lengua inglesa fue la música – me fascinaba entender lo que cantaban mis bandas favoritas, para mí era un superpoder. De adolescente, me empezó a maravillar el cine. La magia de los subtítulos me permitió sumergirme aún más en mundos que, de otro modo, habrían permanecido separados. Esta fascinación por el cine y la música, junto con mi amor por el inglés, me llevaron a descubrir una carrera que une todas mis pasiones: la traducción audiovisual. A lo largo de los años, he tenido el privilegio de trabajar en proyectos diversos que abarcan desde películas y series hasta videos empresariales y documentales, siempre con el objetivo de transmitir fielmente la esencia y el estilo del contenido original. Mi conocimiento de las diferentes culturas me permite localizar adecuadamente el contenido para la audiencia meta. Mi formación académica y mi experiencia profesional me han permitido perfeccionar mis habilidades en este campo, y cada nuevo proyecto es una oportunidad para fusionar mi amor por la lengua y la cultura con mi deseo de conectar a personas de diferentes orígenes a través del poder de la traducción audiovisual.",
            abouttext4: "¿Cuál es mi especialización?",
            abouttext5: "Mi mayor área de especialización es el subtitulado y los subtítulos para personas sordas (SpS, CC o SDH). Traduzco todo tipo de contenido audiovisual: películas, series, documentales y videos empresariales. También soy Traductora Pública, matriculada en el Colegio de Traductores Públicos de la Ciudad de Buenos Aires (CTPCBA).",      
            /*Educación*/
            caeceTitle1: "Universidad CAECE",
            caeceTitle2: " Mar del Plata, Argentina",
            swornTranslator: "Traductora Pública",
            techTranslator: "Traductora Técnico-Científica",
            caeceDates1: "Inglés - Español, 2008 - 2013",
            bsasTitle: "As. de Traductores Públicos\n en Buenos Aires",
            courses: "Cursos",
            titlesub: "Subtitulados",
            contentsub: "Transforma tu contenido con precisión y profesionalismo: ¡Bienvenido a mis servicios de traducción y subtitulación! Aquí, transformaré tu contenido audiovisual en una experiencia accesible para audiencias globales. Puedo llevar tu proyecto audiovisual al siguiente nivel. Con experiencia en múltiples producciones, garantizo resultados de alta calidad con un enfoque personalizado y eficiente.",
            titlesub2: "Ofrezco los siguientes servicios de traducción audiovisual:",
            subtipelis: "Subtitulado de Películas",
            subtitv: "Subtitulado de Programas\n de TV y Animación",
            subtidocu: "Subtitulado de Producciones Documentales",
            videocorp: "Subtitulado de videos Corporativos",
            subtientre: "Subtitulado de Presentaciones \n y Entrevistas",
            subtivideopromo: "Subtitulado de videos Promocionales",
            subtionline: "Subtitulado de Tutoriales \n y Cursos en línea",
            subtiytb: "Subtitulado de contenido \n para YouTube",
            titlevalor: "¿Cómo se cobra un proyecto audiovisual?",
            textolongsubti: "Los costos para un proyecto de subtitulación dependen de múltiples aspectos, tales como: Duración del video (el costo usualmente se calcula por minuto de video) Calidad del video (¿La calidad del sonido es buena o mala? ¿Hay interferencias en el sonido?) Vocabulario técnico (por ejemplo, contenido con terminología específica que pueda requerir investigación adicional o conocimiento aplicado) Plazos (¿Qué tan urgente es tu proyecto? ¿Necesitas una entrega de la noche a la mañana? ¿El proyecto requiere que trabaje el fin de semana?)",
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
            podnota: "Poderes notariales",
            
        },
        
        en: {
          about: "About Me",
            home: "Home",
            studies: "Education",
            services: "Services",
            subtitles: "Subtitling",
            publicTranslations: "Sworn Translations",
            contact: "Contact",
            inicioprofesion: "I am an Audiovisual and Sworn Translator.",
            iniciospeach: "Let's bring your stories to life, seamlessly bridging languages and cultures.",
            inicioenes: "ENGLISH - SPANISH TRANSLATIONS",
            abouttext: "I am a Sworn and Audiovisual Translator, actively working since the year 2012.",
            caeceTitle1: "CAECE University",
            swornTranslator: "Sworn Translator",
            techTranslator: "Technical-Scientific Translator",
            caeceDates1: "English - Spanish, 2008 - 2013",
            bsasTitle: "Sworn Translators Association in Buenos Aires",
            swornTranslatorCourse: "Briefly introduce the designer's connection to the institution",
            courses: "Courses",
            course1: "2023: Introduction to OOONA, by Damián Santilli",
            course2: "2018 - 2020: Specialization in Subtitling, levels I and II, by Damián Santilli and Mariana Costa",
            course4: "2013: Subtitling and Dubbing. Advanced course by Silvina Pontrémoli.",
            course3: "2014: English for Legal Translations, by Ricardo Chiessa",
            course5: "2011: III International Seminar on Translation and Interpretation.Special guest speakers: Xosé Castro Roig, Liliana Bernardita Mariotto, Damián Santilli, among others",
            contentsub: "Transform your content with precision and professionalism: Welcome to my translation and subtitling services! Here, I will transform your audiovisual content into an accessible experience for global audiences. I can take your audiovisual project to the next level. With experience in multiple productions, I guarantee high quality results with a personalized and efficient approach.",
            titlesub2: "I offer the following audiovisual services:",
            subtipelis: "Subtitling of Movies",
            subtitv: "Subtitling of TV \n and Animation shows" ,
            titlesub: "Subtitling",
            subtidocu: "Subtitling of Documentaries",
            videocorp: "Subtitling of Corporate videos",
            subtientre: "Subtitling of Presentations \n  and Interviews",
            subtivideopromo: "Subtitling of Publicity videos",
            subtionline: "Subtitling of Tutorials \n and Online Courses",
            subtiytb: "Subtitling of YouTube content",
            titlevalor: "What are the costs of an audiovisual project?",
            textolongsubti: "The costs for a subtitling project depend on multiple aspects, such as: Duration of the video (the cost is usually calculated per minute of video) Quality of the video (Is the sound quality good or bad? Are there interferences in the sound?) Technical vocabulary (for example, content with specific terminology that might require additional research or applied knowledge) Deadlines (How urgent is your project? Do you need an overnight delivery? Does the project require me working on the weekend?)",
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
            podnota: "Powers of attorney",
            abouttitle: "English - Spanish Translations",
            abouttext2: "Why did I choose translation?",
            abouttext3: "I discovered my passion for the English language and linguistics very early on. Ever since I was a little kid, I have been consuming all types of English content, I thrived in listening to the language and understanding foreign cultures. The first thing that caught my attention was music – I was delighted by the idea of understanding what my favorite bands were singing. It felt like a super power. As a teenager, I was increasingly drawn to the world of movies. The magic of subtitles allowed me to immerse myself in universes that would have been kept separate otherwise. My fascination for music and movies, plus my love for the English language, made me discover a career that connects all my passions – Audiovisual Translation. Throughout the years, I have had the privilege of working in different projects that range from movies and TV shows to corporate videos and documentaries. My goal has always been to faithfully transmit the essence and style of the original content, and my knowledge of the different cultures makes it easy for me to localize the content for the target audience. My academic background and professional experience have been crucial in shaping my skill set. Each new project presents an opportunity to blend my passion for language, linguistics, and Anglo-Saxon culture with my commitment to bridging cultural gaps through the power of audiovisual translation.",
            abouttext4: "What are my specialties?",
            abouttext5: "I specialize in Subtitling, Closed Captioning, SDH, and QC across a wide range of movies, TV shows, documentaries, and corporate videos. Also, I am a Sworn Translator, I am enrolled in the Buenos Aires Sworn Translators Association (CTPCBA), so I am equipped to assist you with all your certified translation requirements.",

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
                        elem.innerText = text;
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
