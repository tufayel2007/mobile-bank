// btn login
document.getElementById("loginBtn").addEventListener("click", function () {
  const mobileNumber = "01759560183";
  const pinNumber = "1234";
  const mobileNumbervalue = document.getElementById("mobile-number").value;
  const mobileNumbervalueconverted = parseInt(mobileNumbervalue);

  const pinNumbervalue = document.getElementById("pin-number").value;
  //   const pinNumbervalueconverted = parseInt(pinNumbervalue);
  //   console.log(mobileNumbervalueconverted, pinNumbervalueconverted);
  if (mobileNumbervalue === mobileNumber && pinNumbervalue === pinNumber) {
    window.location.href = "./index1.html";
  } else {
    // console.log("Gorar dim");
    alert("sorry for login");
  }
});
