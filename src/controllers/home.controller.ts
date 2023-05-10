import { Request, Response } from 'express';

export const homeApi = (req: Request, res: Response): void => {
  res.send('Welcome to api');
};
