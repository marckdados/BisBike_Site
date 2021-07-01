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
function buscarPublicacaoAll(){
  _retorno = fazGet("https://bisbike-backend.herokuapp.com/publicacao/todos");
  let div = document.getElementById("postagem");
  _retorno.forEach(element => {
    _perfil = fazGet("https://bisbike-backend.herokuapp.com/perfil/buscarPorIdUsuario?id="+ element.usuarioDomain.idUsuario);

      div.innerHTML+=`<div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-between align-items-center">
              <div class="mr-2">
                  <img class="rounded-circle" width="45" src="${_perfil.urlImagemPerfil}" alt="">
              </div>
              <div class="ml-2">
                  <div class="h5 m-0">${element.usuarioDomain.usuario}</div>
                  <div class="h7 text-muted">${element.usuarioDomain.email}</div>
              </div>
          </div>
          <div>
              <div class="dropdown">
                  <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-ellipsis-h"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                      <div class="h6 dropdown-header">Configuration</div>
                      <a class="dropdown-item" href="#">Save</a>
                      <a class="dropdown-item" href="#">Hide</a>
                      <a class="dropdown-item" href="#">Report</a>
                  </div>
              </div>
          </div>
      </div>

  </div>
  <div class="card-body">
      <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
      <p class="card-text">
          ${element.texto}
      </p>
  </div>
  <div class="card-footer">
      <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
      <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
      <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
  </div>
  <p class="card-text"></p>
  <p class="card-text"></p>
  <p class="card-text"></p>`
  })
}


function buscarPerfil(){
    _retorno = fazGet("https://bisbike-backend.herokuapp.com/perfil/buscarPorIdUsuario?id="+ localStorage.getItem("idUsuario"));
    let div = document.getElementById("perfil");
          div.innerHTML+=` <div class="card">
        <div class="card-body">
          <div class="mr-2">
              <img class="rounded-circle" width="45" src="${_retorno.urlImagemPerfil}" alt="">
          </div>
            <div class="h5">@${localStorage.getItem("usuario")}</div>
            <div class="h7 text-muted">Nome: ${_retorno.nome} </div>
            <div class="h7">${_retorno.descricao}
            </div>
        </div>                
    </div>`
    
}
