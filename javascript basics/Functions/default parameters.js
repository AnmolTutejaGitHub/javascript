//default parameters

const bookings=[]
const createBooking=function(flightNum,numPassengers=1,price=price=299*numPassengers){

    //ES5 way of setting default
    // numPassengers=numPassengers||1;
    // price=price||199;

    const booking={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
};

createBooking("LH123")
createBooking("LH123",2,679)
createBooking("LH123",undefined,357) //undefined here is skipping the value numPassengers will here take default value of 1 nit undefined

