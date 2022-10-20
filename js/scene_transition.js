window.addEventListener('load', () => {
    bind_buttons();
});

const SCENE1 = "scene-1";
const SCENE2 = "scene-2";

const BTN_LEFT = "btn-to-left";
const BTN_RIGHT = "btn-to-right";

const DIRECTION_RIGHT = 1;
const DIRECTION_LEFT = -1;

const SCENES = [SCENE1, SCENE2];

let current_scene = SCENE1;
let scene_num = 0;

function bind_buttons() {
    let left = document.getElementById(BTN_LEFT);
    left.addEventListener('click', () => {
        // 이전 화면과 목표 화면 모두 +100vw
        // 목표 화면은 위치를 left: -100vw로 이동
        let from_element = document.getElementById(current_scene);
        if (scene_num === 0) {
            scene_num = SCENES.length - 1;
        } else {
            scene_num--;
        }
        current_scene = SCENES[scene_num];
        let to_element = document.getElementById(current_scene);
        transition(from_element, to_element, DIRECTION_LEFT);
        // SCENE2로 넘어갈때 button 색 반전
        button_reverse(BTN_RIGHT, current_scene === SCENE2);
    });


    let right = document.getElementById(BTN_RIGHT);
    right.addEventListener('click', () => {
        let from_element = document.getElementById(current_scene);
        if (scene_num === SCENES.length - 1) {
            scene_num = 0;
        } else {
            scene_num++;
        }
        current_scene = SCENES[scene_num];
        let to_element = document.getElementById(current_scene);
        transition(from_element, to_element, DIRECTION_RIGHT);
        button_reverse(BTN_RIGHT, current_scene === SCENE2);
    })
}

/**
 *
 * @param {Element} f
 * @param {Element} t
 * @param {int} direction
 */
function transition(f, t, direction) {
    //right 1 left -1
    //this is right
    let to_x = direction * 100 + "vw";
    let from_x = direction * 100 * (-1) + "vw";
    let animation = [
        {left: to_x},
        {left: "0"}
    ]
    let animation_2 = [
        {left: "0"},
        {left: from_x}
    ]

    let timings = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
    }
    t.animate(animation, timings);
    f.animate(animation_2, timings);
}

function button_reverse(button, reverse = true) {
    let btn = document.getElementById(button);
    setTimeout(() => {
        if (button === BTN_RIGHT) {
            let tail = reverse ? " btn-right-reversed" : "";
            btn.className = "arrow_button" + tail;
        } else {
            let tail = reverse ? " btn-left-reversed" : "";
            btn.className = "arrow_button" + tail;
        }
    }, 300)
}

