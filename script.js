const btn = document.querySelector(".btn");
const phrase = document.querySelector(".phrase");
const link = document.querySelector(".link");
const phraseArray = [
  "Go to a park",

  "Watch a TED Talk",
  
  "Code a cute website like this",
  
  "Build a 3D object",
  
  "Have a debate",
  
  "Take a nap",
  
  "Create a Pinterest board",
  
  "Watch an interesting documentary",
  
  "Go on a late night drive",

  "Have a cup of back coffee with an old friend",

  "Go for a long walk around the city",

  "Do some in depth research",

  "Go annoy someone else",

  "Builde a compilateur",

  "organise an event",


  ];
 let currentphraseIndex = 0;

btn.addEventListener("click", () => {        
  phrase.innerHTML = phraseArray[currentphraseIndex];
   
  if (phraseArray[currentphraseIndex] === "Go to a park") {
    link.href = "https://g.co/kgs/Ly8nmoc"; 
    link.textContent = "I know a perfect one ";
  } 
  else if (phraseArray[currentphraseIndex] === "Watch a TED Talk") {
    link.href = "https://www.youtube.com/watch?v=Qx3P2wazwI0&list=PLBlnK6fEyqRjDf_dmCEXgl6XjVKDDj0M2&index=7"; 
    link.textContent = "Here is the link to an amazing one";
  } 
  else if (phraseArray[currentphraseIndex] === "Code a cute website like this") {
    link.href = "https://simple-question.vercel.app/"; 
    link.textContent = "Here is the link to cute website.";
  } 
  else if (phraseArray[currentphraseIndex] === "Build a 3D object") {
    link.href = "https://youtu.be/dEGJeVnWZAA?si=eFZnL_b-leAlRJko"; 
    link.textContent = "Here is the link to a tutorail.";
  } 
  else if (phraseArray[currentphraseIndex] === "Have a debate") {
    link.href = ""; 
    link.textContent = "";
  }  
  else if (phraseArray[currentphraseIndex] === "Take a nap") {
    link.href = "https://youtu.be/YQc4WT0yDH4?si=2c4xMwxL_1etVGm0"; 
    link.textContent = "Here is the link to an asmr that would help with that";
  }  
  else if (phraseArray[currentphraseIndex] === "Create a Pinterest board") {
    link.href = ""; 
    link.textContent = "";
  }  
  else if (phraseArray[currentphraseIndex] === "Watch an interesting documentary") {
    link.href = "https://youtu.be/GIrYjLHMArA?si=pmehBcU1_To8zfnn"; 
    link.textContent = "Here is the link to a good one";
  } 
  else if (phraseArray[currentphraseIndex] ==="Go on a late night drive" ) {
    link.href = ""; 
    link.textContent = "";
  } 
  else if (phraseArray[currentphraseIndex] === "Have a cup of black coffee with an old friend") {
    link.href = ""; 
    link.textContent = "";
  }
   else if (phraseArray[currentphraseIndex] === "Go for a long walk around the city") {
    link.href = ""; 
    link.textContent = "";
  } 
  else if (phraseArray[currentphraseIndex] === "Do some in depth resursh") {
    link.href = ""; 
    link.textContent = "";
  } 
  else if (phraseArray[currentphraseIndex] === "Go annoy someone else") {
    link.href = ""; 
    link.textContent = "";
  } 
  else if (phraseArray[currentphraseIndex] === "Builde a compilateur") {
    link.href = ""; 
    link.textContent = "";
  } 
  else if (phraseArray[currentphraseIndex] === "organise an event") {
    link.href = ""; 
    link.textContent = "";
  } 


  


  currentphraseIndex = (currentphraseIndex + 1) % phraseArray.length;

  rotation();

  });

function rotation(){
    const rotation = Math.random() * 360;
    document.getElementById('shit').style.transform = `rotate(${rotation}deg)`;

}
