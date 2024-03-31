const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sResponsavel = document.querySelector('#m-responsavel')
const sAtribuida = document.querySelector('#m-atribuida')
const sHorai = document.querySelector('#m-hora1')
const sHorat = document.querySelector('#m-hora2')
const sIntercorrencia = document.querySelector('#m-intercorrencia')
const btnSalvar = document.querySelector('#btnSalvar')


let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      sResponsavel.value = itens[index].responsavel
      sAtribuida.value = itens[index].atribuida
      sHorai.value = itens[index].hora1
      sHorat.value = itens[index].hora2
      sIntercorrencia.value = itens[index].intercorrencia
      id = index
    } else {
      sResponsavel.value = ''
      sAtribuida.value = ''
      sHorai.value = ''
      sHorat.value = ''
      sIntercorrencia.value = ''
    }
    
  }
  
  function editItem(index) {
  
    openModal(true, index)
  }
  
  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
  
  function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.responsavel}</td>
      <td>${item.atribuida}</td>
      <td>${item.hora1}</td>
      <td>${item.hora2}</td>
      <td>${item.intercorrencia}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }
  
  btnSalvar.onclick = e => {
    
    if (sResponsavel.value == '' || sAtribuida.value == ''  || sHorai.value == '' || sHorat.value == '' || sIntercorrencia.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].responsavel = sResponsavel.value
      itens[id].atribuida = sAtribuida.value
      itens[id].hora1 = sHorai.value
      itens[id].hora2 = sHorat.value
      itens[id].intercorrencia = sIntercorrencia.value
      intens[id]
    } 
    
    else {
      itens.push({'responsavel': sResponsavel.value, 'atribuida': sAtribuida.value, 'hora1': sHorai.value, 'hora2': sHorat.value, 'intercorrencia': sIntercorrencia.value})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
  }
  
  function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  
  }

  
  const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
  const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
  
  loadItens()