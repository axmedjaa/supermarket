import Cart from "../model/cart.js"

export const addCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body)
        if (!cart) return res.status(400).json({ message: "cart not created" })
        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getCart = async (req, res) => {
    try {
        const getCart = await Cart.find({ userId: req.params.id })
        if (!getCart) return res.status(400).json({ message: "cart not found" })
        res.status(200).json(getCart)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateCart = async (req, res) => {
    try {
        const { cartId } = req.params
        const { quantity } = req.body
        const updateCart = await Cart.findByIdAndUpdate(cartId, { quantity }, { new: true })
        if (!updateCart) return res.status(400).json({ message: "cart not updated" })
        res.status(200).json(updateCart)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteCart = async (req, res) => {
    try {
         const userId = req.params.userId;
         const productId = req.params.productId;
        const deleteCart = await Cart.findOneAndDelete({ userId, productId })
        if (!deleteCart) return res.status(400).json({ message: "cart not deleted" })
        res.status(200).json({ message: "cart deleted" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteAll = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deleteCarts = await Cart.deleteMany({ userId })
        if (deleteCarts.deletedCount === 0) return res.status(400).json({ message: "carts are not deleted" })
        res.status(200).json({ message: "carts deleted" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}