var config = {
    apiKey: "AIzaSyBlsOkmsZJ73ceKPemrPyEzarpTMaBHZX0",
    authDomain: "train-scheduler-33bfd.firebaseapp.com",
    databaseURL: "https://train-scheduler-33bfd.firebaseio.com",
    projectId: "train-scheduler-33bfd",
    storageBucket: "train-scheduler-33bfd.appspot.com",
    messagingSenderId: "1012804358777"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

$('#submit').on('click', function(event) {
    event.preventDefault();
    var trainName = $('#trainInput').val().trim();
    var destination = $('#destinationInput').val().trim();
    var firstTrainTime = $('#trainTimeInput').val().trim();
    var frequency = $('#frequencyInput').val().trim();

    database.ref().push({
        train: trainName,
        destination: destination,
        trainTime: firstTrainTime,
        frequency: frequency
    });
});

database.ref().on('value', function(snapshot) {
    // console.log(snapshot.val());
    snapshot.forEach(function(thisTrain) { 
        // console.log(thisTrain.val());
    newRow = $("<tr>");
    thisTrain = $("<td>").text(thisTrain.val().train);
    thisDestination = $("<td>").text(thisTrain.val().destination);
    thisTrainTime = $("<td>").text(thisTrain.val().trainTime);
    thisFrequency = $("<td>").text(thisTrain.val().frequency);
    newRow.append(thisTrain, thisDestination, thisTrainTime, thisFrequency);
    $('#addedTrains').append(newRow);
    });
});