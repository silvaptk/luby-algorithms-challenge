class ImprovedArray extends Array {
    constructor() {
        super();
        
        if (arguments.length == 1) {
            let array = arguments[0];
            
            for(let i = 0; i < array.length; i++) 
                this.push(array[i]);
        }
    }

    // (1)
    static fillWith(howMany, what) {
        let newArray = [];
        
        for(let i = 0; i < howMany; i++)
            newArray.push(what);
        
        return (newArray);
    }

    // (2)
    static invert(what) {
        for(let i = 0; i < what.length / 2; i++) {
            let swap; 
            swap = what[i];
            what[i] = what[what.length - i - 1];
            what[what.length - i - 1] = swap;
        }

        return (what);
    }

    // (3)
    static clear(array) {
        let newArray = [];
        
        for(let i = 0; i < array.length; i++) 
            if (array[i])
                newArray.push(array[i]);

        return (newArray);
    }

    // (4)
    static convertToObject(pairs) {
        let newObj = new Object();
        
        for(let i = 0; i < pairs.length; i++) {
            newObj[pairs[i][0]] = pairs[i][1];
        }
        
        return (newObj);
    }

    // (5)
    static extract() {
        let extractFrom = arguments[0], 
            extractionResult = [];
        
        for(let i = 0; i < arguments.length; i++) 
            for(let j = 0; j < extractFrom.length; j++) 
                if (arguments[i] === extractFrom[j]) 
                    extractFrom[j] = null;
        
        for(let i = 0 ; i < extractFrom.length; i++)
            if (extractFrom[i]) 
                extractionResult.push(extractFrom[i]);
        
        return (extractionResult);
    }

    contains(what) {
        for(let i = 0; i < this.length; i++) 
            if (this[i] === what)
                return (true);

        return (false);
    }
    
    // (6)
    static removeRepetitions(from) {
        let newArray = new ImprovedArray();

        for(let i = 0; i < from.length; i++) 
            if (!newArray.contains(from[i]))
                newArray.push(from[i]);

        return (Array.from(newArray));
    }

    // (7)
    static compare(fArray, sArray) {
        if (fArray.length !== sArray.length)
            return (false);
            
        for(let i = 0; i < fArray.length; i++)
            if (fArray[i] !== sArray[i])
                return (false);

        return (true);
    }

    // (8)
    static removeSubArrays(from) {
        let newArray = [];

        if (typeof from !== 'object')
            return (newArray.push(from));

        for(let i = 0; i < from.length; i++)
            if (typeof from[i] === 'object') {
                let subArray = ImprovedArray.removeSubArrays(from[i]);
                
                for(let j = 0; j < subArray.length; j++) 
                    newArray.push(subArray[j]);
            } 
            else {
                newArray.push(from[i]);
            }

        return (newArray);
    }

    // (9)
    static splitOn(array, what) {
        let fractions = [],
            i, j;

        for(i = 0; i < array.length; i += j) {
            let fraction = [];
            
            for(j = 0; j < what && i+j < array.length; j++) 
                fraction.push(array[i+j]);

            fractions.push(fraction);
        }

       return (fractions);
    }

    // (10)
    static intersection(fArray, sArray) {
        let intersectionArray = [];
        
        sArray = new ImprovedArray(sArray);

        for(let i = 0; i < fArray.length; i++) 
            if (sArray.contains(fArray[i]))
                intersectionArray.push(fArray[i]);

        return (intersectionArray);
    }
}

module.exports = ImprovedArray;