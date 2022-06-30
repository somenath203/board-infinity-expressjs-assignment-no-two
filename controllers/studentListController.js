const results = [
    "Rajesh",
    "Ramesh",
    "Sayali",
    "Sanjana"

]

const studentList = (req, res) => {

    res.status(200).json({

        "results": results

    });

};

module.exports = studentList;

