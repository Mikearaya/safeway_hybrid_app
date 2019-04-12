var _Enviroment = {
    production: {
        API_URL: 'http://ilo.appdiv.com/index.php'
    },
    staging: {
        API_URL: 'http://192.168.1.4/ilo_app/backend/index.php'
    },
    development: {
        API_URL: 'http://192.168.1.4/ilo_app/backend/index.php'
    }
}



function getEnviroment() {
    return _Enviroment['development'];

}


var Enviroment = getEnviroment();

module.exports = Enviroment;