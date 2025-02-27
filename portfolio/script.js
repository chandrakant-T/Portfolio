document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded!');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Adding fade-in animation class
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 1s forwards;
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});


document.addEventListener("DOMContentLoaded", function() {
    const username = "chandrakant-T"; // GitHub username
    const pinnedReposContainer = document.getElementById("pinned-repos");
  
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(response => response.json())
      .then(data => {
        data.forEach(repo => {
          const repoCard = document.createElement("div");
          repoCard.className = "repo-card";
          repoCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available."}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
          `;
          pinnedReposContainer.appendChild(repoCard);
        });
      })
      .catch(error => console.error("Error fetching repos:", error));
  });

  

  const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  } else {
    alert('Oops! Something went wrong. Please try again.');
  }
});
