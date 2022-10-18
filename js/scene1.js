window.addEventListener('load', () => {
    bind_scene1_buttons();
});
function bind_scene1_buttons(){
    let btn = document.getElementById("title-button");
    btn.onclick = function () {
        let s1_animate = [
            {transform: "translate(0, 0)",
            opacity: "1"},
            {transform: "translate(100px, 0)",
            opacity: "0"}
        ];
        let s2_animate = [
            {transform: "translate(100px, 0)",
                opacity: "0"},
            {transform: "translate(0, 0)",
                opacity: "1"}
        ];
        let timings = {
            duration: 300,
            easing: "ease-out",
            fill: "forwards"
        }
        let scene1 = document.getElementById("scene-1");
        let scene2 = document.getElementById("scene-2");
        scene2.style.display = "flex";

        scene1.animate(s1_animate, timings);
        scene2.animate(s2_animate, timings);
        scene1.style.display = "none";
    }
}