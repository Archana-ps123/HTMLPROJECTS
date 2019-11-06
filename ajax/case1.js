var obj = new XMLHttpRequest();                 // Create XMLHttpRequest object

obj.open('GET', 'case1data.html');        // Prepare the request


obj.onload = function() {                       // When response has loaded
                                                 // The following conditional check will not work locally - only on a server
  if(obj.status === 200) {                       // If server status was ok
    document.getElementById('content').innerHTML = obj.responseText; // Update
  }
};

obj.send();  