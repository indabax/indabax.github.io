var fs = require("fs");
var path = require("fs");

function getSpeakerInfo() {
	const speakersPath = "./assets/speaker_data/";
	var speakers = fs.readdirSync(speakersPath).filter(item => item != ".DS_Store");

	var info = {}

	for(var i in speakers) {
		var speaker = speakers[i];

		if (fs.lstatSync(speakersPath).isDirectory(speaker)) {
			info[speaker] = {}

			var dataDir = speakersPath + speaker;

			// get image
			var imagePath = dataDir + "/image.jpg";
			if (fs.existsSync(imagePath)) {
				info[speaker].imagePath = imagePath;
			}

			// get lecture information
			var lectureInfoPath = dataDir + "/lecture_info.txt";
			if (fs.existsSync(lectureInfoPath)) {
				info[speaker].lectureInfoPath = lectureInfoPath;
				// file = fs.readFile(lectureInfoPath, "utf8", function(err, contents) {
				// 	newContent = contents.split("\n").filter(item => item);
				// 	info[speaker].lectureHeading = newContent[0];
				// 	info[speaker].lectureAbstract = newContent.slice(0);
				// });
				var file = new File(lectureInfoPath);
				file.open("r");

				while(!file.eof) {
					console.log(file.readln());
				}
			}
		}
	}

	return info;
}

function populateSpeakerInfo() {
	info = getSpeakerInfo();
}

console.log(getSpeakerInfo());
