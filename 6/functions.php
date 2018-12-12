<?php 
	$operation = empty($_GET['operation']) ? "read" : $_GET['operation'];
	
	$content = file_get_contents("content.txt");

	if ($operation == "read") {
		echo($content);
		exit();
	} else if ($operation == "delete") {
		delete();		
	} else if ($operation == "edit") {
		edit();
	}


	function delete() {
		$bookmarks = json_decode(file_get_contents("content.txt"));

		foreach ($bookmarks as $key => $value) {
			if (!empty($_GET['id']) && $value->id == $_GET['id']) {
				unset($bookmarks->$key);

				$file = fopen("content.txt", 'w');
				fwrite($file, json_encode($bookmarks));
				fclose($file);

				echo(json_encode($bookmarks));
				exit();
			}
		}
	}

	function edit() {
		$bookmarks = json_decode(file_get_contents("content.txt"));

		foreach ($bookmarks as $key => $value) {
			if (!empty($_GET['id']) && $value->id == $_GET['id']) {
				if (!empty($_GET['name'])) {
					$value->name = $_GET['name']; 
				}
				if (!empty($_GET['desc'])) {
					$value->desc = $_GET['desc']; 
				}
				if (!empty($_GET['link'])) {
					$value->link = $_GET['link']; 
				}

				$file = fopen("content.txt", 'w');
				fwrite($file, json_encode($bookmarks));
				fclose($file);

				echo(json_encode($bookmarks));
				exit();
			}
			echo ($value->id);
		}
	}
?>