//surveyObject: survey definition will be stored in this object and used by different functions (render, validate, submit)
var surveyObject = {};

// dummyObject: dummy survey object for offline testing
var dummyObject = {
    "ID": "a1wf0000000RlePAAS",
    "Name": "KonaTestSurvey",
    "Frequency": "Recurring",
    "Survey_Target_vod__c": "FA62DF0F-74F3-4486-A5A4-C4CA8B8EF757",
    "Status_vod__c": "Saved_vod",
    "Questions": [{
        "ID": "a1uf0000000lO3wAAE",
        "Text_vod__c": "What would you choose from this picklist?",
        "Order_vod__c": "0",
        "Required_vod__c": 0,
        "RecordTypeID": "012i0000000RNjLAAW",
        "RecordTypeName": "Picklist",
        "Answer_Choice_vod__c": "Picklist option 1 lorem ipsum;0;Picklist option 2 ipsum lorem;0;Picklist option 3 asir maret;0",
        "Answer_Choice_vod__c_ToArray": ["Picklist option 1 lorem ipsum", "Picklist option 2 ipsum lorem", "Picklist option 3 asir maret"],
        "Response": {
            "ID": "CEB2643F-6FA7-4DFA-8601-19670DB8609F",
            "Response_vod__c": "Picklist option 2 ipsum lorem"
        }
    }, {
        "ID": "a1uf0000000lO41AAE",
        "Text_vod__c": "What would you write for this text question?",
        "Order_vod__c": "1",
        "Required_vod__c": 0,
        "RecordTypeID": "012i0000000RNjNAAW",
        "RecordTypeName": "Text",
        "Answer_Choice_vod__c": "",
        "Answer_Choice_vod__c_ToArray": [],
        "Response": {
            "ID": "49927828-6436-4D09-83A2-78BFA764ECCB",
            "Text_vod__c": "Sample text"
        }
    }, {
        "ID": "a1uf0000000lO46AAE",
        "Text_vod__c": "Which option would you select for this radio question?",
        "Order_vod__c": "2",
        "Required_vod__c": 0,
        "RecordTypeID": "012i0000000RNjMAAW",
        "RecordTypeName": "Radio",
        "Answer_Choice_vod__c": "Option 1;0;Option 2;0",
        "Answer_Choice_vod__c_ToArray": ["Option 1", "Option 2"],
        "Response": {
            "ID": "B0D69FA1-57B7-4D75-966E-8A77C9252143",
            "Response_vod__c": "Option 2"
        }
    }, {
        "ID": "a1uf0000000lO4BAAU",
        "Text_vod__c": "Which options would you select for this multi-select question?",
        "Order_vod__c": "3",
        "Required_vod__c": 0,
        "RecordTypeID": "012i0000000RNjJAAW",
        "RecordTypeName": "Multiselect",
        "Answer_Choice_vod__c": "Multiselect option A;0;Multiselect option B;0;Multiselect option C;0;Multiselect option D;0",
        "Answer_Choice_vod__c_ToArray": ["Multiselect option A", "Multiselect option B", "Multiselect option C", "Multiselect option D"],
        "Response": {
            "ID": "07BDE3DA-EB8F-4DCB-99D4-945BA5912951",
            "Response_vod__c": "Multiselect option B;Multiselect option D"
        }
    }, {
        "ID": "a1uf0000000lO4GAAU",
        "Text_vod__c": "Which number would you enter for this number question?",
        "Order_vod__c": "4",
        "Required_vod__c": 0,
        "RecordTypeID": "012i0000000RNjKAAW",
        "RecordTypeName": "Number",
        "Answer_Choice_vod__c": "",
        "Answer_Choice_vod__c_ToArray": [],
        "Response": {
            "ID": "6EF9EE32-F24B-4886-8107-6616C6855E2F",
            "Number_vod__c": "9"
        }
    }, {
        "ID": "a1uf0000000lO4LAAU",
        "Text_vod__c": "Which date would you select for this date question? (YYYY-MM-DD)",
        "Order_vod__c": "5",
        "Required_vod__c": 1,
        "RecordTypeID": "012i0000000RNjFAAW",
        "RecordTypeName": "Date",
        "Answer_Choice_vod__c": "",
        "Answer_Choice_vod__c_ToArray": [],
        "Response": {
            "ID": "D15F00EA-734B-4010-A466-B6C69BACF96E",
            "Date_vod__c": "9/25/2015"
        }
    }, {
        "ID": "a1uf0000000lO4QAAU",
        "Text_vod__c": "Which date and time would you select for this datetime question? (YYYY-MM-DD) (hh:mm)",
        "Order_vod__c": "6",
        "Required_vod__c": 1,
        "RecordTypeID": "012i0000000RNjGAAW",
        "RecordTypeName": "Datetime",
        "Answer_Choice_vod__c": "",
        "Answer_Choice_vod__c_ToArray": [],
        "Response": {
            "ID": "49753095-2DCC-4482-89BC-9A54664CA0FE",
            "Datetime_vod__c": "9/25/2015, 12:27 PM"
        }
    }, {
        "ID": "a1uf0000000lO4VAAU",
        "Text_vod__c": "Which long text would you enter for this long text question?",
        "Order_vod__c": "7",
        "Required_vod__c": 0,
        "RecordTypeID": "012i0000000RNjIAAW",
        "RecordTypeName": "Long Text",
        "Answer_Choice_vod__c": "",
        "Answer_Choice_vod__c_ToArray": [],
        "Response": {
            "ID": "05AD4175-99E1-4248-8846-4D9AC1851E6E",
            "Text_vod__c": "Long text sample"
        }
    }]
};

