document.querySelector('[data-testid="currentTimeUTC"]').innerHTML = new Date().toLocaleString("en-NG", { timeZone: "UTC" });
document.querySelector('[data-testid="currentDay"]').innerHTML = new Date().toLocaleDateString("en-NG", { weekday: 'long' });
