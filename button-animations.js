document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.big-btn, .btn-back');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      btn.style.transform = 'scale(1.08)';
      btn.style.boxShadow = '0 12px 32px rgba(52,211,153,0.18)';
      btn.style.transition = 'transform 0.18s, box-shadow 0.18s';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
  });
}); 