import contact from "../model/contact.js";

export const sendMessage = async (req, res) => {
    const{ userId, name, email, message } = req.body
    try {
        const newMessage = await contact.create({ userId, name, email, message })
        if (!newMessage) return res.status(400).json({ message: "Message not sent" })
        res.status(200).json({ message: "Message sent successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getMessages = async (req, res) => {
    try {
        const messages = await contact.find()
        if (!messages) return res.status(400).json({ message: "No messages found" })
        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params
        const deleteMessage = await contact.findByIdAndDelete(id)
        if (!deleteMessage) return res.status(400).json({ message: "Message not deleted" })
        res.status(200).json({ message: "Message deleted successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
