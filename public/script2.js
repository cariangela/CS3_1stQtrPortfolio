<html>
<head>
</head>
<body>
    <!-- comment line-->
    <h1>Feed Me My Snacks</h1>
    <label>Enter your age
        <input id="age" />
    </label><br/>

    <label>Enter your Max age
        <input id="maxAge"/>
    </label><br/>

    <label>
        Enter number of Snacks
        <input id="numPerDay"/>
    </label><br/>

    <p> Result :
        <span id="resultHere"></span>
    </p>
    <button onclick="age">Accept input</button>
    <script src="script2.js">
        function resultHere() {
            let totalRequired = (numPerDay * 365) * (maxAge - age);
            document.getElementById("resultHere").innerText = totalRequired;
        }
    </script>
</body>
</html>