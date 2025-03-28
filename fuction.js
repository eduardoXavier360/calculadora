// Pegando o display e os botões
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equalButton = document.getElementById('equal');

// Variável para armazenar a expressão matemática
let currentInput = '';

// Adicionando um evento de clique para cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === "=") {
            // Quando pressionado "=", avalia a expressão
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else if (value === "C") {
            // Quando pressionado "C", limpa tudo
            currentInput = '';
        } else if (value === "CE") {
            // Quando pressionado "CE", limpa a última entrada
            currentInput = currentInput.slice(0, -1);
        } else {
            // Caso contrário, adiciona o valor ao input
            currentInput += value;
        }

        // Atualizando o display com o valor atual
        display.value = currentInput || '0';
    });
});


