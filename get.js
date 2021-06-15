function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()   
    var data = JSON.parse(request.responseText)
    return data
}

function buscarTrajetosAll(){
    _retorno = fazGet("https://bisbike-backend.herokuapp.com/trajetos/todos");
    let div = document.getElementById("rowInicio");
    _retorno.forEach(element => {
        div.innerHTML+=`<div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${element.urlImagem}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Partida: ${element.partida}</p>
            <p class="card-text">Destino:  ${element.destino}</p>
            <p class="card-text">Data e Hora:  ${element.destino}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>`
    })
}