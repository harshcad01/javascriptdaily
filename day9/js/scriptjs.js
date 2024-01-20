function loop(){
    var names = ["harsh", "maulik", "harish", "arav", "kali", "aarif"];

    console.log("lengeth of the name .." + names.length);

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);
    console.log(names[5]);
    console.log(names[6]);

    console.log("names in for of length");
    for(let a = 0 ; a<names.length ; a++){
        console.log(names[a]);
    }

    console.log("name of names in for");
    for (let name of names){
        console.log(name);
    }

    console.log("break the names using if after the names[a]")
    for (let a =0; a<names.length; a++){
        console.log(names[a]);
        if(a==4){
            break;
        }
    }


    var cars={name:"Toyato", year:"2024", price:"15L"}

    console.log(cars);
    console.table(cars);


    for (let property in cars){
        console.log(property+" : "+cars[property]);
    }
}
loop();