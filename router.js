const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
	let data = {
		title: 'Startuppers',
		page: 'index',
	}

	res.render('index', data)
})

route.get('/about', (req, res) => {
	let data = {
		title: 'About Page',
		page: 'about'
	}
	res.render('index', data)
})

route.get('/search-team', (req, res) => {
	let data = {
		title: 'Cari Team',
		page: 'search-team'
	}
	res.render('index', data)
})

route.get('/sign-up', (req, res) => {
	let data = {
		title: 'Sign Up - StartUppers',
		page: 'sign-up',
		hideNavbar: true
	}
	res.render('index', data)
})

route.get('*', (req, res) => res.render('404'))

module.exports = route


