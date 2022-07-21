// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function data(req, res) {

  const url = "https://mflixbackredecanais.herokuapp.com/data"
  const pull = await fetch(url)
  const data = await pull.json()
  res.status(200).json(data)
}
