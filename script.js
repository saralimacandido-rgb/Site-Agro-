function corrigirQuiz() {
    let pontos = 0;

    if (document.querySelector('input[name="p1"]:checked')?.value === "certo") {
        pontos++;
    }

    if (document.querySelector('input[name="p2"]:checked')?.value === "certo") {
        pontos++;
    }

    if (document.querySelector('input[name="p3"]:checked')?.value === "certo") {
        pontos++;
    }

    if (document.querySelector('input[name="p4"]:checked')?.value === "certo") {
        pontos++;
    }

    const resultado = document.getElementById("resultado");

    if (pontos === 4) {
        resultado.innerHTML = "🌳 Excelente! Você é um Guardião da Sustentabilidade!";
    } else if (pontos === 3) {
        resultado.innerHTML = "🌿 Muito bem! Você conhece bastante sobre a soja e a sustentabilidade.";
    } else if (pontos === 2) {
        resultado.innerHTML = "🌱 Bom trabalho! Continue aprendendo sobre o agro sustentável.";
    } else {
        resultado.innerHTML = "📚 Que tal estudar mais sobre a soja e a preservação ambiental?";
    }
}