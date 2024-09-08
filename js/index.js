$('#WAButton').floatingWhatsApp({
    phone: 'seu-numero-no-formato-internacional', //WhatsApp phone number sem espaco e letra
    headerTitle: 'Chat' , //Popup Title
    popupMessage: 'Deixe uma Mensagem', //Popup Message
    showPopup: true, //Enables popup display
     //buttonImage: '<img src="./img/whatsapp.svg"/>', //Button Image
    headerColor: 'green', //Custom header color
    backgroundColor: 'green', //Custom background button color
    position: "right", //Position: left | right
    size: 72,
    zIndex: 10
 });

function adicionarItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("meuInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Você deve escrever algo!");
  } else {
    document.getElementById("minhaLista").appendChild(li);
  }
  document.getElementById("meuInput").value = "";
}