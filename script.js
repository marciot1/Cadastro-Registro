document.getElementById('new').addEventListener('click', openModal);
document.getElementById('taskForm').addEventListener('submit', saveTask);

function openModal() {
    document.getElementById('modal-container').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-container').style.display = 'none';
}

function saveTask(e) {
    e.preventDefault();

    const responsavel = document.getElementById('m-responsavel').value;
    const horaInicio = document.getElementById('m-hora1').value;
    const horaTermino = document.getElementById('m-hora2').value;
    const intercorrencia = document.getElementById('m-intercorrencia').value;
    const atribuida = document.getElementById('m-atribuida').checked ? 'Sim' : 'Não';

    const table = document.querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${responsavel}</td>
        <td>${atribuida}</td>
        <td>${horaInicio}</td>
        <td>${horaTermino}</td>
        <td>${intercorrencia}</td>
        <td><button style="color: red;"onclick="deleteTask(this)">Excluir</button></td>
    `;

    table.appendChild(row);
    closeModal();
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}


function deleteTask(button) {
    button.parentElement.parentElement.remove();
}
