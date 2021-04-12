class DataApi{
    constructor(rawData){
        this.rawData = rawData;
    }
    mapIntoObject(arr){
        // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
        // arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arr.reduce((acc,curr)=>{
            acc[curr.id] = curr;
            return acc;
        },{});
    }
    getArticles(){
        return this.mapIntoObject(this.rawData.articles);
    }
    getAuthors(){
        return this.mapIntoObject(this.rawData.authors);
    }
}

export default DataApi;