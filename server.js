const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 1234;
const publicPath = path.join(__dirname, 'dist');

// serve the build folder
app.use(express.static(publicPath));

// In case, user requests a resource not in build/,
// ensure that index.html is served
app.get('*', (req, res, next) => {
	if (req.headers['x-forward-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
		// res.redirect('https://' + req.headers.host + req.url);
		res.sendFile(path.join(publicPath, 'index.html'));
	} else {
		next();
	}
});

// start the server on given port (local env: port 1234)
app.listen(port, () => {
	console.log(`Server is up on port ${port}!`);
});
