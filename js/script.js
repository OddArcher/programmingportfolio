function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function(){
    
        var editp = 12;
        var editpmax = 12;

        var artp = 4;
        var artpmax = 4;

        var photop = 1;
        var photopmax = 1;
//EDITS
        $("#editbutright").click(function(){
            editp--;
    
            if (editp < 1) {
                editp = 1;
            }

            if (editp > editpmax) {
                editp = editpmax;
            }
            if (editp == 12) {
                $("#editcedit").attr("src","img/edits/skywizard.png");
                $("#editdescript").text("A cosplay that was made by accident inspired this.");
                console.log(editp);
            } 
            if (editp == 11) {
                $("#editcedit").attr("src","img/edits/skywizard2.png");
                $("#editdescript").text("Unleashing his power.");
                console.log(editp);
            } 
            if (editp == 10) {
                $("#editcedit").attr("src","img/edits/HanzoMain.png");
                $("#editdescript").text("Screenshot from Overwatch.");
                console.log(editp);
            } 
            if (editp == 9) {
                $("#editcedit").attr("src","img/edits/ifhesnotapleb.jpg");
                $("#editdescript").text("Art for when this man isn't a tool.");
                console.log(editp);
            } 
            if (editp == 8) {
                $("#editcedit").attr("src","img/edits/noosie.png");
                $("#editdescript").text("A product designed by the lunch table.");
                console.log(editp);
            } 
            if (editp == 7) {
                $("#editcedit").attr("src","img/edits/dwarf2molten.png");
                $("#editdescript").text("Ultimate is ready.");
                console.log(editp);
            } 
            if (editp == 6) {
                $("#editcedit").attr("src","img/edits/dwarf2.png");
                $("#editdescript").text("Fan art of the dwarf.");
                console.log(editp);
            } 
            if (editp == 5) {
                $("#editcedit").attr("src","img/edits/steamy.png");
                $("#editdescript").text("Our discord server was made with a random name generator, and it became Steamy Blow. This was made for it.");
                console.log(editp);
            } 
            if (editp == 4) {
                $("#editcedit").attr("src","img/edits/squad.png");
                $("#editdescript").text("A group photo of wastelanders created from bits of google searches for Wasteland 2.");
                console.log(editp);
            } 
            if (editp == 3) {
                $("#editcedit").attr("src","img/edits/War Never Changes.png");
                $("#editdescript").text("Inspired by a man's 1000 yard stare.");
                console.log(editp);
            } 
            if (editp == 2) {
                $("#editcedit").attr("src","img/edits/whokilledmycrew.png");
                $("#editdescript").text("While playing Guns of Icarus with friends there was a glitch that left me alone in a wasteland. I was inspired to make this.");
                console.log(editp);
            } 
            if (editp == 1) {
                $("#editcedit").attr("src","img/edits/thehillsarealive.png");
                $("#editdescript").text("Edit of a scene from the sound of music.");
                console.log(editp);
            } 

        });
    
        $("#editbutleft").click(function(){
            editp++;
    
            if (editp < 0) {
                editp = 0;
            }
            if (editp > editpmax) {
                editp = editpmax;
            }
            if (editp == 12) {
                $("#editcedit").attr("src","img/edits/skywizard.png");
                $("#editdescript").text("A cosplay that was made by accident inspired this.");
                console.log(editp);
            } 
            if (editp == 11) {
                $("#editcedit").attr("src","img/edits/skywizard2.png");
                $("#editdescript").text("Unleashing his power.");
                console.log(editp);
            } 
            if (editp == 10) {
                $("#editcedit").attr("src","img/edits/HanzoMain.png");
                $("#editdescript").text("Screenshot from Overwatch.");
                console.log(editp);
            } 
            if (editp == 9) {
                $("#editcedit").attr("src","img/edits/ifhesnotapleb.jpg");
                $("#editdescript").text("Art for when this man isn't a tool.");
                console.log(editp);
            } 
            if (editp == 8) {
                $("#editcedit").attr("src","img/edits/noosie.png");
                $("#editdescript").text("A product designed by the lunch table.");
                console.log(editp);
            } 
            if (editp == 7) {
                $("#editcedit").attr("src","img/edits/dwarf2molten.png");
                $("#editdescript").text("Ultimate is ready.");
                console.log(editp);
            } 
            if (editp == 6) {
                $("#editcedit").attr("src","img/edits/dwarf2.png");
                $("#editdescript").text("Fan art of the dwarf.");
                console.log(editp);
            } 
            if (editp == 5) {
                $("#editcedit").attr("src","img/edits/steamy.png");
                $("#editdescript").text("Our discord server was made with a random name generator, and it became Steamy Blow. This was made for it.");
                console.log(editp);
            } 
            if (editp == 4) {
                $("#editcedit").attr("src","img/edits/squad.png");
                $("#editdescript").text("A group photo of wastelanders created from bits of google searches for Wasteland 2.");
                console.log(editp);
            } 
            if (editp == 3) {
                $("#editcedit").attr("src","img/edits/War Never Changes.png");
                $("#editdescript").text("Inspired by a man's 1000 yard stare.");
                console.log(editp);
            } 
            if (editp == 2) {
                $("#editcedit").attr("src","img/edits/whokilledmycrew.png");
                $("#editdescript").text("While playing Guns of Icarus with friends there was a glitch that left me alone in a wasteland. I was inspired to make this.");
                console.log(editp);
            } 
            if (editp == 1) {
                $("#editcedit").attr("src","img/edits/thehillsarealive.png");
                $("#editdescript").text("Edit of a scene from the sound of music.");
                console.log(editp);
            } 
        });
    
        $("#editbutabout").click(function(){
            $("#editdescript").toggle();
            console.log(editp);
        });
//Art
        $("#artbutright").click(function(){
            artp--;

            if (artp < 1) {
                artp = 1;
           }

           if (artp > artpmax) {
                artp = artpmax;
            }
            if (artp == 4) {
                $("#artcedit").attr("src","img/art/pom2.png");
                $("#artdescript").text("My current logo.");
                console.log(artp);
             } 
            if (artp == 3) {
                $("#artcedit").attr("src","img/art/jerry's.png");
                $("#artdescript").text("A logo made for a patriotic friend.");
                console.log(artp);
             } 
            if (artp == 2) {
                $("#artcedit").attr("src","img/art/Rickles.png");
                $("#artdescript").text("An edit for a character who died in darkest dungeon.");
                console.log(artp);
             } 
            if (artp == 1) {
               $("#artcedit").attr("src","img/art/stagecrew.png");
               $("#artdescript").text("A logo made for highschool stage crew.");
               console.log(artp);
            } 

        });

        $("#artbutleft").click(function(){
            artp++;

            if (artp < 0) {
                artp = 0;
            }
            if (artp > artpmax) {
                artp = artpmax;
            }

            if (artp == 4) {
                $("#artcedit").attr("src","img/art/pom2.png");
                $("#artdescript").text("My current logo.");
                console.log(artp);
             } 
            if (artp == 3) {
                $("#artcedit").attr("src","img/art/jerry's.png");
                $("#artdescript").text("A logo made for a patriotic friend.");
                console.log(artp);
             } 
            if (artp == 2) {
                $("#artcedit").attr("src","img/art/Rickles.png");
                $("#artdescript").text("An edit for a character who died in darkest dungeon.");
                console.log(artp);
             } 
            if (artp == 1) {
               $("#artcedit").attr("src","img/art/stagecrew.png");
               $("#artdescript").text("A logo made for highschool stage crew.");
               console.log(artp);
            } 
        });

        $("#artbutabout").click(function(){
            $("#artdescript").toggle();
            console.log(p);
        });
//Photos
        $("#photobutright").click(function(){
            photop--;

            if (photop < 1) {
                photop = 1;
           }

           if (photop > photopmax) {
               photop =photopmax;
            }

            if (photop == 1) {
               $("#photocedit").attr("src",".img/photo/.png");
               $("#photodescript").text("");
               console.log(phototp);
            } 

        });

        $("#photobutleft").click(function(){
            photop++;

            if (photop < 0) {
                photop = 0;
            }
            if (photop > photopmax) {
                photop = photopmax;
            }

            if (p == 1) {
                $("#photocedit").attr("src",".img/photo/.png");
                $("#phototdescript").text("");
                console.log(photop);
            } 
        });

        $("#photobutabout").click(function(){
            $("#photodescript").toggle();
            console.log(p);
        });
});