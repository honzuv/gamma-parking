function create_http_request (url, function_name, parameters, type='GET') 
{	var http_request = false;
	if (window.XMLHttpRequest) 
	{	// Mozilla, Safari, Opera, Konqueror...
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) { http_request.overrideMimeType('text');}
	} 
	else if (window.ActiveXObject) 
	{ // Internet Explorer
		try {http_request = new ActiveXObject("Msxml2.XMLHTTP");	} 
		catch (e) 
		{	try {	http_request = new ActiveXObject("Microsoft.XMLHTTP");} 
			catch (e) {}
		}
	}
if (!http_request) { alert('Nemohu vytvorit XMLHTTP instanci');	return false;}
http_request.onreadystatechange = function(){handleResponse(http_request, function_name, parameters)}; 
http_request.open(type, url, true);
http_request.send(null);
}

function handleResponse(http_request, function_name, parameters) 
{	if (http_request.readyState == 4) 
	{	if (http_request.status == 200) 
			{ function_name (http_request.responseText, parameters);	} 	
		else {alert('Byl problem se zadosti.'); }
  }
}
