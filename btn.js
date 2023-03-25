likeBtn = document.getElementById("like");
likeCount = document.querySelector("count");
var counter = localStorage.getItem('.count');

likeBtn.addEventListener("click", function() {
  likeBtn.innerHTML = `<img src="img/Picture4.png" width= "34" height="33"> <span id="count">${++counter}</span>`;
  localStorage.setItem("Count", counter)
  return likeCount.textContent = counter;
});
