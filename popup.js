function open_shop() {
  chrome.tabs.create({url: chrome.extension.getURL('popupShop.html')});
}

document.addEventListener('DOMContentLoaded', function () {
  var gems = document.getElementById('gems');
  var blob = document.getElementById('blob');
  document.getElementById('shop').addEventListener('click', open_shop);

  // var time = document.getElementById('time');
  
  // getting from storage the num gems and blob colors, storing in "items" with these
  // being the default if they don't exist yet
  chrome.storage.sync.get({
    gems: 0,
    blobstatus : "greengreen"
  }, function (items) {
    var gemCount = items.gems;
    var blobstatus = items.blobstatus;
    gems.textContent = gemCount.toString();
    blob.src = blobstatus.src;
  });
});