function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 15
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ) {
 //Bom Dia
  img.src = 'manha.jpg'
  document.body.style.backgroundImage = 'url(../manha.jpg)'
    //BOA Tarde  
} else if(hora >= 12 && hora <= 18) {
    //Boa Tarde
    img.src = 'tarde.png'
    document.body.style.background = 'url(../tarde.png)'
} else {
    //Boa Noite
    img.src = 'noite.jpg'
    document.body.style.backgrou = 'url(../noite.jpg)'
  }
}