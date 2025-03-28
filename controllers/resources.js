const Resource = require('../models/Resource');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require("../utils/errorResponse");


/**
 * * @desc GET all resources
 * * @route Get /api/v1/resources
 * * @access Public
 */
exports.getResources = asyncHandler(async (req, res, next) => {
    const resources = await Resource.find();

    res.status(200).json({
        success: true,
        count: resources.length,
        data: resources
    })
});

/**
 * * @desc GET single resource
 * * @route Get /api/v1/resources/:id
 * * @access Public
 */
exports.getResource = asyncHandler(async (req, res, next) => {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
        return next(new ErrorResponse(`No resource found for the id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        data: resource
    })
});

/**
 * * @desc POST (create) a new resource
 * * @route Post /api/v1/resources
 * * @access Public
 */
exports.createResource = asyncHandler(async (req, res, next) => {
    const resource = await Resource.create(req.body);

    res.status(201).json({
        success: true,
        data: resource
    })
});

/**
 * * @desc UPDATE a resource
 * * @route Put /api/v1/resources/:id
 * * @access Public
 */
exports.updateResource = asyncHandler(async (req, res, next) => {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!resource) {
        return next(new ErrorResponse(`No resource found for the id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        data: resource
    })
});

/**
 * * @desc DELETE a resource
 * * @route Delete /api/v1/resources/:id
 * * @access Public
 */
exports.deleteResource = asyncHandler(async (req, res, next) => {

    const resource = await Resource.findByIdAndDelete(req.params.id)

    if (!resource) {
        return next(new ErrorResponse(`No resource found for the id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        msg: 'Resource deleted',
        data: {}
    })
});