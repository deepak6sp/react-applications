module.exports = {
    entry:[
    	 "./react_src/index.js"
   	],
    output: {
        path: __dirname,
        filename: "./app/js/bundle.js"
    },
    module: {
    	loaders:[
	    	{
	    		test: /\.js$/, 
            	loader: "babel-loader",
            	query: {
			        presets: ['react', 'es2015'] 
			    },
	    		exclude : /node_modules/,
	    	},
    	]
    }
};