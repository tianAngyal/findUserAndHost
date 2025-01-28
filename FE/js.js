const sendButton = document.getElementById("send");

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const awaitedData = await sendData();

  const [inputName, inputEmail] = awaitedData;

  console.log(inputName);
  console.log(inputEmail);
});

async function sendData() {
  const inputName = document.getElementById("i-meno").value;
  const inputEmail = document.getElementById("i-email").value;

  return [inputName, inputEmail];
}
