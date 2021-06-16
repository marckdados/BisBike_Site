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
        div.innerHTML+=`
        <script src="get.js"></script>
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${element.urlImagem}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Partida: ${element.partida}</p>
            <p class="card-text">Destino:  ${element.destino}</p>           
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"
                 onclick="localStorage.setItem('idTrajeto',${element.idTrajeto}); window.location.href ='visualizar-trajeto.html'">
                 Ver
                 </button>
              </div>
              <small class="text-muted"> ${element.dataHora}</small>
            </div>
          </div>
        </div>
      </div>`
    })
  }
  function buscarTrajetoUnico(){
   let _retorno = fazGet("https://bisbike-backend.herokuapp.com/trajetos/search?id="+localStorage.getItem("idTrajeto"));
    let div = document.getElementById("listaTrajeto");
      div.innerHTML+=`  
      <img src="${_retorno.urlImagem}" class="img-fluid img-thumbnail" >
                  <h3>Ponto de partida: ${_retorno.partida}</h3>
                  <h3>Ponto de destino: ${_retorno.destino}</h3>
                  <h3>Autor: ${_retorno.usuarioDomain.usuario}</h3>`  
}
