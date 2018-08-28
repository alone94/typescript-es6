//Spread paramter doi nghich voi Rest 
//Tu 1 mang, Spread bốc tách ra từng phần tử  từ list.
let displayColorSpread = function (...colors: string[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}
let messageSpread= "Thanh";
let colors=["Red","Green","Blue"];
displayColorSpread(messageSpread,...colors);
