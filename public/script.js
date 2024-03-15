// Function to fetch and display questions from Firestore
function fetchQuestions() {
    var questionsRef = db.collection("questions");
  
    questionsRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var questionData = doc.data();
        var question = questionData.question;
        var options = questionData.options;
  
        var questionElement = document.createElement("div");
        questionElement.textContent = question;
        document.getElementById("quiz-container").appendChild(questionElement);
  
        options.forEach((option, index) => {
          var optionElement = document.createElement("input");
          optionElement.type = "radio";
          optionElement.name = "question" + doc.id;
          optionElement.value = index;
          var labelElement = document.createElement("label");
          labelElement.textContent = option;
          document.getElementById("quiz-container").appendChild(optionElement);
          document.getElementById("quiz-container").appendChild(labelElement);
          document.getElementById("quiz-container").appendChild(document.createElement("br"));
        });
      });
    });
  }
  
  // Wait for the DOM to load before fetching questions
  document.addEventListener("DOMContentLoaded", function () {
    fetchQuestions();
  });
  