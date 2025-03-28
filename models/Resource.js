const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


/**
 * * @desc GET all bootcamps
 * * @route Get /api/v1/bootcamps
 * * @access Public
 */
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })
});

/**
 * * @desc GET single bootcamp
 * * @route Get /api/v1/bootcamps/:id
 * * @access Public
 */
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(new ErrorResponse(`No bootcamp found for the id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    })
});

/**
 * * @desc POST (create) a new bootcamp
 * * @route Post /api/v1/bootcamps
 * * @access Public
 */
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    })
});

/**
 * * @desc UPDATE a bootcamp
 * * @route Put /api/v1/bootcamps/:id
 * * @access Public
 */
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!bootcamp) {
        return next(new ErrorResponse(`No bootcamp found for the id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    })
});

/**
 * * @desc DELETE a bootcamp
 * * @route Delete /api/v1/bootcamps/:id
 * * @access Public
 */
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!bootcamp) {
        return next(new ErrorResponse(`No bootcamp found for the id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        msg: 'Bootcamp deleted',
        data: {}
    })
});