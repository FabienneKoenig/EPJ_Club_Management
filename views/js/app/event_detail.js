$(function() {

    let $appEventDetail = $("#app_eventDetail");

    /* There most certainly is a better way to do this */
    let url = window.location.href;
    let eventId = url.split("/").pop();
    
    if ($appEventDetail.length > 0) {

        $.getJSON("/api/events/" + eventId, function( data ) {
            $appEventDetail.find("#eventName").html(data.name);
            $appEventDetail.find("#eventOrt").html(data.ort);
            $appEventDetail.find("#eventDatum").html(data.datum);
            $appEventDetail.find("#eventZeit").html(data.von + " - " + data.bis);
            $appEventDetail.find("#eventBeschreibung").html(data.beschreibung);
            if (data.verantwortlicher != null) {
                $appEventDetail.find("#eventVerantwortlicher").html(data.verantwortlicher);
            } else {
                $appEventDetail.find("#eventVerantwortlicher").html("kein Verantwortlicher definiert");
            }
        });
    }
});