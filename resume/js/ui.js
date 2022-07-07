$(document).ready(function(){

	$('.article').each(function(){

		let startDate = $(this).find('.startDate').text();

		if(startDate != '') {

			let startDateArr = startDate.split('.');
			let endDate = $(this).find('.endDate').text();
			let endDateArr;

			if(endDate == 'today') {

				const now = new Date();
				endDateArr = [now.getFullYear(), now.getMonth()+1, now.getDate()];

				if(endDateArr[1] < 10) {
					$(this).find('.endDate').text(`${endDateArr[0]}. 0${endDateArr[1]}. ${endDateArr[2]}.`);
				} else if(endDateArr[2] < 10) {
					$(this).find('.endDate').text(`${endDateArr[0]}. ${endDateArr[1]}. 0${endDateArr[2]}.`);
				} else if(endDateArr[1] < 10 && endDateArr[2] < 10) {
					$(this).find('.endDate').text(`${endDateArr[0]}. 0${endDateArr[1]}. 0${endDateArr[2]}.`);
				} else {
					$(this).find('.endDate').text(`${endDateArr[0]}. ${endDateArr[1]}. ${endDateArr[2]}.`);
				}

			} else {

				endDateArr = endDate.split('.');
				
			}
			// console.log(startDateArr, endDateArr);

			const startDateCalc = new Date(startDateArr[0], startDateArr[1], startDateArr[2]);
			const endDateCalc = new Date(endDateArr[0], endDateArr[1], endDateArr[2]);
			const dateCalc = endDateCalc.getTime() - startDateCalc.getTime();
			const dateCalcResult = dateCalc / (1000 * 60 * 60 * 24);
			// console.log(startDateCalc, endDateCalc, dateCalcResult);

			$(this).find('.periodResult').text(`(${dateCalcResult}일)`);

            let dateResultText;
            const dateResultYear = Math.floor(dateCalcResult / 365);
            const dateResultMonth = Math.round((dateCalcResult - (dateResultYear * 365)) / 30);
            
            if(dateResultYear == 0 && dateResultMonth == 0) {
                dateResultText = `-`;
            } else if(dateResultYear == 0) {
                dateResultText = `${dateResultMonth}개월`;
            } else if(dateResultMonth == 0 ) {
                dateResultText = `${dateResultYear}년`;
            } else {
                dateResultText = `${dateResultYear}년 ${dateResultMonth}개월`;
            }

            // console.log(dateResultText);
            $(this).find('.periodResult').text(`(${dateResultText})`);
		}

	});

});