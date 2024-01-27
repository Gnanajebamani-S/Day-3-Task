var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i=0; i<res.length; i++){
// Question 2 : display all the restcountries flags in the console
        console.log(res[i].flags.png)
// Question 3 : print all the restcountries names, regions,subregion and population
        console.log("Common name : " + res[i].name.common, res[i].name.nativeName, "Official :" + res[i].name.official)
        console.log("Region : " + res[i].region)
        console.log("SubRegion : " + res[i].subregion)
        console.log("Population : " + res[i].population)
    }
}
