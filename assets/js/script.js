// Menu Button
document.querySelector('.toggle-btn').addEventListener('click', () => {
	document.querySelector('.toggle-btn').classList.toggle('onclick')
	document.querySelector('nav ul').classList.toggle('visible')
})

document.querySelector('.toggle-theme').addEventListener('click', () => {
	document.querySelector('html').classList.toggle('dark')
})
