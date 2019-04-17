var _Enviroment = {
    production: {
        API_URL: 'http://ilo.appdiv.com/backend/index.php'
    },
    staging: {
        API_URL: 'http://192.168.1.6/ilo_app/backend/index.php'
    },
    development: {
        API_URL: 'http://192.168.1.6/ilo_app/backend/index.php'
    }
}



function getEnviroment() {
    return _Enviroment['production'];

}


var Enviroment = getEnviroment();

module.exports = Enviroment;