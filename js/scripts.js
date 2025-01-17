/* General Styles */
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3 {
  font-weight: 700;
  margin: 0 0 1rem;
}

p {
  margin: 0 0 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #212121;
  position: sticky;
  top: 0;
  z-index: 1000;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #FF5722;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #333;
  color: #fff;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.button {
  display: inline-block;
  background: #FF5722;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease, color 0.3s ease;
}

.button:hover {
  background: #E64A19;
  color: #fff;
}

/* Section Styles */
.section {
  padding: 4rem 2rem;
  text-align: center;
}

.section-alt {
  background-color: #f4f4f4;
}

.skills-grid, .projects-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.skill-card, .project-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Contact Section */
.contact-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.contact-list a {
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s ease;
}

.contact-list a:hover {
  color: #FF5722;
}

/* Let's Work Together Section */
.work-form {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  background: #FF5722;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #E64A19;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #212121;
  color: white;
}
