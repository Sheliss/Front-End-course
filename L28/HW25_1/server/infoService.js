module.exports.getInfo = incomeData => {
    return new Promise((resolve, reject) => {
        const currArr = incomeData;
        const allVars = conArr(currArr);
        let totalInfo = {};

        totalInfo.count = currArr.length;
        totalInfo.valuesTotalLength = allVars.length;
        totalInfo.uniqueValues = Array.from(new Set(allVars));
        totalInfo.ArithmeticMean = averageNum(allVars);

        function conArr(currArr) {
            let tempArr = [];
            for(let i = 0; i < currArr.length; i++) {
                tempArr = tempArr.concat(currArr[i]);
            }
            return tempArr;
        }

        function averageNum(arr) {
            let average = 0;

            for(i = 0; i < arr.length; i++) {
                const tempNumber = Number(arr[i]);
                if(isNaN(tempNumber)) {
                    continue;
                }
                average += tempNumber;
            }
            return average = average / arr.length;
        }
        resolve(totalInfo);
    });
}