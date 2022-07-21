import dotenv from 'dotenv';
dotenv.config({path: __dirname+'/../.env'});

export const DB_URI: any  = process.env.DB_URI;

