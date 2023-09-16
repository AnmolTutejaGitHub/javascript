const day='monday';

switch(day){
    case 'monday': //strict comparison //day==='monday'
        console.log("monday");
        break;
    case 'tuesday':
        console.log("tuesday");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Both");
        break;
    default:
        console.log("Not a valid input");
}