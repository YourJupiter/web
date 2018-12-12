var array = [];
$('form').fadeOut();

function show(bookmarks) {
	for (var key in bookmarks) {
		var row = "<tr>"
		for(var k in bookmarks[key]) {
				row += '<td>'+ bookmarks[key][k] +'</td>';
		}
		row += '<td><button onclick="remove('+bookmarks[key]['id']+')" class="btn btn-danger">Delete</button></td>'
		row += '<td><button onclick="edit('+bookmarks[key]['id']+')" class="btn btn-primary">Edit</button></td></tr>'
		$(".table").append(row);
	}
};

function remove (id) {
	sendRequest({"operation": "delete", "id": id});
}

function sendRequest(request) {
	var req = "";

	if (request !== undefined) {
		req = "?";
		for(var key in request) {
			req += (key + '=' + encodeURI(request[key]) + "&");	
		}
		req = req.substring(0, req.length - 1);
	}

	$.ajax({
		url: './functions.php' + req,
		method: 'GET',
		error: (err) => {
			alert("We`ve got an error, obviously, something gone wrong :(");
		},
		success: (data) => {
			try {
				console.log(JSON.parse(data));
				update(JSON.parse(data));
				array = JSON.parse(data);
			} catch(e) {
				console.log(data + " catch");
				update(array);
				//alert(data);
			}
		}
	});
}

function update(bookmarks) {
	clear();
	show(bookmarks);
}

function clear() {
	$(".table").html(`
		<tr>
		<th>ID</th>
		<th>Title</th>
		<th>Description</th>
		<th>Link</th>
		</tr>
		`);
	
}

function edit(id) {
	document.forms[0]['id'].value = id;
	$('form').fadeIn();
}

function submitForm() {
	var request = {operation: 'edit'};
	var form = document.forms[0];
	if (form['name'].value != '') {
		request['name'] = form['name'].value;
	} 
	if (form['desc'].value != '') {
		request['desc'] = form['desc'].value;
	} 
	if (form['link'].value != '') {
		request['link'] = form['link'].value;
	} 
	request['id'] = form['id'].value;
	sendRequest(request);

}

sendRequest();