/* Whitepaper PDF export — html2canvas + jsPDF with embedded images */
(function () {
  const btn = document.querySelector('.btn-download-pdf');
  if (!btn) return;

  const LOGO_SVG =
    '<svg class="pdf-contact-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 56" fill="none" aria-hidden="true">' +
    '<path fill="currentColor" d="M0 56V46l9 4 8-11 7 8 8-10 16-30 12 22 9-11 9 13 7-3 5 5H0z"/>' +
    '</svg>';

  function absoluteUrl(src) {
    try {
      return new URL(src, window.location.href).href;
    } catch {
      return src;
    }
  }

  function waitForPaint() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  }

  async function imageToDataUrl(imgEl) {
    if (!imgEl) return '';

    const src = imgEl.currentSrc || imgEl.getAttribute('src') || imgEl.src;
    if (!src) return '';

    if (!imgEl.complete || imgEl.naturalWidth === 0) {
      await new Promise((resolve) => {
        imgEl.addEventListener('load', resolve, { once: true });
        imgEl.addEventListener('error', resolve, { once: true });
      });
    }

    if (imgEl.naturalWidth > 0) {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = imgEl.naturalWidth;
        canvas.height = imgEl.naturalHeight;
        canvas.getContext('2d').drawImage(imgEl, 0, 0);
        return canvas.toDataURL('image/jpeg', 0.9);
      } catch {
        /* fall through to fetch */
      }
    }

    try {
      const response = await fetch(absoluteUrl(src));
      const blob = await response.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch {
      return absoluteUrl(src);
    }
  }

  async function applyDataUrl(img, dataUrl) {
    if (!img || !dataUrl) return;
    img.src = dataUrl;
    await new Promise((resolve) => {
      if (img.complete) {
        resolve();
        return;
      }
      img.onload = resolve;
      img.onerror = resolve;
    });
  }

  function buildContactPage() {
    const contactUrl = absoluteUrl('/contact');
    const section = document.createElement('section');
    section.className = 'pdf-contact-page';
    section.innerHTML =
      '<div class="pdf-contact-inner">' +
      LOGO_SVG +
      '<p class="pdf-contact-brand">Inselberg</p>' +
      '<p class="pdf-contact-tagline">AI-Native Autonomous Decision Intelligence for Financial Institutions</p>' +
      '<div class="pdf-contact-divider"></div>' +
      '<h2 class="pdf-contact-heading">Get in Touch</h2>' +
      '<p class="pdf-contact-intro">Discuss your AI use case, request a BERG demo, or explore how Inselberg can help your institution build AI-native decision intelligence.</p>' +
      '<ul class="pdf-contact-offices">' +
      '<li>Bangalore, India</li>' +
      '<li>Chennai, India</li>' +
      '<li>San Francisco, USA</li>' +
      '<li>Sydney, Australia</li>' +
      '</ul>' +
      '<div class="pdf-contact-details">' +
      '<p><span>Website</span> ' + contactUrl + '</p>' +
      '<p><span>LinkedIn</span> linkedin.com/company/inselberg</p>' +
      '<p><span>X</span> x.com/inselberg</p>' +
      '<p><span>GitHub</span> github.com/inselberg</p>' +
      '</div>' +
      '<p class="pdf-contact-footer">&copy; 2026 Inselberg. All rights reserved.</p>' +
      '</div>';
    return section;
  }

  async function preloadArticleImages() {
    const images = document.querySelectorAll('.article-hero-media img, .article-body img');
    await Promise.all(
      Array.from(images).map(async (img) => {
        img.removeAttribute('loading');
        if (img.complete && img.naturalWidth > 0) return;
        const dataUrl = await imageToDataUrl(img);
        if (dataUrl && dataUrl.startsWith('data:')) {
          img.src = dataUrl;
        }
        await new Promise((resolve) => {
          if (img.complete) resolve();
          else {
            img.onload = resolve;
            img.onerror = resolve;
          }
        });
      })
    );
  }

  async function buildPdfRoot() {
    const root = document.createElement('div');
    root.className = 'pdf-export-root';
    root.setAttribute('aria-hidden', 'true');

    const hero = document.querySelector('.article-hero');
    if (hero) {
      const cover = document.createElement('header');
      cover.className = 'pdf-cover';

      const meta = hero.querySelector('.article-meta');
      const title = hero.querySelector('h1');
      const lead = hero.querySelector('.lead');

      if (meta) cover.appendChild(meta.cloneNode(true));
      if (title) cover.appendChild(title.cloneNode(true));
      if (lead) cover.appendChild(lead.cloneNode(true));

      root.appendChild(cover);
    }

    const heroImgEl = document.querySelector('.article-hero-media img');
    if (heroImgEl) {
      const figure = document.createElement('figure');
      figure.className = 'pdf-cover-figure';
      const img = document.createElement('img');
      img.alt = heroImgEl.getAttribute('alt') || '';
      figure.appendChild(img);
      root.appendChild(figure);
      await applyDataUrl(img, await imageToDataUrl(heroImgEl));
    }

    const article = document.querySelector('.article-body');
    if (article) {
      const bodyClone = article.cloneNode(true);
      bodyClone.removeAttribute('id');
      bodyClone.classList.remove('container');
      bodyClone.querySelector('.article-cta')?.remove();

      const sourceFigures = article.querySelectorAll('.article-figure img');
      const cloneFigures = bodyClone.querySelectorAll('.article-figure img');

      root.appendChild(bodyClone);

      await Promise.all(
        Array.from(cloneFigures).map(async (cloneImg, index) => {
          const dataUrl = await imageToDataUrl(sourceFigures[index]);
          await applyDataUrl(cloneImg, dataUrl);
        })
      );
    }

    root.appendChild(buildContactPage());
    return root;
  }

  function showExportOverlay(message) {
    const overlay = document.createElement('div');
    overlay.className = 'pdf-export-backdrop';
    overlay.innerHTML = '<p>' + message + '</p>';
    document.body.appendChild(overlay);
    document.body.classList.add('pdf-exporting');
    return overlay;
  }

  function hideExportOverlay(overlay) {
    document.body.classList.remove('pdf-exporting');
    overlay?.remove();
  }

  async function renderPdf(element, filename) {
    const html2canvasFn = window.html2canvas;
    const jsPDF = window.jspdf && window.jspdf.jsPDF;

    if (!html2canvasFn || !jsPDF) {
      throw new Error('PDF libraries failed to load');
    }

    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    await waitForPaint();

    const canvas = await html2canvasFn(element, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      scrollX: 0,
      scrollY: 0,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (_doc, clonedNode) => {
        clonedNode.style.position = 'static';
        clonedNode.style.left = '0';
        clonedNode.style.top = '0';
        clonedNode.style.opacity = '1';
        clonedNode.style.visibility = 'visible';
        clonedNode.style.transform = 'none';
      }
    });

    if (!canvas.width || !canvas.height) {
      throw new Error('Canvas render was empty');
    }

    const imgData = canvas.toDataURL('image/jpeg', 0.92);
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const margin = 12;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const printableWidth = pageWidth - margin * 2;
    const printableHeight = pageHeight - margin * 2;
    const imgHeight = (canvas.height * printableWidth) / canvas.width;

    let offsetY = 0;
    let pageIndex = 0;

    while (offsetY < imgHeight) {
      if (pageIndex > 0) pdf.addPage();
      pdf.addImage(imgData, 'JPEG', margin, margin - offsetY, printableWidth, imgHeight);
      offsetY += printableHeight;
      pageIndex += 1;
    }

    pdf.save(filename);
  }

  btn.addEventListener('click', async () => {
    const defaultLabel = btn.textContent.trim();
    btn.disabled = true;
    btn.textContent = 'Generating PDF…';

    let overlay;
    let exportRoot;

    try {
      overlay = showExportOverlay('Preparing your white paper PDF…');
      await preloadArticleImages();
      exportRoot = await buildPdfRoot();
      document.body.appendChild(exportRoot);
      await waitForPaint();

      const filename = btn.dataset.pdfFilename || 'inselberg-whitepaper.pdf';
      await renderPdf(exportRoot, filename);
    } catch (err) {
      console.error('PDF export failed:', err);
      alert('Unable to generate the PDF. Please try again in a moment.');
    } finally {
      exportRoot?.remove();
      hideExportOverlay(overlay);
      btn.disabled = false;
      btn.textContent = defaultLabel;
    }
  });
})();
