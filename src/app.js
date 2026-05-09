const media = {
  hero: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQd7qQwVsBdd4e6aLZmtaUPpYxv7t4p-1KNWDZFXE0hBk5bvSKMr-ycWVE8QgfnRj2kOsWTIaqqzfsaBkRzvZp52-VXyjE0OK9hwVqnEE9_8z_uYSCEIzVMoiFeHBxy8IP5lxXDQsQjkncJXFoYWXvBQtbNc.jpg?r=5d1",
  tommy: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUwbiBR4k73BJi8UZ_9RBgXkkQh-k9crPUcPr31R3NXKkjbu7bke9_kc8O96T1hEWV6pYw2DcnzTvVQd-IsA9SC9DewaCjandBy4dEHkkuK5oVbuNgRL7MOezobrS03vrqRumXsQHs9WXY-uFrFnKemh.jpg?r=157",
  arthur: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRkobfOZgPV19DNqzWRxJyGbVZ8ji-W3zFpkoG6iP7-nIJE6JF94YL-Dgr6cFV-RQ6pIQZQ6sEqL3VTWQsBFvisC37az4xP2rPCMaQIPX6QKIfCuinwlJrdDNUaHGGbjG0oaAfY3UVOMdc5XiRvQqUnX.jpg?r=e2c",
  ada: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWPuWnI6iebfOSwBa_ANV8TbBs3XXPNvzYtsZxarXSfyPROD9YfRmejF_yqVOqEn89KRHbIBB10bHZ3FrbCh5oHSEYQfrNR9iZZX6b6FxsRlTERN_gcSnXhkW6dzfbNrYekc3VA290CuZYh5zglrtp2j.jpg?r=9c2",
  polly: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQYwumYVKV2sn4HvokliDgw_lpCcNdnGlEQvHve0LHCwafgRwmb9IpYMb4rlcvTj7Zz1cR46Od7GLyb-IauD_FJrgiJlfKGSRHtVF1vWuus7GZWvLTKigV83fDKnG9JsHYizXRMQqyatWs7WMFBxsbtYDaLg.jpg?r=30b",
  michael: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQeXQfwZxFB8JaGVb3oyGJD_0EdI1ev1vGmPkuw3c_4j9fylqBljdj2oRb08i6xLeLKDQJgi6VcwYk74KZtN_5V5Bg0knifFne8POzITS5u4MCB14YExgcJOGCv5eZUaepBRPbxrliZB5c7zl_DGfrZuO.jpg?r=b76",
  lizzie: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbuWN4c4UtwT8UaD9l0UE5Xbu0YYfrv-n-Sum4KvYAPBrIV1JUX2GRqqrAlp1WU2pDsPDPZAgAVXQsv79ISsifWSjN7rD1T7YC_zRuYUqNc2wK7o7w1VyFkT4IGt6vjt7woDIDPtQ-l-gtRZnIvzROXh.jpg?r=01a",
  finn: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQde8DnVRZK-qd2HTssgRDqyC6ZKzVDFNsIdMFmuDwIg-B591dMVc5lm8TJAUkrjNFlAY9hUetXLldsBKpbOjJOIsmMFKw0U8_8F0I8JdJ1RkKpLg7rBIWP3lnarquTOIPiMC-xpsiC7zOqV0WA7_QRQ8.jpg?r=110",
  linda: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQSZ9JQSRtgXo6ti78ajDo8tykwf1tlVey1l4T6WdLWv7U868sWn99sCePDIzhpOTjahmk4PMebJ1RSMsVYwf9OfkmQY0Wy6617Rg5x1-qROk-STnmLwFzHHbSq-uCQNzZ7kR8SId9z2KdRJOk50QAceV.jpg?r=838",
  walk: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfZyz0zKT2nbeBecODbUEFngbOglbyD0nEbKDQPxMqdkmLsff_Mh-r9JCshfkq-mn_Mxb8HxRjGOsoHUIzJ_x9UHpekqTbob_JSwkCQT5wxiTe5mdLtfn_j5UYDg__PjJLj0wqy00FtW9UaUBDrrT5_m7Q0.jpg?r=c1c",
  key: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQWgMsjYK5D10OYM-3qCqCFBUIaLmcqulCg-_C0qXHoYGC-s11WVVsvpDvtXqg3fiB_pO8Vqbc9cvY4k2q-z5qqXoDvksn_f_CHO15ZN8geJ7LZADUtPZ2FE6OcvlZ5rLsZvD0G3znsrbnFt9hQ5kY_si.jpg?r=52d"
};

