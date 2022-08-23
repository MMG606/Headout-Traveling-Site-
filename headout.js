/* 
const toggleButton = document.getElementsByClassName('navbar-bar')[0]
const navbarLinks = document.getElementsByClassName('navbar-menu')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

 */


function myFunction() {
  classList.toggle("dark-mode");
}

$(document).ready(function () {
  $(".navbar-bar").click(function () {
    $(".navbar-menu").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".navbar-bar").click(function () {
    $(".topnav1").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".navlinks2").hover(function () {
    $(".dropdown-content").slideToggle("fast");
  });
});

/* --------------------------Page 2 drop-downs---------------------------------- */

/* $(document).ready(function () {
  $("f107").hover(function () {
    $(".dropdown-content").slideToggle("fast");
  });
});
 */
$(document).ready(function () {
  $(".Highlights").click(function () {
    $(".Highlightsdata").slideToggle("fast");
     /* $(".rotate").toggleClass("down"); */
  });
  $(".Inclusions").click(function () {
    $(".Inclusionsdata").slideToggle("fast");
  });
  $(".Exclusions").click(function () {
    $(".Exclusionsdata").slideToggle("fast");
  });
  $(".StrictCancellationPolicy").click(function () {
    $(".StrictCancellationPolicydata").slideToggle("fast");
  });
  $(".YourExperience").click(function () {
    $(".YourExperiencedata").slideToggle("fast");
  });
  $(".KnowBeforeYouGo").click(function () {
    $(".KnowBeforeYouGodata").slideToggle("fast");
  });
  $(".MyTickets").click(function () {
    $(".MyTicketsdata").slideToggle("fast");
  });


 
/*   $(".rotate").click(function () {
    $(this).toggleClass("up");
    $(".MyTicketsdata").slideToggle("fast");
  }); */
});