// renderSurvey
// 
// container: DIV in which the survey will be render
// submitButton: jQuery reference to the submit button
// submitButton: jQuery reference to the submit button
//
// Will loop through all the questions to create labels and fields. If a question has a response, it'll set the field value to it
// If the survey frequency is one time and the survey is already been submitted, a message will be displayed to the user and the save and submit buttons will be hidden
// Question IDs will be used as field IDs
// A status message will be included at the end of the survey questions
var renderSurvey = function(container, submitButton, saveButton) {

    var options = '';
    var contentHeight = 0;
    var response = '';
    var responseDate = '';
    var responseTime = '';
    var hasRequiredQuestions = false;

    var toHTMLDateFormat = function(pDate) {
        var result = '';
        var tempArray = [];

        if (typeof(pDate) != 'undefined') {
            tmpDateArray = pDate.split("/");

            //input: 9/19/2014 output: 2014-09-19

            result = tmpDateArray[2];
            if (tmpDateArray[0] < 10) {
                result = result + '-0' + tmpDateArray[0]
            } else {
                result = result + '-' + tmpDateArray[0]
            }
            if (tmpDateArray[1] < 10) {
                result = result + '-0' + tmpDateArray[1]
            } else {
                result = result + '-' + tmpDateArray[1]
            }

        } else {
            //use now
            var today = new Date();

            result = today.getFullYear();
            if ((today.getMonth() + 1) < 10) {
                result = result + '-0' + (today.getMonth() + 1)
            } else {
                result = result + '-' + (today.getMonth() + 1)
            }
            if (today.getDate() < 10) {
                result = result + '-0' + today.getDate()
            } else {
                result = result + '-' + today.getDate()
            }
        }



        return result;
    }

    var toHTMLTimeFormat = function(pTime) {
        var time;

        if (typeof(pDate) != 'undefined') {

            //input: 10:02 PM output: 22:02

            time = pTime.trim();
            var hours = Number(time.match(/^(\d+)/)[1]);
            var minutes = Number(time.match(/:(\d+)/)[1]);
            var AMPM = time.match(/\s(.*)$/)[1];
            if (AMPM == "PM" && hours < 12) hours = hours + 12;
            if (AMPM == "AM" && hours == 12) hours = hours - 12;
            var sHours = hours.toString();
            var sMinutes = minutes.toString();
            if (hours < 10) sHours = "0" + sHours;
            if (minutes < 10) sMinutes = "0" + sMinutes;

            return sHours + ':' + sMinutes;

        } else {

            //use now
            time = new Date();
            if (time.getHours() < 10) {
                if (time.getMinutes() < 10) {
                    return '0' + time.getHours() + ':0' + time.getMinutes();
                } else {
                    return '0' + time.getHours() + ':' + time.getMinutes();
                }
            } else {
                if (time.getMinutes() < 10) {
                    return time.getHours() + ':0' + time.getMinutes();
                } else {
                    return time.getHours() + ':' + time.getMinutes();
                }
            }
        }
    }

    //for each question
    for (var i = 0; i < surveyObject.Questions.length; i++) {
        //question container
        container.append(
            '<div class="questionContainer" id="container' + surveyObject.Questions[i].ID + '"></div>'
        );

        //label
        container.children('#container' + surveyObject.Questions[i].ID).append(
            '<label id="label' + surveyObject.Questions[i].ID + '" for="' + surveyObject.Questions[i].ID + '">' +
            surveyObject.Questions[i].Text_vod__c +
            '</label>'
        );

        //is question required?
        // if ((surveyObject.Questions[i].Required_vod__c == 1) || (surveyObject.Questions[i].Required_vod__c == '1') || (surveyObject.Questions[i].Required_vod__c.toLowerCase() == 'true')) {
        if ((surveyObject.Questions[i].Required_vod__c == 1) || (surveyObject.Questions[i].Required_vod__c == '1') || (surveyObject.Questions[i].Required_vod__c == 'true')) {
            $('#label' + surveyObject.Questions[i].ID).addClass('questionRequired');
            hasRequiredQuestions = true;
        }

        switch (surveyObject.Questions[i].RecordTypeName) {
            case 'Picklist':
                {
                    //saved response
                    response = '';
                    if (!(surveyObject.Questions[i].Response.Response_vod__c === null)) {
                        response = surveyObject.Questions[i].Response.Response_vod__c;
                    }

                    options = '';
                    options = options + '<option value=""></option>';
                    for (var n = 0; n < surveyObject.Questions[i].Answer_Choice_vod__c_ToArray.length; n++) {
                        if (surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] == response) {
                            options = options + '<option value="' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '" selected>' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '</option>';
                        } else {
                            options = options + '<option value="' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '">' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '</option>';
                        }
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        '   <select id="' + surveyObject.Questions[i].ID + '">' + options + '</select>' +
                        '</div>'
                    );
                }
                break;
            case 'Text':
                {
                    //saved response
                    response = '';
                    if (!(surveyObject.Questions[i].Response.Text_vod__c === null)) {
                        response = surveyObject.Questions[i].Response.Text_vod__c;
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        '   <input type="text" id="' + surveyObject.Questions[i].ID + '" value="' + response + '">' +
                        '</div>'
                    );
                }
                break;
            case 'Radio':
                {
                    //saved response
                    response = '';
                    if (!(surveyObject.Questions[i].Response.Response_vod__c === null)) {
                        response = surveyObject.Questions[i].Response.Response_vod__c;
                    }

                    options = '';
                    for (var n = 0; n < surveyObject.Questions[i].Answer_Choice_vod__c_ToArray.length; n++) {
                        contentHeight = contentHeight + 20;
                        options = options + '<label>' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n];

                        if (surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] == response) {
                            options = options + '   <input type="radio" name="' + surveyObject.Questions[i].ID + '" id="' + surveyObject.Questions[i].ID + n + '" value="' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '" checked/>'
                        } else {
                            options = options + '   <input type="radio" name="' + surveyObject.Questions[i].ID + '" id="' + surveyObject.Questions[i].ID + n + '" value="' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '" />'
                        }
                        options = options + '</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        options +
                        '</div>'
                    );
                }
                break;
            case 'Multiselect':
                {
                    //saved response
                    var responsesArray = [];
                    if (!(surveyObject.Questions[i].Response.Response_vod__c === null)) {
                        responsesArray = surveyObject.Questions[i].Response.Response_vod__c.split(';');
                    }

                    options = '';
                    for (var n = 0; n < surveyObject.Questions[i].Answer_Choice_vod__c_ToArray.length; n++) {
                        contentHeight = contentHeight + 20;
                        options = options + '<label>' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n]
                        if (responsesArray.indexOf(surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n]) >= 0) {
                            options = options + '   <input type="checkbox" name="' + surveyObject.Questions[i].ID + '" id="' + surveyObject.Questions[i].ID + n + '" value="' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '" checked/>'
                        } else {
                            options = options + '   <input type="checkbox" name="' + surveyObject.Questions[i].ID + '" id="' + surveyObject.Questions[i].ID + n + '" value="' + surveyObject.Questions[i].Answer_Choice_vod__c_ToArray[n] + '" />'
                        }
                        options = options + '</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        options +
                        '</div>'
                    );
                }
                break;
            case 'Number':
                {
                    //saved response
                    response = '';
                    if (!(surveyObject.Questions[i].Response.Number_vod__c === null)) {
                        response = surveyObject.Questions[i].Response.Number_vod__c;
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        '   <input type="number" id="' + surveyObject.Questions[i].ID + '" value="' + response + '">' +
                        '</div>'
                    );
                }
                break;
            case 'Date':
                {
                    //saved response                
                    response = '';
                    if (!(surveyObject.Questions[i].Response.Date_vod__c === null)) {
                        responseDate = toHTMLDateFormat(surveyObject.Questions[i].Response.Date_vod__c);
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        '        <input type="date" id="' + surveyObject.Questions[i].ID + '" value="' + responseDate + '">' +
                        '</div>'
                    );
                }
                break;
            case 'Datetime':
                {
                    //saved response
                    if (!(surveyObject.Questions[i].Response.Datetime_vod__c === null)) {
                        var tmpDateTimeArray = surveyObject.Questions[i].Response.Datetime_vod__c.split(',');

                        //date
                        responseDate = toHTMLDateFormat(tmpDateTimeArray[0]);

                        //time
                        responseTime = toHTMLTimeFormat(tmpDateTimeArray[1]);
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        '        <input type="date" id="' + surveyObject.Questions[i].ID + '-date" value="' + responseDate + '">' +
                        '        <input type="time" id="' + surveyObject.Questions[i].ID + '-time" value="' + responseTime + '">' +
                        '</div>'
                    );
                }
                break;
            case 'Long Text':
                {
                    //saved response
                    response = '';
                    if (!(surveyObject.Questions[i].Response.Text_vod__c === null)) {
                        response = surveyObject.Questions[i].Response.Text_vod__c;
                    }

                    container.children('#container' + surveyObject.Questions[i].ID).append(
                        '<div>' +
                        '        <textarea rows="2" cols="70" id="' + surveyObject.Questions[i].ID + '">' + response + '</textarea>' +
                        '</div>'
                    );
                }
                break;
        }
    }

    //add status div
    container.append(
        '<div class="surveyStatus">' +
        'Status: ' + surveyObject.Status_vod__c +
        ' - Frequency: ' + surveyObject.Frequency +
        '</div>'
    );

    //has required questions?
    if (hasRequiredQuestions) {
        $('.surveyStatus').prepend('(*) required questions. ');
    }

    //one time survey already submitted: hide button
    if ((surveyObject.Status_vod__c == 'Submitted_vod') && (surveyObject.Frequency == 'One Time')) {
        $('.surveyStatus').append('<br>Survey button is hidden because this is a one time survey has already been submitted');
        submitButton.hide();
        saveButton.hide();
    } else {
        submitButton.show();
        saveButton.show();
    }
}

