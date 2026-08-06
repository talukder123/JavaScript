// use default parameter

const bookTicket = (movie, seat=1, price=300) => {
    if (typeof movie !== "string" || seat < 0 || price < 0) {
        return "Invalid"
    }
    let totalAmount = seat * price;
    return `${movie}: ${seat} seat(s), Total ${totalAmount}`
}

console.log(bookTicket("Spider-man:Brand New Day", 2, 500))

console.log(bookTicket(20, 40))