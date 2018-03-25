CATEGORY_TO_ICON = {
    'Theory': "ion-ios-book",
    "Natural language processing": "ion-android-chat",
    "Lightning talk": "ion-flash",
    "Vision": "ion-eye",
    "Speech": "ion-mic-a",
    "Application": "ion-settings"
};

INFO = { 'Ntombikayise Banda':
   { imagePath: './assets/speaker_data/ntombikayise_banda/image.jpg',
     lectureInfoPath: './assets/speaker_data/ntombikayise_banda/lecture_info.txt',
     lectureHeading: 'Multimodal Emotion Recognition',
     lectureAbstract:
      [ 'During communication, research shows that a large portion of the message is conveyed through emotional displays, with the content of the message accounting for approximately 7%. Moreover, human brains make use of these complementary emotional displays such as facial expressions, vocal expressions, and body postures to resolve any decision ambiguities and infer reliable emotion decisions. This talk will explore how computers can emulate humans by making use of visual, audio and bio-signal modalities to recognize complex emotions using variants of recurrent neural networks' ],
     categoryInfoPath: './assets/speaker_data/ntombikayise_banda/category.txt',
     category: 'Vision',
     affiliationInfoPath: './assets/speaker_data/ntombikayise_banda/affiliation.txt',
     affiliation: 'University of Cambridge' },
  'Obins Choudhary':
   { imagePath: './assets/speaker_data/obins_choudhary/image.jpg',
     lectureInfoPath: './assets/speaker_data/obins_choudhary/lecture_info.txt',
     lectureHeading: 'Artificial Intelligence at Scale',
     lectureAbstract:
      [ 'How Barclays uses Artificial Intelligence at scale to solve real-world problems in finance.' ],
     categoryInfoPath: './assets/speaker_data/obins_choudhary/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/obins_choudhary/affiliation.txt',
     affiliation: 'Barclays Africa Group Limited' },
  'Dr. Alta De Waal':
   { imagePath: './assets/speaker_data/dr._alta_de_waal/image.jpg',
  lectureInfoPath: './assets/speaker_data/dr._alta_de_waal/lecture_info.txt',
  lectureHeading: 'Establishing semantic similarity between short text',
  lectureAbstract:
   [ 'The manifold hypothesis states that high dimensional data lie on low-dimensional manifolds embedded in the high-dimensional space. Applied to text, these manifolds can be described as the semantic space, or the vector space model of the corpus: It makes assumptions about the way in which the data was generated and translate the text into numbers.',
     'Many such vector space models exist, the most basic being tf-idf. In this presentation I will discuss some vector space models such as LDA (topic models) and word2vec (word embeddings) that can be used to semantically index the corpus. Ultimately, we want to establish how similar a query is to the corpus in question. For this purpose, I will discuss distance metrics and propose a statistical method to summarise the semantic index of a corpus.',
     'Finally, this talk is scoped within the context of short text which poses special statistical challenges to vector space models. ' ],
  categoryInfoPath: './assets/speaker_data/dr._alta_de_waal/category.txt',
  category: 'Natural language processing',
  affiliationInfoPath: './assets/speaker_data/dr._alta_de_waal/affiliation.txt',
  affiliation: 'The University of Pretoria' },
  'Dr. Herman Kamper':
   { imagePath: './assets/speaker_data/dr._herman_kamper/image.jpg',
     lectureInfoPath: './assets/speaker_data/dr._herman_kamper/lecture_info.txt',
     lectureHeading: 'Deep Learning for (More Than) Speech Recognition',
     lectureAbstract:
      [ 'How cool would it be to ask your fridge to order a pizza? As our lives become more intertwined with technology, we will increasingly be communicating with machines and devices. The most natural way to do this is through speech, which is why companies like Google, Apple and Microsoft are betting big on automatic speech recognition (ASR). But there is so much more to speech than just ASR! Speech and language is a core part of what it means to be human, and could therefore give deep (pun!) insights into how humans organise and deal with the world. My talk will consist of three parts (two of which will be rants). In the first, I will give an overview of how deep learning is used to build today\'s state-of-the-art ASR systems. The second part will be a rant about the shortcomings of focusing only on traditional ASR. I will highlight interesting new studies in the speech community addressing problems ranging from disaster tracking to using speech as a way to get insights into human cognition; I will argue that we need more of this type of research. In the third part, I will quickly highlight (and rant about) some of our own work on interesting speech problems.' ],
     categoryInfoPath: './assets/speaker_data/dr._herman_kamper/category.txt',
     category: 'Speech',
     affiliationInfoPath: './assets/speaker_data/dr._herman_kamper/affiliation.txt',
     affiliation: 'The University of Stellenbosch' },
  'Dr. Inger Fabris Rotelli':
   { imagePath: './assets/speaker_data/dr._inger_fabris_rotelli/image.jpg',
     lectureInfoPath: './assets/speaker_data/dr._inger_fabris_rotelli/lecture_info.txt',
     lectureHeading: 'What you need to know about Bayesian statistics',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/dr._inger_fabris_rotelli/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/dr._inger_fabris_rotelli/affiliation.txt',
     affiliation: 'The University of Pretoria' },
  'Dr. Jacques Ludik':
   { imagePath: './assets/speaker_data/dr._jacques_ludik/image.jpg',
     lectureInfoPath: './assets/speaker_data/dr._jacques_ludik/lecture_info.txt',
     lectureHeading: 'Mathematical Foundations of Deep Learning',
     lectureAbstract:
      [ 'An introduction to the mathematics of neural networks and specialist architectures for solving a range of applied problems in a variety of domains.' ],
     categoryInfoPath: './assets/speaker_data/dr._jacques_ludik/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/dr._jacques_ludik/affiliation.txt',
     affiliation: 'Founder of MIIA, CEO of Cortex Logic' },
  'Dr. Janto Dreijer':
   { imagePath: './assets/speaker_data/dr._janto_dreijer/image.jpg',
     lectureInfoPath: './assets/speaker_data/dr._janto_dreijer/lecture_info.txt',
     lectureHeading: 'AI Ethics',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/dr._janto_dreijer/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/dr._janto_dreijer/affiliation.txt',
     affiliation: 'Ambrite ZA' },
  'Dr. Thuso Simon':
   { imagePath: './assets/speaker_data/dr._thuso_simon/image.jpg',
     lectureInfoPath: './assets/speaker_data/dr._thuso_simon/lecture_info.txt',
     lectureHeading: 'Extracting ID numbers from African Identity cards using Deep Learning',
     lectureAbstract:
      [ 'Know Your Consumer Legislation (KYC) is a big part of the legal framework of transactions in fintech. At Zoona we are required to verify the identity number and name of each consumer who use our products. To maximize efficiency in the digital era we want to have self-service KYC as we expand across Africa. Specifications for identity documents vary from country to country and can be anything from a letter from the chief to hand written identification cards. As a data scientist at Zoona, I am working on a KYC optical character recognition algorithm that must be robust enough to be used throughout Africa.' ],
     categoryInfoPath: './assets/speaker_data/dr._thuso_simon/category.txt',
     category: 'Vision',
     affiliationInfoPath: './assets/speaker_data/dr._thuso_simon/affiliation.txt',
     affiliation: 'The University of Cape Town' },
  'Dr. Willie Brink':
   { imagePath: './assets/speaker_data/dr._willie_brink/image.jpg',
     lectureInfoPath: './assets/speaker_data/dr._willie_brink/lecture_info.txt',
     lectureHeading: 'Intro to machine (and deep) learning, with a focus on probability and uncertainty',
     lectureAbstract:
      [ 'I will begin by quickly introducing a few basic principles of machine learning, explaining core mathematical concepts through examples, and telling you what I think "deep learning" is. I will then discuss in some depth a fundamentally important (but often neglected) concept in machine learning, which is to view everything in terms of probability distributions. Finally, with this concept in mind, I will talk about recent attempts to inject probability and uncertainty into deep neural networks.' ],
     categoryInfoPath: './assets/speaker_data/dr._willie_brink/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/dr._willie_brink/affiliation.txt',
     affiliation: 'The University of Stellenbosch' },
  'Emmanuel Dufourq':
   { imagePath: './assets/speaker_data/emmanuel_dufourq/image.jpg',
     lectureInfoPath: './assets/speaker_data/emmanuel_dufourq/lecture_info.txt',
     lectureHeading: 'Facial Expression Recognition and Convolutional Neural Networks',
     lectureAbstract:
      [ 'We use facial expressions to convey happiness, sadness and many other emotions. Humans are good at understanding these universal expressions, however, this is non-trivial for a machine. These has not yet been significant effort at challenging the existing literature and to critically analyse what has been done and what should be improved upon in future research. In this talk we will discover what has been done in this field with respect to each primary aspect of pre-processing, building, training and evaluating convolutional neural networks (CNNs) for facial expression recognition (FER). The talk is targeted to those who wish to learn about the theoretical aspects to be considered when implementing a CNN from scratch for FER. No background knowledge in FER is required.' ],
     categoryInfoPath: './assets/speaker_data/emmanuel_dufourq/category.txt',
     category: 'Vision',
     affiliationInfoPath: './assets/speaker_data/emmanuel_dufourq/affiliation.txt',
     affiliation: 'The University of Cape Town' },
  'Ismail Akhalwaya':
   { imagePath: './assets/speaker_data/ismail_akhalwaya/image.jpg',
     lectureInfoPath: './assets/speaker_data/ismail_akhalwaya/lecture_info.txt',
     lectureHeading: 'Quantum Machine Learning',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/ismail_akhalwaya/category.txt',
     category: 'Application',
     affiliationInfoPath: './assets/speaker_data/ismail_akhalwaya/affiliation.txt',
     affiliation: 'IBM' },
  'Philip Sterne':
   { imagePath: './assets/speaker_data/philip_sterne/image.jpg',
     lectureInfoPath: './assets/speaker_data/philip_sterne/lecture_info.txt',
     lectureHeading: 'Advice for Deep Learning Students',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/philip_sterne/category.txt',
     category: 'Lightning talk',
     affiliationInfoPath: './assets/speaker_data/philip_sterne/affiliation.txt',
     affiliation: 'Data Scientist at Stochastic Consulting' },
  'Prof. Amit Mishra':
   { imagePath: './assets/speaker_data/prof._amit_mishra/image.jpg',
     lectureInfoPath: './assets/speaker_data/prof._amit_mishra/lecture_info.txt',
     lectureHeading: 'From Neuron to Brain',
     lectureAbstract:
      [ 'Past few years have seen unprecedented growth in terms of success of machine learning algorithms. People are talking about singularity more often now a days! How akin are the current developments to actual human brain? This talk will discuss machine learning from a neuromorphic point of view and try to answer \'How has brain inspired the development of deep NN and how can it keep inspiring more breakthrough innovations in the domain of AI\'' ],
     categoryInfoPath: './assets/speaker_data/prof._amit_mishra/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/prof._amit_mishra/affiliation.txt',
     affiliation: 'The University of Cape Town' },
  'Alex Conway':
   { imagePath: './assets/speaker_data/alex_conway/image.jpg',
     lectureInfoPath: './assets/speaker_data/alex_conway/lecture_info.txt',
     lectureHeading: '10 Real World Problems Solved with Deep Learning (with code examples)',
     lectureAbstract:
      [ 'This talk will take your hand and walk you along the cutting-edge of applied deep learning. We say we turn the latest deep learning research into software solutions. When I say "we", I mean my startup - see bio below:',
        'Alex is the founder and Director of Research at NumberBoost, a startup that solves problems using deep learning. He previously worked as a quant for on the buy side and as a data scientist for Superbalist.com. He has an honours degree in actuarial science and currently writing a Statistics MSc focused on machine learning. He is one of the organizers of the Cape Town Deep Learning meet-up. ',
        'This talk will contain code samples for many of the solutions. We will go over the architecture for each real-world challenge. We build up from a simple 10 line 95% accurate on 1000 real world classes computer vision model… to complex multi-modal compound architectures to solve problems such as house price prediction, computer vision powered dent-detection and a smart email bot. Beginners welcome.' ],
     categoryInfoPath: './assets/speaker_data/alex_conway/category.txt',
     category: 'Application',
     affiliationInfoPath: './assets/speaker_data/alex_conway/affiliation.txt',
     affiliation: 'NumberBoost' },
  'Benjamin De Charmoy':
   { imagePath: './assets/speaker_data/benjamin_de_charmoy/image.jpg',
     lectureInfoPath: './assets/speaker_data/benjamin_de_charmoy/lecture_info.txt',
     lectureHeading: 'Applications of deep reinforcement learning from competitive self-play',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/benjamin_de_charmoy/category.txt',
     category: 'Lightning talk',
     affiliationInfoPath: './assets/speaker_data/benjamin_de_charmoy/affiliation.txt',
     affiliation: 'Cortex Logic' },
  'Benji Meltzer':
   { imagePath: './assets/speaker_data/benji_meltzer/image.jpg',
     lectureInfoPath: './assets/speaker_data/benji_meltzer/lecture_info.txt',
     lectureHeading: 'Deep Learning in the Agriculture Space.',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/benji_meltzer/category.txt',
     category: 'Lightning talk',
     affiliationInfoPath: './assets/speaker_data/benji_meltzer/affiliation.txt',
     affiliation: 'CTO at Aerobotics' },
  'Chris Currin':
   { imagePath: './assets/speaker_data/chris_currin/image.jpg',
     lectureInfoPath: './assets/speaker_data/chris_currin/lecture_info.txt',
     lectureHeading: 'Artificial Assistants: How can I help you?',
     lectureAbstract:
      [ 'Chatbots are not equal; with different forms permeating our lives more and more. Virtual assistants are increasingly relevant for businesses and our day-to-day lives. Chatbots have become ubiquitous for interactions, yet ‘reasonable’ intelligence remains elusive.',
        'In this talk, we explore and explain their underlying architectures and capabilities to understand what makes them work, their weaknesses, and future improvements.',
        'Design principles from a technology and human perspective will be disseminated with examples of current production systems and their impact. Furthermore, the audience will have the opportunity to advance these best practices.',
        'Resources will be made available, so the technology is relevant, practical, and accessible.' ],
     categoryInfoPath: './assets/speaker_data/chris_currin/category.txt',
     category: 'Natural language processing',
     affiliationInfoPath: './assets/speaker_data/chris_currin/affiliation.txt',
     affiliation: 'The University of Cape Town' },
  'Prof. Bruce Bassett':
   { imagePath: './assets/speaker_data/prof._bruce_bassett/image.jpg',
     lectureInfoPath: './assets/speaker_data/prof._bruce_bassett/lecture_info.txt',
     lectureHeading: 'AI challenges arising from the SKA',
     lectureAbstract:
      [ 'The Square Kilometer Array (SKA) will deliver of order one exabyte of data per day, making it the biggest science experiment in the world in the late 2020\'s. We discuss some of the open challenges and opportunities for AI and the SKA, particularly from an African perspective.' ],
     categoryInfoPath: './assets/speaker_data/prof._bruce_bassett/category.txt',
     category: 'Application',
     affiliationInfoPath: './assets/speaker_data/prof._bruce_bassett/affiliation.txt',
     affiliation: 'The University of Cape Town' },
  'Adriaan Rowan':
   { imagePath: './assets/speaker_data/adriaan_rowan/image.jpg',
     lectureInfoPath: './assets/speaker_data/adriaan_rowan/lecture_info.txt',
     lectureHeading: 'The Blessing and Curse of High Dimensionality.',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/adriaan_rowan/category.txt',
     category: 'Lightning talk',
     affiliationInfoPath: './assets/speaker_data/adriaan_rowan/affiliation.txt',
     affiliation: 'NumberBoost' },
  'Prof. Sugnet Lubbe':
   { imagePath: './assets/speaker_data/prof._sugnet_lubbe/image.jpg',
     lectureInfoPath: './assets/speaker_data/prof._sugnet_lubbe/lecture_info.txt',
     lectureHeading: 'Visualising a Deep Learning black box',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/prof._sugnet_lubbe/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/prof._sugnet_lubbe/affiliation.txt',
     affiliation: 'The University of Stellenbosch' },
  'Ritesh Ajoodha':
   { imagePath: './assets/speaker_data/ritesh_ajoodha/image.jpg',
     lectureInfoPath: './assets/speaker_data/ritesh_ajoodha/lecture_info.txt',
     lectureHeading: 'Bayesian Networks',
     lectureAbstract:
      [ 'Deep learning methods has enjoyed a tremendous amount of growth over recent years due to architectural and algorithmic innovations; larger datasets; growth in performance of processors; software innovations; and increased investment from industry. Although deep learning systems provide outstanding performance on many benchmark tasks, they are often data hungry; require a significant amount of computer resources; are poor at representing uncertainty; non-trivial to incorporate prior knowledge; easily fooled by adversarial examples; finicky to optimise; and are seen as uninterpretable black-boxes.',
        'Probabilistic graphical models is the current method-of-choice to address these issues. In this talk we will explore the Bayesian network which is a celebrated model for prediction under uncertainty; incorporates prior knowledge easily; used to express relational decisions (influence diagrams); and can provide powerful performance while being mindful about dataset sizes. The Bayesian network models the Bayesian paradigm which states that anything which we have uncertainty over we must maintain a distribution over.  We will explore the representation, inference, and learning of these networks as well as present some trending software which can be used to execute these powerful graphical models on real datasets. ' ],
     categoryInfoPath: './assets/speaker_data/ritesh_ajoodha/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/ritesh_ajoodha/affiliation.txt',
     affiliation: 'The University of the Witwatersrand' },
  'Shaun Irwin':
   { imagePath: './assets/speaker_data/shaun_irwin/image.jpg',
     lectureInfoPath: './assets/speaker_data/shaun_irwin/lecture_info.txt',
     lectureHeading: 'Deep Learning Applications in the Mining Industry',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/shaun_irwin/category.txt',
     category: 'Lightning talk',
     affiliationInfoPath: './assets/speaker_data/shaun_irwin/affiliation.txt',
     affiliation: 'Stone Three Mining' },
  'Stuart Reid':
   { imagePath: './assets/speaker_data/stuart_reid/image.jpg',
     lectureInfoPath: './assets/speaker_data/stuart_reid/lecture_info.txt',
     lectureHeading: 'Deep Learning in Complex Dynamical Systems',
     lectureAbstract:
      [ 'One assumption often made by machine learning methods is that the data generating process is stationary meaning that it doesn\'t change over time. In seemingly stationary environments this assumption can, surprisingly, be unsound. Sensors attached machinery (including self-driving cars) degrade over time and with them so do the quality and distribution of the data. In dynamical environments this assumption is, unsurprisingly, unsound. Many real-world systems including fluid flows, ecosystems, weather, financial markets, and the human body are nonstationary meaning that the distribution of data in such systems change over time. Such dynamics go by many names: regime changes, phase transitions, or concept drift. One side effect of this is that any model trained on historical data will inevitably deteriorate with time. In this talk I will contrast passive and active approaches for dealing with non-stationarity in complex dynamical systems including: online learning, ensembles, dynamic ensembles, stacking, dynamic reinitialization, adaptive window sizing using change detection tests, and non-contiguous data sampling. These techniques can be used individually or in combination to combat model deterioration.' ],
     categoryInfoPath: './assets/speaker_data/stuart_reid/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/stuart_reid/affiliation.txt',
     affiliation: 'Chief Engineer & Partner at NMRQL' },
  'Taliesin Beynon':
   { imagePath: './assets/speaker_data/taliesin_beynon/image.jpg',
     lectureInfoPath: './assets/speaker_data/taliesin_beynon/lecture_info.txt',
     lectureHeading: 'Peering inside the black box',
     lectureAbstract:
      [ 'In this presentation I\'ll try to dispel the popular perception that neural nets are black boxes, and show some examples of how we can \'peek under the hood\' of a net during and after training. I’ll briefly cover topics like LIME, anchors, semantic dictionaries, curriculum learning, visualizing loss landscapes, adversarial examples, and the like.',
        'I hope you\'ll leave with a better intuition of the overall training process and the behavior of specific kinds of nets and how they succeed (or fail) to learn.',
        'Bio: Taliesin Beynon is the developer of the high-level neural net framework that can be found in recent versions of Mathematica. He studied mathematics at the University of Cape Town.' ],
     categoryInfoPath: './assets/speaker_data/taliesin_beynon/category.txt',
     category: 'Theory',
     affiliationInfoPath: './assets/speaker_data/taliesin_beynon/affiliation.txt',
     affiliation: 'Lead Developer, Deep Learning at Wolfram' },
  'Tobias Brandt':
   { imagePath: './assets/speaker_data/tobias_brandt/image.jpg',
     lectureInfoPath: './assets/speaker_data/tobias_brandt/lecture_info.txt',
     lectureHeading: 'Deep Learning in Finance',
     lectureAbstract: [],
     categoryInfoPath: './assets/speaker_data/tobias_brandt/category.txt',
     category: 'Lightning talk',
     affiliationInfoPath: './assets/speaker_data/tobias_brandt/affiliation.txt',
     affiliation: 'Argon Asset Management' },
  'More Speakers TBC':
   { imagePath: './assets/speaker_data/more_speakers_TBC/image.jpg' } }
