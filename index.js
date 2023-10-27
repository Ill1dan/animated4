var follow = document.getElementById("follow");
var span = follow.querySelector("span");
var count = 0;

follow.addEventListener("click", function () {
    if (count == 0) {
        span.innerHTML = "Unfollow";
        count += 1;
    } else {
        span.innerHTML = "Follow";
        count -= 1;
    }
})