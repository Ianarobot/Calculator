 // document.getElementById("btn3").addEventListener("click", function() {
        // document.getElementById("numbar").value = "3";
        // numbar.value += "3";
        // });

        function appendNumber(num) {
            let display = document.getElementById("numbar");
            display.value += num ;
           if (num === '+' || num === '-' || num === '*' || num === '/' || num === '%') {
                display.value += ' ';
            }
            if (num === '=') {
                try {
                    display.value = eval(display.value.slice(0, -1));
                } catch (e) {
                    display.value = "Error";
                }
            }
        }
        function Clr(){
            let display = document.getElementById("numbar");
            display.value = null;
        }
        function deleteLast() {
            let display = document.getElementById("numbar");
            display.value = display.value.slice(0, -1);
            }

       