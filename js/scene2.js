const SCENE_AFFILIATION = "affiliation";
const SCENE_SKILLS = "skills";
const SCENE_AWARDS = "awards";
let now_scene = SCENE_AFFILIATION;
window.onload = function(){
    bind_info_buttons();
}
function bind_info_buttons(){
    let btn_aff = [document.getElementById("btn_affiliation"), SCENE_AFFILIATION];
    let btn_skills = [document.getElementById("btn_skills"), SCENE_SKILLS];
    let btn_awards = [document.getElementById("btn_awards"), SCENE_AWARDS];
    let btns = [btn_aff, btn_skills, btn_awards];
    for(let b in btns){
        let btn = btns[b];
        btn[0].onclick = function () {
            let target_scene = btn[1];
            let scenes = document.getElementsByClassName("transcene");
            for (let scene of scenes) {
                if(scene.id !== target_scene){
                    scene.style.display = "none";
                } else {
                    scene.style.display = "flex";
                    let animation = [
                        {transform: 'translate(-50px, 0px)',
                        opacity: ".0"},
                        {transform: 'translate(0px, 0px)',
                        opacity: "1"}
                    ]
                    let timings = {
                        duration: 300,
                        easing: "ease-out"
                    }
                    scene.animate(animation, timings)
                }
            }
        }
    }
}