var isProduction = 'PRODUCTION' in process.env || 'TRAVIS' in process.env;

console.log(isProduction
        ? 'production mode'
        : 'development mode');

module.exports = {
    get production() {
        return isProduction;
    },

    get development () {
        return !isProduction;
    }
};
