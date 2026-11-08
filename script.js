* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #121a2d;
  --panel: #171f32;
  --panel-alt: #1b2742;
  --primary: #ffb703;
  --primary-strong: #f7931e;
  --secondary: #6ee7f9;
  --text: #ecf3ff;
  --muted: #b8c6dc;
  --border: rgba(255, 255, 255, 0.12);
  --shadow: 0 22px 60px rgba(5, 7, 15, 0.38);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #030816 0%, #0d1627 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(7, 12, 24, 0.72);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand img {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a:hover,
.footer-links a:hover {
  color: var(--secondary);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #1a1200;
  box-shadow: 0 16px 32px rgba(255, 183, 3, 0.33);
}

.btn-secondary {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.hero {
  padding: 5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
}

.eyebrow,
.section-label {
  display: inline-block;
  margin: 0 0 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--secondary);
  font-size: 0.76rem;
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.split-grid h2,
.cta-box h2 {
  margin: 0;
  line-height: 1.06;
  letter-spacing: -0.05em;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  max-width: 620px;
}

.lead {
  margin-top: 1.15rem;
  max-width: 610px;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-metrics {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.hero-metrics li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero-metrics strong {
  font-size: 1.5rem;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-visual {
  position: relative;
  min-height: 500px;
  display: grid;
  place-items: center;
}

.showcase-card {
  position: absolute;
  background: linear-gradient(180deg, rgba(18, 26, 45, 0.9), rgba(18, 26, 45, 0.96));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: 26px;
  overflow: hidden;
}

.card-large {
  width: min(92%, 430px);
  min-height: 360px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background:
    linear-gradient(180deg, rgba(8, 12, 20, 0.14), rgba(8, 12, 20, 0.7)),
    radial-gradient(circle at top left, rgba(110, 231, 249, 0.35), transparent 34%),
    linear-gradient(135deg, rgba(255, 183, 3, 0.25), rgba(122, 92, 255, 0.15)),
    #0b1326;
}

.card-large h3 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
}

.card-large p {
  margin: 0;
  color: var(--muted);
}

.card-badge {
  width: fit-content;
  margin-bottom: 1rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(110, 231, 249, 0.14);
  color: var(--secondary);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-small {
  width: 190px;
  height: 122px;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #dfeaff;
  background: rgba(23, 31, 50, 0.9);
}

.card-small.top {
  right: 0;
  top: 0;
}

.card-small.bottom {
  left: 0;
  bottom: 0;
}

.brands-strip {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.015);
}

.brands-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 1rem;
  text-align: center;
  padding: 1.25rem 0;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.section {
  padding: 6rem 0;
}

.alt-bg {
  background: rgba(10, 16, 31, 0.7);
}

.split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: end;
}

.split-grid h2,
.section-heading h2,
.cta-box h2 {
  font-size: clamp(2.2rem, 4vw, 3.3rem);
}

.split-grid p,
.service-card p,
.process-step p,
.cta-box p {
  color: var(--muted);
}

.section-heading {
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: linear-gradient(180deg, rgba(18, 26, 45, 0.9), rgba(12, 18, 31, 0.96));
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.7rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(110, 231, 249, 0.45);
}

.service-card h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.35rem;
}

.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 183, 3, 0.2), rgba(110, 231, 249, 0.3));
  color: var(--secondary);
  font-weight: 800;
}

.work-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  gap: 1.5rem;
}

.work-card {
  position: relative;
  min-height: 420px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow);
}

.work-one {
  background: linear-gradient(180deg, rgba(8, 12, 20, 0.2), rgba(8, 12, 20, 0.8)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
}

.work-two {
  background: linear-gradient(180deg, rgba(8, 12, 20, 0.2), rgba(8, 12, 20, 0.8)),
    url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
}

.work-three {
  background: linear-gradient(180deg, rgba(8, 12, 20, 0.2), rgba(8, 12, 20, 0.8)),
    url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
}

.overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.4rem;
  background: linear-gradient(180deg, transparent, rgba(5, 10, 20, 0.9));
}

.overlay span {
  color: var(--secondary);
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.overlay h3 {
  margin: 0.6rem 0 0;
  font-size: 1.7rem;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.process-step {
  padding: 2rem 1.5rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--border);
}

.process-step span {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 183, 3, 0.12);
  color: var(--primary);
  font-weight: 800;
}

.process-step h3 {
  margin: 1.1rem 0 0.5rem;
  font-size: 1.4rem;
}

.cta-section {
  padding-top: 4rem;
}

.cta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2.2rem 2.5rem;
  border: 1px solid var(--border);
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255, 183, 3, 0.09), rgba(110, 231, 249, 0.08));
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.site-footer {
  border-top: 1px solid var(--border);
  background: rgba(5, 8, 18, 0.9);
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-height: 90px;
  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 1.2rem;
}

@media (max-width: 900px) {
  .hero-grid,
  .split-grid,
  .services-grid,
  .work-grid,
  .process-grid,
  .cta-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .main-nav {
    display: none;
  }

  .hero {
    padding-top: 3rem;
  }

  .brands-row {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  .cta-box {
    padding: 2rem 1.3rem;
  }
}

@media (max-width: 580px) {
  .btn {
    width: 100%;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
  }

  .nav-cta {
    display: none;
  }

  .footer-wrap {
    padding: 1rem 0;
    display: grid;
    place-items: center;
    text-align: center;
  }
}