const family = [
  ["Thomas Shelby", "Leader", "The calculating center of Shelby Company, equal parts soldier, politician, and myth.", media.tommy],
  ["Arthur Shelby", "Enforcer", "The family fist and fractured heart, loyal past the edge of reason.", media.arthur],
  ["Polly Gray", "Matriarch", "The spiritual force of the family, remembered wherever power gathers.", media.polly],
  ["Ada Shelby", "Diplomat", "Sharp, composed, and fearless enough to survive parliament and blood.", media.ada],
  ["Finn Shelby", "Young Blood", "A Shelby heir shaped by privilege, pressure, and the cost of belonging.", media.finn],
  ["Michael Gray", "Strategist", "Ambition dressed in tailoring, always measuring the family against the future.", media.michael],
  ["Lizzie Shelby", "Loyalist", "Elegant under pressure, guarding what remains human inside the empire.", media.lizzie],
  ["Linda Shelby", "Conscience", "A moral counterweight in a city where forgiveness rarely survives the night.", media.linda]
];

const gallery = [
  ["Brothers in command", media.hero, "wide"],
  ["By order", media.walk, "tall"],
  ["Final season", media.key, ""],
  ["Old ghosts", media.polly, ""],
  ["The clan returns", media.key, "wide"]
];

const chapters = [
  ["1919", "The brothers return from war and turn Birmingham's back streets into a crown."],
  ["1921", "Bookmaking becomes business, and business becomes leverage across the city."],
  ["1924", "London, politics, and old enemies pull the Shelbys into a larger game."],
  ["1930", "The Depression sharpens every alliance and makes every betrayal expensive."],
  ["1940", "War brings Tommy Shelby back to face the family, the nation, and himself."]
];

const tracks = [
  ["Red Right Hand", "Nick Cave"],
  ["Puppet", "Grian Chatten"],
  ["Blackstar", "Radiohead"],
  ["To Bring You My Love", "PJ Harvey"]
];

const app = document.getElementById("app");

