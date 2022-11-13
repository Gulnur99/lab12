console.log("Hello, World!");
let h1_1 = document.createElement("h1")
h1_1.style.color="blue"
h1_1.innerHTML = 'Lab12 Assignment'
document.body.appendChild(h1_1)
document.body.appendChild(document.createElement("hr"))
let h2_1 = document.createElement("h2")
h2_1.innerHTML = 'Task'
h2_1.style.color = 'red'
document.body.appendChild(h2_1)
let p_1 = document.createElement("p")
p_1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'
document.body.appendChild(p_1)
let ul_1 = document.createElement("ul")
let li_arr = []
let li_1 = document.createElement("li")
li_1.innerHTML = "find elements in the DOM (<b>5 points</b>);"
li_arr.push(li_1)
let li_2 = document.createElement("li")
li_2.innerHTML = "create/add/remove elements (<b>5 points</b>);"
li_arr.push(li_2)
let li_3 = document.createElement("li")
li_3.innerHTML = " change content of the elements (<b>5 points</b>);"
li_arr.push(li_3)
let li_4 = document.createElement("li")
li_4.innerHTML = "change styles of the elements (<b>5 points</b>);"
li_arr.push(li_4)
let li_5 = document.createElement("li")
li_5.innerHTML = "change attributes of the elements (<b>5 points</b>);"
li_arr.push(li_5)
let li_6 = document.createElement("li")
li_6.innerHTML = "change classes of the elements (<b>5 points</b>)."
li_arr.push(li_6)

for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
        li_arr[i].setAttribute('class','odd')
        li_arr[i].style.color = 'green'
    } else {
        li_arr[i].setAttribute('class','even')
        li_arr[i].style.color = 'purple'
    }
    ul_1.appendChild(li_arr[i])
}

document.body.appendChild(ul_1)

let p_2  = document.createElement("p")
p_2.innerHTML = 'Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href="https://github.com/yessen/nu_web_programming/tree/main/week12" >link.</a >'
document.body.appendChild(p_2)
document.body.appendChild(document.createElement("hr"))
let h2_2 = document.createElement("h2")
h2_2.innerHTML = 'Submition'
h2_2.style.color = 'red'
document.body.appendChild(h2_2)
let p_3  = document.createElement("p")
p_3.innerHTML = 'To submit your work, follow these instructions:'
document.body.appendChild(p_3)

let ul_2 = document.createElement("ul")
let li_arr2 = []
let li_11 = document.createElement("li")
li_11.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
li_arr2.push(li_11)
let li_22 = document.createElement("li")
li_22.innerHTML = "Clone this repository to your local machine and work inside it."
li_arr2.push(li_22)
let li_33 = document.createElement("li")
li_33.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
li_arr2.push(li_33)
let li_44 = document.createElement("li")
li_44.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).'
li_arr2.push(li_44)
let li_55 = document.createElement("li")
li_55.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).'
li_arr2.push(li_55)
let li_66 = document.createElement("li")
li_66.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).'
li_arr2.push(li_66)
let li_77 = document.createElement("li")
li_77.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li_arr2.push(li_77)
for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
        li_arr2[i].setAttribute('class','odd')
        li_arr2[i].style.color = 'green'
    } else {
        li_arr2[i].setAttribute('class','even')
        li_arr2[i].style.color = 'purple'
    }
    ul_2.appendChild(li_arr2[i])
}

document.body.appendChild(ul_2)
document.body.appendChild(document.createElement("hr"))
