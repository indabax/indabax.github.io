CATEGORY_TO_ICON = {
    'Theory': "ion-ios-book",
    "Natural language processing": "ion-android-chat",
    "Lightning talk": "ion-flash",
    "Vision": "ion-eye",
    "Speech": "ion-mic-a",
    "Application": "ion-settings"
};

INFO = { 'Thuso Simon':
   { imagePath: './assets/speaker_data/thuso_simon/image.jpg',
     lectureInfoPath: './assets/speaker_data/thuso_simon/lecture_info.txt',
     lectureHeading: 'Extracting ID numbers from African Identity cards using Deep Learning',
     lectureAbstract:
      [ 'Know Your Consumer Legislation (KYC) is a big part of the legal framework of transactions in fintech. At Zoona we are required to verify the identity number and name of each consumer who use our products. To maximize efficiency in the digital era we want to have self-service KYC as we expand across Africa. Specifications for identity documents vary from country to country and can be anything from a letter from the chief to hand written identification cards. As a data scientist at Zoona, I am working on a KYC optical character recognition algorithm that must be robust enough to be used throughout Africa.' ],
     categoryInfoPath: './assets/speaker_data/thuso_simon/category.txt',
     category: 'Vision' },
  'Herman Kamper':
   { imagePath: './assets/speaker_data/herman_kamper/image.jpg',
     lectureInfoPath: './assets/speaker_data/herman_kamper/lecture_info.txt',
     lectureHeading: 'Deep Learning for Speech Recognition',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/herman_kamper/category.txt',
     category: 'Speech' },
  'Obins Choudhary':
   { imagePath: './assets/speaker_data/obins_choudhary/image.jpg',
     lectureInfoPath: './assets/speaker_data/obins_choudhary/lecture_info.txt',
     lectureHeading: 'Artificial Intelligence at Scale',
     lectureAbstract:
      [ 'How Barclays uses Artificial Intelligence at scale to solve real-world problems in finance.' ],
     categoryInfoPath: './assets/speaker_data/obins_choudhary/category.txt',
     category: 'Theory' },
  'Alex Conway':
   { imagePath: './assets/speaker_data/alex_conway/image.jpg',
     lectureInfoPath: './assets/speaker_data/alex_conway/lecture_info.txt',
     lectureHeading: 'Deep Learning for Computer Vision',
     lectureAbstract:
      [ 'The state-of-the-art in image classification has skyrocketed thanks to the development of deep convolutional neural networks and increases in the amount of data and computing power available to train them. The top-5 error rate in the ImageNet competition to predict which of 1000 classes an image belongs to has plummeted from 28% error in 2010 to just 2.25% in 2017 (human level error is around 5%).',
        'In addition to being able to classify objects in images (including not hotdogs), deep learning can be used to automatically generate captions for images, convert photos into paintings, detect cancer in pathology slide images, and help self-driving cars \'see\'.',
        'The talk will give an overview of the cutting edge and some of the core mathematical concepts and will also include a short code-first tutorial to show how easy it is to get started using deep learning for computer vision in python.' ],
     categoryInfoPath: './assets/speaker_data/alex_conway/category.txt',
     category: 'Vision' },
  'Bruce Bassett':
   { imagePath: './assets/speaker_data/bruce_bassett/image.jpg',
     lectureInfoPath: './assets/speaker_data/bruce_bassett/lecture_info.txt',
     lectureHeading: 'AI challenges arising from the SKA',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/bruce_bassett/category.txt',
     category: 'Application' },
  'Jacques Ludik':
   { imagePath: './assets/speaker_data/jacques_ludik/image.jpg',
     lectureInfoPath: './assets/speaker_data/jacques_ludik/lecture_info.txt',
     lectureHeading: 'Mathematical Foundations of Deep Learning',
     lectureAbstract:
      [ 'An introduction to the mathematics of neural networks and specialist architectures for solving a range of applied problems in a variety of domains.' ],
     categoryInfoPath: './assets/speaker_data/jacques_ludik/category.txt',
     category: 'Theory' },
  'Ritesh Ajoodha':
   { imagePath: './assets/speaker_data/ritesh_ajoodha/image.jpg',
     lectureInfoPath: './assets/speaker_data/ritesh_ajoodha/lecture_info.txt',
     lectureHeading: 'Bayesian Networks',
     lectureAbstract:
      [ '1. Representation: modelling real-world problems using observable and latent variables.',
        '2. Inference: CPDs, MAP etc.',
        '3. Learning: Maximum likelihood estimation and Bayesian estimation (with a prior)',
        '4. Software that a student can use to implement these problems.' ],
     categoryInfoPath: './assets/speaker_data/ritesh_ajoodha/category.txt',
     category: 'Theory' },
  'Willie Brink':
   { imagePath: './assets/speaker_data/willie_brink/image.jpg',
     lectureInfoPath: './assets/speaker_data/willie_brink/lecture_info.txt',
     lectureHeading: 'Machine learning fundamentals, a probabilistic view',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/willie_brink/category.txt',
     category: 'Theory' },
  'More Speakers TBC':
   { imagePath: './assets/speaker_data/more_speakers_TBC/image.jpg' } };

