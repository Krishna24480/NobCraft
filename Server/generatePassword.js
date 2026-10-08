const bcrypt = require("bcryptjs");

const password = "Krishna@29";

bcrypt.hash(password, 12).then((hash) => {
    console.log("\nYour password hash:\n");
    console.log(hash);
    console.log("\n");
});