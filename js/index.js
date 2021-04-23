// Toggle Light or Dark Mode
document.getElementById("flexSwitchCheckDefault").addEventListener("click", function() {

    if (document.getElementById("flexSwitchCheckDefault").checked == true) {
        
        // body
        document.getElementsByTagName("body")[0].style.background = "#1C1C21";
        
        // toggle switch
        document.getElementById("toggle-switch-text").style.color = "#e0e0e0";
        document.getElementById("toggle-status").innerText = "ON";
        
        // title
        document.getElementById("title").style.color = "#e0e0e0";

        // hrs div
        document.getElementById("hrs").style.background = "#1C1C21";
        document.getElementById("hrs").style.boxShadow = "20px 20px 60px #18181c, -20px -20px 60px #202026";
        document.getElementById("hrs").style.color = "#e0e0e0";

        // mins div
        document.getElementById("mins").style.background = "#1C1C21";
        document.getElementById("mins").style.boxShadow = "20px 20px 60px #18181c, -20px -20px 60px #202026";
        document.getElementById("mins").style.color = "#e0e0e0";

        // secs div
        document.getElementById("secs").style.background = "#1C1C21";
        document.getElementById("secs").style.boxShadow = "20px 20px 60px #18181c, -20px -20px 60px #202026";
        document.getElementById("secs").style.color = "#e0e0e0";
    }

    else{

        // body
        document.getElementsByTagName("body")[0].style.background = "#e0e0e0";

        // toggle switch
        document.getElementById("toggle-switch-text").style.color = "#1C1C21";
        document.getElementById("toggle-status").innerText = "OFF";

        // title
        document.getElementById("title").style.color = "#1C1C21";

        // hrs div
        document.getElementById("hrs").style.background = "#e0e0e0";
        document.getElementById("hrs").style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
        document.getElementById("hrs").style.color = "#1C1C21";

        // mins div
        document.getElementById("mins").style.background = "#e0e0e0";
        document.getElementById("mins").style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
        document.getElementById("mins").style.color = "#1C1C21";

        // secs div
        document.getElementById("secs").style.background = "#e0e0e0";
        document.getElementById("secs").style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
        document.getElementById("secs").style.color = "#1C1C21";       
    }
})

// Generates Date and Time
function generateTime() {

    // Variable declaration
    let twelveHr;
    let formattedHr;
    let formattedMins;
    let formattedSecs;

    // Get current date
    const date = new Date();

    // Format hours
    if (date.getHours() % 12 < 10) {
        twelveHr = date.getHours() % 12;        
        formattedHr = "0" + twelveHr;       
    }
    else{
        formattedHr = date.getHours();
    }

    // Format Minutes
    if (date.getMinutes() < 10) {
        formattedMins = "0" + date.getMinutes();
    }
    else{
        formattedMins = date.getMinutes();
    }

    // Format Seconds
    if (date.getSeconds() < 10) {
        formattedSecs = "0" + date.getSeconds();
    }
    else{
        formattedSecs = date.getSeconds();
    }
    
    // Insert into divs
    document.getElementById("hrs").innerHTML = formattedHr;
    document.getElementById("mins").innerHTML = formattedMins;
    document.getElementById("secs").innerHTML = formattedSecs;

    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // let fullDate = date.toLocaleDateString(undefined, options);
    // document.getElementById("date").innerHTML = fullDate;
}


// When button is clicked
document.getElementById("start").addEventListener("click", 
    function start() {

        function HideTitle() {
    
            function ShowDateTime() {
                document.getElementById("title").style.display = "none";        // Displays Date and Time
                document.getElementById("DateTimeCont").style.display = "flex";        
                document.getElementById("DateTimeCont").style.animation = "text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            }

            // Blur Out title
            document.getElementById("title").style.animation = "text-blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            setTimeout(ShowDateTime, 1200); 
        }

        // Apply entrance animation on title
        document.getElementById("start").style.display = "none";
        let name = window.prompt("What's your name? ")
        document.getElementById("title").innerHTML = "Hello, " + name;
        document.getElementById("title").style.animation = "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";



        // Hide title after 1.2s after 1.2s
        setTimeout(HideTitle, 1200);

        // Call generateTime() after 1sec
        setInterval(generateTime, 1000);
    }
)