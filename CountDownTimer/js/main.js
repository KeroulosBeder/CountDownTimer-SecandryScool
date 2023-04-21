const TheEnd = document.querySelector("#The-end")
document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to (November 6, 2023)
  var targetDate = new Date(2023, 5, 11).getTime() / 1000;

  // Set up FlipDown countdown timer
  var flipdown = new FlipDown(targetDate)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
      TheEnd.innerHTML = "حان يوم الامتحان جاهز يا بطل "
    });

  // Toggle theme every 5 seconds
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);

  // Display version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});