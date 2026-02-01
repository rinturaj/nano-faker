import './style.css';
import { setSeed, random, int, float } from '@nano-faker/core';
import { age, id, otp } from '@nano-faker/number';
import { firstName, lastName, fullName, gender } from '@nano-faker/person';
import { email, username, domain, url, ipv4 } from '@nano-faker/internet';
import { fake } from '@nano-faker/patterns';

// ========================================
// Navigation System
// ========================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = (link as HTMLElement).dataset.page;
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Handle navigation buttons (e.g., "Get Started" button)
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pageId = (btn as HTMLElement).dataset.navigate;
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    function showPage(pageId: string) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // Remove active from all nav links
        navLinks.forEach(link => link.classList.remove('active'));

        // Show selected page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Set active nav link
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Update page title for SEO
        const pageTitles: Record<string, string> = {
            'home': 'nano-faker - Lightweight Fake Data Generation for JavaScript',
            'getting-started': 'Getting Started - nano-faker Documentation',
            'playground': 'Interactive Playground - nano-faker',
            'api': 'API Reference - nano-faker Documentation',
            'examples': 'Examples - nano-faker Documentation'
        };

        if (pageTitles[pageId]) {
            document.title = pageTitles[pageId];
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mobile menu toggle
    initMobileMenu();
}

// ========================================
// Mobile Menu
// ========================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navOverlay = document.getElementById('nav-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const navLinkElements = document.querySelectorAll('.nav-link');

    if (!mobileMenuToggle || !navLinks || !navOverlay) return;

    // Toggle menu
    mobileMenuToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('active');

        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking overlay
    navOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking a nav link
    navLinkElements.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    function openMenu() {
        navLinks?.classList.add('active');
        navOverlay?.classList.add('active');
        if (menuIcon) menuIcon.textContent = '✕';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenu() {
        navLinks?.classList.remove('active');
        navOverlay?.classList.remove('active');
        if (menuIcon) menuIcon.textContent = '☰';
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// ========================================
// API Reference Navigation
// ========================================

function initApiNavigation() {
    const apiNavBtns = document.querySelectorAll('.api-nav-btn');
    const apiSections = document.querySelectorAll('.api-section');

    apiNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const apiId = (btn as HTMLElement).dataset.api;
            if (!apiId) return;

            // Remove active from all buttons
            apiNavBtns.forEach(b => b.classList.remove('active'));

            // Hide all sections
            apiSections.forEach(section => section.classList.remove('active'));

            // Activate clicked button
            btn.classList.add('active');

            // Show corresponding section
            const targetSection = document.getElementById(`api-${apiId}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// ========================================
// Playground Functionality
// ========================================

// DOM elements
const seedInput = document.getElementById('seed-input') as HTMLInputElement;
const randomSeedBtn = document.getElementById('random-seed-btn') as HTMLButtonElement;
const applySeedBtn = document.getElementById('apply-seed-btn') as HTMLButtonElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;

// Output elements
const outputs = {
    random: document.getElementById('output-random') as HTMLElement,
    int: document.getElementById('output-int') as HTMLElement,
    float: document.getElementById('output-float') as HTMLElement,
    age: document.getElementById('output-age') as HTMLElement,
    id: document.getElementById('output-id') as HTMLElement,
    otp: document.getElementById('output-otp') as HTMLElement,
    firstname: document.getElementById('output-firstname') as HTMLElement,
    lastname: document.getElementById('output-lastname') as HTMLElement,
    fullname: document.getElementById('output-fullname') as HTMLElement,
    gender: document.getElementById('output-gender') as HTMLElement,
    email: document.getElementById('output-email') as HTMLElement,
    username: document.getElementById('output-username') as HTMLElement,
    domain: document.getElementById('output-domain') as HTMLElement,
    url: document.getElementById('output-url') as HTMLElement,
    ipv4: document.getElementById('output-ipv4') as HTMLElement,
    pattern1: document.getElementById('output-pattern1') as HTMLElement,
    pattern2: document.getElementById('output-pattern2') as HTMLElement,
    pattern3: document.getElementById('output-pattern3') as HTMLElement,
};

/**
 * Generate all fake data and update the UI
 */
function generateAll(): void {
    // Core
    outputs.random.textContent = random().toFixed(4);
    outputs.int.textContent = int(1, 100).toString();
    outputs.float.textContent = float(0, 10, 2).toString();

    // Number
    outputs.age.textContent = age().toString();
    outputs.id.textContent = id();
    outputs.otp.textContent = otp();

    // Person
    outputs.firstname.textContent = firstName();
    outputs.lastname.textContent = lastName();
    outputs.fullname.textContent = fullName();
    outputs.gender.textContent = gender();

    // Internet
    outputs.email.textContent = email();
    outputs.username.textContent = username();
    outputs.domain.textContent = domain();
    outputs.url.textContent = url();
    outputs.ipv4.textContent = ipv4();

    // Patterns
    outputs.pattern1.textContent = fake('USR-####-@@');
    outputs.pattern2.textContent = fake('###-##-####');
    outputs.pattern3.textContent = fake('***-***-***');
}

/**
 * Apply the seed from the input
 */
function applySeed(): void {
    const seedValue = parseInt(seedInput.value, 10);
    if (!isNaN(seedValue)) {
        setSeed(seedValue);
        generateAll();
    }
}

/**
 * Generate a random seed
 */
function generateRandomSeed(): void {
    const randomSeed = Math.floor(Math.random() * 1000000);
    seedInput.value = randomSeed.toString();
    setSeed(randomSeed);
    generateAll();
}

// ========================================
// Initialize Everything
// ========================================

function init() {
    // Initialize navigation
    initNavigation();
    initApiNavigation();

    // Playground event listeners
    if (applySeedBtn) {
        applySeedBtn.addEventListener('click', applySeed);
    }

    if (randomSeedBtn) {
        randomSeedBtn.addEventListener('click', generateRandomSeed);
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', generateAll);
    }

    // Allow Enter key in seed input
    if (seedInput) {
        seedInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                applySeed();
            }
        });
    }

    // Initialize with default seed
    setSeed(12345);
    generateAll();
}

// Start the app
init();
