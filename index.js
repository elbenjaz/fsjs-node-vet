const {registrar, leer} = require("./operaciones");

const option = process.argv[2],
      registerData = process.argv.slice(3);

const main = () => {
    switch (option) {
        case "registrar":
            const totalRecords = registrar(registerData);
            console.log(totalRecords ? `[OK]: ${totalRecords} records` : `[Error]`);
            break;

        case "leer":
            const fullData = leer();
            console.log(fullData);
            break;
        
        default:
            console.log(`unrecognized option \`${option}\``);
            console.log(`usage: node ${process.argv[1].split('/').pop()} <registrar|leer> [registerData ...]`);
        }
};

main();
