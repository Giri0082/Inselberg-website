import os
import re
import shutil

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
SRC_DIR = os.path.join(ROOT, 'website', 'whitepapers')
DST_DIR = os.path.join(ROOT, 'website-v3', 'public', 'whitepapers')
CSS_DST = os.path.join(ROOT, 'website-v3', 'public', 'css')
JS_DST = os.path.join(ROOT, 'website-v3', 'public', 'js')
IMG_SRC = os.path.join(ROOT, 'website', 'assets', 'images', 'whitepapers')
IMG_DST = os.path.join(ROOT, 'website-v3', 'public', 'assets', 'images', 'whitepapers')

os.makedirs(DST_DIR, exist_ok=True)
os.makedirs(CSS_DST, exist_ok=True)
os.makedirs(JS_DST, exist_ok=True)
os.makedirs(IMG_DST, exist_ok=True)

shutil.copy2(os.path.join(ROOT, 'website', 'css', 'styles.css'), os.path.join(CSS_DST, 'whitepaper.css'))
shutil.copy2(os.path.join(ROOT, 'website', 'js', 'whitepaper-pdf.js'), os.path.join(JS_DST, 'whitepaper-pdf.js'))
shutil.copy2(os.path.join(ROOT, 'website', 'js', 'main.js'), os.path.join(JS_DST, 'whitepaper-main.js'))

for name in os.listdir(IMG_SRC):
    src = os.path.join(IMG_SRC, name)
    dst = os.path.join(IMG_DST, name)
    if os.path.isfile(src):
        shutil.copy2(src, dst)

NAV_BLOCK = """<header class="site-header">
  <div class="container nav-inner">
    <a href="/" class="logo">
      <span class="logo-icon"><svg class="logo-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 56" fill="none" aria-hidden="true">
  <path fill="currentColor" d="M0 56V46l9 4 8-11 7 8 8-10 16-30 12 22 9-11 9 13 7-3 5 5H0z"/>
</svg></span>
      Inselberg
    </a>
    <button class="menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav class="nav-links">
      <a href="/">Home</a>
      <a href="/wealth-managers">Agentic Solutions</a>
      <a href="/platform">Platform</a>
      <a href="/team">About Us</a>
      <a href="/resources">Resource</a>
      <a href="/contact" class="nav-cta">Contact Us</a>
    </nav>
  </div>
</header>"""

REPLACEMENTS = [
    ('../css/styles.css?v=6', '/css/whitepaper.css'),
    ('../css/styles.css', '/css/whitepaper.css'),
    ('../assets/images/', '/assets/images/'),
    ('../js/whitepaper-pdf.js', '/js/whitepaper-pdf.js'),
    ('../js/main.js', '/js/whitepaper-main.js'),
    ('../index.html', '/'),
    ('../solutions.html', '/wealth-managers'),
    ('../platform.html', '/platform'),
    ('../banking.html', '/banks-lenders'),
    ('../wealth.html', '/wealth-managers'),
    ('../asset-management.html', '/asset-managers'),
    ('../team.html#whitepapers', '/resources#articles'),
    ('../team.html', '/team'),
    ('../blog.html', '/resources'),
    ('../ai-journey.html', '/platform'),
    ('../contact.html', '/contact'),
    ('../home1.html', '/'),
]

for fname in os.listdir(SRC_DIR):
    if not fname.endswith('.html'):
        continue
    text = open(os.path.join(SRC_DIR, fname), encoding='utf-8').read()
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
    text = re.sub(r'<header class="site-header">.*?</header>', NAV_BLOCK, text, count=1, flags=re.S)
    open(os.path.join(DST_DIR, fname), 'w', encoding='utf-8').write(text)
    print('wrote', fname)

pdf_path = os.path.join(JS_DST, 'whitepaper-pdf.js')
pdf_js = open(pdf_path, encoding='utf-8').read()
pdf_js = pdf_js.replace("absoluteUrl('../contact.html')", "absoluteUrl('/contact')")
open(pdf_path, 'w', encoding='utf-8').write(pdf_js)
print('imported', len([f for f in os.listdir(DST_DIR) if f.endswith('.html')]), 'whitepapers')
