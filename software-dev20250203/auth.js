const base64 = require('base-64');

function decodeCredentials(authHeader) {
    console.log(authHeader);
}

module.exports = function (req, res, next) {
    const username = decodeCredentials(
        req.headers.authorization || ''
    );
    
  // Verify the credentials
    if (username === 'admin') {
        return next();
    }
    
  // Respond with authenticate header on auth failure.
    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.status(401).send('Authentication required.');
};
