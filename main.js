(() => {
  const sections = {
    "about": document.getElementById("about"),
    "projects": document.getElementById("projects"),
    "skills": document.getElementById("skills"),
    "education": document.getElementById("education"),
    "experience": document.getElementById("experience")
  };

  const anchors = {
    "about": document.getElementById("aboutAnchor"),
    "projects": document.getElementById("projectsAnchor"),
    "skills": document.getElementById("skillsAnchor"),
    "education": document.getElementById("educationAnchor"),
    "experience": document.getElementById("experienceAnchor")
  };

  for (const section in sections) {
    anchors[section].addEventListener("click", e => {
      e.preventDefault();
      sections[section].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  const activeClass = "activeSection";

  const toggleActive = anchor => {
    for (const anc in anchors) {
      if (anc != anchor)
        anchors[anc].classList.remove(activeClass);
      else
        anchors[anc].classList.add(activeClass);
    }
  }

  const highlightActiveSection = () => {
    const aboutY = Math.abs(sections.about.getBoundingClientRect().y);
    const projectsY = Math.abs(sections.projects.getBoundingClientRect().y);
    const skillsY = Math.abs(sections.skills.getBoundingClientRect().y);
    const educationY = Math.abs(sections.education.getBoundingClientRect().y);
    const experienceY = Math.abs(sections.experience.getBoundingClientRect().y);

    switch (Math.min(aboutY, projectsY, skillsY, educationY, experienceY)) {
      case aboutY:
        toggleActive("about");
        break;
      case projectsY:
        toggleActive("projects");
        break;
      case skillsY:
        toggleActive("skills");
        break;
      case educationY:
        toggleActive("education");
        break;
      case experienceY:
        toggleActive("experience");
        break;
    }
  };

  highlightActiveSection();
  window.addEventListener("scroll", highlightActiveSection);
})();