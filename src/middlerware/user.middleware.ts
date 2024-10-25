
import { Request, Response, NextFunction } from 'express';
import { ValidationResult } from 'joi';


export const validate = (schemas: any) => (req: Request, res: Response, next: NextFunction) => {
    const results: ValidationResult[] = [];
    if (schemas.body) results.push(schemas.body.validate(req.body, { abortEarly: false, stripUnknown: true }));
    if (schemas.params) results.push(schemas.params.validate(req.params, { abortEarly: false, stripUnknown: true }));
    if (schemas.query) results.push(schemas.query.validate(req.query, { abortEarly: false, stripUnknown: true }));
  
    const errors = results.flatMap((result) => result.error ? result.error.details.map(e => e.message) : []);
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    if (schemas.body) req.body = results[0].value;
    if (schemas.params) req.params = results[1].value;
    if (schemas.query) req.query = results[2].value;
  
    next();
};
