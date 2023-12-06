const fs = require("fs");
const recordsJSON = "citas.json";

const registrar = (registerData) => {
    const [nombre, edad, animal, color, enfermedad] = registerData;

    if (registerData.length != 5) {
        console.log("invalid number of parameters: <nombre edad animal color enfermedad>");
        return false;
    }

    try {
        const data = leer();

        if (!data) {
            return false;
        }

        const newData = [...data, { nombre, edad, animal, color, enfermedad }];

        fs.writeFileSync(recordsJSON, JSON.stringify(newData));
    
        return newData.length;
    } catch (error) {
        console.error('[Error]:', error);
        return false;
    }
};

const leer = () => {
    try { 
        const content = fs.readFileSync(recordsJSON, "utf8");
        return JSON.parse(content);    
    } catch (error) {
        console.error('[Error]:', error);
        return false;
    }
};

module.exports = {registrar, leer};
