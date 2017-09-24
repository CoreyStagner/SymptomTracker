$(document).ready(function() {

  getPatients();
  getDoctors();
  getSymptoms();

  // Handle Doctor Actions
  $(document).on("submit", "#newDoctor-form", handleNewDoctor);

  function handleNewDoctor(event){
    console.log("ran handleNewDoctor()");
    event.preventDefault();
    var newDoctorName = $("#doctorName").val().trim();
    if(!newDoctorName) {
      console.log("Failed to post new Doctor");
      return;
    }// end if()
    else{
      postNewDoctor({
        name: newDoctorName
      });// end postNewDoctor()
    }// end else

    function postNewDoctor(data) {
      console.log("ran postNewDoctor() with data: ", data);
      $.post("/api/Doctors", data);
        // .then(getDoctors);
    }// end postNewPatient
  }// end handleNewDoctor

  function getDoctors() {
    console.log("ran getDoctor()");
    $.get("/api/Doctors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i< data.length; i++) {
        rowsToAdd.push(createDoctorRow(data[i])); 
      }// end if()
      $("#DoctorName").val("");
    });// end .get()
  }// end getDoctors()

  function createDoctorRow(doctorData) {
    var newTr = $("<tr>");
    newTr.data("doctor", doctorData);
    newTr.append("<td>" + doctorData.name + "</td>");
    // newTr.append("<td>" + doctorData.doctors.length + "</td>");
    newTr.append("<td><a style='curser:pointer;color:red' class='delete-Doctor>Delete Doctor</a></td>");
    return newTr;
  }// end createDoctorRow()








  // Handle Symptom Actions
  $(document).on("submit", "#newSymptom-form", handleNewSymptom);
  function handleNewSymptom(event){
    console.log("ran handleNewSymptom()");
    event.preventDefault();
    var newSymptomName = $("#symptomName").val().trim().trim();
    if(!newSymptomName) {
      console.log("Failed to post new Symptom");
      return;
    }// end if()
    else{
      postNewSymptom({
        name: newSymptomName
      });// end postNewSymptom()
    }// end else

    function postNewSymptom(data) {
      console.log("ran postNewSymptom() with data: ", data);
      $.post("/api/symptoms", data);
        // .then(getSymptoms);
    }// end postNewPatient
  }// end handleNewSymptom

  function getSymptoms() {
    console.log("ran getSymptom()");
    $.get("/api/symptoms", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i< data.length; i++) {
        rowsToAdd.push(createSymptomRow(data[i])); 
      }// end if()
      $("#symptomName").val("");
    });// end .get()
  }// end getSymptoms()

  function createSymptomRow(symptomData) {
    var newTr = $("<tr>");
    newTr.data("symptom", symptomData);
    newTr.append("<td>" + symptomData.name + "</td>");
    // newTr.append("<td>" + symptomData.Symptoms.length + "</td>");
    newTr.append("<td><a style='curser:pointer;color:red' class='delete-Symptom>Delete Symptom</a></td>");
    return newTr;
  }// end createSymptomRow()








  // Handle Patient Actions
  $(document).on("submit", "#newPatient-form", handleNewPatient);
  function handleNewPatient(event){
    console.log("ran handleNewPatient()");
    event.preventDefault();
    var newPatientName = $("#patientName").val().trim().trim();
    var newPatientDocID = $("#patientDocID option:selected").attr("value");
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