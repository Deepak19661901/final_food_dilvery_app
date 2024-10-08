import express from 'express'
import {addToCart,removeFromCart,getCart} from '../controllers/cart.controller.js'
import authMiddleWare from '../middleware/auth.middleware.js'
const cartRouter = express.Router()



cartRouter.post('/add',authMiddleWare,addToCart)
cartRouter.post('/remove',authMiddleWare,removeFromCart)
cartRouter.post('/get',authMiddleWare,getCart)


export default cartRouter

