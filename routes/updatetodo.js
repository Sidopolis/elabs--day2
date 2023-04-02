import todo from "../db/todo.js"

const updatetodo = async (req,res) => {
    const id = req.params.id
    const task = req.body.task
    const completed = req.body.completed

    if(!id){
        return res.status(400).json({message: "Task and id are required"})
    }

    try {
        const updatedtask = await todo.findByIdAndUpdate({
            _id:id
        },{
                task:task,
                completed: completed
        })

        res.status(200).json({message: "todo updated successfully"})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
}}

export default updatetodo