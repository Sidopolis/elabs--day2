import todo from "../db/todo.js"

const deletetodo = async (req,res) => {
    const id = req.params.id
    try{
        const todo = await todo.findByIdAndDelete(id)
        if(!todo) {
            return res.status(404).json({message: "Todo not found"})

        }
        res.status(200).json({message: "Todo deleted successfully"})
    }catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export default deletetodo