// var fs = require("fs");
var fs = require("browserify-fs");
// var path = require("path");

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
    } else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*
 * SmoothScroll
 */

smoothScroll.init();

/*
 * Add Speakers to html
 */

function readSpeakerFile(err, contents) {
    var speakerName = this.speakerName;

    contents = contents.split("\n").filter(item => item);
    this.info[speakerName].lectureHeading = contents[0];
    this.info[speakerName].lectureAbstract = contents.slice(1);
}

function processSpeakerLectureInfo(err, stat) {
    if(stat.isFile()) {
        this.info[speakerName].lectureInfoPath = this.lectureInfoPath;
        fs.readFile(this.lectureInfoPath, readSpeakerFile.bind({
            speakerName: this.speakerName,
            info: info
        }));
    }
}

function processSpeakerImage(err, stat) {
    if(stat.isFile()) {
        this.info[this.speakerName].imagePath = this.imagePath;
    }
}

function processSpeakerDirectory(err, stat) {
    var speaker = this.speaker;
    var speakerName = this.speakerName;

    if(stat.isDirectory(speaker)) {
        this.info[speakerName] = {};

        var dataDir = speakersPath + speaker;

        // get image
        var imagePath = dataDir + "/image.jpg";
        fs.stat(imagePath, processSpeakerImage.bind({
            speakerName: speakerName,
            imagePath: imagePath,
            info: info
        }));

        // get lecture information
        var lectureInfoPath = dataDir + "/lecture_info.txt";
        fs.stat(lectureInfoPath, processSpeakerLectureInfo.bind({
            speakerName: speakerName,
            lectureInfoPath: lectureInfoPath,
            info: info
        }));
    }
}

function processSpeakerData(err, data) {
    console.log("This is in process data");
    console.log("err: " + err);
    console.log("data: " + data);
    var speakers = data.filter(item => item != ".DS_Store");

    for(var i in speakers) {
        var speaker = speakers[i];

        var speakerName = speaker.split("_").map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");

        fs.lstatSync(speakersPath, processSpeakerDirectory.bind({
            speaker: speaker,
            speakerName: speakerName,
            info: this.info
        }));
    }
}

const speakersPath = "./assets/speaker_data/";
function getSpeakerInfo() {
    var info = {};

    // commented stuff = test things

    // fs.realpath(".", function(err, path) {
    //     console.log("working dir");
    //     console.log(path);
    // });

    // fs.readdir(".", function(err, list) {
    //     console.log("dir contents");
    //     console.log(list);
    // });

    fs.readdir(speakersPath, processSpeakerData.bind({
        info: info
    }));

    while(Object.keys(info).length < speakers.length) {
        console.log(info);
    }

    return info;
}

function populateSpeakerInfo() {
    var info = getSpeakerInfo();
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
