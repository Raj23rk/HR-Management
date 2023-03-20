export default {
	getOrderIDFromURL: async () => {
		if(appsmith.URL.queryParams?.Name){
			app_name.inputText = appsmith.URL.queryParams?.Name;
		}
		else{
			app_name.inputText = '';
		}
		
		
		
		if(appsmith.URL.queryParams?.Email){
			job_email.inputText = appsmith.URL.queryParams?.Email;
		}
		else{
			job_email.inputText = '';
		}
		
		
		
	if(appsmith.URL.queryParams?.skills){
		skil.inputText= appsmith.URL.queryParams?.skills;
		}
		else{
			skil.inputText = '';
		}
		
		
		
		
		if(appsmith.URL.queryParams?.mobileno){
		mobile.inputText= appsmith.URL.queryParams?.mobileno;
		}
		else{
			mobile.inputText = '';
		}
		
		
		
	}
	
}