import db from '../models/index';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homePage.ejs', {
            data: JSON.stringify(data) // data

        });
    } catch (e) {
        console.log(e)
    }

};

// Object:{
//     key''
//     value''

// }
module.exports = {
    getHomePage: getHomePage,
}