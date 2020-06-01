// Utils
import { val, required, validEmail, minLength, sameAs, resetInvalids } from './utils/form-utils.js'
import { closeModals, activateLoader, get } from './utils/ui-utils.js'

export default function SignUp(e) {
	e.preventDefault()

	resetInvalids()

	const [email, password, confirmPassword] = val(this.email, this.password, this.confirmPassword)

	const data = [
		{
			str: email,
			msg: 'Email tidak boleh kosong',
			el: this.email
		},
		{
			str: password,
			msg: 'Password tidak boleh kosong',
			el: this.password
		},
		{
			str: confirmPassword,
			msg: 'Konfirmasi Password tidak boleh kosong',
			el: this.confirmPassword
		}
	]

	let valids = []

	// Required
	if(!required(data)) valids.push(false)
	
	// Valid Email
	if(!validEmail({
		str: email,
		msg: 'Email tidak valid',
		el: this.email
	})) valids.push(false)
	
	// Min Length
	if(!minLength({
		str: password,
		msg: 'Password minimal harus 7 karakter',
		el: this.password
	})) valids.push(false)

	// Same Value
	if(!sameAs({
		str: password,
		str2: confirmPassword,
		msg: 'Password tidak sama',
		el: this.confirmPassword
	})) valids.push(false)

	if(valids.length > 0) return

	console.log(register({ email, password }))
}

function register({ email, password }) {
	activateLoader('#registerLoader', true)
 	auth.createUserWithEmailAndPassword(email.toLowerCase(), password)
	  .then(({ user }) => {
	  	activateLoader('#registerLoader', false)
	  	window.sessionStorage.setItem('user', user.uid)
	  	document.location.href = `/extra-data?u=${user.uid}`
	  })
	  .catch(err => console.log(err))
}