/*
Don't forget to include the following script tag in your HTML file:
<script type="text/javascript" src="assets/javascript/message-webhook.js"></script>
*/

function sendMessage() {
  // Get the message from the input field
  var message = document.getElementById('input-id').value;

  // Check if the message is empty
  if (message === "") {
    alert("Please write a message"); // You can remove it if you want.
    return;
  }

  // Create an XMLHttpRequest to send the message to the webhook
  var wbRequest = new XMLHttpRequest();
  wbRequest.open("POST", "WEBHOOK-LINK");
  wbRequest.setRequestHeader('Content-type', 'application/json');

  // Set the parameters for the webhook request
  var params = {
    username: "DISCORD-WEBHOOK-NICKNAME",
    avatar_url: "DISCORD-WEBHOOK-URL",
    content: "DISCORD-WEBHOOK-MESSAGE-CONTENT\n",
    embeds: [
      {
        title: "EMBED TITLE",
        color: 0000000,
        description: `${message}`
      }
    ]
  };

  // Send the message to the webhook
  wbRequest.send(JSON.stringify(params));

  // Display a success message
  alert("Sent!"); // You can remove it if you want.

  // Reload the page
  window.location.reload();
}
