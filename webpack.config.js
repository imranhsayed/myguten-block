const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	context: __dirname,
	entry:
		{
			index: path.resolve( __dirname, 'src/newfile.js' )
		},
	output:
		{ filename: '[name].js',
			path: path.resolve( __dirname, 'bundle' ),
		},
	module: {
		...defaultConfig.module
	}
};
