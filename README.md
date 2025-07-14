# my-portfolio

/_ This is a general rule to remove default outlines and highlights _/
:focus {
outline: none !important;
/_ !important helps override other styles _/
box-shadow: none !important;
-webkit-tap-highlight-color: transparent !important;
/_ For mobile taps _/
}

/_ Specifically target your screenshot images if they are the ones gaining focus _/
.tablet-screen:focus,
.tablet-screen:active {
outline: none !important;
box-shadow: none !important;
/_ If it's a background or filter causing it, try these: _/
background-color: transparent !important;
filter: none !important;
}

.console-screen:focus,
.console-screen:active {
outline: none !important;
box-shadow: none !important;
background-color: transparent !important;
filter: none !important;
}
