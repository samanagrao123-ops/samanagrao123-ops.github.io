/**
 * SAMANA G RAO - RESUME ACTIONS SCRIPT
 * Features: Print to PDF triggering, copy resume link, auto-print query handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('printResumeBtn');
  const copyLinkBtn = document.getElementById('copyResumeLinkBtn');

  // Trigger print
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Auto trigger print if URL has ?action=print
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'print') {
    setTimeout(() => {
      window.print();
    }, 400);
  }

  // Copy resume URL to clipboard
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = copyLinkBtn.innerHTML;
        copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Link Copied!';
        copyLinkBtn.classList.add('btn-emerald');
        copyLinkBtn.classList.remove('btn-outline');

        setTimeout(() => {
          copyLinkBtn.innerHTML = originalText;
          copyLinkBtn.classList.remove('btn-emerald');
          copyLinkBtn.classList.add('btn-outline');
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }
});
