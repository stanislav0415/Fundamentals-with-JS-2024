function employees(arr) {
    let allEmployees = []
    
    for (const employeeName of arr) {
        const personalNumber = employeeName.length
        allEmployees.push({
            name: employeeName,
            personalNum: personalNumber
    
        
        });
      
    
    }
    for (const employeeObj of allEmployees) {
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum} `);
    }
    }