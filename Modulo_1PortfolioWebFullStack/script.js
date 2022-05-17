window.onload = function(){
    progresCircule("circCSS" , "porcCSS" , 30 , "img/LogoCSS.png" );
    progresCircule("circHTML" , "porcHTML" , 30 , "img/LogoHTML.png" );
    progresCircule("circJS" , "porcJS" , 60 , "img/LogoJS.png");
    progresCircule("circBootstrap" , "porcBootstrap" , 50 , "img/LogoBootstrap.png" );
    progresCircule("circAngular" , "porcAngular" , 60 , "img/LogoAngular.png" );
    progresCircule("circSQL" , "porcSQL" , 30 , "img/LogoSQL.png" );
  //progresCircule("circBootstrap" , "porcBootstrap" , 50 );
  }
  
  
    function progresCircule(idCirculo , idPorcentaje , valPorcentaje, imgSkil){
      const can = document.getElementById(idCirculo),
          nProcent = document.getElementById(idPorcentaje),
          c = can.getContext('2d');
  
    // POSICION DEL CIRCULO
    let posX = can.width / 2, 
        posY = can.height / 2,
        fps = 1000 / 200, //velocidad de progreso
        procent = valPorcentaje,     // valor del porcentaje en el medio TEXTO
        oneProcent = 360 / 100, //transforma el perimetro en porcentaje
        result = oneProcent * procent;// porcentaje de progreso 
        
        //IMAGEN EN EL CIRCULO
        var x = document.createElement("IMG");
        x.setAttribute("src", imgSkil);
        x.setAttribute("width", "70")
  
        nProcent.appendChild(x);
   //nProcent.innerHTML = procent + "%";
        
        c.clearRect( 0, 0, can.width, can.height );
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );  // Circulo de abajo
        c.strokeStyle = '#b1b1b3'; // color del anterior
        c.lineWidth = '15';// espesor del anterior
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#37c6f1'; // Color del circulo de porcentaje
        c.lineWidth = '15';// espesor del principal
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + result) );
        c.stroke();
    
  }