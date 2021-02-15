"use-strict";
const mime = require('mime-types');
module.exports = {
    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    },

    formatANATEL(v) {
        v = v.split('@', 1);
        v = v[0];
        let divisor = (v.length - 8);
        let parte1 = v.substr(0, 2) // 55
        let parte2 = v.substr(2, 2); // 87
        let parte3 = v.substr(4, divisor); 
        let parte4 = v.substr(8)
        let number = `+${parte1}(${parte2})${parte3}-${parte4}`;
        console.log(number);
        return number;
    },

    writeName(from, mimetype){
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);

        var telefone = ((String(`${from}`).split('@')[0]).substr(2));
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let miliseconds = date_ob.getMilliseconds();

        const fileName = `${telefone}` + "-" + `${year}` + `${month}` + `${date}` + "-" + `${miliseconds}`;
        let file = `${fileName}.${mime.extension(mimetype)}`;
        console.log(file);
        return file;
    }
}