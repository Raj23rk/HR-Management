export default {
	defaultFilterOpen: async () => {
		await storeValue('isFilterOpen1', false);	
		console.log(appsmith.store.isFilterOpen1)
	},
	
	isVisible : ()=> {
		console.log(appsmith.store.isFilterOpen1)
		if(appsmith.store.isFilterOpen1) {
			storeValue('isFilterOpen1',false);
		}else{
			storeValue('isFilterOpen1',true);
		}
	}
}