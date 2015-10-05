var GE = function(id) {return document.getElementById( id );};
var counter;
var reloader=10;
var timeoutHandle;

function load(){          
    $.jsonp({
        url: 'http://to2parking.appspot.com/getvalue',
        type: 'POST',
        data: 'tag=ID100PARK1',
				dataType: 'json',
				jsonp: 'jsoncallback',
				callbackParameter: 'callback',
        success: function(data, status) {handle(data);},
       error: function(){timer('reset');  alert('nejde'); }
   });
}

function handle(data) {
 	field=data[2].split(",") //replace(/\""\[]/gm,'');
	GE('cas').innerHTML= field[0].slice(2,-1);
	GE('soukr').innerHTML= field[2].slice(0,-1) ;
	GE('sluz').innerHTML= field[1] ;
  	GE('progress').innerHTML='';
	timer('reset');    
}

function timer(reset){
	if (reset=='reset') counter=reloader;
	else counter--; 
	GE('timer').innerHTML='';
	for (var i=0; i<counter; i++) GE('timer').innerHTML+='.';
	if (counter==0) load();
	else window.clearTimeout(timeoutHandle); timeoutHandle=window.setTimeout(timer, 1000); 
}   
