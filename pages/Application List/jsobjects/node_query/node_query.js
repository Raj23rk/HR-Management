export default {
	getOrderIDFromURL: async () => {
		if(appsmith.URL.queryParams?.jobname){
			pro_name.text = appsmith.URL.queryParams?.jobname;
		}
		else{
			pro_name.text = '';
		}
		
			if(appsmith.URL.queryParams?.Noofvacancies){
	vacant.text = appsmith.URL.queryParams?.Noofvacancies;
		}
		else{
			vacant.text = '';
		}
		
	}
	
}