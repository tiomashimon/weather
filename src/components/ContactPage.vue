<template>
  <div class="contact-container">
    <h1>Контакти</h1>
    <p>Для зв'язку з нами:</p>
    <ul>
      <li>Email: <a href="uzhnuemail@uzhnu.com">uzhnuemail@uzhnu.com</a></li>
      <li>Телефон: <a href="tel:+1234567890">+123 456 7890</a></li>
      <li>Адреса: <span>123 Main Street, Uzhgorod</span></li>
      <li>Skype: <a href="skype:Uzhgorod National University">Uzhgorod National University</a></li>
    </ul>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.1em;
  margin: 10px 0;
}

a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #0056b3;
}

span {
  color: #555;
  display: block;
  margin-top: 5px;
}
</style>
