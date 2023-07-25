export default {
	loadTableData: () =>{
		storeValue('dataTable',[{
			skils: 'nodejs', yearsofexperience: 2,fluency:80
		}])
	},
	
	
	saveValue: ()=>{
		let existing_obj = appsmith.store.dataTable;
		existing_obj.push(Table1.newRow);
		storeValue('dataTable',existing_obj);
		console.log(appsmith.store.dataTable);
	},
	
	editValue: async(index, edited_row)=> {
		let existing_obj = appsmith.store.dataTable;
		existing_obj[index] = edited_row;
		storeValue('dataTable',existing_obj);
	},
	
	
	printValue: () => {
		console.log(appsmith.store.dataTable);
	}
	
	
}