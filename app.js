window.onload = async () => {
    const viewsByPlatforms = await Promise.all([
        fetch("https://api.chingari.io/users/get-stats?userId=627359a3c0dfcd09df16a902")
            .then((res) => res.json())
            .then((res) => +res["data"]["viewsTotal"]),
        fetch("https://content-youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCnjOG1hZur5xvPS2EkSxYZQ&key=AIzaSyCMMb86B9jXZx-a9RLSXY8MqQSH8oQxM3k")
            .then((res) => res.json())
            .then((res) => +res["items"][0]["statistics"]["viewCount"])
    ]);
    document.getElementById("views").innerText = viewsByPlatforms.reduce((a,b) => a+ b,0);
};
