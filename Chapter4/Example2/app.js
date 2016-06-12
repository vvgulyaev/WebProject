var main = function () 
{
	"use strict";
	var AppendComment = function ()
	{
		var $new_comment;
		var comment_text = $(".comment-input input").val();
		if (comment_text !== "") 
		{
			$new_comment = $("<p>").text(comment_text);
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		}
	};
		
	$(".comment-input button").on("click", function (event) 
	{
		AppendComment();
	});

	$(".comment-input input").on("keypress", function (event) 
	{
		if (event.keyCode === 13) 
		{
			AppendComment();
		}
	});
	
};
$(document).ready(main);
