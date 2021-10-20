timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = "Element_of_array";



function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function draw() {
    check_sketch();
    if(drawn_sketch = sketch){
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score : "+score;
    }
}


function check_sketch() {
    timer_counter++;
    document.getElementById("timer").value = "Timers  "+timer_counter;
    if(timer_counter>400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check = "completed") answer_holder = "set" 
    {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    } 
}

function updateCanvas() {
    background("white")
}
