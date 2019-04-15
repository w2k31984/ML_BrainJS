//Declaramos primero una constante
let trainedNet;

function encode(arg){
    return arg.split("").map(
        x=>(x.charCodeAt(0)/255)

    )
}
//Procesando datos de integracion
function processTrainingData
(data){
    return data.map(d=>{
        return{
            input:encode(d.input),
            output:d.output
        }
    })
}
function train(data){
    let net= new brain.NeuralNetwork();//constante de nuestra neurona.
    
    net.train(processTrainingData(data));
    trainedNet=net.toFunction();
    console.log("Training Finished!!")

}
function execute(input){
    let results=trainedNet(encode(input)) //Neurona entrenada.
    let output
    results.trump>results.kardashian ? output="Trump":output="Kardashian"//codigo Emac6
    return output
}
//Entrenando nuestra neurona.

//Ejecutando el Trainin Data
train(trainingData);
//console.log(execute("The democrat memo by FBI"))
//console.log(execute("OMG this is insane!!!!"))
console.log(execute("Democrats must change the Immigration Laws FAST. If not, Sanctuary Cities must immediately ACT to take care of the Illegal Immigrants - and this includes Gang Members, Drug Dealers, Human Traffickers, and Criminals of all shapes, sizes and kinds. CHANGE THE LAWS NOW!"))
