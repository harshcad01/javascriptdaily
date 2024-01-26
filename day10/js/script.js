function loop(){
    var txt = "hello g im harsh from trichy i have done my masters and ug in miet arts and science college trichy"


    var output = txt.toLowerCase();
    console.log(output);

    var output = txt.toUpperCase();
    console.log(output);

    var output = txt.slice(0,4);
    console.log("Slice (0,4): " + output);

    var output = txt.slice(-10);
    console.log("Slice -10: " + output);

    var output = txt.substring(0,4);
    console.log("Substring (0,4): " + output);

    /*var output = txt.substring(-10);
    console.log("Substring -10 : " + output);*/

    var output = txt.charAt(22);
    console.log("charAt at 22 : "+output);

    var output = txt.charCodeAt(1);
    console.log("charCodeAt 1 : "+output);

    var output = txt.startsWith("h");
    console.log("Starts with h? :" + output);

    var output = txt.endsWith("y");
    console.log("Ends with y? : "+output);


}
loop();