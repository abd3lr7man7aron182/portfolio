// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip placeholder links (e.g. showcase project links without a real URL yet)
        if (!href || href.length <= 1) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 6, 24, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottom = '2px solid rgba(168, 85, 247, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 6, 24, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottom = '2px solid rgba(168, 85, 247, 0.4)';
    }
    
    lastScroll = currentScroll;
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate stat items from different directions
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.classList.add('scroll-animate');
        if (index % 3 === 0) {
            item.classList.add('scroll-animate-from-left');
        } else if (index % 3 === 1) {
            item.classList.add('scroll-animate-from-bottom');
        } else {
            item.classList.add('scroll-animate-from-right');
        }
        observer.observe(item);
    });

    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('scroll-animate');
        if (index % 2 === 0) {
            category.classList.add('scroll-animate-from-left');
        } else {
            category.classList.add('scroll-animate-from-right');
        }
        observer.observe(category);
    });

    // Animate showcase cards
    const showcaseCards = document.querySelectorAll('.showcase-card');
    showcaseCards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        if (index % 3 === 0) {
            card.classList.add('scroll-animate-from-left');
        } else if (index % 3 === 1) {
            card.classList.add('scroll-animate-from-bottom');
        } else {
            card.classList.add('scroll-animate-from-right');
        }
        observer.observe(card);
    });

    // Animate certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        if (index % 2 === 0) {
            card.classList.add('scroll-animate-from-left');
        } else {
            card.classList.add('scroll-animate-from-right');
        }
        observer.observe(card);
    });

    // Animate tech categories
    const techCategories = document.querySelectorAll('.tech-category');
    techCategories.forEach((category, index) => {
        category.classList.add('scroll-animate');
        category.classList.add('scroll-animate-from-bottom');
        observer.observe(category);
    });

    // Animate comment cards
    const commentCards = document.querySelectorAll('.comment-card');
    commentCards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        if (index % 2 === 0) {
            card.classList.add('scroll-animate-from-left');
        } else {
            card.classList.add('scroll-animate-from-right');
        }
        observer.observe(card);
    });

    // Animate comment form card
    const commentFormCard = document.querySelector('.comment-form-card');
    if (commentFormCard) {
        commentFormCard.classList.add('scroll-animate');
        commentFormCard.classList.add('scroll-animate-from-bottom');
        observer.observe(commentFormCard);
    }

    // Animate about text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('scroll-animate');
        aboutText.classList.add('scroll-animate-from-left');
        observer.observe(aboutText);
    }

    // Animate contact info
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.classList.add('scroll-animate');
        contactInfo.classList.add('scroll-animate-from-left');
        observer.observe(contactInfo);
    }

    // Animate contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.classList.add('scroll-animate');
        contactForm.classList.add('scroll-animate-from-right');
        observer.observe(contactForm);
    }
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Scroll reveal animations are now handled by initializeScrollAnimations()

// Add parallax effect to hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skill items hover effect enhancement
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateX(0)';
    });
});

// Neural Network Animation
function createNeuralNetwork() {
    const networkContainer = document.getElementById('neuralNetwork');
    if (!networkContainer) return;
    
    const updateNetwork = () => {
        // Clear existing network
        networkContainer.innerHTML = '';
        
        const nodeCount = 25;
        const nodes = [];
        const containerRect = networkContainer.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        
        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            
            const x = Math.random() * containerWidth;
            const y = Math.random() * containerHeight;
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            node.style.animationDelay = `${Math.random() * 3}s`;
            
            networkContainer.appendChild(node);
            nodes.push({ x, y });
        }
        
        // Create connections between nearby nodes
        nodes.forEach((node1, i) => {
            nodes.slice(i + 1).forEach(node2 => {
                const distance = Math.sqrt(
                    Math.pow(node1.x - node2.x, 2) + 
                    Math.pow(node1.y - node2.y, 2)
                );
                
                if (distance < 200) {
                    const connection = document.createElement('div');
                    connection.className = 'neural-connection';
                    
                    const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;
                    const length = distance;
                    
                    connection.style.left = `${node1.x}px`;
                    connection.style.top = `${node1.y}px`;
                    connection.style.width = `${length}px`;
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.animationDelay = `${Math.random() * 4}s`;
                    
                    networkContainer.appendChild(connection);
                }
            });
        });
    };
    
    // Create initial network
    updateNetwork();
    
    // Update on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateNetwork, 250);
    });
}

