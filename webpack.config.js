const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const path = require( 'path' );
console.log( defaultConfig.externals );
// console.log( path.resolve( __dirname, 'bundle' ) );

module.exports = {
	...defaultConfig,
	mode: 'development',
	context: __dirname,
	entry:
		{
			index: './src/index.js'
		},
	output:
		{ filename: '[name].js',
			path: path.resolve( __dirname, 'bundle' ),
		},
	module: {
		...defaultConfig.module
	}
};
