function open_menu(element) {
  var id = element.id;
  var child = document.getElementById(id + '_child');
  var x = document.getElementById(id + '_x');
  if (x.textContent == "add") {
    child.classList.add("widget-col-pages-item__child--active");
    x.textContent = "remove";
  } else {
    x.textContent = "add";
    child.classList.remove("widget-col-pages-item__child--active");
  }
}

function select_tab(number) {
  if (number == '1') {
    var thisTab = document.getElementById("sub_tab_recent");
    var thisPost = document.getElementById("sub_post_recent");
    var otherTab = document.getElementById("sub_tab_popular");
    var otherPost = document.getElementById("sub_post_popular");
  }
  else {
    var thisTab = document.getElementById("sub_tab_popular");
    var thisPost = document.getElementById("sub_post_popular");
    var otherTab = document.getElementById("sub_tab_recent");
    var otherPost = document.getElementById("sub_post_recent");
  }

  if (otherTab.classList.contains("sub-tab-item--active")) {
    thisTab.classList.add("sub-tab-item--active");
    thisPost.classList.add("sub-post-list--active");
    otherTab.classList.remove("sub-tab-item--active");
    otherPost.classList.remove("sub-post-list--active");
  }
}
