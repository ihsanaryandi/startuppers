export function val() {
	let result = []
	
	if(arguments.length > 1) {
		for(let str of arguments) {
			result.push(str.value)
		}
	} else {
		result = arguments[0].value
	}

	return result
}

export function invalid(el, msg) {
	const parent = el.parentElement
	parent.classList.add('invalid')
	parent.setAttribute('data-error', msg)
}

export function required(data) {
	const errors = []
	data.forEach(d => {
		if(validator.isEmpty(d.str)) {
			errors.push(false)
			invalid(d.el, d.msg)
		} else {
			errors.push(true)
		}
	})

	if(errors.find(err => err === false)) return false;
	
	return true
}

export function validEmail(data) {
	if(!validator.isEmail(data.str)) {
		invalid(data.el, data.msg)
		return false
	}

	return true
}

export function minLength(data) {
	if(!validator.isLength(data.str, { min: 7 })) {
		invalid(data.el, data.msg)
		return false
	}

	return true
}

export function sameAs(data) {
	if(data.str !== data.str2) {
		invalid(data.el, data.msg)
		return false
	}

	return true
}

export function resetInvalids() {
	const inputs = document.querySelectorAll('div.input')

	inputs.forEach(input => input.classList.remove('invalid'))
}