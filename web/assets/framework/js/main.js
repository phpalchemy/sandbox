$(function () {
    $('.dropdown-toggle').dropdown();
    var mode = $('#sourcecode').attr('language');

    CodeMirror.fromTextArea(document.getElementById("sourcecode"), {
        lineNumbers: true,
        matchBrackets: true,
        lineWrapping: true,
        readOnly: true,
        mode: mode
    });
});
