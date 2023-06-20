function loadRandomContent() {
    var apiUrl = "data.json"; // Replace with your nPoint.io API endpoint URL
  

      // Declare the jsonData variable
    var jsonData;

    // Make an AJAX request to fetch the JSON data
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        console.log(jsonData);

        // Generate a random index to select a random page from the JSON data
        var randomPageIndex = Math.floor(
          Math.random() * jsonData.length
        );
  
        // Get the page title and content based on the random index
        var pageTitle = jsonData[randomPageIndex].id;
        var pageContent = jsonData[randomPageIndex].title;
  
        // Save the randomly selected content in sessionStorage
        sessionStorage.setItem("pageTitle", pageTitle);
        sessionStorage.setItem("pageContent", pageContent);
  
        // Navigate to the random-page.html
        window.open = "cartas.html", "_blank";
      }
    };
    xhr.send();
  }
  