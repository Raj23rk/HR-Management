export default {
	loadTableData: () =>{
		storeValue('dataTable',[{
			Round: 'Round1', Type:'interview',interviewerremark:'good',Result:'good',score:70
		}])
	},
	
	
	saveValue: ()=>{
		let existing_obj = appsmith.store.dataTable;
		existing_obj.push(ins.newRow);
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
