const express = require('express') // ✅ necessário para express.json()
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'fsdfDFsdf32425444wREWRwerwer234fsd'
const expiresIn = '60m'

// Middleware padrão do json-server + leitura do body em JSON
server.use(middlewares)
server.use(express.json()) // ✅ necessário para ler req.body nas rotas personalizadas

// Geração de token
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (err) {
    return false
  }
}

function isAuthenticated({ username, password }) {
  const userdb = router.db.get('users').value()
  return (
    userdb.findIndex(
      user => user.username === username && user.password === password
    ) !== -1
  )
}

// Rota para login
server.post('/auth/login', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' })
  }

  if (!isAuthenticated({ username, password })) {
    const status = 401
    const message = 'Ops! Parece que você errou. Verifique o usuário e a senha!'
    return res.status(status).json({ status, message })
  }

  const access_token = createToken({ username })
  return res.status(200).json({ access_token })
})

// Middleware de verificação do token (proteção das rotas)
server.use((req, res, next) => {
  if (req.path === '/auth/login') {
    return next()
  }

  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: '🚫 Erro no formato de autorização!' })
  }

  const token = authHeader.split(' ')[1]
  const verified = verifyToken(token)

  if (!verified) {
    return res.status(401).json({ message: 'Token de acesso não fornecido ou inválido 🚫' })
  }

  next()
})

// Usa as rotas padrão do JSON Server (db.json)
server.use(router)

server.listen(9000, () => {
  console.log('🎉 Boa! Seu JSON-Server está rodando na porta 9000! 🚀')
})