// validateSurvey
//
// Will loop through all the questions to check if required values were entered by the user
// Returns true if all required responses were filled in or false in case of one or more missing required responses
var validateSurvey = function() {

    var isFormValid = true;

    $('.questionContainer').removeClass('questionError');

    for (var i = 0; i < surveyObject.Questions.length; i++) {
        //required field test
        if ((surveyObject.Questions[i].Required_vod__c == 1) || (surveyObject.Questions[i].Required_vod__c == '1') || (surveyObject.Questions[i].Required_vod__c.toLowerCase() == 'true')) {
        // if ((surveyObject.Questions[i].Required_vod__c == 1) || (surveyObject.Questions[i].Required_vod__c == '1') || (surveyObject.Questions[i].Required_vod__c == 'true')) {
            
            switch (surveyObject.Questions[i].RecordTypeName) {
                case 'Radio':
                case 'Multiselect':
                    if ($('input[name=' + surveyObject.Questions[i].ID + ']:checked').length == 0) {
                        $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                        isFormValid = false;
                    }
                    break;
                case 'Datetime':
                    if (($('#' + surveyObject.Questions[i].ID + '-date').val() == '') || ($('#' + surveyObject.Questions[i].ID + '-time').val() == '')) {
                        $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                        isFormValid = false;
                    }
                    break;
                case 'Picklist':
                case 'Text':
                case 'Number':
                case 'Date':
                case 'Long Text':
                    if ($('#' + surveyObject.Questions[i].ID).val() == '') {
                        $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                        isFormValid = false;
                    }
                    break;
            }
        }
        //format test (for Win devices)
        if (navigator.platform.toLowerCase().indexOf("win") >= 0) {
            switch (surveyObject.Questions[i].RecordTypeName) {
                case 'Number':
                    if ($('#' + surveyObject.Questions[i].ID).val() != '') {
                        if (isNaN($('#' + surveyObject.Questions[i].ID).val())) {
                            $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                            isFormValid = false;
                        }
                    }
                    break;
                case 'Date':
                    if ($('#' + surveyObject.Questions[i].ID).val() != '') {
                        if (!Date.parse($('#' + surveyObject.Questions[i].ID).val())) {
                            $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                            isFormValid = false;
                        }
                    }
                    break;
                case 'Datetime':
                    if ($('#' + surveyObject.Questions[i].ID + '-date').val() != '') {
                        if (!Date.parse($('#' + surveyObject.Questions[i].ID + '-date').val())) {
                            $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                            isFormValid = false;
                        }
                    }
                    if ($('#' + surveyObject.Questions[i].ID + '-time').val() != '') {
                        if (!(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test($('#' + surveyObject.Questions[i].ID + '-time').val()))) {
                            $('#container' + surveyObject.Questions[i].ID).addClass('questionError');
                            isFormValid = false;
                        }
                    }
                    break;
            }
        }
    }
    return isFormValid;
}

