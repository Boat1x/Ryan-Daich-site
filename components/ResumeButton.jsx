const handleDownload = () => {
  // Make sure this path is correct relative to your project structure
  const resumeUrl = '/assets/resume.pdf'; // Update with actual path
  
  // Using window.open for direct download
  window.open(resumeUrl, '_blank');
  
  // Alternative approach using fetch API if needed
  // fetch(resumeUrl)
  //   .then(response => response.blob())
  //   .then(blob => {
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'ryandaich-resume.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   });
}; 