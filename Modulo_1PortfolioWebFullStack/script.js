window.onload = function(){
    progresCircule("circJS" , "porcJS" , 60 );
    progresCircule("circHTML" , "porcHTML" , 30 );
    progresCircule("circBootstrap" , "porcBootstrap" , 50 );
    progresCircule("circAngular" , "porcAngular" , 60 );
    progresCircule("circSQL" , "porcSQL" , 30 );
    //progresCircule("circBootstrap" , "porcBootstrap" , 50 );
  }
  
  
    function progresCircule(idCirculo , idPorcentaje , valPorcentaje){
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
  
  
   nProcent.innerHTML = procent + "%";
        
        c.clearRect( 0, 0, can.width, can.height );
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );  // Circulo de abajo
        c.strokeStyle = 'lightslategrey'; // color del anterior
        c.lineWidth = '15';// espesor del anterior
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#37c6f1'; // Color del circulo de porcentaje
        c.lineWidth = '15';// espesor del principal
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + result) );
        c.stroke();
    
  }