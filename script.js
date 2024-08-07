function otpless(otplessUser) {
  const token = otplessUser.token;
  console.log("Token:", token);
  console.log("User Details:", JSON.stringify(otplessUser));

  // Store the user details in local storage to access on the next page
  localStorage.setItem("otplessUser", JSON.stringify(otplessUser));

  // Redirect to the next page after successful login
  window.location.href = "next.html";
}
let array1 = [1, 2, 3, 4, 5];
function square(a) {
  let arrN = [];
  for (let index = 0; index < a.length; index++) {
    const element = a[index] * a[index];
    arrN.push(element);
  }
  return arrN;
}
