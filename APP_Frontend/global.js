var _Enviroment = {
    production: {
        API_URL: "http://ilo.appdiv.com/backend/index.php",
        RESOURCE_URL: "http://ilo.appdiv.com/backend/",
    },
    staging: {
        API_URL: "http://192.168.1.6/ilo_app/backend/index.php",
        RESOURCE_URL: "http://localhost/ilo_app/backend/",
    },
    development: {
        API_URL: "http://localhost/ilo_app/backend/index.php",
        RESOURCE_URL: "http://localhost/ilo_app/backend/",
    }
};

function getEnviroment() {
    return _Enviroment["production"];
}

var Enviroment = getEnviroment();

module.exports = Enviroment;