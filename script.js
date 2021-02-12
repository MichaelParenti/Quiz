

let title = document.querySelector("#title");
let title2 = document.querySelector("#title2");

let aa1 = document.querySelector("#Aanswer1");
let aa2 = document.querySelector("#Aanswer2");
let aa3 = document.querySelector("#Aanswer3");

let ba1 = document.querySelector("#Banswer1");
let ba2 = document.querySelector("#Banswer2");
let ba3 = document.querySelector("#Banswer3");

let ca1 = document.querySelector("#Canswer1");
let ca2 = document.querySelector("#Canswer2");
let ca3 = document.querySelector("#Canswer3");

let da1 = document.querySelector("#Danswer1");
let da2 = document.querySelector("#Danswer2");
let da3 = document.querySelector("#Danswer3");

let ea1 = document.querySelector("#Eanswer1");
let ea2 = document.querySelector("#Eanswer2");
let ea3 = document.querySelector("#Eanswer3");

let fa1 = document.querySelector("#Fanswer1");
let fa2 = document.querySelector("#Fanswer2");
let fa3 = document.querySelector("#Fanswer3");

let ga1 = document.querySelector("#Ganswer1");
let ga2 = document.querySelector("#Ganswer2");
let ga3 = document.querySelector("#Ganswer3");

let ha1 = document.querySelector("#Hanswer1");
let ha2 = document.querySelector("#Hanswer2");
let ha3 = document.querySelector("#Hanswer3");

let ia1 = document.querySelector("#Ianswer1");
let ia2 = document.querySelector("#Ianswer2");
let ia3 = document.querySelector("#Ianswer3");

let ja1 = document.querySelector("#Janswer1");
let ja2 = document.querySelector("#Janswer2");
let ja3 = document.querySelector("#Janswer3");

let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");
let next4 = document.querySelector("#next4");
let next5 = document.querySelector("#next5");
let next6 = document.querySelector("#next6");
let next7 = document.querySelector("#next7");
let next8 = document.querySelector("#next8");
let next9 = document.querySelector("#next9");
let next10 = document.querySelector("#next10");

const youScored = document.querySelector("#yours");
let all = document.querySelector("#all");
const scoreDisplay = document.querySelector(".correct");
let score = 0;







title.innerHTML = "1.   Which American president appears on a one dollar bill?";
aa1.innerHTML = "George Washington";
aa2.innerHTML = "Thomas Jefferson";
aa3.innerHTML = "James Madison";

aa1.onclick = function(){
    aa1.style.color = 'green';
    aa2.style.color = 'red';
    aa3.style.color = 'red';
    next.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}
aa2.onclick = function(){
    aa1.style.color = 'green';
    aa2.style.color = 'red';
    aa3.style.color = 'red';
    next.style.visibility = 'visible';
}
aa3.onclick = function(){
    aa1.style.color = 'green';
    aa2.style.color = 'red';
    aa3.style.color = 'red';
    next.style.visibility = 'visible';
}



title2.innerHTML = "2.   What color is the \"Ex\" in FedEx Ground?";
ba1.innerHTML = "Orange";
ba2.innerHTML = "Green";
ba3.innerHTML = "Purple";

ba1.onclick = function(){
    ba2.style.color = 'green';
    ba1.style.color = 'red';
    ba3.style.color = 'red';
    next2.style.visibility = 'visible';
}
ba2.onclick = function(){
    ba2.style.color = 'green';
    ba1.style.color = 'red';
    ba3.style.color = 'red';
    next2.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}
ba3.onclick = function(){
    ba2.style.color = 'green';
    ba1.style.color = 'red';
    ba3.style.color = 'red';
    next2.style.visibility = 'visible';
}




title3.innerHTML = "3.   Of what is Cynophobia the fear?";
ca1.innerHTML = "Snakes";
ca2.innerHTML = "Cats";
ca3.innerHTML = "Dogs";

ca1.onclick = function(){
    ca3.style.color = 'green';
    ca1.style.color = 'red';
    ca2.style.color = 'red';
    next3.style.visibility = 'visible';
}
ca2.onclick = function(){
    ca3.style.color = 'green';
    ca1.style.color = 'red';
    ca2.style.color = 'red';
    next3.style.visibility = 'visible';
}
ca3.onclick = function(){
    ca3.style.color = 'green';
    ca1.style.color = 'red';
    ca2.style.color = 'red';
    next3.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}


title4.innerHTML = "4.   When did the website \"Facebook\" launch?";
da1.innerHTML = "2002";
da2.innerHTML = "2003";
da3.innerHTML = "2004";

da1.onclick = function(){
    da3.style.color = 'green';
    da1.style.color = 'red';
    da2.style.color = 'red';
    next4.style.visibility = 'visible';
}
da2.onclick = function(){
    da3.style.color = 'green';
    da1.style.color = 'red';
    da2.style.color = 'red';
    next4.style.visibility = 'visible';
}
da3.onclick = function(){
    da3.style.color = 'green';
    da1.style.color = 'red';
    da2.style.color = 'red';
    next4.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}


title5.innerHTML = "5.   Where did the pineapple plant originate?";
ea1.innerHTML = "South America";
ea2.innerHTML = "North America";
ea3.innerHTML = "Africa";

ea1.onclick = function(){
    ea1.style.color = 'green';
    ea2.style.color = 'red';
    ea3.style.color = 'red';
    next5.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}
ea2.onclick = function(){
    ea1.style.color = 'green';
    ea2.style.color = 'red';
    ea3.style.color = 'red';
    next5.style.visibility = 'visible';
}
ea3.onclick = function(){
    ea1.style.color = 'green';
    ea2.style.color = 'red';
    ea3.style.color = 'red';
    next5.style.visibility = 'visible';
}



