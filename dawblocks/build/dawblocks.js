var dawblocks = {};

// actx arg is an audio context object and is optional, 
// if none is given, this function will create a new one,
// if AudioContext or webkitAudioContext are unsupported, throw error
dawblocks.createAudioContext = function(actx){
	var context = window.AudioContext || window.webkitAudioContext;
	if( context == undefined )
		throw new Error(//support error 
			'Browser does not support Web Audio API'
			);
	if( actx == undefined){
		this.audioContext = new context;
	}
	else{
		if( actx instanceof context)
			this.audioContext = actx;
		else 
			throw new Error( //argument error
				'The "actx" argument for dawblocks.createAudioContext() must be an AudioContext or webkitAudioContext object'
				);
	}
}















// For automation nodes and envelope nodes, use DC offset wave with automated volume to modulate param 










