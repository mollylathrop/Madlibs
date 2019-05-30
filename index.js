function createIt() {
      var storyDiv = document.getElementById("story");
      var name = document.getElementById("name").value;
      var adjective = document.getElementById("adjective").value;
      var noun = document.getElementById("noun").value;
      storyDiv.innerHTML = name + " got a pet " + noun + " " + "... so "+ adjective + "!";
    }

    var libButton = document.getElementById('lib-button');
    libButton.addEventListener('click', createIt);
