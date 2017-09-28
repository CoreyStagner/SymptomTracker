$(document).ready(function() {

  // getPatients();
  // getDoctors();
  // getSymptoms();
  // getRecords();

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
    $.get("/api/doctors", function(data) {
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




  // Handle Health Record Actions
  $(document).on("submit", "#newRecord-form", handleNewRecord);
  function handleNewRecord(event){
    console.log("ran handleNewRecord()");
    event.preventDefault();
    // var newRecordName = $("#recordName").val().trim().trim();
    var recordPatientID = $("#patientID").attr("value");
    console.log(recordPatientID);
    var recordSymID = $("#patientSymID option:selected").attr("value");
    if(!recordSymID) {
      console.log("Failed to post new Record");
      return;
    }// end if()
    else{
      postNewRecord({
        symptomId: recordSymID,
        patientId: recordPatientID
      });// end postNewRecord()
    }// end else
    }// end handleNewRecord()
  
    function postNewRecord(data) {
      console.log("ran postNewRecord() with data: ", data);
      $.post("/api/health_records", data)
        .then(getRecords);
    }// end postNewRecord
  
    function getRecords() {
      console.log("ran getRecord()");
      $.get("/api/health_records", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i< data.length; i++) {
          rowsToAdd.push(createRecordRow(data[i])); 
        }// end if()
        $("#recordName").val("");
      });// end .get()
    }// end getRecords()
  
    function createRecordRow(RecordData) {
      var newTr = $("<tr>");
      newTr.data("record", RecordData);
      newTr.append("<td>" + RecordData.name + "</td>");
      // newTr.append("<td>" + RecordData.Symptoms.length + "</td>");
      newTr.append("<td><a style='curser:pointer;color:red' class='delete-record>Delete Record</a></td>");
      return newTr;
    }// end createRecordRow()






    

  $(document).on("submit", "#userSignup", handleNewUser);
  
  function handleNewUser(event){
    console.log("ran handleNewUser()");
    event.preventDefault();
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    var userPasswordVerify = $("#userPasswordVerify").val();
    var userDocID = $("#userDocID option:selected").attr("value");

    if(!userName || !userPassword || !userPasswordVerify || !userDocID) {
        alert("Please fill all fields!");
        return;
    } else {
        // alert("Got Data: " + userName + "   " + userPassword + "   " + userPasswordVerify + "   " + userDocID);
        if(userPassword !== userPasswordVerify){
          alert("Passwords do not match please use the same password!");
        } else {
            // function postNewPatient(data) {
            //   console.log("ran postNewPatient() with data: ", data);
            //   $.post("/api/patients", data)
            //     .then(getPatients);
            // }// end postNewPatient
          postNewPatient({
            name: userName,
            pass: userPassword,
            doctorId: userDocID,
            salt: "54d6f7g8h9j0k9j8h7gf6"
          });// end postNewPatient()
        }// end if/else()
    }// end if/else()
  }// end handleNewUser
  



  function postLogin(data) {
    console.log("posted login with: ", data);
    $.post("/userLogin", data)
  }// end postNewPatient



  $(document).on("submit", "#userLogin", handleLogin);
  
  function handleLogin(event){
    console.log("ran handleNewUser()");
    event.preventDefault();
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    var salt = "54d6f7g8h9j0k9j8h7gf6";

    if(!userName || !userPassword) {
        alert("Please fill all fields!");
        return;
    } else {
        // alert("Got Data: " + userName + "   " + userPassword);
        
          postLogin({
            name: userName,
            pass: userPassword,
            salt: "54d6f7g8h9j0k9j8h7gf6"
          });// end postNewPatient()
        }// end if/else()
  };// end handleNewUser




});//end document.ready