$(function() {
    var allPublications = [];
    var Publication = makeStruct("title credit img link");

    /* Add publications */

    allPublications.push(new Publication('Patterns of neural activity predict picture-naming performance of a patient with chronic aphasia', 'Yune-Sang Lee, Jihad T. Zreik, Roy H. Hamilton, 2017', 'img/publications/question-mark.jpg', 'doc/Lee-et-al-2017.pdf'));

    allPublications.push(new Publication('Acoustic richness modulates the neural networks supporting intelligible speech processing', 'Yune-Sang Lee, Nam Eun Min, Arthur Wingfield, Murray Grossman, Jonathan E. Peelle, 2016', 'img/publications/headphones.jpg', 'doc/Lee-et-al-2016.pdf'));

    allPublications.push(new Publication('Melody recognition revisited: influence of melodic Gestalt on the encoding of relational pitch information', 'Yune-Sang Lee, Petr Janata, Carlton Frost, Zachary Martinez, Richard Granger, 2015', 'img/publications/music-sheet.jpg', 'doc/Lee_melodic_gestalt2015.pdf'));

    allPublications.push(new Publication('Multivariate sensitivity to voice during auditory categorization', 'Yune Sang Lee, Jonathan E. Peelle, David Kraemer, Samuel Lloyd, Richard Granger, 2015', 'img/publications/man-with-a-megaphone.jpg', 'doc/Lee_voice_sound2015.pdf'));

    allPublications.push(new Publication('Individual differences in the morphometry and activation of time perception networks are influenced by dopamine genotype', 'Martin Wiener, Yune-Sang Lee, FalkW. Lohoff, H. Branch Coslett, 2014', 'img/publications/time.jpg', 'doc/Wiener-et-al-2014.pdf'));

    allPublications.push(new Publication('Smoothness without Smoothing: Why Gaussian Naive Bayes Is Not Naive for Multi-Subject Searchlight Studies', 'Rajeev D. S. Raizada, Yune-Sang Lee, 2013', 'img/publications/blur.jpg', 'doc/Raizada-and-Lee-2013.pdf'));

    allPublications.push(new Publication('Categorical Speech Processing in Broca’s Area: An fMRI Study Using Multivariate Pattern-Based Analysis', 'Yune-Sang Lee, Peter Turkeltaub, Richard Granger, and Rajeev D. S. Raizada, 2012', 'img/publications/hear.jpg', 'doc/Lee_categorical_speech2012.pdf'));

    allPublications.push(new Publication('Investigation of melodic contour processing in the brain using multivariate pattern-based fMRI', 'Yune-Sang Lee, Petr Janata, Carlton Frost, Michael Hanke, Richard Granger, 2011', 'img/publications/organ.jpg', 'doc/Lee_music_contour2011.pdf'));

    allPublications.push(new Publication('Neural and behavioral correlates of auditory categorization', 'Brian E. Russ, Yune-Sang Lee, Yale E. Cohen, 2007', 'img/publications/monkey.jpg', 'doc/Russ-et-al-2007.pdf'));

    /* End of add publications */

    var base = document.getElementById('publication').children;
    var newRow;

    for (var i = 0; i < allPublications.length; i++) {
        if (i % 3 == 0) {
            newRow = document.createElement("div");
            newRow.className += 'row';
            base[0].appendChild(newRow);
        }

        var newCol = document.createElement("div");
        newCol.className += 'col-md-4 col-sm-6 portfolio-item';

            var image = document.createElement('img');
            image.setAttribute('src', allPublications[i].img);
            image.className += 'img-responsive';
            newCol.appendChild(image);

            var newText = document.createElement("div");
            newText.className += 'portfolio-caption';

                var newTitle = document.createElement("h4");
                newTitle.textContent = allPublications[i].title;
                newText.appendChild(newTitle);

                var newSubheading = document.createElement("h3");
                newSubheading.className += 'text-muted section-subheading';
                newSubheading.setAttribute('style', 'margin-bottom:0;');

                var text = allPublications[i].credit + ' ';
                newSubheading.textContent = text;

                    var link = document.createElement("a");
                    link.setAttribute('href', allPublications[i].link);
                    var download = document.createElement("i");
                    download.className += 'fa fa-download';
                    link.appendChild(download);
                    newSubheading.appendChild(link);

                newText.appendChild(newSubheading);

            newCol.appendChild(newText);

        newRow.appendChild(newCol);
    }
});

function makeStruct(names) {
    var names = names.split(' ');
    var count = names.length;
    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}