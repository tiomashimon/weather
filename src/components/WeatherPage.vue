<template>
  <div class="weather-container">
    <div class="weather-component">
      <h1>Погодний додаток</h1>
      <p>Дізнатися погоду в {{ city == "" ? "вашому місті" : cityName }}</p>
      <input type="text" v-model="city" placeholder="Введіть місто">
      <button v-if="city != ''" @click="getWeather()">Отримати Погоду</button>
      <button disabled v-else>Введіть назву міста</button>
      <p class="error">{{ error }}</p>

      <div v-if="info != null">
        <p>Температура: {{ temperature }} °C</p>
        <p>Відчутна температура: {{ feelsLike }} °C</p>
        <p>Мінімальна температура: {{ tempMin }} °C</p>
        <p>Максимальна температура: {{ tempMax }} °C</p>
        <p>Вологість: {{ humidity }} %</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: "",
      error: "",
      info: null,
      temperature: "",
      feelsLike: "",
      tempMin: "",
      tempMax: "",
      humidity: "",
      windSpeed: "",
    };
  },
  computed: {
    cityName() {
      return this.city;
    }
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = "Потрібно назву більше одного символу";
        return false;
      }
      this.error = "";

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=47042a40e3d4a3d23e9af7388e1af447`)
        .then(res => {
          this.info = res.data;
          this.temperature = this.info.main.temp;
          this.feelsLike = this.info.main.feels_like;
          this.tempMin = this.info.main.temp_min;
          this.tempMax = this.info.main.temp_max;
          this.humidity = this.info.main.humidity;
          this.windSpeed = this.info.wind.speed;
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            this.error = "Місто не знайдено. Перевірте правильність назви міста.";
          } else {
            this.error = "Виникла помилка при отриманні погодніх даних. Спробуйте ще раз пізніше.";
          }
        });
    }
  }
};
</script>

<style scoped>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.weather-component {
  width: 900px;
  height: 500px;
  border-radius: 20px;
  padding: 20px;
  background: #ffffff; 
  text-align: center;
  color: #000000;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease; 
}

.weather-component h1 {
  margin-top: 50px;
}

.weather-component p {
  margin-top: 20px;
}

.weather-component button:disabled {
  background: grey;
  cursor: not-allowed;
}

.weather-component input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color: #000000; 
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}

.weather-component button {
  background: #000000;
  color: #ffffff; 
  border-radius: 10px;
  border: 2px solid #000000;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}

.weather-component button:hover {
  transform: scale(1.1) translateY(-5px);
}

.weather-component input:focus {
  border-bottom-color: #6e2d7d;
}
.error{
  color:red;
}
</style>