;

SPONSORS = [ [ './assets/images/sponsors/deeplearningindaba_com.PNG',
    'http://www.deeplearningindaba.com' ],
  [ './assets/images/sponsors/stonethree_com.png',
    'http://www.stonethree.com' ],
  [ './assets/images/sponsors/stonethreemining_com.jpg',
    'http://www.stonethreemining.com' ],
  [ './assets/images/sponsors/principa_co_za.png',
    'http://www.principa.co.za' ],
  [ './assets/images/sponsors/rezco_co_za.png',
    'http://www.rezco.co.za' ],
  [ './assets/images/sponsors/aerobotics_co.png',
    'http://www.aerobotics.co' ],
  [ './assets/images/sponsors/cortexlogic_com.png',
    'http://www.cortexlogic.com' ],
  [ './assets/images/sponsors/launchlab_co_za.png',
    'http://www.launchlab.co.za' ],
  [ './assets/images/sponsors/machineintelligenceafrica_org.png',
    'http://www.machineintelligenceafrica.org' ],
  [ './assets/images/sponsors/numberboost_com.png',
    'http://www.numberboost.com' ],
  [ './assets/images/sponsors/stochastic-consulting_com.png',
    'http://www.stochastic-consulting.com' ] ]
;
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
        if(info[speaker].imagePath == null) {
          continue;
        }

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
                        $("<div />").addClass("col-xs-9 col-xs-push-1")
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
                            $("<h5 />").text(info[speaker].affiliation)
                        ) // paragraph div
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
        console.log(sponsor);

        $logosDiv.append(
            $("<div />").addClass("col-sm-3")
            .append(
                $("<a />").attr({
                    "href":sponsor[1],
                    "target": "_blank"})
                .addClass("sponsors-box")
                .append(
                    $("<img />").attr({
                        "src": sponsor[0],
                    }).css({
                        "width": "80%",
                        "position": "absolute",
                        "top": "50%",
                        "transform": "translateY(-50%)"
                    })
                )
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
