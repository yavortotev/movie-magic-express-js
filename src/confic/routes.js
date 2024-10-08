const { Router } = require('express')

const { isGuest, isUser} = require('../middlewares/guards')

const { home, details, search }  = require('../controllers/catalog')
const { about } = require('../controllers/about')
const { createGet, createPost, editGet, editPost } = require('../controllers/movie')
const { createGet : createCastGet, createPost : createCastPost } = require('../controllers/cast')
const { notFound } = require('../controllers/404')
const { attachGet, attachPost } = require('../controllers/attach')
const { registerGet, registerPost, loginGet, loginPost, logout } = require('../controllers/user')


const router = Router()
//TODO da si zapisha po obsitoinoo kak se praviat guards !!!!
router.get('/',home)
router.get('/about',about)
router.get('/details/:id',details)
router.get('/attach/:id',isUser(), attachGet)
router.post('/attach/:id',isUser(),attachPost)
router.get('/create/movie',isUser(), createGet)
router.post('/create/movie',isUser(), createPost)
router.get('/edit/:id',isUser(), editGet)
router.post('/edit/:id',isUser(), editPost)
router.get('/create/cast',isUser(), createCastGet)
router.post('/create/cast',isUser(), createCastPost)
router.get('/search', search)
router.get('/register',isGuest(),registerGet)
router.post('/register',isGuest(),registerPost)
router.get('/login',isGuest(),loginGet)
router.post('/login',isGuest(), loginPost)
router.get('/logout',logout)

//TODO post create case 


router.get('*', notFound)

module.exports = {router}