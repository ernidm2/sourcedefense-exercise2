let { log } = console;

log(`\n %c 'index-iframe.js' loaded at origin ${window.location} \n\n`, "background: blue");

function responseListener(event) {
	let response = event.data + " from origin: " + event.origin;
	log(`%c ${response}`, "background: blue");
}

window.addEventListener("message", responseListener, false);

window.parent.postMessage(`this is a private message - received from iframe at '${window.location}'`, "*");