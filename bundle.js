(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fs = require("fs");

/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid');
	}
	else{
		$('#site-nav').removeClass('navbar-solid');
	}
}

/*
 * SmoothScroll
*/

smoothScroll.init();

/*
 * Add Speakers to html
 */

function getSpeakerInfo() {
    const speakersPath = "./assets/speaker_data/";
    var speakers = fs.readdirSync(speakersPath).filter(item => item != ".DS_Store");

    var info = {}

    for(var i in speakers) {
        var speaker = speakers[i];

        var speakerName = speaker.split("_").map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");

        if (fs.lstatSync(speakersPath).isDirectory(speaker)) {
            info[speakerName] = {}

            var dataDir = speakersPath + speaker;

            // get image
            var imagePath = dataDir + "/image.jpg";
            if (fs.existsSync(imagePath)) {
                info[speakerName].imagePath = imagePath;
            }

            // get lecture information
            var lectureInfoPath = dataDir + "/lecture_info.txt";
            if (fs.existsSync(lectureInfoPath)) {
                info[speakerName].lectureInfoPath = lectureInfoPath;
                contents = fs.readFileSync(lectureInfoPath).toString();
                contents = contents.split("\n").filter(item => item);
                info[speakerName].lectureHeading = contents[0];
                info[speakerName].lectureAbstract = contents.slice(1);
            }
        }
    }

    return info;
}

function populateSpeakerInfo() {
    info = getSpeakerInfo();
    var count = 0;
    var $row_div;

    console.log(info);

    for(speaker in info) {
        if(count % 3 == 0) {
            $row_div = $("<div />").addClass("row");
        }
        count++;

        $row_div.append(
            $("<div />").addClass("col-md-4")
            .append(
                $("<div />").addClass("speaker")
                .append(
                    $("<figure />")
                    .append(
                        $("<a />").attr({
                            "data-target": ("#myModal" + count),
                            "data-toggle": "modal"
                        })
                        .append(
                            $("<img />").attr({
                                "src": info[speaker].imagePath,
                                "title": "Click for more info"
                            })
                        ) // append to a
                    ) // append to figure
                    .append(
                        $("<h4 />").text(speaker)
                    ) // append to figure
                    .append(
                        $("<p />").text(info[speaker].lectureHeading)
                    ) // append to figure
                    .append(
                        $("<ul />").addClass("social-block")
                        .append(
                            $("<li />")
                            .append(
                                $("<i />").addClass("ion-eye").attr({
                                    "title": "Vision"
                                })
                            ) // append to list item
                        ) // append to social-block
                    ) // append to figure
                    .append(
                        $("<div />").addClass("modal fade").attr({
                            "tabindex": "-1",
                            "id": ("myModal" + count),
                            "role": "dialog",
                            "aria-hidden": "true",
                            "aria-labelledby": "myModalLabel"
                        })
                        .append(
                            $("<div />").addClass("modal-dialog")
                            .append(
                                $("<div />").addClass("modal-content")
                                .append(
                                    $("<div />").addClass("modal-header")
                                    .append(
                                        $("<button />").addClass("close").attr({
                                            "aria-hidden": "true",
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("x")
                                    ) // append to modal header
                                    .append(
                                        $("<h4 />").attr({
                                            "id": "myModalLabel"
                                        })
                                        .text(speaker)
                                    ) // append to modal header
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-body")
                                    .text(info[speaker].lectureHeading)
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-footer")
                                    .append(
                                        $("<button />").addClass("btn btn-primary").attr({
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("Close")
                                    ) // append to modal footer
                                ) // append to modal content
                            ) // append to modal dialog
                        ) // append to modal div
                    ) // append to figure
                ) // append to speaker div
            ) // append to col div
        );

        if(count % 3 == 2) {
            $("#speakers div.container").append($row_div);
            // $("div#speakers.section.speakers div.container").append($row_div);
        }
    }
}

populateSpeakerInfo();

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
