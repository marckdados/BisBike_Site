function fazPostLogin(url,body){
    body = JSON.stringify(body)
    console.log("BODY: ", body)
    let request = new XMLHttpRequest();
    
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/json");
    let resultado = request.send(body)
    console.log(resultado)
    request.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            window.location.href = "area-usuario.html";
             return data
            // we get the returned data
        }
        if (this.status == 500) {
            window.alert("Falha");          
        }
    };
    
    return request.responseText
}
function fazPostCadastro(url,body){
    body = JSON.stringify(body)
    console.log("BODY: ", body)
    let request = new XMLHttpRequest();
    
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/json");
    let resultado = request.send(body)
    console.log(resultado)
    request.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            window.location.href = "home.html";
             return data
            // we get the returned data
        }
        if (this.status == 500) {
            window.alert("Não foi possivel cadastrar este usuário");          
        }
    };
    
    return request.responseText
}
function validarLogin(){
    event.preventDefault()
    let url = "https://bisbike-backend.herokuapp.com/usuario/login"
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let body = {
        "usuario": userName,
        "senha": password 
     };
     fazPostLogin(url,body)
}
function fazerCadastro(){
    event.preventDefault()
    let url = "https://bisbike-backend.herokuapp.com/usuario/cadastrar"
    let userName = document.getElementById("usuarioCadastro").value;
    let password = document.getElementById("senhaCadastro").value;
    let email = document.getElementById("emailCadastro").value;
    let body = {
        "usuario": userName,
        "senha": password ,
        "email": email
     };
     fazPostCadastro(url,body);
    
}