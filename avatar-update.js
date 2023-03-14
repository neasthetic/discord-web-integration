'use strict';

fetch("https://discord-web-api.glitch.me/discord/user/INSERT_DISCORD_USER_ID_HERE", {
    method: "GET",
    mode: "cors"
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .then(fieldDescribe => {
        console.log(fieldDescribe.url);
        console.log(fieldDescribe.username);

        document.getElementById("ID FROM IMG TAG").src = fieldDescribe.url;
        document.getElementById("username").textContent = fieldDescribe.username;
    })
    .catch(error => {
        console.warn("Something went wrong.", error);

        document.getElementById("ID FROM IMG TAG").src = "";
        document.getElementById("username").textContent = "Error loading user information";
    });
