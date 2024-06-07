body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgba(51, 51, 51, 0.8);
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

header .logo img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    transform: translateX(-20px);
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
}

#carousel .item img {
    width: 100%;
    height: auto;
    display: block;
}

#hero {
    background: url('hero-image.jpg') no-repeat center center/cover;
    color: white;
    text-align: center;
    padding: 100px 20px;
    margin-top: 60px;
}

#services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px 20px;
}

.service-card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
    width: 30%;
    margin-bottom: 20px;
}

.service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.service-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 10px;
    animation: move 2s infinite alternate;
    transition: transform 0.3s;
}

.service-card:hover .service-image {
    animation: vibrate 0.3s infinite;
}

@keyframes move {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

@keyframes vibrate {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
}

#graphic-design { background-color: #616161; color: white; }
#branding { background-color: #f5c6a5; color: #333; }
#digital-marketing { background-color: #ff9800; color: white; }
#analysis-strategy { background-color: #81d4fa; color: #333; }
#web-development { background-color: #4e342e; color: white; }

.container {
    padding: 50px 20px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
    margin: 0 auto;
    max-width: 800px; /* Limite la largeur du conteneur */
    transition: background-color 0.3s, transform 0.3s, opacity 0.3s;
    transform: translateY(50px);
    opacity: 0;
    position: relative; /* Ensure the container is relative to position the title correctly */
}

.container:hover {
    transform: scale(1.03);
}

.about { background-color: #616161; color: white; }
.portfolio { background-color: #f5c6a5; color: #333; }
.testimonials { background-color: #ff9800; color: white; }
.contact { background-color: #81d4fa; color: #333; }

.section-title {
    font-size: 1.5em;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.align-left {
    text-align: left;
    left: 0;
}

.align-right {
    text-align: right;
    right: 0;
}

footer {
    background-color: rgba(51, 51, 51, 0.8);
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
}

.social-links a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

button {
    padding: 10px 20px;
    background-color: #ff9800;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #e68900;
}

@media (max-width: 768px) {
    #services {
        flex-direction: column;
        align-items: center;
    }

    .service-card {
        width: 80%;
    }

    .container {
        width: 90%;
    }

    .align-left, .align-right {
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
    }
}

.gallery {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.project-card {
    text-align: center;
    margin: 10px;
    flex: 1 1 calc(33.333% - 20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;
}

.project-card img {
    width: 100px; /* Réduit la largeur de l'image */
    height: 100px; /* Réduit la hauteur de l'image */
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.project-card p {
    font-size: 1em;
}

// scripts.js
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