app.innerHTML = `
  <section class="hero" id="home" style="--hero-image: url('${media.hero}')">
    <div class="hero-shell">
      <div class="hero-content reveal">
        <span class="hero-badge">The Shelby Family</span>
        <h1 class="hero-title">Shelby Co.<span class="hero-subtitle">The Final Chapter</span></h1>
        <p class="hero-quote">"I'm not a traitor to my class. I am just an extreme one."</p>
        <div class="hero-actions">
          <a class="button primary" href="#trailer">Watch Trailer</a>
          <a class="button" href="#tickets">Get Tickets</a>
        </div>
        <div class="hero-orbit" aria-label="Featured Shelby family members">
          ${family.slice(0, 6).map(([name, role, , image]) => `
            <a class="mini-card" href="#family">
              <img src="${image}" alt="${name} portrait" loading="eager">
              <strong>${name}</strong>
              <span>${role}</span>
            </a>
          `).join("")}
        </div>
      </div>
      <div class="hero-footer" aria-hidden="true">
        <span>Shelby Company Limited</span>
        <span>Birmingham, England</span>
      </div>
    </div>
  </section>

  <section class="trailer" id="trailer">
    <div class="section-inner">
      <span class="eyebrow reveal">Official Trailer</span>
      <h2 class="section-title reveal">The Storm Walks Back Into Birmingham</h2>
      <div class="theater reveal">
        <iframe src="https://www.youtube-nocookie.com/embed/lcvUGs3xaDM?rel=0&modestbranding=1&playsinline=1"
          title="Peaky Blinders: The Immortal Man official trailer by Netflix"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="theater-meta">
        <span>Official Netflix trailer</span>
        <span>Responsive cinematic playback</span>
      </div>
    </div>
  </section>

  <section class="briefing" id="story">
    <div class="section-inner briefing-grid">
      <div class="briefing-card reveal">
        <span class="eyebrow">Story</span>
        <h2 class="section-title">A Kingdom Built In Smoke</h2>
        <p class="section-copy">Tommy Shelby returns to a country tilting toward war, carrying the cost of every bargain the family ever made. Birmingham is colder, enemies are closer, and the Shelby name still opens every door worth fearing.</p>
        <div class="intel-grid">
          <div class="intel"><strong>1940</strong><span>New era</span></div>
          <div class="intel"><strong>R</strong><span>Rating</span></div>
          <div class="intel"><strong>Netflix</strong><span>Trailer</span></div>
        </div>
      </div>
      <figure class="briefing-frame reveal">
        <img src="${media.walk}" alt="Shelby family members walking through Birmingham" loading="lazy">
      </figure>
    </div>
  </section>

  <section class="family" id="family">
    <div class="section-inner">
      <span class="eyebrow reveal">Family</span>
      <h2 class="section-title reveal">Profiles In Power</h2>
      <div class="dossier-grid">
        ${family.map(([name, role, desc, image], index) => `
          <article class="dossier reveal" data-number="${String(index + 1).padStart(2, "0")}">
            <div class="portrait"><img src="${image}" alt="${name} portrait" loading="lazy"></div>
            <h3>${name}</h3>
            <span class="role">${role}</span>
            <p>${desc}</p>
          </article>
        `).join("")}
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <div class="section-inner">
      <span class="eyebrow reveal">Gallery</span>
      <h2 class="section-title reveal">The Shelby Family In Frame</h2>
      <div class="gallery-layout">
        ${gallery.map(([label, image, modifier]) => `
          <figure class="gallery-item ${modifier} reveal">
            <img src="${image}" alt="${label}" loading="lazy">
            <figcaption class="gallery-label">${label}</figcaption>
          </figure>
        `).join("")}
      </div>
    </div>
  </section>

  <section class="timeline" id="timeline">
    <div class="section-inner">
      <span class="eyebrow reveal">Timeline</span>
      <h2 class="section-title reveal">From Streets To Empire</h2>
      <div class="timeline-rail">
        ${chapters.map(([year, text]) => `
          <article class="chapter reveal">
            <strong>${year}</strong>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </div>
  </section>

  <section class="experience" id="soundtrack">
    <div class="section-inner experience-grid">
      <div class="sound-disc reveal" aria-hidden="true"></div>
      <div class="reveal">
        <span class="eyebrow">Soundtrack</span>
        <h2 class="section-title">Needle Drops With Teeth</h2>
        <p class="section-copy">A lean atmospheric sound wall for smoke, steel, and consequence. Every transition is built to feel like a premium streaming campaign, not a template.</p>
        <div class="playlist" aria-label="Featured soundtrack">
          ${tracks.map(([title, artist]) => `
            <div class="track"><strong>${title}</strong><span>${artist}</span></div>
          `).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="tickets" id="tickets">
    <div class="section-inner">
      <div class="ticket-panel reveal">
        <div>
          <h2>By Order Of The Peaky Blinders</h2>
          <p>Watch the official trailer, enter the family archive, and prepare for the next chapter of the Shelby legacy.</p>
        </div>
        <a class="button primary" href="https://www.netflix.com/title/81319485" target="_blank" rel="noreferrer">Watch On Netflix</a>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <span>(c) 2026 Shelby Company Limited</span>
      <span class="signature">Best Regards Mahfuz</span>
    </div>
  </footer>
`;

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.closest("figure, article, a")?.classList.add("image-fallback");
  }, { once: true });
});

const header = document.getElementById("siteHeader");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const links = [...document.querySelectorAll(".nav-links a")];

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("locked", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("locked");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-38% 0px -54% 0px", threshold: 0 });

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const canvas = document.getElementById("stormCanvas");
const ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let particles = [];
let rafId = 0;

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  particles = createParticles();
}

function createParticles() {
  const count = Math.min(130, Math.max(58, Math.floor(width / 11)));
  return Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    speed: 0.25 + Math.random() * 0.9,
    drift: -0.2 + Math.random() * 0.4,
    size: index % 9 === 0 ? 2.2 : 1 + Math.random() * 1.4,
    alpha: index % 9 === 0 ? 0.4 : 0.12 + Math.random() * 0.2,
    warm: index % 7 === 0
  }));
}

function drawStorm() {
  ctx.clearRect(0, 0, width, height);
  for (const p of particles) {
    p.x += p.drift;
    p.y -= p.speed;
    if (p.y < -20) {
      p.y = height + Math.random() * 80;
      p.x = Math.random() * width;
    }
    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;

    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 8);
    const color = p.warm ? "199,161,104" : "180,190,184";
    gradient.addColorStop(0, `rgba(${color},${p.alpha})`);
    gradient.addColorStop(1, `rgba(${color},0)`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
    ctx.fill();
  }
  rafId = requestAnimationFrame(drawStorm);
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion) {
  resizeCanvas();
  drawStorm();
  window.addEventListener("resize", resizeCanvas);
}