// Code Particles Animation
function createCodeParticles() {
    const container = document.getElementById('codeParticles');
    if (!container) return;
    
    const codeSnippets = [
        'import tensorflow',
        'def train_model()',
        'async def process()',
        'class NeuralNetwork',
        'model.fit()',
        'API.get()',
        'db.query()',
        'return response',
        'optimizer.Adam()',
        'loss.backward()',
        'np.array()',
        'pandas.DataFrame()',
        'docker-compose',
        'kubernetes',
        'microservices',
        'REST API',
        'GraphQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Kafka',
        'Elasticsearch'
    ];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'code-particle';
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        const startX = Math.random() * 100;
        particle.style.left = `${startX}%`;
        particle.style.animationDuration = `${5 + Math.random() * 5}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 800);
    
    // Create initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// Circuit Lines Animation
function createCircuitLines() {
    const svg = document.querySelector('.circuit-svg');
    if (!svg) return;
    
    const svgNS = 'http://www.w3.org/2000/svg';
    const paths = [];
    
    // Create circuit paths
    for (let i = 0; i < 8; i++) {
        const path = document.createElementNS(svgNS, 'path');
        path.className = 'circuit-path';
        
        const startX = Math.random() * 1000;
        const startY = Math.random() * 1000;
        const endX = Math.random() * 1000;
        const endY = Math.random() * 1000;
        
        // Create a path with some curves
        const midX1 = startX + (endX - startX) * 0.3 + (Math.random() - 0.5) * 200;
        const midY1 = startY + (endY - startY) * 0.3 + (Math.random() - 0.5) * 200;
        const midX2 = startX + (endX - startX) * 0.7 + (Math.random() - 0.5) * 200;
        const midY2 = startY + (endY - startY) * 0.7 + (Math.random() - 0.5) * 200;
        
        path.setAttribute('d', `M ${startX} ${startY} C ${midX1} ${midY1}, ${midX2} ${midY2}, ${endX} ${endY}`);
        path.setAttribute('stroke', 'url(#circuitGradient)');
        path.setAttribute('stroke-width', '1');
        path.style.animationDelay = `${i * 2.5}s`;
        path.style.animationDuration = `${15 + Math.random() * 10}s`;
        
        svg.appendChild(path);
        paths.push(path);
    }
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createNeuralNetwork();
    createCodeParticles();
    createCircuitLines();
    initializeComments();
    initializePortfolioTabs();
    initializeScrollAnimations();
});

// Comments System
function initializeComments() {
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');
    
    if (!commentForm || !commentsContainer) return;
    
    // Load and display existing comments
    loadComments();
    
    // Handle comment form submission
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value.trim();
        const email = document.getElementById('commentEmail').value.trim();
        const message = document.getElementById('commentMessage').value.trim();
        
        if (!name || !message) {
            alert('Please fill in your name and comment.');
            return;
        }
        
        // Create comment object
        const comment = {
            id: Date.now(),
            name: name,
            email: email,
            message: message,
            date: new Date().toISOString(),
            likes: 0
        };
        
        // Save comment
        saveComment(comment);
        
        // Add comment to display
        addCommentToDisplay(comment);
        
        // Reset form
        commentForm.reset();
        
        // Show success message
        showCommentSuccess();
    });
}

function saveComment(comment) {
    let comments = getComments();
    comments.unshift(comment); // Add to beginning
    localStorage.setItem('portfolioComments', JSON.stringify(comments));
}

function getComments() {
    const comments = localStorage.getItem('portfolioComments');
    return comments ? JSON.parse(comments) : [];
}

function loadComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    if (!commentsContainer) return;
    
    // Show loading state initially
    commentsContainer.innerHTML = `
        <div class="comments-loading">
            <i class="fas fa-spinner fa-spin"></i>
            <span>Loading comments...</span>
        </div>
    `;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        const comments = getComments();
        
        if (comments.length === 0) {
            commentsContainer.innerHTML = `
                <div class="comments-empty">
                    <i class="fas fa-comment-slash"></i>
                    <p>No comments yet. Be the first to leave a comment!</p>
                </div>
            `;
            return;
        }
        
        commentsContainer.innerHTML = '';
        const likedComments = JSON.parse(localStorage.getItem('likedComments') || '[]');
        
        comments.forEach(comment => {
            addCommentToDisplay(comment, likedComments.includes(comment.id));
        });
    }, 500);
}

function addCommentToDisplay(comment, isLiked = false) {
    const commentsContainer = document.getElementById('commentsContainer');
    if (!commentsContainer) return;
    
    // Remove empty state if exists
    const emptyState = commentsContainer.querySelector('.comments-empty');
    if (emptyState) {
        emptyState.remove();
    }
    
    // Remove loading state if exists
    const loadingState = commentsContainer.querySelector('.comments-loading');
    if (loadingState) {
        loadingState.remove();
    }
    
    const commentCard = document.createElement('div');
    commentCard.className = 'comment-card scroll-animate';
    commentCard.dataset.commentId = comment.id;
    
    // Add animation class based on position
    const existingComments = commentsContainer.querySelectorAll('.comment-card').length;
    if (existingComments % 2 === 0) {
        commentCard.classList.add('scroll-animate-from-left');
    } else {
        commentCard.classList.add('scroll-animate-from-right');
    }
    
    const date = new Date(comment.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const initials = comment.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    
    const likeIconClass = isLiked ? 'fas fa-heart' : 'far fa-heart';
    const likeBtnClass = isLiked ? 'comment-action-btn like-btn liked' : 'comment-action-btn like-btn';
    
    commentCard.innerHTML = `
        <div class="comment-header">
            <div class="comment-author">
                <div class="comment-avatar">${initials}</div>
                <div class="comment-author-info">
                    <h5>${escapeHtml(comment.name)}</h5>
                    ${comment.email ? `<span>${escapeHtml(comment.email)}</span>` : ''}
                </div>
            </div>
            <div class="comment-date">
                <i class="far fa-clock"></i>
                <span>${formattedDate}</span>
            </div>
        </div>
        <div class="comment-body">${escapeHtml(comment.message)}</div>
        <div class="comment-actions">
            <button class="${likeBtnClass}" data-comment-id="${comment.id}">
                <i class="${likeIconClass}"></i>
                <span>${comment.likes || 0}</span>
            </button>
        </div>
    `;
    
    // Add like functionality
    const likeBtn = commentCard.querySelector('.like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            toggleLike(comment.id);
        });
    }
    
    // Insert at the beginning
    if (commentsContainer.firstChild) {
        commentsContainer.insertBefore(commentCard, commentsContainer.firstChild);
    } else {
        commentsContainer.appendChild(commentCard);
    }
    
    // Trigger animation after a brief delay
    setTimeout(() => {
        commentCard.classList.add('animate-in');
    }, 100);
}

function toggleLike(commentId) {
    let comments = getComments();
    const commentIndex = comments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) return;
    
    // Check if already liked (using localStorage)
    const likedComments = JSON.parse(localStorage.getItem('likedComments') || '[]');
    const isLiked = likedComments.includes(commentId);
    
    if (isLiked) {
        // Unlike
        comments[commentIndex].likes = Math.max(0, (comments[commentIndex].likes || 0) - 1);
        const newLikedComments = likedComments.filter(id => id !== commentId);
        localStorage.setItem('likedComments', JSON.stringify(newLikedComments));
    } else {
        // Like
        comments[commentIndex].likes = (comments[commentIndex].likes || 0) + 1;
        likedComments.push(commentId);
        localStorage.setItem('likedComments', JSON.stringify(likedComments));
    }
    
    localStorage.setItem('portfolioComments', JSON.stringify(comments));
    
    // Update UI
    const commentCard = document.querySelector(`[data-comment-id="${commentId}"]`);
    if (commentCard) {
        const likeBtn = commentCard.querySelector('.like-btn');
        const likeCount = commentCard.querySelector('.like-btn span');
        
        if (likeBtn && likeCount) {
            likeCount.textContent = comments[commentIndex].likes || 0;
            const icon = likeBtn.querySelector('i');
            
            if (isLiked) {
                likeBtn.classList.remove('liked');
                icon.classList.remove('fas');
                icon.classList.add('far');
            } else {
                likeBtn.classList.add('liked');
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
        }
    }
}

function showCommentSuccess() {
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Comment posted successfully!</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Portfolio Showcase Tabs
function initializePortfolioTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding panel
            const targetPanel = document.getElementById(`${targetTab}-panel`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Add animation keyframes for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);