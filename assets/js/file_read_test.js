var fs = require("fs");

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
	for(speaker in info) {

	}
}

console.log(getSpeakerInfo());
