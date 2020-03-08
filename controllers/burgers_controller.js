const connection = require('../config/connection');

//get all burgers

const getBurger = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM burgers', (err, burgerdata) => {
            if (err) {
                console.log(err);
                //this goes to promise's .catch()
                return reject(err);
            }
            resolve(burgerdata);
        });
    });
};


//make a buger
/*accepts object paramater => {buger_name: "Bacon Burger"} */
const createBurger = (burgerObj) => {
    return new Promise ((resolve, reject) => {

        connection.query('INSERT INTO burgers SET ?', burgerObj, (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }else if (burgerdata.affectedRows === 0) {
                return resolve({message: "Sorry no existing burger found", code: 404});
            }
            resolve({message: 'Burger added sucsessfully', code: 200});
        });
    });
};

//update burger
const updateBurger = (burgerObj, burgerId) => {
    return new Promise((resolve, reject) => {

        connection.query('UPDATE burgers SET ? WHERE id = ?', [burgerObj, burgerId], (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (burgerdata.affectedRows === 0) {
                return resolve({ message: "Sorry could'nt find that burger", code: 404 });
            }
            resolve({ message: "burger ordered successfully", code: 200 });
        });
    });
};



//eat a burger
const deleteBurger = burgerId => {
    return new Promise((resolve, reject) =>{
        connection.query('DELETE FROM burgers WHERE id = ?', [burgerId], (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }else if (burgerdata.affectedRows ===0) {
                return resolve({message: "Sorry no burger found", code: 404});
            }
            resolve({message:"Yum Yum good burger", code:200 });
        });
    });
};

module.exports = { getBurger, createBurger, updateBurger, deleteBurger };