var canvas = new fabric.Canvas('myCanvas');
var blockwidth = 30;
var blockheight = 30;
var playerx = 10
var playery = 10
var playerobject = ""

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerobject = Img

        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(140)
        playerobject.set({
        top:playery,
        left:playerx   
        });
        canvas.add(playerobject)

    });
}
function newimage(getimage){
    fabric.Image.fromURL(getimage,function(Img)
    {
        blockobject = Img

        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)
        blockobject.set({
            top:playery,left:playerx
        })

        canvas.add(blockobject)

    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80'){
        blockwidth = blockwidth + 10
        blockheight = blockheight + 10
        document.getElementById("current_width").innerHTML = blockwidth;
        document.getElementById("current_height").innerHTML = blockheight;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        blockwidth = blockwidth - 10
        blockheight = blockheight - 10
        document.getElementById("current_width").innerHTML = blockwidth;
        document.getElementById("current_height").innerHTML = blockheight;
    }

    if(keyPressed == '38'){
        up();
    
    }

    if(keyPressed == '40'){
        down();
    
    }

    if(keyPressed == '39'){
        right();
    
    }

    if(keyPressed == '37'){
        left();
    
    }

    if(keyPressed == '87'){
        newimage('wall.jpg');
    
    }

    
    if(keyPressed == '71'){
        newimage('ground.png');
    
    }

    
    if(keyPressed == '76'){
        newimage('light_green.png');
    
    }

    
    if(keyPressed == '84'){
        newimage('trunk.jpg');
    
    }

    
    if(keyPressed == '82'){
        newimage('roof.jpg');
    
    }

    
    if(keyPressed == '89'){
        newimage('yellow_wall.png');
    
    }

    
    if(keyPressed == '68'){
        newimage('dark_green.png');
    
    }

    
    if(keyPressed == '85'){
        newimage('unique.png');
    
    }

    
    if(keyPressed == '67'){
        newimage('cloud.jpg');
    
    }

    

}

function up(){
    if(playery >= 0 ){
    
    playery = playery - blockheight;
    canvas.remove(playerobject);
    player_update();
    }
}
function down (){
    if(playery <= 600 ){
    
    playery = playery + blockheight;
    canvas.remove(playerobject);
    player_update();
    }
}
 function right (){
        if(playerx <= 1000 ){
        
        playerx = playerx + blockwidth;
        canvas.remove(playerobject);
        player_update();
        }
    }
function left(){
            if(playerx >= 0 ){
            
            playerx = playerx - blockwidth;
            canvas.remove(playerobject);
            player_update();
            }
        }
