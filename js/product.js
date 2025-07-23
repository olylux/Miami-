// ===== TABS FUNCTIONALITY =====

// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-btn');

// Get all content sections
const tabContents = document.querySelectorAll('.tab-content');

// Add click event to each tab button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and matching content
    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});
