import Order from "../model/order.js"
export const addOrder = async (req, res) => {
  try {
    const orders = req.body; 
    const userId = orders[0].userId;
    const productIds = orders.map(order => order.productId);
    const existingPendingOrder = await Order.findOne({
      userId,
      productId: { $in: productIds },
      status: "pending",
    });

    if (existingPendingOrder) {
      return res.status(400).json({
        message: "You already have a pending order for one or more of these products.",
      });
    }
    const createdOrders = await Order.insertMany(orders);

    if (!createdOrders || createdOrders.length === 0) {
      return res.status(400).json({ message: "Orders not created" });
    }

    res.status(200).json(createdOrders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("userId", "name email")
        if (!orders) return res.status(400).json({ message: "orders not found" })
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
        if (!orders) return res.status(400).json({ message: "orders not found" })
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        const updateOrder = await Order.findByIdAndUpdate(id, { status }, { new: true })
        if (!updateOrder) return res.status(400).json({ message: "order not updated" })
        res.status(200).json(updateOrder)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const deleteOrder = await Order.findByIdAndDelete(req.params.orderId)
        if (!deleteOrder) return res.status(400).json({ message: "order not deleted" })
        res.status(200).json({ message: "order deleted" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteAll = async (req, res) => {
    try {
        const deleteAll = await Order.deleteMany({ userId: req.params.id })
        if (deleteAll.deletedCount === 0) return res.status(400).json({ message: "orders not deleted" })
        res.status(200).json({ message: "orders deleted" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}