/**
 * MOSHKO'S - Shared Components Manager
 * This file handles the shared Navigation, Background, and Footer across all pages.
 */

function initSharedComponents() {
    syncAnimations();
    initBackground();
    initNavbar();
    initFooter();
}

/**
 * BACKGROUND COMPONENT
 */
function initBackground() {
    const backgroundHTML = `
        <div class="stars"></div>
        <div class="nebula"></div>
        <div class="floating-objects">
            <img src="images/planet-saturn.png" class="planet planet-saturn" alt="Saturn">
            <img src="images/planet-earth.png" class="planet planet-earth" alt="Earth">
            <img src="images/planet-mars.png" class="planet planet-mars" alt="Mars">
            <img src="images/ship-ufo.png" class="ship ship-ufo" alt="UFO">
            <img src="images/ship-rocket.png" class="ship ship-rocket" alt="Rocket">
            <img src="images/float-astronaut.png" class="ship float-astronaut" alt="Astronaut">
            <img src="images/float-alien.png" class="ship float-alien" alt="Alien">
        </div>
    `;

    const bgElement = document.querySelector('.space-background');
    if (bgElement) {
        bgElement.innerHTML = backgroundHTML;
    }
}

/**
 * NAVBAR COMPONENT
 */
function initNavbar() {
    const navbarHTML = `
        <div class="nav-container">
            <div class="logo-group">
                <div class="logo-container">
                    <a href="index.html" class="logo-link"><img src="images/logo.png" alt="MOSHKO'S Logo" class="logo"></a>
                    <div class="logo-dropdown">
                        <div class="dropdown-section">
                            <h4 style="margin-top: 15px;">🔗 Contact Info</h4>
                            <div class="integrated-contact-menu">
                                <a href="https://discord.com/users/538697561209307136" target="_blank" class="contact-link discord">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg" class="logo" alt="Discord">
                                    <span class="dance">Discord</span>
                                    <span class="arrow">➤</span>
                                </a>
                                <a href="https://instagram.com/shaharmoshko_" target="_blank" class="contact-link instagram">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" class="logo" alt="Instagram">
                                    <span class="dance">Instagram</span>
                                    <span class="arrow">➤</span>
                                </a>
                                <button class="contact-link email-general" onclick="sendGmail('moshkosha@gmail.com', this)">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" class="logo" alt="Gmail">
                                    <span class="dance">moshkosha@gmail.com</span>
                                    <span class="arrow">➤</span>
                                </button>
                                <button class="contact-link email-events" onclick="sendGmail('moshko@parlagames.co.il', this)">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" class="logo" alt="Gmail">
                                    <span class="dance">moshko@parlagames.co.il</span>
                                    <span class="arrow">➤</span>
                                </button>
                                <a href="https://namemc.com/profile/MoshkoThoughts_" target="_blank" class="contact-link namemc">
                                    <img src="https://pbs.twimg.com/profile_images/1596956295990583296/nS_HkfAq_400x400.jpg" class="logo" alt="NameMC">
                                    <span class="dance">NameMC</span>
                                    <span class="arrow">➤</span>
                                </a>
                                <a href="https://steamcommunity.com/profiles/76561199103335898/" target="_blank" class="contact-link steam">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/steam.svg" class="logo" alt="Steam">
                                    <span class="dance">Steam</span>
                                    <span class="arrow">➤</span>
                                </a>
                                <a href="https://open.spotify.com/user/zb1x4pnjevbxccyuykcv3kdnn?si=eb4c632fea114c95" target="_blank" class="contact-link spotify">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg" class="logo" alt="Spotify">
                                    <span class="dance">Spotify</span>
                                    <span class="arrow">➤</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="nav-menu" id="nav-menu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="updates.html" class="nav-link">Updates</a></li>
                <li><a href="games.html" class="nav-link">Games</a></li>
                <li><a href="minecraft.html" class="nav-link">Minecraft</a></li>
            </ul>

            <div style="width: 50px;"></div>

            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        navbarElement.innerHTML = navbarHTML;
        setActiveLink();
        initHamburger();
    }
}

/**
 * FOOTER COMPONENT
 */
function initFooter() {
    const footerHTML = `
        <div class="container">
            <div class="footer-content">
                <p style="font-size: 0.8rem; opacity: 0.7; margin-top: 5px;">🍔 Created By Moshko's 🍺</p>
            </div>
        </div>
    `;

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

/**
 * UTILITIES
 */
function syncAnimations() {
    // Store the time the user first opened the site in this session
    let sitestartTime = sessionStorage.getItem('siteStartTime');
    if (!sitestartTime) {
        sitestartTime = Date.now();
        sessionStorage.setItem('siteStartTime', sitestartTime);
    }

    // Calculate how many seconds have passed since the session started
    const elapsed = (Date.now() - sitestartTime) / 1000;

    // Set a global CSS variable that animations can use as a negative delay
    document.documentElement.style.setProperty('--sync-delay', `-${elapsed}s`);
}

function setActiveLink() {
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (page === "" || page === "/") {
        const homeLink = document.querySelector('a[href="index.html"]');
        if (homeLink) homeLink.classList.add('active');
    }
}

function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.onclick = function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        };

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
}

if (typeof window.sendGmail === 'undefined') {
    window.sendGmail = function (email, btn) {
        navigator.clipboard.writeText(email).then(() => {
            const span = btn.querySelector('.dance');
            const original = span.textContent;
            span.textContent = 'Copied!';
            setTimeout(() => span.textContent = original, 1200);
        });
        window.open(`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`, '_blank');
    };
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initSharedComponents();
    initSPARouting();

    // Ensure initial content is visible instantly
    const contentRoot = document.getElementById('content-root');
    if (contentRoot) {
        requestAnimationFrame(() => {
            contentRoot.classList.add('is-visible');
        });
    }
});

/**
 * SPA ROUTING
 */
function initSPARouting() {
    // Intercept link clicks
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link || !link.href) return;

        // Clean paths for comparison
        const targetUrl = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Remove trailing slashes and index.html if present
        const cleanPath = (p) => p.replace(/\/$/, '').replace('index.html', '');
        const targetPath = cleanPath(targetUrl.pathname);
        const currentPath = cleanPath(currentUrl.pathname);

        // Check if internal link
        const isInternal = targetUrl.origin === currentUrl.origin || (targetUrl.protocol === 'file:' && currentUrl.protocol === 'file:');

        const isSamePage = targetPath === currentPath;

        if (isInternal && !link.target && !link.href.includes('#')) {
            if (!isSamePage) {
                e.preventDefault();
                navigateTo(link.href);
            } else {
                e.preventDefault();
            }
        }
    });

    // Handle back/forward buttons
    window.addEventListener('popstate', () => {
        loadPage(window.location.href);
    });
}

function navigateTo(url) {
    // Attempt SPA navigation (fetch and content swap)
    try {
        if (url === window.location.href) return;
        history.pushState(null, '', url);
        loadPage(url);
    } catch (err) {
        // Fallback for browsers that block pushState (common on local file://)
        console.warn('History pushState failed, falling back to normal navigation:', err);
        window.location.href = url;
    }
}

async function loadPage(url) {
    const contentRoot = document.getElementById('content-root');
    if (contentRoot) contentRoot.classList.remove('is-visible');

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const newContent = doc.querySelector('#main-content') || doc.querySelector('main');

        if (newContent && contentRoot) {
            // Short delay to let the fade-out happen smoothly
            setTimeout(() => {
                contentRoot.innerHTML = '';
                contentRoot.appendChild(doc.importNode(newContent, true));

                initSharedComponents();

                if (window.updateRagdollWalls) {
                    setTimeout(() => window.updateRagdollWalls(), 150);
                }

                window.scrollTo({ top: 0, behavior: 'instant' });

                // Show content and refresh animations
                contentRoot.classList.add('is-visible');
                
                // Trigger global events for other scripts (like script.js)
                window.dispatchEvent(new Event('page-load'));
                if (typeof window.initPage === 'function') {
                    window.initPage();
                }

                if (window.AOS) {
                    window.AOS.refresh();
                }
            }, 300);
        } else {
            throw new Error('Content root not found');
        }
    } catch (err) {
        console.warn('SPA Navigation failed, falling back to full reload:', err);
        window.location.href = url;
    }
}
