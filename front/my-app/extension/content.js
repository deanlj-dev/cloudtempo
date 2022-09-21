const stylesPath = "./dist/index.355ab1b1.css";
const scriptPath = "./dist/index.f6d8959f.js";
const htmlBody = `<div id="aws-search-app"></div><div aws-search-extensionid="${chrome.runtime.id}"></div>`;

document.body.insertAdjacentHTML("beforeend", htmlBody);

const scriptElement = document.createElement("script");
scriptElement.src = chrome.runtime.getURL(scriptPath);
(document.head || document.documentElement).appendChild(scriptElement);

const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = chrome.runtime.getURL(stylesPath);
(document.head || document.documentElement).appendChild(linkElement);

console.log("AWS Search Extension injected!");

const reindexingProgressChannel = new BroadcastChannel(
  "reindexing-progress-channel"
);

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "reindexing-progress") {
    reindexingProgressChannel.postMessage(request);
  }
});
