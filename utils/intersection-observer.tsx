const IntersectObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show-div");
      else {
        entry.target.classList.remove("show-div");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(`.hidden-div`)!;
  hiddenElements.forEach((el) => {
    return observer.observe(el);
  });
};

export default IntersectObserver;
