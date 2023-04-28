const express = require('express')
const app = express()
const port = 3000

/**
 * app.(get|post|put|patch|delete)('/:variable?query1=value', middleware(s), (req, res) => {
 *      console.log(req.params.variable)
 *      console.log(req.query.query1)
 *      console.log(req.body.query1)
 * 
 *      res.status(200|400|500).json({
 *          message: "",
 *          data: {} / "" / [],
 *          error: {} / ""
 *      })
 * })
 */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})