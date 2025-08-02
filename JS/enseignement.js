window.onload = function() {
    document.getElementById("loader").style.display = "none";
};
function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}
function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("overlay").style.display = "none";
}
function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    var submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}


        // Références aux éléments HTML principaux
        const classeDiv = document.getElementById('classe');
        const matieresDiv = document.querySelector('.matieres');
        const epreuvesDiv = document.getElementById('epreuves');

        // Contenu initial des titres des sections dynamiques
        const initialMatieresContent = '<h2 class="text-lg font-semibold mb-4 text-center">Matières</h2><p class="text-gray-600 text-center">Cliquez sur un niveau pour afficher les matières.</p>';
        const initialEpreuvesContent = '<h2 class="text-lg font-semibold mb-4 text-center">Épreuves</h2><p class="text-gray-600 text-center">Cliquez sur une matière pour afficher les épreuves.</p>';

        // Définition des données : matières par niveau
        const donneesMatieres = {
            "sixieme": ["Mathématiques", "Français", "Histoire-Géographie", "Sciences de la Vie et de la Terre", "Anglais"],
            "cinquieme": ["Mathématiques", "Français", "Physique-Chimie", "SVT", "Anglais", "Éducation Physique et Sportive"],
            "quatrieme": ["Mathématiques", "Français", "Physique-Chimie", "SVT", "Anglais", "Informatique"],
            "troisieme": ["Mathématiques", "Français", "Physique-Chimie", "SVT", "Anglais", "Technologie"],
            "seconde": ["Mathématiques", "Français", "Physique-Chimie", "SVT", "Histoire-Géographie", "Anglais", "Espagnol"],
            "premiere": ["Mathématiques", "Philosophie", "Physique-Chimie", "SVT", "Histoire-Géographie", "Anglais", "Spécialité NSI"],
            "terminale": ["Mathématiques", "Philosophie", "Physique-Chimie", "SVT", "Histoire-Géographie", "Anglais", "Spécialité Mathématiques Expertes"]
        };

        // Définition des données : épreuves par matière
        const donneesEpreuves = {
            "mathematiques": [
                "Épreuve de Mathématiques - Séquence 1",
                "Épreuve de Mathématiques - Séquence 2",
                "Épreuve de Mathématiques - Séquence 3",
                "Devoir Maison N°1"
            ],
            "francais": [
                "Épreuve de Français - Dictée",
                "Épreuve de Français - Grammaire",
                "Épreuve de Français - Rédaction"
            ],
            "histoire-geographie": [
                "Interrogation d'Histoire - La Révolution Française",
                "Évaluation de Géographie - Les Climats"
            ],
            "sciences-de-la-vie-et-de-la-terre": [
                "Contrôle de SVT - La Cellule",
                "Examen de SVT - Les Écosystèmes"
            ],
            "anglais": [
                "Évaluation d'Anglais - Compréhension Orale",
                "Évaluation d'Anglais - Expression Écrite"
            ],
            "physique-chimie": [
                "TP de Physique - Électricité",
                "Interro de Chimie - Les Atomes"
            ],
            "education-physique-et-sportive": [
                "Évaluation EPS - Athlétisme",
                "Évaluation EPS - Sports Collectifs"
            ],
            "informatique": [
                "Projet Informatique - Algorithmique",
                "Évaluation Informatique - Programmation Python"
            ],
            "philosophie": [
                "Dissertation de Philosophie - La Liberté",
                "Explication de Texte - Platon"
            ],
            "technologie": [
                "Projet Technologie - Conception 3D",
                "Évaluation Technologie - Robotique"
            ],
            "espagnol": [
                "Évaluation d'Espagnol - Vocabulaire",
                "Évaluation d'Espagnol - Grammaire"
            ],
            "specialite-nsi": [
                "Projet NSI - Développement Web",
                "Évaluation NSI - Bases de Données"
            ],
            "specialite-mathematiques-expertes": [
                "Examen Maths Expertes - Algèbre Linéaire",
                "Examen Maths Expertes - Nombres Complexes"
            ]
            // Ajoutez d'autres matières et leurs épreuves ici
        };

        /**
         * Nettoie une chaîne de caractères pour l'utiliser comme ID HTML.
         * Remplace les espaces par des tirets, met en minuscules et supprime les accents.
         * @param {string} text - Le texte à nettoyer.
         * @returns {string} Le texte nettoyé.
         */
        function cleanId(text) {
            return text
                .toLowerCase()
                .replace(/[éèêë]/g, 'e') // Remplace les é par e
                .replace(/[àâä]/g, 'a')  // Remplace les à par a
                .replace(/[ùûü]/g, 'u')  // Remplace les ù par u
                .replace(/[ôö]/g, 'o')  // Remplace les ô par o
                .replace(/[îï]/g, 'i')  // Remplace les î par i
                .replace(/\s+/g, '-');   // Remplace les espaces par des tirets
        }

        /**
         * Gère le clic sur un bouton de niveau.
         * Affiche les matières correspondantes et réinitialise la section des épreuves.
         * @param {Event} event - L'objet événement du clic.
         */
        function handleLevelClick(event) {
            // S'assurer que l'élément cliqué est bien un bouton et qu'il a un ID commençant par 'btn-'
            if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('btn-')) {
                const levelId = event.target.id.replace('btn-', ''); // Ex: 'sixieme'
                const subjects = donneesMatieres[levelId];

                // Effacer le contenu actuel des matières
                matieresDiv.innerHTML = '<h2 class="text-lg font-semibold mb-4 text-center">Matières</h2>';

                if (subjects && subjects.length > 0) {
                    subjects.forEach(subject => {
                        const button = document.createElement('button');
                        button.textContent = subject;
                        button.id = cleanId(subject); // Créer un ID propre pour la matière
                        button.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-lg', 'mb-2', 'w-full');
                        matieresDiv.appendChild(button);
                    });
                } else {
                    matieresDiv.innerHTML += '<p class="text-gray-600 text-center">Aucune matière disponible pour ce niveau.</p>';
                }

                // Réinitialiser la section des épreuves
                epreuvesDiv.innerHTML = initialEpreuvesContent;
            }
        }

        /**
         * Gère le clic sur un bouton de matière.
         * Affiche les épreuves correspondantes.
         * @param {Event} event - L'objet événement du clic.
         */
        function handleSubjectClick(event) {
            // S'assurer que l'élément cliqué est bien un bouton à l'intérieur de matieresDiv
            if (event.target.tagName === 'BUTTON') {
                const subjectId = event.target.id; // Ex: 'mathematiques'
                const exams = donneesEpreuves[subjectId];

                // Effacer le contenu actuel des épreuves
                epreuvesDiv.innerHTML = '<h2 class="text-lg font-semibold mb-4 text-center">Épreuves</h2>';

                if (exams && exams.length > 0) {
                    exams.forEach(exam => {
                        const p = document.createElement('p');
                        p.textContent = exam;
                        p.classList.add('epreuve-item'); // Classe pour le style des épreuves
                        epreuvesDiv.appendChild(p);
                    });
                } else {
                    epreuvesDiv.innerHTML += '<p class="text-gray-600 text-center">Aucune épreuve disponible pour cette matière.</p>';
                }
            }
        }

        // Attacher les écouteurs d'événements
        // Pour les niveaux, attacher à la div parente #classe (délégation d'événements)
        classeDiv.addEventListener('click', handleLevelClick);

        // Pour les matières, attacher à la div parente .matieres (délégation d'événements)
        // car les boutons de matière sont ajoutés dynamiquement
        matieresDiv.addEventListener('click', handleSubjectClick);

        // Initialiser les sections dynamiques au chargement de la page
        document.addEventListener('DOMContentLoaded', () => {
            matieresDiv.innerHTML = initialMatieresContent;
            epreuvesDiv.innerHTML = initialEpreuvesContent;
        });

/*const data = {
    terminal:{
        Mathématiques:["Epreuve maths 1", "epreuve maths 2"],
        Physique:["epreuve phys 1", "epreuve phys 2"]
    }
};

function showSubjects(classe){
    const matieresDiv = document.getElementById('matieres');
    const epreuvesDiv = document.getElementById('epreuves');
    matieresDiv.innerHTML = "";
    epreuvesDiv.innerHTML = "";

    for(let matiere in data[classe]){
        const btn = document.createElement('button');
        btn.innerText = matiere;
        btn.onclick = () => showEpreuves(classe, matiere);
        matieresDiv.appendChild(btn);
    }
}

function showEpreuves(classe, matiere){
    const epreuvesDiv = document.getElementById('epreuves');
    epreuvesDiv.innerHTML ="";
    data[classe][matiere].forEach(epreuve => {
        const div = document.createElement('div');
        div.innerText = epreuve;
        epreuvesDiv.appendChild(div);        
    });
}*/
