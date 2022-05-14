const canvas  = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 426
canvas.height = 851

c.fillStyle ='while'
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = './imagenes/map.png'

const jugador = new Image()
jugador.src = './imagenes/playerDown.png'

const dialogo1 = new Image()
dialogo1.src = './imagenes/dialogo1.png'

const dialogo2 = new Image()
dialogo2.src = './imagenes/dialogo2.png'

const dialogo3 = new Image()
dialogo3.src = './imagenes/dialogo3.png'

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
    
}
let x = 0
let y = 0
let posicionx = 60
let posiciony = 50



function animacion(){
    window.requestAnimationFrame(animacion)

    c.drawImage(image,0,0)
    c.drawImage(jugador,
        0,
        0,
        jugador.width/4,
        jugador.height,
        posicionx + x,
        posiciony + y,
        jugador.width/4
        ,jugador.height)

        let posicionFinalX = posicionx + x
        let posicionFinalY = posiciony + y


        let mover = true



        if(keys.w.pressed){
            if(posicionFinalY  < 20){
                mover = false
            }else if((posicionFinalY < 143 && posicionFinalX == 249) ||(posicionFinalX > 240 && posicionFinalY < 116)){
                mover = false
                c.drawImage(dialogo1,50,0)
            }


            if(mover){
                y -= 3 
               }

             
        }else if(keys.a.pressed){
            if(posicionFinalX  < 40){
                mover = false
            }else if(posicionFinalX == 60 || posicionFinalY ==50){
                c.drawImage(dialogo3,0,200)
                mover = false
            }
            if(mover){
                x -= 3 
               } 
        }else if(keys.s.pressed){
            if(posicionFinalY  > image.height -340){
                mover = false
            }else if((posicionFinalY > 62 && posicionFinalX == 249) || (posicionFinalX > 225 && posicionFinalY ==62)){
                mover = false
                console.log("funciono")
                c.drawImage(dialogo2,0,400)
            }


            if(mover){

                y += 3 
               }
        }else if(keys.d.pressed){
            if(posicionFinalX  > image.width -180){
                mover = false
            }
            if(mover){
                x += 3 
               }
        }
       console.log("x = "+posicionFinalX)
       console.log("y = "+posicionFinalY)
        
        if(posicionFinalX == 249 && posicionFinalY == 95){
             
        }

}

animacion()




window.addEventListener('keydown', (e) =>{
    switch(e.key){
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break;
    }

})

window.addEventListener('keyup', (e) =>{
    switch(e.key){
        case 'w':
            keys.w.pressed = false
            break;
        case 's':
            keys.s.pressed = false

            break;
        case 'a':
            keys.a.pressed = false

            break;
        case 'd':
            keys.d.pressed = false

            break;
    }

})