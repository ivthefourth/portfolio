var dawblocks = {}

// actx arg is an audio context object and is optional, 
// if none is given, this function will create a new one
dawblocks.createAudioContext = function(actx){
	var context = window.AudioContext || window.webkitAudioContext;
	if( actx == undefined){
		this.audioContext = new context;
	}
	else{
		if( actx instanceof context)
			this.audioContext = actx;
		else 
			throw new Error( 
				'The "actx" argument for dawblocks.createAudioContext() must be an AudioContext or webkitAudioContext object'
				);
	}
}
