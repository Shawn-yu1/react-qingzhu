 class Ball{
            constructor(x,y,radius,color){
                this.x = x||0;
                this.y = y||0;
                this.radius = 10||radius;
                this.color = color||"black";
            }
            stroke(cas){
                cas.strokeStyle = this.color;
                cas.beginPath();
                cas.arc(this.x,this.y,this.radius,0,Math.PI*2);
                cas.closePath();
                cas.stroke();
            }
            fill(cas){
                cas.fillStyle = this.color;
                cas.beginPath();
                cas.arc(this.x,this.y,this.radius,0,Math.PI*2);
                cas.closePath();
                cas.fill();
            }
        }


        //随机颜色的函数
        function getColor(){
            let str = '#';
            for(let i = 0; i < 6; i++){
                let num =  Math.floor(Math.random()*9+0.5) ;
                str+=num;
            }
            return str;
        }
        let box = document.getElementById('cas'),
            cas = box.getContext('2d');
            let arr = [],
            n = 20;
        for(let i = 0 ; i < n ; i++){
            let ball = new Ball(0,0,10,getColor());
            ball.vx = Math.random()*2+3;
            ball.vy = Math.random()*2+3;
            arr.push(ball);
        }
        function play(){
            cas.clearRect(0,0,box.width,box.height);
            arr.forEach(function(ball){
                 ball.fill(cas);
                 ball.x+=ball.vx;
                 ball.y+=ball.vy;
                 if(ball.x>box.width-ball.radius){
                     ball.x=box.width-ball.radius;
                     ball.vx = -ball.vx;
                 }else if(ball.y>box.height-ball.radius){
                     ball.y=box.height-ball.radius;
                     ball.vy = -ball.vy;
                 }else if(ball.x<ball.radius){
                     ball.x=ball.radius;
                     ball.vx=-ball.vx;
                 }else if(ball.y<ball.radius){
                     ball.y=ball.radius;
                     ball.vy=-ball.vy;
                 }
            })
        }

        setInterval(play,20)