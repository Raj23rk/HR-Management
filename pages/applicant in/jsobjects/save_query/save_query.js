export default {
	loadTableData: () =>{
		storeValue('dataTable',[{
			Rounds: 'Round1', Type:"Interviewer" && "Exam",  interviewerremark:'Good',Result:'selected',score:40
		}])
	},
	
	
	saveValue: ()=>{
		let existing_obj = appsmith.store.dataTable;
		existing_obj.push(round.newRow);
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