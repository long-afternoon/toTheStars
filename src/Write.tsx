import './Write.css'

const hints: string[]= [
    "Write whatever's on your mind...",
    // "Tell me how you're feeling right now",
    // "Write a letter to the stars tonight",
    // "Tell the stars what today felt like",
    // "Leave a message for the night",
    // "Before sleep, write a little"
];
function saveThought() {
    
}

function StarWrite() {
    return (
        <div className="writeContainer">
            <textarea id="thoughtBox"
                placeholder={hints[Math.floor(Math.random() * hints.length)]} name="thoughtsBox">
            </textarea>
            <button id='sendThought' onClick={saveThought}>SEND</button>
        </div>
    )
}


export default StarWrite