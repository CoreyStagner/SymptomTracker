$(document).ready(function() {

  // var patientList = $("tbody");
  // var patientContainer = (".patient-container");
  
  
  $(document).on("submit", "#newPatient-form", handleNewPatient);
  //
  function handleNewPatient(event){
    console.log("ran handleNewPatient()");
    event.preventDefault();
    var newPatientName = $("#patientName").val();
    var newPatientDocID = $("#patientDocID option:selected").attr("value");
    console.log(newPatientName);
      if(!newPatientName) {
        console.log("Failed to post new Patient");
        return;
      }// end if()
      else{
        postNewPatient({
          name: newPatientName,
          doctorId: newPatientDocID
        });// end postNewPatient()
      }// end else
    }// end handleNewPatient()
  
    function postNewPatient(data) {
      console.log("ran postNewPatient() with data: ", data);
      $.post("/api/patients", data)
        .then(getPatients);
    }// end postNewPatient
  
    function getPatients() {
      console.log("ran getPatient()");
      $.get("/api/patients", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i< data.length; i++) {
          rowsToAdd.push(createPatientRow(data[i])); 
        }// end if()
        $("#patientName").val("");
      });// end .get()
    }// end getPatients()
  
    function createPatientRow(patientData) {
      var newTr = $("<tr>");
      newTr.data("patient", patientData);
      newTr.append("<td>" + patientData.name + "</td>");
      // newTr.append("<td>" + patientData.Symptoms.length + "</td>");
      newTr.append("<td><a style='curser:pointer;color:red' class='delete-patient>Delete Patient</a></td>");
      return newTr;
    }// end createPatientRow()
    
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.html("You must create a patient first.");
      patientContainer.append(alertDiv);
    }// end renderEmpty()
  });//end document.ready