title6.innerHTML = "6.   What year was Queen Elizabeth II born?";
fa1.innerHTML = "1924";
fa2.innerHTML = "1926";
fa3.innerHTML = "1928";

fa1.onclick = function(){
    fa2.style.color = 'green';
    fa1.style.color = 'red';
    fa3.style.color = 'red';
    next6.style.visibility = 'visible';
}
fa2.onclick = function(){
    fa2.style.color = 'green';
    fa1.style.color = 'red';
    fa3.style.color = 'red';
    next6.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}
fa3.onclick = function(){
    fa2.style.color = 'green';
    fa1.style.color = 'red';
    fa3.style.color = 'red';
    next6.style.visibility = 'visible';
}



title7.innerHTML = "7.   Nephelococcygia is the practice of doing what?";
ga1.innerHTML = "Finding shapes in clouds";
ga2.innerHTML = "Searching for mushrooms";
ga3.innerHTML = "Running for long distances";

ga1.onclick = function(){
    ga1.style.color = 'green';
    ga2.style.color = 'red';
    ga3.style.color = 'red';
    next7.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}
ga2.onclick = function(){
    ga1.style.color = 'green';
    ga2.style.color = 'red';
    ga3.style.color = 'red';
    next7.style.visibility = 'visible';
}
ga3.onclick = function(){
    ga1.style.color = 'green';
    ga2.style.color = 'red';
    ga3.style.color = 'red';
    next7.style.visibility = 'visible';
}


title8.innerHTML = "8.   Which of these characters turned 40 years old in 1990?";
ha1.innerHTML = "Fred Flinstone";
ha2.innerHTML = "Bugs Bunny";
ha3.innerHTML = "Charlie Brown";

ha1.onclick = function(){
    ha3.style.color = 'green';
    ha1.style.color = 'red';
    ha2.style.color = 'red';
    next8.style.visibility = 'visible';
}
ha2.onclick = function(){
    ha3.style.color = 'green';
    ha1.style.color = 'red';
    ha2.style.color = 'red';
    next8.style.visibility = 'visible';
}
ha3.onclick = function(){
    ha3.style.color = 'green';
    ha1.style.color = 'red';
    ha2.style.color = 'red';
    next8.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}


title9.innerHTML = "9.   In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?";
ia1.innerHTML = "31%";
ia2.innerHTML = "50%";
ia3.innerHTML = "67%";

ia1.onclick = function(){
    ia1.style.color = 'green';
    ia2.style.color = 'red';
    ia3.style.color = 'red';
    next9.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}
ia2.onclick = function(){
    ia1.style.color = 'green';
    ia2.style.color = 'red';
    ia3.style.color = 'red';
    next9.style.visibility = 'visible';
}
ia3.onclick = function(){
    ia1.style.color = 'green';
    ia2.style.color = 'red';
    ia3.style.color = 'red';
    next9.style.visibility = 'visible';
}


title10.innerHTML = "10.   What is the voltage of a D battery?";
ja1.innerHTML = "0.5";
ja2.innerHTML = "1.0";
ja3.innerHTML = "1.5";

ja1.onclick = function(){
    ja3.style.color = 'green';
    ja1.style.color = 'red';
    ja2.style.color = 'red';
    next10.style.visibility = 'visible';
}
ja2.onclick = function(){
    ja3.style.color = 'green';
    ja1.style.color = 'red';
    ja2.style.color = 'red';
    next10.style.visibility = 'visible';
}
ja3.onclick = function(){
    ja3.style.color = 'green';
    ja1.style.color = 'red';
    ja2.style.color = 'red';
    next10.style.visibility = 'visible';
        score++;
        scoreDisplay.innerHTML = score;
}






next.onclick = function(){
    all.style.zIndex = '-1';
    next.style.visibility = 'hidden';
    all.style.visibility = 'hidden';
    all2.style.visibility = 'visible';
}

next2.onclick = function(){
    all2.style.zIndex = '1';
    next2.style.visibility = 'hidden';
    all2.style.visibility = 'hidden';
    all3.style.visibility = 'visible';
}

next3.onclick = function(){
    all3.style.zIndex = '-1';
    next3.style.visibility = 'hidden';
    all3.style.visibility = 'hidden';
    all4.style.visibility = 'visible';
}

next4.onclick = function(){
    all4.style.zIndex = '1';
    next4.style.visibility = 'hidden';
    all4.style.visibility = 'hidden';
    all5.style.visibility = 'visible';
}

next5.onclick = function(){
    all5.style.zIndex = '1';
    next5.style.visibility = 'hidden';
    all5.style.visibility = 'hidden';
    all6.style.visibility = 'visible';
}

next6.onclick = function(){
    all6.style.zIndex = '1';
    next6.style.visibility = 'hidden';
    all6.style.visibility = 'hidden';
    all7.style.visibility = 'visible';
}

next7.onclick = function(){
    all7.style.zIndex = '1';
    next7.style.visibility = 'hidden';
    all7.style.visibility = 'hidden';
    all8.style.visibility = 'visible';
}

next8.onclick = function(){
    all8.style.zIndex = '1';
    next8.style.visibility = 'hidden';
    all8.style.visibility = 'hidden';
    all9.style.visibility = 'visible';
}

next9.onclick = function(){
    all9.style.zIndex = '1';
    next9.style.visibility = 'hidden';
    all9.style.visibility = 'hidden';
    all10.style.visibility = 'visible';
}

next10.onclick = function(){
    all10.style.zIndex = '1';
    next10.style.visibility = 'hidden';
    all10.style.visibility = 'hidden';
    youScored.style.visibility = 'visible';
    scoreDisplay.style.right = '300px';
    scoreDisplay.style.top = '200px';
}