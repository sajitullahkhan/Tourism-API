export const sendJSONResponse = (res, statusCode, payload) => {
  res.statusCode = statusCode
  res.setHeader('content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.write(JSON.stringify(payload))
}