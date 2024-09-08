let add = document.getElementById("addform");
let textadd = document.querySelector("[name='addtext']");
let content = document.querySelector(".list");
add.onsubmit= function (){
    if (textadd.value != ""){

        let addDiv = document.createElement('div');
        addDiv.className = "item";
        let addP = document.createElement('p');
        let divCh = document.createElement('div');

        let Adone = document.createElement('a');
        let Adelet = document.createElement('a');
        let selcetion = document.createElement('select');
        let option = document.createElement('option');
        let image1 = document.createElement('img')
        let image2 = document.createElement('img')
        Adelet.className = 'delet';
        Adone.className = 'done';
        content.appendChild(addDiv);
        addDiv.appendChild(addP);
        addDiv.appendChild(divCh);
        addP.innerText = textadd.value;
        addP.style.fontSize = "120%"
        divCh.appendChild(Adelet);
        divCh.appendChild(Adone);
        // divCh.appendChild(selcetion);
        // for (let i =0 ; i<=2;i++){
        //     selcetion.appendChild(option);
        // };
        Adone.appendChild(image1);
        image1.src = 'done2.png'
        Adelet.appendChild(image2)
        image2.src = 'remove2.png';

        textadd.value = "";

        let delet = document.querySelectorAll('.delet')
        for(let i=0; i<delet.length; i++){
            delet[i].onclick = function(){
                // confirm("Are you sure ??")
                if (confirm("Are you sure ??") == true){
                    this.parentNode.parentNode.remove();
                }
            }
        }

        let done = document.querySelectorAll(".done")
        let windowAlert = document.querySelector("#window-alert")
        for (let j= 0;j<done.length;j++){
            done[j].onclick = function(){
                this.parentNode.parentNode.remove();
                windowAlert.style.display = "block"
                setInterval(() => {
                    windowAlert.style.display = "none";
                }, 2000);
                
            }
        }

    }
    else {
        alert("the form is empty")
    }
};


let deletall = document.getElementById('clear-all');
deletall.onclick = function (){
    content.innerHTML = null;
};