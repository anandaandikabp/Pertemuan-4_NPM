const validator = require('validator');

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// fungsi input with validator
function ask() {
    rl.question("Nama? ", function(name) {
        rl.question("Nomor HP? ", function(nomor) {
            if (!validator.isMobilePhone(`${nomor}`,'id-ID')) {
                ask();
            }
            rl.question("Email? ", function(email) {
                if (!validator.isEmail(`${email}`)) {
                    ask();
                }
            
            // tampil di cmd
            console.log(`Nama diriku ${name}, bernomor hp ${nomor},  emailnya ${email}`);
            rl.close();     
            })
        });
    });
}

ask();
