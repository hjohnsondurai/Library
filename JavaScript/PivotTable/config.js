if(!window.PivotTable)
	window.PivotTable = {};

window.PivotTable.Config = {
	"development":{
		"scripts":[
			"src/scripts/jquery-3.5.1.min.js"
		],
		"styles": [
			"src/styles/semantic.min.css"
		]
	},
	"production":{
		"scripts":[
			"https://code.jquery.com/jquery-3.5.1.min.js",
			"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"
		],
		"styles": [
			"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
		]
	},
	"env": "development",
	"canImportFiles": true
}
