var arraysTheSame = function (arr1, arr2) {
    
	if (arr1.length !== arr2.length) {
		console.log('arrays are not the same');
		return;
    }
	
	for (var i = 0; i < arr1.length; i += 1) {

		if (arr1[i] !== arr2[i]) {
			console.log('arrays are not the same');
			return;
        }
    }

	console.log('arrays are the same');
}


arraysTheSame([1,2,3], [1,2,3]);
//arrays are the same
arraysTheSame([1,2,3], [1,2,4]);
//arrays are not the same'