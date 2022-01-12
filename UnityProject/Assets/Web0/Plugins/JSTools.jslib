mergeInto(LibraryManager.library, {
	HelloWeb: function(str){
		window.alert(Pointer_stringify(str));
	},

	HelloConsole: function(str){
		console.log(Pointer_stringify(str));
	},

	OpenURLWithNewWindow: function(url){
		window.open(Pointer_stringify(url));	
	},

	UnitySendMessageToHtml: function(message){
		UnitySendMessageToHtml(Pointer_stringify(message));	
	},

	StringReturnValueFunction: function(){
		let returnStr = "bla";	
		let bufferSize = lengthBytesUTF8(returnStr) + 1;
		let buffer = _malloc(bufferSize);
		stringToUTF8(returnStr, buffer, bufferSize);
		return buffer;
	},

	BindWebGLTexture: function(texture){
		GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
	},	
});