// submitSurvey
//
// action: Submitted_vod or Saved_vod
// submitButton: jQuery reference to the submit button
// submitButton: jQuery reference to the submit button
//
// Will loop through all the questions to get response values, assign those values to the survey object and finally submit or save the survey
// If action is Saved_vod, will save the survey and hide Save button (while keeping Submit button visible)
// If action is Submitted_vod, will submit the survey and hide both Submit and Save buttons
var submitSurvey = function(action, submitButton, saveButton) {

    for (var i = 0; i < surveyObject.Questions.length; i++) {

        if ((surveyObject.Questions[i].Required_vod__c == 1) || (surveyObject.Questions[i].Required_vod__c == '1') || (surveyObject.Questions[i].Required_vod__c.toLowerCase() == 'true')) {
            surveyObject.Questions[i].Required_vod__c = 1;
        } else {
            surveyObject.Questions[i].Required_vod__c = 0;
        }

        switch (surveyObject.Questions[i].RecordTypeName) {
            case 'Picklist':
                surveyObject.Questions[i].Response.Response_vod__c = $('#' + surveyObject.Questions[i].ID).val();
                break;
            case 'Text':
                surveyObject.Questions[i].Response.Text_vod__c = $('#' + surveyObject.Questions[i].ID).val();
                break;
            case 'Radio':
                if ($('input[name=' + surveyObject.Questions[i].ID + ']:checked').length == 0) {
                    surveyObject.Questions[i].Response.Response_vod__c = '';
                } else {
                    surveyObject.Questions[i].Response.Response_vod__c = $('input[name=' + surveyObject.Questions[i].ID + ']').filter(':checked').val();
                }
                break;
            case 'Multiselect':
                surveyObject.Questions[i].Response.Response_vod__c = '';
                $('input[name=' + surveyObject.Questions[i].ID + ']').filter(':checked').each(function() {
                    surveyObject.Questions[i].Response.Response_vod__c = surveyObject.Questions[i].Response.Response_vod__c + $(this).val() + ';';
                });
                surveyObject.Questions[i].Response.Response_vod__c = surveyObject.Questions[i].Response.Response_vod__c.substring(0, surveyObject.Questions[i].Response.Response_vod__c.length - 1); //remove last ;
                break;
            case 'Number':
                surveyObject.Questions[i].Response.Number_vod__c = $('#' + surveyObject.Questions[i].ID).val();
                break;
            case 'Date':
                if ($('#' + surveyObject.Questions[i].ID).val() != '') {
                    surveyObject.Questions[i].Response.Date_vod__c = $('#' + surveyObject.Questions[i].ID).val();
                } else {
                    //for Win8 compatibility that doesn't accept empty datetime questions, add generic value
                    if (navigator.platform.toLowerCase().indexOf("win") >= 0) {
                        surveyObject.Questions[i].Response.Date_vod__c = '1900-01-01';
                    } else {
                        surveyObject.Questions[i].Response.Date_vod__c = '';
                    }
                }
                break;
            case 'Datetime':
                surveyObject.Questions[i].Response.Datetime_vod__c = '';
                if (($('#' + surveyObject.Questions[i].ID + '-date').val() != '') && ($('#' + surveyObject.Questions[i].ID + '-time').val() != '')) {
                    surveyObject.Questions[i].Response.Datetime_vod__c = $('#' + surveyObject.Questions[i].ID + '-date').val() + 'T' + $('#' + surveyObject.Questions[i].ID + '-time').val() + ':00.000Z';
                } else {
                    //for Win8 compatibility that doesn't accept empty datetime questions, add generic value
                    if (navigator.platform.toLowerCase().indexOf("win") >= 0) {
                        surveyObject.Questions[i].Response.Datetime_vod__c = '1900-01-01T12:00:00.000Z';
                    } else {
                        surveyObject.Questions[i].Response.Datetime_vod__c = '';
                    }
                }
                break;
            case 'Long Text':
                surveyObject.Questions[i].Response.Text_vod__c = $('#' + surveyObject.Questions[i].ID).val();
                break;
        }
    }

    com.veeva.clm.submitSurvey(
        surveyObject,
        action,
        function() {
            if (action == 'Saved_vod') {
                $('.surveyStatus').html('Survey has been saved');
                saveButton.hide();
                submitButton.hide();
            } else {
                $('.surveyStatus').html('Survey has been submitted');
                saveButton.hide();
                submitButton.hide();
            }
        },
        function(errorMsg) {
            $('#errorDiv').html(errorMsg);
        }
    );
}

$(document).ready(function(e) {

    window.onerror = function(errorMsg, url, lineNumber) {
        $('#errorDiv').html('ERROR: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
    }

    $('#submitButton').on(
        'click',
        function() {
            if (validateSurvey()) {
                submitSurvey('Submitted_vod', $('#submitButton'), $('#saveButton'));
            }
        });

    $('#saveButton').on(
        'click',
        function() {
            if (validateSurvey()) {
                submitSurvey('Saved_vod', $('#submitButton'), $('#saveButton'));
            }
        });

    /*use this code for offline (browser) testing*/
    // surveyObject = dummyObject;
    // renderSurvey($('#surveyContainer'), $('#submitButton'), $('#saveButton'))
    /*end of offline testing code*/

    /*use this code for iRep or CRM for Win testing*/
    com.veeva.clm.getSurvey_Object(
        function(dataReceived) {
            surveyObject = dataReceived;
            renderSurvey($('#surveyContainer'), $('#submitButton'), $('#saveButton'));
        },
        function(errorMsg) {
            $('#errorDiv').html(errorMsg);
        }
    );
    /*end of iRep or CRM for Win testing code*/

});
