const stripHTML = html => {
	   var doc = new DOMParser().parseFromString(html, 'text/html');
	   return doc.body.textContent || "";
	
}

export { stripHTML };
