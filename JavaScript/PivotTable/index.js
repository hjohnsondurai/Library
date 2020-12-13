(function (){
	window.config = PivotTable.Config || {};
	var files = config[PivotTable.Config.env];
	
	if(config.canImportFiles){
		if(files.scripts.length > 0)
			importScripts(files.scripts);
		if(files.styles.length > 0)
			importStyles(files.styles);

		console.log("Files are imported successfully!");
	}
	
	function importScripts(scriptsUrl){
		for(var i = 0; i < scriptsUrl.length; i++){
			var imported = document.createElement('script');
			imported.src = scriptsUrl[i];
			document.head.appendChild(imported);
		}
	}

	function importStyles(scriptsUrl){
		for(var i = 0; i < scriptsUrl.length; i++){
			var imported = document.createElement('link');
			imported.href = scriptsUrl[i];
			imported.rel = "stylesheet";
			document.head.appendChild(imported);
		}
	}
}());
