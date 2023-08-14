import { Router, Request, Response}from 'express'


const router = Router();

router.get('/teste', (req:Request,res:Response) => {
    return res.json({
        nome: "Placido", 
        idade: 31,
        cidade: "Rio Branco"
    })
    //throw new Error("Erro no servidor")
})

export { router };