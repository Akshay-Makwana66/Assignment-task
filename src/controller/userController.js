const path = require("path");
const fs = require("fs");

const usersFilePath = path.join( 'src/data', 'users.json');
let users = [];
fs.readFile(usersFilePath, 'utf8', (err, data) => {
  if (err) throw err;
  users = JSON.parse(data);
});

const getPage = async function (req, res) {
    try {
        res.sendFile('login.html', { root: path.join( 'src/views') });
      
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  const login = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = users.find((u) => u.email_id === email && u.password === password);
        if (user) {
          res.cookie('user', user.email_id);
          res.redirect('/home');
        } else {
          res.redirect('/');  
        }
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  const homePage = async function (req, res) {
    try {
        const user = req.cookies.user;
  if (!user) {
    res.redirect('/');
  } else {
    res.sendFile('home.html', { root: path.join( 'src/views') });
  }
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  const storedData = async function (req, res) {
    try {
        const data = req.body.data;
  res.cookie('storedData', data);
  res.redirect('/home');
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  const searchData = async function (req, res) {
    try {
        const searchData = req.body.search;
        const storedData = req.cookies.storedData || '';
        const matchedData = storedData.includes(searchData) ? storedData : 'No matches found';
        res.send(matchedData);
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  const clearData = async function (req, res) {
    try {
        res.clearCookie('storedData');
        res.redirect('/home');
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

  const logout = async function (req, res) {
    try {
        res.clearCookie('user');
        res.redirect('/');
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };



  module.exports = {getPage,login,homePage,storedData,searchData,clearData,logout}