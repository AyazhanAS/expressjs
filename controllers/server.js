let servers = [
    {id:34, name: "AYA", status: "working"},
    {id:378, name: "AdddYA", status: " not working"},
    {id:324, name: "AYAsssss", status: "working"},
    {id:34534, name: "hghAYA", status: "working"}
]

export const getAll = (req, res)=>{
    res.status(200).json(servers)
}