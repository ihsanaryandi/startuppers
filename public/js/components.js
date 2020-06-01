// Ripple Button Effect
const rippleBtn = document.querySelectorAll('.btn.ripple')

rippleBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		const ripple = document.createElement('div')

		ripple.style.left = `${e.offsetX}px`
		ripple.style.top = `${e.offsetY}px`

		btn.appendChild(ripple)

		setTimeout(() => ripple.remove(), 500)
	})
})

// Autoformat
const searchForms = document.querySelectorAll('.search.autoformat .search-input')

searchForms.forEach(search => {
	autoformat(search.children[0], search.children[1])	
})

function autoformat(inputElement, itemsElement) {
	const items = [...itemsElement.children]
	let index = -1;

	inputElement.addEventListener('input', () => {
		if(inputElement.value.length === 0) return itemsElement.classList.remove('show')
		itemsElement.classList.add('show')
	})

	items.forEach(item => {
		item.addEventListener('click', () => {
			inputElement.value = item.dataset.value
			itemsElement.classList.remove('show')
		})
	})

	document.addEventListener('click', () => {
		itemsElement.classList.remove('show')
	})
}

// Icon with ripple effect
const icons = document.querySelectorAll('.icon')

icons.forEach(icon => {
	icon.addEventListener('click', () => {
		const ripple = document.createElement('div')
		icon.appendChild(ripple)
		setTimeout(() => ripple.remove(), 500)
	})
})


// Dropdown
const dropdowns = document.querySelectorAll('.dropdown')

document.addEventListener('click', e => {
	dropdowns.forEach(dropdown => {
		if(dropdown.children[0] !== e.target) {
			dropdown.children[0].classList.remove('open')
			dropdown.children[1].classList.remove('open')
		}
	})

	if(e.target.parentElement && e.target.parentElement.classList.contains('dropdown')) {
		const dropdown = e.target

		dropdown.classList.toggle('open')
		return dropdown.nextElementSibling.classList.toggle('open')
	}
	
})

// Sidebar & Modal Box 
const sidebarTogglers = document.querySelectorAll('[data-sidebar]')
const modalTriggers = document.querySelectorAll('[data-modal]')
const sidebars = document.querySelectorAll('.sidebar')
const modals = document.querySelectorAll('.modal')

const modalsAndSidebars = [...modals, ...sidebars]

sidebarTogglers.forEach(toggle => {
	toggle.addEventListener('click', e => {
		e.preventDefault()
		resetModalAndSidebar(modalsAndSidebars)

		const sidebarId = toggle.dataset.sidebar

		document.querySelector(`.sidebar${sidebarId}`).classList.add('open')
	})
})

modalTriggers.forEach(trigger => {
	trigger.addEventListener('click', e => {
		e.preventDefault()
		resetModalAndSidebar(modalsAndSidebars)

		const target = trigger.dataset.modal

		document.querySelector(`.modal${target}`).classList.add('show')
	})
})

sidebars.forEach(sidebar => {
	const closeToggles = sidebar.querySelectorAll('#close')
	closeToggles.forEach(close => {
		close.addEventListener('click', e => {
			e.preventDefault()
			sidebar.classList.remove('open')
		})
	})
})

modals.forEach(modal => {
	const closeToggles = modal.querySelectorAll('#close')
	closeToggles.forEach(close => {
		close.addEventListener('click', e => {
			e.preventDefault()
			modal.classList.remove('show')
		})
	})
})

function resetModalAndSidebar(elements) {
	elements.forEach(el => {
		if(el.classList.contains('open')) {
			el.classList.remove('open')
		} else if(el.classList.contains('show')) {
			el.classList.remove('show')
		}
	})
}

// Sidebar Collapsible Items
const collapsibles = document.querySelectorAll('.sidebar .collapsible-items')

collapsibles.forEach(el => {

	const itemsWrapper = el.children[0]
	const span = itemsWrapper.children[0]
	const spanHeight = span.getBoundingClientRect().height

	el.style.height = `${spanHeight}px`
	
	span.addEventListener('click', () => {
		const itemsHeight = span.nextElementSibling.getBoundingClientRect().height

		el.classList.toggle('open')

		if(el.classList.contains('open')) {	
			el.style.height = `${spanHeight + itemsHeight}px`
		} else {
			el.style.height = `${spanHeight}px`
		}
	})
})

