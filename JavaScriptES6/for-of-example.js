function sum(){
    let totale = 0;
    for(let num of arguments){
        totale += num;
    }
    console.log(totale);
}
sum(12,23,45,6,732,13,56);