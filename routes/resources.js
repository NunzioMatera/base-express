const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Paginate all bootcamps', data: [{ id: 1, name: 'John' }, { id: 2, name: 'Josh' }] });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp with id: ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create a bootcamp' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Updated bootcamp with id: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Deleted bootcamp with id: ${req.params.id}` });
});

module.exports = router;
