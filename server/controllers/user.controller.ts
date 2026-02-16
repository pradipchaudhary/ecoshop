import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    success: true,
    data: [{ id: 1, name: "Pradip" }]
  });
};
