document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".presentation_text");

    const text = `Étudiant à Epitech en spécialisation IA, je
recherche une alternance pour approfondir mes compétences
dans ce domaine.
J’ai également acquis une bonne connaissance des
secteurs luxe et culture grâce à une précédente expérience
en alternance.`;

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 12);
        }
    }

    typeWriter();
});
