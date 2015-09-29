var $ = function(id) {return document.getElementById( id );};

function load(){
	$('soukr').innerHTML='spoustim dotaz';
	create_http_request('http://to2parking.appspot.com/getvalue?tag=ID100PARK1&fmt=html&preventCache='+Math.random(), handle_download,'','POST');
}
	
function handle_download (responseText){
	$('soukr').innerHTML=responseText;
	$('progress').innerHTML='';
	setTimeout("load();", 5000);
}

