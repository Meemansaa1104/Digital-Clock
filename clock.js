   setInterval(() => {
        let a = new Date();
        let h = a.getHours();
        let m = a.getMinutes();
        let s = a.getSeconds();
        let hourHand = 30*h + m/2;
        let minuteHand = 6*m;
        let secondHand = 6*s;

        hour.style.transform = `rotate(${hourHand}deg)`
        minute.style.transform = `rotate(${minuteHand}deg)`
        second.style.transform = `rotate(${secondHand}deg)`
    }, 1000)
