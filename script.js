function moveNoButton() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    document.getElementById('noBtn').style.left = `${x}px`;
    document.getElementById('noBtn').style.top = `${y}px`;
}

function showDateDetails() {
    document.body.innerHTML = `
        <div style='text-align:center; margin-top:100px;'>
            <h1> 🎉 See you on our special date! 🎉 </h1>
            <img src='luanpic2.png' alt='Celebration' style='width:300px;'>
            <p><strong>Time:</strong> 8:00 PM</p>
            <p><strong>Date:</strong> February 14, 2025</p>
            <p><strong>Place:</strong> Ericahlicious 🌹</p>
        </div>
    `;
}
