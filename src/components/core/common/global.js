export function queryParams(map){
    debugger;
    let finalString = "",value="";
    for(let key in map){
        value = Array.isArray(map[key])?map[key].join():map[key]
        finalString+=key+"="+value+"&";
    }
    finalString = finalString.slice(0,-1);
    return finalString;
}

export function undefinedEmptyCheck(input){
    return(undefined!==input&&input!==""&input!==null);
}