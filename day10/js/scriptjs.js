function loop(){
   var txt = "welcome aravind i am you big fan of your vind and your very hard worker i know that so keep doingit";

   console.log(txt);
   console.log(txt.length);
   console.log(txt.indexOf("you"));
   console.log(txt.indexOf("you",25));
   console.log(txt.search("you"));
   console.log(txt.search(/you/));
   console.log(txt.match(/you/));
   console.log(txt.match(/you/gi));


   console.log(txt.slice(19,30));


   let today = new Date();

   console.log("lets check the date ")
   //Sat Jan 20 2024 (update)
   console.log(today.toDateString());
   //1/20/2024 (update)
   console.log(today.toLocaleDateString());
   //2024-01-20T09:46:21.415Z (update)
   console.log(today.toISOString());
   //1/20/2024, 3:16:21 PM (update)
   console.log(today.toLocaleString());
   //Sat Jan 20 2024 15:16:21 GMT+0530 (India Standard Time) (update)
   console.log(today.toString());
   //15:16:21 GMT+0530 (India Standard Time) (update)
   console.log(today.toTimeString());
   //Sat, 20 Jan 2024 09:46:21 GMT (update)
   console.log(today.toUTCString());
   //2024 (update)
   console.log(today.getFullYear());
   //20 (update)
   console.log(today.getDate());
   //15 (update)
   console.log(today.getHours());
   //415 (update)
   console.log(today.getMilliseconds());
   //21 (update)
   console.log(today.getSeconds());

    //2024 (update)
   console.log(today.getFullYear());  
   //0
   console.log(today.getMonth());
   
   var month= ["January","February","March","Aperil","May","June","July","Augest","September","October","November","December"];
    //January (update)
   console.log(month[today.getMonth()]);
}
loop();