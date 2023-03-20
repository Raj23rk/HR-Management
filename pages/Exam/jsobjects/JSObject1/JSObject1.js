export default {
	defaultFilterOpen: async () => {
		await storeValue('isFilterOpen', false);	
		console.log(appsmith.store.isFilterOpen)
	},
	
	isVisible : ()=> {
		console.log(appsmith.store.isFilterOpen)
		if(appsmith.store.isFilterOpen) {
			storeValue('isFilterOpen',false);
		}else{
			storeValue('isFilterOpen',true);
		}
	}
}