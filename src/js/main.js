var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: []
    },
    methods: {
        searchWeather: function () {
            // console.log("天气查询");
            console.log(this.city);
            var that = this;
            axios.get("http://t.weather.sojson.com/api/weather/city/101030100")
                .then(function (response) {
                    console.log();
                    console.log(response);
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function () { })
        }
    }
})