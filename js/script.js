function changeMode(button) {
document.body.classList.toggle("light-mode"), document.body.classList.contains("light-mode") ? button.src="images/dark_mode.svg" : button.src="images/light.svg";
}