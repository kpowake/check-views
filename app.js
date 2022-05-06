window.onload = () => {
    fetch("https://api.chingari.io/users/get-stats?userId=627359a3c0dfcd09df16a902")
        .then((res) => res.json())
        .then((res) => {
            document.getElementById("views").innerText = res["data"]["viewsTotal"];
        });
};
