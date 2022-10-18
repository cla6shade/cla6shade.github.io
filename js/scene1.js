window.onload = function(){

}
function bind_scene1_button(){
    let btn = document.getElementById("title-button");
    btn.onclick = function () {
        let s1_animate = [
            {transform: "translate(0, 0)"},
            {transform: "translate(0, -100vw)"}
        ];
        let s2_animate = [
            {transform: "translate(100vw, 0)"},
            {transform: "translate(0, 0)"}
        ];
        let timings = {
            duration: 300,
            easing: "ease-out"
        }
        let scene1 = document.getElementById("scene-1");
        let scene2 = document.getElementById("scene-2");

        scene2.style.display = "flex";

        scene1.animate(s1_animate, timings);
        scene2.animate(s2_animate, timings);
        scene1.style.display = "none";
    }
}