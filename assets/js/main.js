CATEGORY_TO_ICON = {
    'Theory': "ion-ios-book",
    "Natural language processing": "ion-android-chat",
    "Lightning talk": "ion-flash",
    "Vision": "ion-eye",
    "Speech": "ion-mic-a"
}

INFO = { 'Alex Conway':
   { imagePath: './assets/speaker_data/alex_conway/image.jpg',
     lectureInfoPath: './assets/speaker_data/alex_conway/lecture_info.txt',
     lectureHeading: 'Deep Learning for Computer Vision',
     lectureAbstract:
      [ 'The state-of-the-art in image classification has skyrocketed thanks to the development of deep convolutional neural networks and increases in the amount of data and computing power available to train them. The top-5 error rate in the ImageNet competition to predict which of 1000 classes an image belongs to has plummeted from 28% error in 2010 to just 2.25% in 2017 (human level error is around 5%).',
        'In addition to being able to classify objects in images (including not hotdogs), deep learning can be used to automatically generate captions for images, convert photos into paintings, detect cancer in pathology slide images, and help self-driving cars \'see\'.',
        'The talk will give an overview of the cutting edge and some of the core mathematical concepts and will also include a short code-first tutorial to show how easy it is to get started using deep learning for computer vision in python.' ],
     categoryInfoPath: './assets/speaker_data/alex_conway/category.txt',
     category: 'Vision' },
  'Herman Kamper':
   { imagePath: './assets/speaker_data/herman_kamper/image.jpg',
     lectureInfoPath: './assets/speaker_data/herman_kamper/lecture_info.txt',
     lectureHeading: 'Deep Learning for Speech Recognition',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/herman_kamper/category.txt',
     category: 'Speech' },
  'Willie Brink':
   { imagePath: './assets/speaker_data/willie_brink/image.jpg',
     lectureInfoPath: './assets/speaker_data/willie_brink/lecture_info.txt',
     lectureHeading: 'Machine learning fundamentals, a probabilistic view',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/willie_brink/category.txt',
     category: 'Theory' } }

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

function populateSpeakerInfo(info) {
    var count = 0;
    var $row_div;

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
                                "data-toggle": "tooltip",
                                "title": "Click for more info"
                            })
                        ) // append to a
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-9")
                        .append(
                            $("<h4 />").text(speaker)
                        ) // heading div
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-1")
                        .append(
                            $("<a />")
                            .append(
                                $("<i />").addClass(
                                    CATEGORY_TO_ICON[info[speaker].category]
                                ).attr({
                                    "data-toggle": "tooltip",
                                    "title": info[speaker].category
                                })
                            ) // append to a
                        ) // append to list
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-12")
                        .append(
                            $("<p />").text(info[speaker].lectureHeading)
                        ) // paragraph div
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

populateSpeakerInfo(INFO);
