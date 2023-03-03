module.exports = (err, req, res, next) => {
    err.StatusCode = err.StatusCode || 500;
    err.status = err.status || 'error';
    requestEndPoint = req.originalUrl
    res.status(err.StatusCode).json({
        status: err.status,
        message: err.message ,
        statuscode: err.StatusCode,
        requestEndPoint
    })
    next()
   
}