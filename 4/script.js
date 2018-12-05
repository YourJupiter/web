$(document).ready(function() {
		var bookmark1 = {id: 1, name: 'Bookmark1', desc: 'This is the Telegram.', link: 'https://web.telegram.org/'};
		var bookmarks = [bookmark1,{id: 2, name: 'Bookmark2', desc: 'This is the site of our university.', link: 'https://nung.edu.ua/'},{id: 3, name: 'Bookmark3', desc: 'This is the site for watching films.', link: 'http://hdrezka.ag/'}];


		display(bookmarks);
		function display(bookmarks) {
			$(".bookmark").remove();
			for(i=0;i<bookmarks.length;i++) {
			$("#bookmarks").append(`
					<tr class="bookmark">
					<td>` +bookmarks[i][`id`]+ `</td>
					<td>` +bookmarks[i][`name`]+ `</td>
					<td>` +bookmarks[i][`desc`]+ `</td>
					<td> <a href="` + bookmarks[i][`link`] + `">Link</a></td>
<td><button class="edit" data-id="`+bookmarks[i]["id"]+`">Edit</button><button class="delete" data-id="`+bookmarks[i]["id"]+`">Delete</button></td>
</tr>
`);

}
   }

$("#addBm").submit(function(event){
    event.preventDefault();
    if($("#idInput").val()==0){
     var newBookmark={id:bookmarks[bookmarks.length-1]['id']+1, name:$("#nameInput").val(), desc:$("#descInput").val(), link:$("#linkInput").val()}
       bookmarks.push(newBookmark);
}


else{

   for(i=0;i<bookmarks.length;i++){
if(bookmarks[i]["id"]==$("#idInput").val()){
   bookmarks[i]["name"]=$("#nameInput").val();
   bookmarks[i]["desc"]=$("#descInput").val();
   bookmarks[i]["link"]=$("#linkInput").val();
    }
}

   $("#idInput").val("0");
}
   $("#addBm")[0].reset();
display(bookmarks);
});


$(document).on("click",".delete", function(event){
	event.preventDefault();
	var id=$(this).data("id");
	bookmarks=bookmarks.filter(function(el){
		return id!=el.id;
	});
	display(bookmarks);
});


$(document).on("click",".edit", function(event){
	event.preventDefault();
	var id=$(this).data("id");
	selectedBm=bookmarks.filter(function (el){
		return id==el['id'];
	});


	$("#nameInput").val(selectedBm[0]["name"]);
	$("#descInput").val(selectedBm[0]["desc"]);
	$("#linkInput").val(selectedBm[0]["link"]);
	$("#idInput").val(selectedBm[0]["id"]);
   });
});
