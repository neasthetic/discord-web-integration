'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/INSERT_DISCORD_USER_ID_HERE"), {
    method: "GET",
    mode: "cors"
}).then(function(responseJson) {
    if (responseJson.ok) {
        return responseJson.json();
    }
    return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    console.log(fieldDescribe.url);
    console.log(fieldDescribe.username);
    document.getElementById("ID FROM IMG TAG").src = fieldDescribe.url;
    document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
    console.warn("Something went wrong.", $ownerNode);
    document.getElementById("ID FROM IMG TAG");
    document.getElementById("username");
});