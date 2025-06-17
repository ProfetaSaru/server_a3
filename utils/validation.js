function checkPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@!?%&]).{8,}$/;
    if (!regex.test(password)) {
      throw { status: 400, msg: "Password must include lowercase, uppercase, number, special char [#@!?%&], and be 8+ characters long" };
    }
  }
  
  function validateDate(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) {
      throw { status: 400, msg: "Invalid Date" };
    }
  }

  module.exports = { checkPassword, validateDate };
