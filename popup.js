document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkPageButton = document.getElementById("checkPage");
    checkPageButton.addEventListener(
      "click",
      function () {
        chrome.tabs.getSelected(null, function (tab) {
          d = document;

          var diamonds = 10;
          document.getElementById('sendShop').value = diamonds + 1;
          
          var f = d.createElement("form");
          f.action = ""; // some url which does something when clicked upon
          f.method = "post";
          var i = d.createElement("input");
          i.type = "hidden";
          i.name = "url";
          i.value = tab.url;
          f.appendChild(i);
          d.body.appendChild(f);
          f.submit();
        });
      },
      false
    );
  },
  false
);
