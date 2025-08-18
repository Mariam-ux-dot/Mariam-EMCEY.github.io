class Starfield {
    constructor(options = {}) {
        // Default options
        this.options = {
            container: document.body,
            starCount: 100,
            speed: 0.1,
            starColor: '#FFFFFF',
            bgColor: '#000000',
            starSizeRange: [0.5, 1.5],
            ...options
        };

        this.init();
    }

    init() {
        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Set canvas styles
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.backgroundColor = this.options.bgColor; 
        //this.canvas.style.backgroundColor = this.canvas.style.backgroundColor = 'transparent';;
        
        // Add canvas to container
        this.options.container.appendChild(this.canvas);
        
        // Initialize stars
        this.stars = [];
        this.resize();
        this.createStars();
        
        // Start animation
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.createStars(); // Recreate stars on resize
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.options.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * (this.options.starSizeRange[1] - this.options.starSizeRange[0]) + this.options.starSizeRange[0],
                speed: Math.random() * this.options.speed
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = this.options.starColor;

        for (let star of this.stars) {
            // Draw star
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Move star (vertical movement)
            star.y += star.speed;
            
            // Reset star if it goes off screen
            if (star.y > this.height) {
                star.y = 0;
                star.x = Math.random() * this.width;
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Starfield({
        starCount: 100,        // Number of stars
        speed: 0.05,          // Slower movement speed
        starColor: '#FFFFFF', // White stars
        bgColor: '#000000', // Transparent background
        starSizeRange: [0.5, 2] // Star size range
    });
});