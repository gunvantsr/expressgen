const service = require("../")


exports.insertOne = async (req, res) => {
    try {

        return res.send("{result}");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteOne = async (req, res) => {
    try {

        return res.send("{result}");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateOne = async (req, res) => {
    try {

        return res.send("{result}");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getOne = async (req, res) => {
    try {

        return res.send("{result}");
    } catch (error) {
        res.status(500).send(error.message);
    }
};


