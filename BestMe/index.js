const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]
const ask = (index =0) => {
  process.stdout.write("\n" + questions[index] + " > ");
}
ask();
const answer = []
process.stdin.on("data", data => {
  answer.push(data.toString() )
  if (answer.length < questions.length) {
    ask (answer.length);
  } else {
    process.exit();
  }
});
process.on("exit", () => { 
  console.log(`
  Bacana, Julio!
  ${questions[0]}
  ${answer[0]}
  ${questions[1]}
  ${answer[1]}
  ${questions[2]}
  ${answer[2]}
  ${questions[3]}
  ${answer[3]}
  'Volte amanhã para novas reflexões!!
`)
  
})
