const container = document.createElement("div");
container.setAttribute("class", "container");

const heading = document.createElement("h1");
heading.setAttribute("id","title");
heading.setAttribute("class","text-center");
heading.innerHTML = "Displaying Space Crafts of ISRO";
document.body.appendChild(heading);

const row = document.createElement("div");
row.setAttribute("class", "row");

document.body.append(container);
container.appendChild(heading);
container.appendChild(row);

const displayIsroAircraft = async ()=>{
    const response = await fetch("https://isro.vercel.app/api/spacecrafts");
    const data = await response.json();
    //console.log(data.spacecrafts[0].name);
    return data; 
}
displayIsroAircraft().then(data=>{
    for(var i=0;i<data.spacecrafts.length;i++){
        //console.log(data.spacecrafts[i].name);
        var no = i+1;
        row.innerHTML+=`
       <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
           <div class="card h-100" >
               <div class="card-header text-center bg-dark text-white">Space Craft -  ${no}</div>
               <div class="card-body text-center" id="card-body">
                   <i class="fa-solid fa-rocket"></i>
                   <p class="card-text"> ${data.spacecrafts[i].name}</p>
                </div>
           </div>
        </div>
       `;
       document.body.append(container);
   }
   return data;
});
