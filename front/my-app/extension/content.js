var htmlBody = `<div id="aws-search-app"></div><div aws-search-extensionid="${chrome.runtime.id}"></div>`;

document.body.insertAdjacentHTML("beforeend", htmlBody);

const scriptPath = "dist/index.1175f1f2.js";
const scriptElement = document.createElement("script");
scriptElement.src = chrome.runtime.getURL(scriptPath);
(document.head || document.documentElement).appendChild(scriptElement);

const stylesPath = "dist/index.e8eb3dcf.css";
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = chrome.runtime.getURL(stylesPath);
(document.head || document.documentElement).appendChild(linkElement);

console.log("AWS Search Extension injected!");
