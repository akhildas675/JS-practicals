// function loadData(callback) {
//     setTimeout(() => {
//       const data = { name: 'John Doe' };
//       callback(data);
//     }, 1000);
//   }
  
//   function processData(data, callback) {
//     setTimeout(() => {
//       const processedData = `Hello, ${data.name}`;
//       callback(processedData);
//     }, 1500);
//   }
  
//   function displayData() {
//     loadData((data) => {
//       processData(data, (processedData) => {
//         console.log(processedData); // Output: Hello, John Doe
//       });
//     });
//   }
  
//   displayData();
  

// 

function firstFunction(callback){
  setTimeout(()=>{
    const data={name:'Akhildas'}
    callback(data)
  },2000)
}
function secondFunction(data,callback){
  setTimeout(()=>{
    const pass=`Hai I'm ${data.name}`
    callback(pass)
  })
}

function display(){
  firstFunction((data)=>{
    secondFunction(data,(pass)=>{
      console.log(pass);
    })
  })
}
display();