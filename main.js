canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
color="blue";
width_of_line=2;
radius=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
   color=document.getElementById("color").value;
   width_of_line=document.getElementById("width_of_line").value;
   radius.getElementById("radius").value; 
   mouse_event="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
  function my_mouseup(e)
  {
      mouse_event="mouseUp";
  }

  canvas.addEventListener("mouseleave",my_mouseleave);
  function my_mouseleave(e)
  {
      mouse_event="mouseLeave";
  }
  canvas.addEventListener("mousemove",my_mousemove);
  function my_mousemove(e)
  {
       current_position_of_mousex=e.clientX-canvas.offsetLeft;
       current_position_of_mousey=e.clientY-canvas.offsetTop;
      if(mouse_event=="mouseDown"){
         console.log("Current position of x and y cordinates=");
         console.log("x ="+current_position_of_mousex+"y ="+current_position_of_mousey);
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width_of_line;
         ctx.arc(current_position_of_mousex, current_position_of_mousey, radius, 0,2*Math.PI);
         ctx.stroke(); 
      }
  }


  function clear()
  {
      ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
  }