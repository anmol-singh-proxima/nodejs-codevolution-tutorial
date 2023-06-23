const MovieTicket = require('./MovieTicket')

const ticket = new MovieTicket()

ticket.on('book-ticket', () => {
    ticket.generateBill();
    ticket.payTheBill();
    ticket.sendEmail();
    ticket.sendTextMessage();
    ticket.displayTicket();
})

ticket.bookTicket("Avatar", "3D-IMAX", ["B3", "B4", "C4", "C5"]);