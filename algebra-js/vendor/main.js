document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issue = {
    id: issueId,
    description: issueDesc,
    serverity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

  if(localStorage.getItem('issues')) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issues);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();
  
  e.preventDefault();

}

function setStatuClosed(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for(var i = 0; i < issues.length; i++){
    if(issues[i].id == id){
      issues[i].status = 'Closed';
    }
  }
  localStorage.getItem('issues', JSON.stringify(issues));

  fetchIssues();

}

function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for(var i = 0; i < issues.length; i++){
    if(issues[i].id == id){
      issues.splice(i, 1);
    }
  }
  localStorage.getItem('issues', JSON.stringify(issues));

  fetchIssues();

}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issue'));
  var issuesList = document.getElementById('issuesList');

  issuesList.innerHTML = "";

  for(var i = 0; i < issues.length; i++){
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML += '<div class="well">'+
                            '<h6>Issued ID: '+ id + '</h6>'+
                            '<p><span class="label label-info">'+ status + '</span>'+
                            '<h3>'+ desc + '</h3>'+
                            '<p></span class="fa fa-time"></span>' + severity + '</p>'+
                            '<p></span class="fa fa-user"></span>' + assignedTo + '</p>'+
                            '<a href="#" onclick="setStatuClosed(\''+ id+' \')" class="btn btn-warning">Close</a>'+
                            '<a href="#" onclick="deleteIssue(\''+ id+' \')" class="btn btn-danger">Delete</a>'+
                            '</div>';
  }
}
