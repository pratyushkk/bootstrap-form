document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("orderForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      let formData = new FormData(this);

      fetch("https://forms.maakeetoo.com/formapi/236", {
        method: "POST",
        body: formData,
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then(function (data) {
          console.log("Data sent successfully:", data);
        })
        .catch(function (error) {
          console.error("Error sending data:", error);
        });
      this.reset();
    });
});
