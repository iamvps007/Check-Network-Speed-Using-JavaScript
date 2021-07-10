// let stateCheck = setInterval(() => {
//   if (document.readyState === "complete") {
//     clearInterval(stateCheck);
//     main();
//     var parameter1 = $('script[src*="myfile.js"]').data("parameter_1");
//     console.log(parameter1);
//   }
// }, 100);
function main() {
  var htmls = `<!DOCTYPE html>
<html>
<body sty;e="width:200px;border:1px solid green">

<h2>HTML Forms</h2>

   <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
 
 
</body>
</html>`;
  document.getElementById("myFirstWidget").innerHTML = htmls;
  console.log("working");
}

// Anonymous "self-invoking" function
(function () {
  // Load the script
  var script = document.createElement("SCRIPT");
  script.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);

  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    } else {
      window.setTimeout(function () {
        checkReady(callback);
      }, 20);
    }
  };

  // Start polling...
  checkReady(function ($) {
    $(function () {
      let stateCheck = setInterval(() => {
        if (document.readyState === "complete") {
          clearInterval(stateCheck);
          main();
          var parameter1 = $('script[src*="demo.js"]').data("page_id");
          console.log(parameter1);
        }
      }, 100);
    });
  });
})();
