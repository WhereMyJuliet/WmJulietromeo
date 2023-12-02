
const toggle = document.querySelectorAll('.toggle');

toggle.forEach(btn => {
    btn.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Получаем следующий элемент (ответ)

        answer.classList.toggle('hidden');

        if (answer.classList.contains('hidden')) {
            this.textContent = 'Показать ответ';
        } else {
            this.textContent = 'Скрыть ответ';
        }
    });
});
