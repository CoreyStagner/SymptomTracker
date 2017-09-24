$(document).ready(function() {
  
    var newPatientName = $("#patientName");
    var patientList = $("tbody");
    var patientContainer = (".patient-container");
  
  
    $(document).on("submit", "#newPatient-form", handleNewPatient);

    function handleNewPatient(event){
      event.preventDefault();
      if(!newPatientName.val().trim().trim()) {
        return;
      }// end if()
      postNewPatient({
        name: newPatientName
          .val()
          .trim()
      });// end postNewPatient()
    }// end handleNewPatient()
  
    function postNewPatient(data) {
      $.post("/api/patients", data)
        .then(getPatients);
    }// end postNewPatient
  
    function getPatients() {
      $.get("/api/patients", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i< data.length; i++) {
          rowsToAdd.push(createPatientRow(data[i])); 
        }// end if()
        renderPatientList(rowsToAdd);
        newPatientName.val("");
      })// end .get()
    }// end getPatients()
  
    function createPatientRow(patientData) {
      var newTr = $("<tr>");
      newTr.data("patient", patientData);
      newTr.append("<td>" + patientData.name + "</td>");
      // newTr.append("<td>" + patientData.Symptoms.length + "</td>");
      newTr.append("<td><a style='curser:pointer;color:red' class='delete-patient>Delete Patient</a></td>");
      return newTr;
    }// end createPatientRow()
  
    function renderPatientList(rows) {
      patientList.children().not(":last").remove();
      patientContainer.children(".alert").remove();
      if(rows.length) {
        console.log(rows);
        patientList.prepend(rows);
      }// end if()
      else {
        renderEmpty();
      }// end else()
    }// end renderPatientList()
  
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.html("You must create a patient first.");
      patientContainer.append(alertDiv);
    }// end renderEmpty()
  
    // function handleDeleteButtonPress() {
    //   var listItemData = $(this).parent("td").parent("tr").data("author");
    //   var id = listItemData.id;
    //   $.ajax({
    //     method: "DELETE",
    //     url: "/api/authors/" + id
    //   })
    //   .done(getAuthors);
    // }
  
  })//end document.ready