window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


recognition.addEventListener('result', (e) => {
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  if (e.results[0].isFinal) {
    console.log(text);
    if (text.includes('Flash 1') || text.includes('flash 1')) {
      document.getElementById('l1').checked = 1;
    } if (text.includes('stop flash 1') || text.includes('Stop flash 1')) {
      document.getElementById('l1').checked = 0;
    }
    if (text.includes('Flash 2') || text.includes('flash 2')) {
      document.getElementById('l2').checked = 1;
    } if (text.includes('stop flash 2') || text.includes('Stop flash 2')) {
      document.getElementById('l2').checked = 0;
    }
    if (text.includes('Flash 3') || text.includes('flash 3')) {
      document.getElementById('l3').checked = 1;
    } if (text.includes('stop flash 3') || text.includes('Stop flash 3')) {
      document.getElementById('l3').checked = 0;
    }
    if (text.includes('Flash 4') || text.includes('flash 4')) {
      document.getElementById('l4').checked = 1;
    } if (text.includes('stop flash 4') || text.includes('Stop flash 4')) {
      document.getElementById('l4').checked = 0;
    }
    if (text.includes('Flash 5') || text.includes('flash 5')) {
      document.getElementById('l5').checked = 1;
    } if (text.includes('stop flash 5') || text.includes('Stop flash 5')) {
      document.getElementById('l5').checked = 0;
    }
  }
});


recognition.addEventListener('end', () => {
  recognition.start();
})

recognition.start();