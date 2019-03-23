const webpack = require('webpack'); // remember to require this, because we DefinePlugin is a webpack plugin

// return a function from the config file
// the `env` variable will be a simple Object: { API_URL: 'http://localhost:8000' }
// it will contain all the environment variables (that we set in package.json) as key/value pairs
module.exports = (env) => {
    // create a nice object from the env variable
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        plugins: [
            new webpack.DefinePlugin(envKeys)
        ]
    };
};