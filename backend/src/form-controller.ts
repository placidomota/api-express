import express, { Request, Response } from "express";

const usuario = {
  id: 1,
  email: "exemplo@exemplo.com",
  senha: "1234",
};

const autenticaUsuario = (req: Request, res: Response) => {
  const { email, senha } = req.body;
};
