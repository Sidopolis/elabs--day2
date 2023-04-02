import todo from "../db/todo.js"

const gettodo = async(req, res) =>{
    try {
        const todos = await todo.find()
        res.status(200).json(todos)
    } catch (error){
        res.status(500).json({message: "Something went wrong"})
    }
}

export default gettodo