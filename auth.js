const auth = require('basic-auth');

const USERNAME = 'slt';
const PASSWORD = 'slt';
module.exports = function(request, response, next) {
    var user = auth(request);
    if (!user || user.name != USERNAME || user.pass != PASSWORD) {
        response.set('WWW-Authenticate', 'Basic realm="Restricted"');
        return response.status(401).send();
    }
    return next();
};