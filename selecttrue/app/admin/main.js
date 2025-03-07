const formFieldConfiguration = [
    {id: 'cardtext', label: 'allitas', type: 'text'},
    {id: 'right', label: 'igaz?', type: 'checkbox', optional: true},
]

const manager = new Manager();
const formController = new FormController(manager,formFieldConfiguration);

const exportButton = document.createElement('button');
exportButton.textContent = 'letoltes'
document.body.appendChild(exportButton);
exportButton.addEventListener('click', () =>{
    const a = document.createElement('a');
    const content = manager.generateExportText(); // manager array cuccau
    const file = new Blob([content])
    a.download = 'newdata.csv';
    a.href = URL.createObjectURL(file)
    a.click();
    URL.revokeObjectURL(a.href);
})