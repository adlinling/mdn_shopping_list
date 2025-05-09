
const ulist = document.querySelector("ul");
const txtbox = document.querySelector("input");
const btn = document.querySelector("button");
btn.setAttribute("id", "main");

btn.addEventListener("click", (e) => {

  let allitems = document.querySelectorAll("li");

  let listcount = allitems.length;
  
  console.log("list count: " + listcount);
  //console.log(e);
  input = txtbox.value;
  console.log(input);
  txtbox.value = "";

  li = document.createElement("li");


  li.setAttribute("id", listcount);


  span = document.createElement("span");
  
  itembtn = document.createElement("button");

  itembtn.setAttribute('id', listcount);

  itembtn.addEventListener("click", () => {

    let everyli = document.querySelectorAll("li");
      
    console.log("Delete li with id: " + listcount);

    for (itm of everyli){

                    
        if(itm.id == listcount){
          console.log("Remove this li: " + itm.id)
          ulist.removeChild(itm);
        }else{
          console.log("Keep this li: " + itm.id)
        }
        

    }

    txtbox.focus();

  });

  
  li.appendChild(span);
  li.appendChild(itembtn);

  span.textContent = input;
  itembtn.textContent = "Delete";

  ulist.appendChild(li);

  txtbox.focus();

});
