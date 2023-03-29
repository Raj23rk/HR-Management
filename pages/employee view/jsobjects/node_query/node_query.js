export default {
	getOrderIDFromURL: async () => {
		if(appsmith.URL.queryParams?.employeename){
			ename.text = appsmith.URL.queryParams?.employeename;
		}
		else{
			ename.text = '';
		}

		if(appsmith.URL.queryParams?.Designation){
			des.text = appsmith.URL.queryParams?.Designation;
		}
		else{
			des.text = '';
		}
		if(appsmith.URL.queryParams?.Skills){
			Skils.text = appsmith.URL.queryParams?.Skills;
		}
		else{
			Skils.text = '';
		}
		
		if(appsmith.URL.queryParams?.Score){
			score.text = appsmith.URL.queryParams?.Score;
		}
		else{
			score.text = '';
		}
		
	}
	
}