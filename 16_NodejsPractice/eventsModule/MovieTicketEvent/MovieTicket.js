const EventEmitter = require('node:events')
const data = require('./data.json')

class MovieTicket extends EventEmitter {
    constructor() {
        super();
        this.movieName = ''
        this.category = ''
        this.seatNumbers = []
        this.ticketSeatPrices = []
        this.totalAmount = 0
        this.amountPaid = false
        this.bookSeatDetails = []
    }

    /* Function to emit the 'book-ticket' event */
    bookTicket(movieName, category, seatNumbers) {
        this.movieName = movieName;
        this.category = category;
        this.seatNumbers = seatNumbers;
        this.emit('book-ticket');
    }

    /* Function to send email with the attached booked-ticket */
    sendEmail() {
        console.log("Sending email containing Ticket as attachment...");
    }

    /* Function to send text message after the ticket is booked */
    sendTextMessage() {
        console.log("Sending text message to phone...");
    }

    /* Function to generate the bill for the payment of the amount */
    generateBill() {
        this.generateTotalTicketPrice();
        console.log("Bill is generated with total amount: Rs.", this.totalAmount);
    }

    /* Function to generate the total amount of all the tickets */
    generateTotalTicketPrice() {
        const basicPrice = this.getBasicTicketPrice();
        /* Going through all the requested seat-numbers one by one */
        for(let i=0; i<this.seatNumbers.length; i++) {
            const seatRow = this.seatNumbers[i][0];
            const seatNum = parseInt(this.seatNumbers[i][1]);

            for(let j=0; j<data.seatStatus.length; j++) {
                if(data.seatStatus[j].row === seatRow) {
                    const seatCategory = data.seatStatus[j].category
                    const seatDetails = {
                        seatStatusIndex: j,
                        seatNum: seatNum,
                    }
                    this.bookSeatDetails.push(seatDetails)

                    for(let k=0; k<data.seatCategories.length; k++) {
                        if(data.seatCategories[k].name === seatCategory) {
                            const price = basicPrice + data.seatCategories[k].price
                            this.ticketSeatPrices.push(price)
                        }
                    }
                }
            }
        }
        this.totalAmount = this.ticketSeatPrices.reduce((total, price) => {
            return (total + price)
        }, 0);
    }
    
    /* Function to get the basic ticket price based on the theatre category */
    getBasicTicketPrice() {
        for(let i=0; i<data.theatreCategories.length; i++) {
            if(data.theatreCategories[i].type === this.category) {
                return data.theatreCategories[i].price;
            }
        }
        return null;
    }

    /* Function to pay the total amount of the bill */
    payTheBill() {
       this.amountPaid = true;
       console.log("Ticket Amount Paid Successfully!")
       this.bookTheatreSeats();
    }

    /* Function to book the seats after the payment confirmation */
    bookTheatreSeats() {
        for(let i=0; i<this.bookSeatDetails.length; i++) {
            const {seatStatusIndex, seatNum} = this.bookSeatDetails[i];
            data.seatStatus[seatStatusIndex].bookingStatus[seatNum-1] = true
        }
    }

    /* Function to display all the ticket details after the ticket is booked */
    displayTicket() {
        console.log("Movie Name:", this.movieName);
        console.log("Category:", this.category);
        console.log("Seat Numbers:", this.seatNumbers);
        console.log("Ticket Prices:", this.ticketSeatPrices);
        console.log("Total Amount:", this.totalAmount);
    }
}

module.exports = MovieTicket