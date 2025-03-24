
const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️",
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️",
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️",
    },
};

function searchWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherInfo = weatherData[city];
    const resultDiv = document.getElementById("weatherResult");

    if (weatherInfo) {
        resultDiv.innerHTML = `
                  <div class="weather-card">
                      <h2>${city}</h2>
                      <div class="box">
                          <div class="icon">${weatherInfo.icon}</div>
                          <h3>${weatherInfo.temperature}°C</h3>
                          <div style =" display: block">
                              <p>${weatherInfo.description}</p>
                              <p>Độ ẩm: ${weatherInfo.humidity}%</p>
                              <p>Tốc độ gió: ${weatherInfo.windSpeed} km/h</p>
                          </div>
                      </div>
                  </div>
              `;
    } else {
        resultDiv.innerHTML =
            "<p class='text-danger'>Không tìm thấy dữ liệu cho thành phố này.</p>";
    }
}