SPONSORS = [ './assets/images/sponsors/aerobotics.png',
  './assets/images/sponsors/dli.PNG',
  './assets/images/sponsors/numberboost.png',
  './assets/images/sponsors/stone-three-mining-logo.jpg' ];

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

    // add info to speakers section
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
                                    .append(
                                        $("<h4 />")
                                        .text(info[speaker].lectureHeading || "")
                                    ) // append to modal body
                                    .append(
                                        ((info[speaker].lectureAbstract || []).join("<br><br>") || "To Be Announced")
                                    )
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
        }

        // add info to schedule
        $scheduleSection = $(".schedule .tab-content");
        // find title of this speaker and insert information (if not in tab zero)
        $scheduleSlot = $scheduleSection.find("h3.schedule-slot-title:containsi('" + info[speaker].lectureHeading + "')").closest(".schedule-slot-info");

        $scheduleSlot = $scheduleSlot.filter(function(index, $element) {
            return ($element.closest("#tab_zero") == null);
        });

        $scheduleSlot.prepend(
            $("<a />")
            .append(
                $("<img />").addClass("schedule-slot-speakers").attr({
                    "src": info[speaker].imagePath
                })
            )
        );

        $scheduleSlot.find("h4.schedule-slot-speaker-name").text(speaker);

        $scheduleSlot.attr({
            "data-target": ("#myModal" + count),
            "data-toggle": "modal"
        });

        $scheduleSlot.mouseenter(function() {
            $(this).css({
                "cursor": "pointer",
                "-webkit-transform": "scale(1.1)",
                    "-ms-transform": "scale(1.1)",
                        "transform": "scale(1.1)",
                "-webkit-transition": "all 0.3s",
                "-moz-transition": "all 0.3s",
                "-o-transition": "all 0.3s",
                "transition": "all 0.3s"
            })
        }).mouseleave(function() {
            $(this).css({
                "cursor": "default",
                "-webkit-transform": "scale(0.90909090909)",
                    "-ms-transform": "scale(0.90909090909)",
                        "transform": "scale(0.90909090909)",
                "-webkit-transition": "all 0.3s",
                "-moz-transition": "all 0.3s",
                "-o-transition": "all 0.3s",
                "transition": "all 0.3s"
            })
        });
    }

    $("#speakers div.container").append($row_div);
}

function populateSponsors(sponsors) {
    $logosDiv = $("#sponsors div.container div.row.logos");

    for(i in sponsors) {
        var sponsor = sponsors[i];

        $logosDiv.append(
            $("<div />").addClass("col-sm-3")
            .append(
                $("<a />").addClass("sponsors-box").attr({
                    "style": "background: url(" + sponsor + ") no-repeat center center/contain;"
                })
            )
        );
    }
}

// add case insensitive contains
$.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});

populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
