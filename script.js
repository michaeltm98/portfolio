// Load non essential images asyncronously once the page is loaded
function init() {
  var imgDefer = document.getElementsByTagName('source');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('srcset',imgDefer[i].getAttribute('data-src'));
    }
  }

  imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
}

window.onload = init;