var _training;

// PvE-------------------------------------------------------------------------------------------------------------

function blank(){
	(function($) {
		$("#buildlist").animate({height:"603px"});
		$(document).ready(function() {

		});
	})(jQuery);
}

// PvP-------------------------------------------------------------------------------------------------------------

function kimkimibuild1(){
	(function($) {
		$("#buildlist").animate({height:"0px"});
		$(document).ready(function() {
			_training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 10, \"character_job\" : \"SU\", \"json_slot_data\" : {\"26101\" : \"14\", \"26102\" : \"14\", \"26105\" : \"33\", \"26106\" : \"34\", \"26107\" : \"13\", \"26108\" : \"24\", \"26109\" : \"13\", \"26110\" : \"13\", \"26310\" : \"13\", \"26111\" : \"12\", \"26130\" : \"12\", \"26112\" : \"12\", \"26125\" : \"22\", \"26137\" : \"14\", \"26200\" : \"33\", \"26202\" : \"23\", \"26206\" : \"12\", \"26209\" : \"11\", \"26412\" : \"1\", \"26001\" : \"1\", \"26211\" : \"23\", \"26304\" : \"14\"}}");
		});
	})(jQuery);
}