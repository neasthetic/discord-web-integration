/*
Don't forget to put it on your HTML code:
<script type="text/javascript" src="assets/javascript/messageToWB.js"></script>
*/

function sendMessage(){

     var message = document.getElementById('INPUT-ID TO COLLECT THE STRING CONTENT').value;
 
     if(message === "") {
     alert("Nenhuma mensagem inserida"); // You can remove it if u want.
     }
 
     var wbRequest = new XMLHttpRequest();
     wbRequest.open("POST", "WEBHOOK LINK");
     wbRequest.setRequestHeader('Content-type', 'application/json');
 
     var params = 
          {
           username: "DISCORD WEBHOOK NICKNAME",
           avatar_url: "DISCORD WEBHOOK URL",
           content: "DISCORD WEBHOOK MESSAGE CONTENT\n",
           embeds: [
                     {
                       title: "EMBED TITLE",
                       color: 0000000,
                       description: `${message}`
                 }
             ]
         }
     wBrequest.send(JSON.stringify(params));
     alert("MESSAGE SUCCESSFULLY SENT"); // You can remove it if u want.
     window.location.reload();
 }