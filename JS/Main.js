// ****************************** CLOCK *************************************

const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    hour.style.transform = `rotate(${hh + mm / 12}deg)`
    minutes.style.transform = `rotate(${mm}deg)`
    seconds.style.transform = `rotate(${ss}deg)`
}
setInterval(clock, 1000)

// ANOTHER LOGIC FOR CLOCK HANDS

// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30 * htime + mtime / 2;
//     mrotation = 6 * mtime;
//     srotation = 6 * stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minutes.style.transform = `rotate(${mrotation}deg)`;
//     seconds.style.transform = `rotate(${srotation}deg)`;

// }, 1000);

// ***************************** DIGITAL CLOCK & TEXT **************************
const digiHour = document.getElementById('text-hour')
digiMinutes = document.getElementById('text-minutes')
digiSeconds = document.getElementById('text-seconds')
digiAmPm = document.getElementById('text-AMPM')
dateDay = document.getElementById('date-day')
dateMonth = document.getElementById('date-month')
dateYear = document.getElementById('date-year')

const digiClock = () => {
    let date = new Date()

    let hh = date.getHours(),
        AMPM,
        mm = date.getMinutes(),
        // ss = date.getSeconds(),
        dat = date.getDate(),
        month = date.getMonth(),
        yr = date.getFullYear()
    // *****************12 or 24 hours***********************
    if (hh > 12) {
        hh = hh - 12
        AMPM = "PM"
    } else {
        AMPM = "AM"
    }
    // for change 12 to 24 
    if (hh == 0) { hh = 12 }
    // *********************** Show a zero before hours ********************
    if (hh < 10) { hh = `0${hh}` }
    // show time 
    digiHour.innerHTML = `${hh}:`
    // *********************** Show a zero before minutes ********************
    if (mm < 10) { mm = `0${mm}` }
    // show minutes
    digiMinutes.innerHTML = mm
    // // *********************** Show a zero before seconds ********************
    // if (ss < 10) { ss = `0${ss}` }
    // // show seconds
    // digiSeconds.innerHTML = ss
    // show AM or PM
    digiAmPm.innerHTML = AMPM
    // *********************** month of the year ********************
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    // show the day,month and year
    dateDay.innerHTML = dat
    dateMonth.innerHTML = `${months[month]}`
    dateYear.innerHTML = yr
}
setInterval(digiClock, 1000)

// *********************** DARK/LIGHT THEME ********************
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})