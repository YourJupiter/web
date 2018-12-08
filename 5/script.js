class Listener {
	constructor () {
		this.element = null;
		this.event = null;
		this.subscribers = [];
	}

	reset() {
		this.element = null;
		this.event = null;
	}

	getElement() {
		return this.element;
	} 

	getEvent () {
		return this.event;
	}

	setEvent (event) {
		this.event = event.target.dataset.value;
		this.element = event.target.dataset.id;
		console.log(this.element);

		for(let i = 0; i < this.subscribers.length; i++) {
			this.subscribers[i].update(this.event, this.element);
		}
	}

	subscribe(obj) {
		this.subscribers.push(obj);
	}

	unsubscribe(obj) {
		let index = this.subscribers.indexOf(obj);
		this.subscribers.splice(index, 1);
	}

}

class App {
	constructor(bookmarks) {
		if (bookmarks !== undefined) {
			var tmpArr = Array.from(new Set(tmpArr));
			this.bookmarks =  bookmarks;
		} else {
			this.bookmarks = [];
		}
	}
	display() {

		$("#bookmarks").html("");
		for(let i = 0; i < this.bookmarks.length; i++) {
			if (this.bookmarks[i] !== undefined) {
				this.bookmarks[i].display();
			}
		}	
	}

	addBookmark(bookmark) {
		let found = false;
		for(let i = 0; i < this.bookmarks.length; i++) {
			if (this.bookmarks[i] !== undefined && this.bookmarks[i].id == bookmark.id) {
				this.bookmarks[i] = bookmark;
				found = true;
				break;
			}
		}
		if(!found) {
			this.bookmarks.push(bookmark);
		}
		this.update("add");
	}

	getBookmark(id) {
		return this.bookmarks[id];
	}

	removeBookmark(id) {
		for(let i = 0; i < this.bookmarks.length; i++) {
			if (this.bookmarks[i] !== undefined && this.bookmarks[i].id == id) {
				delete this.bookmarks[i];
			}
		}
	}

	update(event, elem) {
		if (event == "edit") {
			fController.setFormValue(this.bookmarks[elem - 1].id,this.bookmarks[elem - 1].name,this.bookmarks[elem - 1].desc,this.bookmarks[elem - 1].link)
			fController.setInput('id', elem)
			this.display();
		} else if (event == "delete") {
			this.removeBookmark(elem);
			this.display();
		} else if (event == "add") {
			this.display();
		}
	}
}

class Bookmark {
	constructor (id, name, desc, link, listener) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.link = link;
		listener.subscribe(this);
	}

	display () {
		$("#bookmarks").append(`
			<tr class="bookmark">
			<td>` + this.id + `</td>
			<td>` + this.name + `</td>
			<td>` + this.desc + `</td>
			<td> <a href="` +  this.link  + `">Link</a></td>
			<td>
			<button class="edit" data-value="edit" data-id="`+ this.id +`" 
			onclick="listener.setEvent(event)">Edit</button>
			<button class="delete"  data-value="delete" data-id="`+ this.id +`" onclick="listener.setEvent(event)">Delete</button>
			</td>
			</tr>
			`
			);
	}
	update() {}
}

class FormController {

	constructor () {
		this.form = document.forms['addBm'];
	}
	submit (event) {
		event.preventDefault();
		
		let id = event.target.id.value === "" ? app.bookmarks.length + 1 : event.target.id.value;
		let name = event.target.name.value;
		let desc = event.target.desc.value;
		let link = event.target.link.value;

		app.addBookmark(new Bookmark(id, name, desc, link, listener));

		listener.reset();
		this.form.reset();
		event.target.id.value = "";
	}

	setFormValue(id, name, desc, link) {
		this.form['name'].value = name;
		this.form.desc.value = desc;
		this.form.link.value = link;
	}

	setInput (name, value) {
		this.form[name].value = value;
	}


}

var fController = new FormController();
var listener = new Listener();
var app = new App([
	new Bookmark(1,"Title", "Desc", "link", listener)
	]);
listener.subscribe(app);
app.display();
