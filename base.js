const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.dispatchEvent(new Event('reveal'))}}),{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
