export function closeModals() {
	document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('show'))
}

export function activateLoader(id, active) {
	if(active) {
		document.querySelector(`.loader${id}`).classList.add('active')
	} else {
		document.querySelector(`.loader${id}`).classList.remove('active')
	}
}

export function get(id) {
	return document.getElementById(id)
}