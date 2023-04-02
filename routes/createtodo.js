import todo from "../db/todo.js"

const createtodo = async (req, res) => {
          const task =req.body.task
          if(!task) {
            res.status(400).json({message: "Task is required"})
          }

          try {
            const newtodo= new todo ({
                task,
            })

            const todo = await newtodo.save()
            res.status(201).json(todo)

          }catch (error) {
            res.status(500).json({message: "Something went wrong"})
          }

        }


        export default createtodo