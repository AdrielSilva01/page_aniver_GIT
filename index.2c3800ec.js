const e=new Date("Dec 20, 2024 20:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime();document.getElementById("contador").innerHTML=`${Math.floor(n/864e5)}d ${Math.floor(n%864e5/36e5)}h ${Math.floor(n%36e5/6e4)}m ${Math.floor(n%6e4/1e3)}s `,n<0&&(clearInterval(t),document.getElementById("contador").innerHTML="Ja acabou")},1e3);
//# sourceMappingURL=index.2c3800ec.js.map
