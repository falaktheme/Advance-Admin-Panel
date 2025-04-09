// Initialize charts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Project Analytics Chart
    const projectChartCtx = document.getElementById('projectChart').getContext('2d');
    const projectChart = new Chart(projectChartCtx, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                label: 'Project Tasks Completed',
                data: [5, 12, 8, 15, 10, 6, 7],
                backgroundColor: [
                    '#ddd',
                    '#1e8a5e',
                    '#34a853',
                    '#1e8a5e',
                    '#ddd',
                    '#ddd',
                    '#ddd'
                ],
                borderColor: 'transparent',
                borderRadius: 10,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#333',
                    padding: 10,
                    cornerRadius: 6
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                }
            }
        }
    });

    // Project Progress Chart (Doughnut)
    const progressChartCtx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(progressChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                data: [41, 39, 20],
                backgroundColor: [
                    '#1e8a5e',
                    '#4285f4',
                    '#ddd'
                ],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#333',
                    padding: 10,
                    cornerRadius: 6
                }
            }
        }
    });

    // Time Tracker Functionality
    let timerRunning = true;
    let seconds = 8;
    let minutes = 24;
    let hours = 1;
    const timeDisplay = document.querySelector('.time-display h2');
    const pauseBtn = document.querySelector('.pause-btn');
    const stopBtn = document.querySelector('.stop-btn');

    // Update time display
    function updateTimeDisplay() {
        timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Timer function
    const timer = setInterval(() => {
        if (timerRunning) {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimeDisplay();
        }
    }, 1000);

    // Pause/Resume button functionality
    pauseBtn.addEventListener('click', function() {
        timerRunning = !timerRunning;
        this.innerHTML = timerRunning ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    });

    // Stop button functionality
    stopBtn.addEventListener('click', function() {
        timerRunning = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateTimeDisplay();
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Add Project Button
    const addProjectBtn = document.querySelector('.add-project-btn');
    addProjectBtn.addEventListener('click', function() {
        alert('Add Project functionality will be implemented here!');
    });

    // Import Data Button
    const importDataBtn = document.querySelector('.import-data-btn');
    importDataBtn.addEventListener('click', function() {
        alert('Import Data functionality will be implemented here!');
    });

    // Add Member Button
    const addMemberBtn = document.querySelector('.add-member-btn');
    addMemberBtn.addEventListener('click', function() {
        alert('Add Team Member functionality will be implemented here!');
    });

    // Start Meeting Button
    const startMeetingBtn = document.querySelector('.start-meeting-btn');
    startMeetingBtn.addEventListener('click', function() {
        alert('Video conference functionality will be implemented here!');
    });

    // New Project Button
    const newProjectBtn = document.querySelector('.new-btn');
    newProjectBtn.addEventListener('click', function() {
        alert('Create New Project functionality will be implemented here!');
    });

    // Make sidebar menu items clickable
    const menuItems = document.querySelectorAll('.menu-items li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            // Alert for demo purposes
            const menuName = this.querySelector('span').textContent;
            if (menuName !== 'Dashboard') {
                alert(`${menuName} page will be implemented here!`);
            }
        });
    });

    // Make project stat cards clickable
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            const statTitle = this.querySelector('h3').textContent;
            alert(`Detailed view of ${statTitle} will be shown here!`);
        });
    });

    // Make project items clickable
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectName = this.querySelector('h4').textContent;
            alert(`Details for project: ${projectName} will be shown here!`);
        });
    });

    // Mobile app download button
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', function() {
        alert('Mobile app download links will be provided here!');
    });
});