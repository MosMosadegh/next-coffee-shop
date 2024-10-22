// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDb from './../../utils/db'
export default function handler(req, res) {

connectToDb()
  res.status(200).json({ message : "welcome to next.js api routes feature :))" });
}
