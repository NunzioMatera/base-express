const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    // error now has all properties of err object
    let error = { ...err }

    // message now is equal to the err.message
    error.message = err.message

    console.log(error)

    // // Log to console for dev
    // console.log('hereeeeeeeeeee', err);
    //
    // // Mongoose bad ObjectId on @Get
    // if (err.name === 'CastError') {
    //     const message = `No bootcamp found for the id: ${err.value}`;
    //     error = new ErrorResponse(message, 404)
    // }
    //
    // // Mongoose duplicate key on @Post
    // if (err.code === 11000) {
    //     const message = `Duplicate field entered at unique field property`;
    //     error = new ErrorResponse(message, 400)
    // }
    //
    // //Mongoose validation error
    // if (err.name === 'ValidationError') {
    //     const message = Object.values(err.errors).map(val => val.message);
    //     error = new ErrorResponse(message, 400)
    // }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    })
}

module.exports = errorHandler;