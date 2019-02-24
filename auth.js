const auth = require('basic-auth');

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASS;
module.exports = (request, response, next) => {
    if (!USERNAME || !PASSWORD) return next();
    const user = auth(request);
    if (!user || user.name != USERNAME || user.pass != PASSWORD) {
        response.set('WWW-Authenticate', 'Basic realm="Restricted"');
        return response.status(401).send();
    }
    return next();
};
