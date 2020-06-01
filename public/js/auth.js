// Auth Functions
import SignUp from './sign-up.js'

// Register
const signupForm = document.getElementById('signupForm')

if(signupForm) {
	signupForm.addEventListener('submit', SignUp)
}