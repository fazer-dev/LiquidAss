import html2canvas from 'html2canvas';

html2canvas(documents.body, {
    scale: 1,
    useCORS: true,
    logging: false,
    allowTaint: false,
    backgroundColor: null
}).then(canvas => {
    // Do something with the generated canvas
});