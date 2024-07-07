function companyUsers(arr) {
const companyEmployee = {}

for (const employeeDate of arr) {
    const [company , employeeId] = employeeDate.split(' -> ')
        if (company in companyEmployee) {
            if (!companyEmployee[company].includes(employeeId)) {
                companyEmployee[company].push(employeeId)
            }
            
        }else {
            companyEmployee[company] = [employeeId]
        }
    
}
const companyEntries = Object.entries(companyEmployee)
companyEntries.sort((a, b) => a[0].localeCompare(b[0]))

for (const [name , employeeIdArr] of companyEntries) {
    console.log(name)
    for (const employeeId of employeeIdArr) {
        console.log(`-- ${employeeId}`)
    }
    
}

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
