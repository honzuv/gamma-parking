var $ = function(id) {return document.getElementById( id );};
//document.getElementById('#myiframe').addEventListener("load", handle);
//frame=document.getElementsByTagName("iframe")[0];
//frame.addEventListener("load", handle);
//onload="load();"		
function load(){
	$('soukr').innerHTML='spoustim dotaz';
	clicked();
	//request('http://to2parking.appspot.com/getvalue', handle_download,'','POST','tag=ID100PARK1&fmt=html' );
}
	
function handle_download (responseText){
	$('soukr').innerHTML=responseText;
	$('progress').innerHTML='';
	setTimeout("load();", 5000);
}

		
function clicked(){
	$('download').submit();
}



function handle() {
    $('soukr').innerHTML=$('output').contentWindow.document.innerHTML;
}
