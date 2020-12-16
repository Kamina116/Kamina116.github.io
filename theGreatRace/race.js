var light = document.getElementById('traffic')
var elem = document.getElementById('race1')
var elem2= document.getElementById('race2')
var pos=0
var pos2=0
var timerID
var timerID2
var finish= document.getElementById('finish')
function startIt()
{
   timerID = setInterval(sonGoku,20)
   timerID2 = setInterval(flash,20)
  light.src = "greenLight.jpg"
}



function flash()
  {
    if(pos > 650)
    {
      //clearInterval(timerID2)
    }

    pos += (Math.ceil(Math.random() *5))

    elem2.style.left= pos +"px"
  }

function sonGoku()
{
  if(pos2 > 650)
  {
    //clearInterval(timerID)
}

  pos2 += (Math.ceil(Math.random() *5))

  elem.style.left= pos2 +"px"
  winner()
}

function winner()
{
  if(pos2 > 650)
  {
    stopIt()
    elem.src="gokuWins.jpg"
    elem2.style.display="none"
    elem.style.width=300+"px"
    elem.style.height=250+"px"
    elem.style.top=200+"px"
    elem.style.left=300+"px"
  }  else if (pos > 650)
  {
    stopIt()
    elem2.src="theFlash.png"
    elem.style.display="none"
    elem2.style.width=300+"px"
    elem2.style.height=250+"px"
    elem2.style.top=200+"px"
    elem2.style.left=300+"px"
  }

}
function stopIt()
{
  clearInterval(timerID)
  clearInterval(timerID2)
}
