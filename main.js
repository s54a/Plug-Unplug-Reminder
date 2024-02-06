import "./style.css";

// Check if Battery Status API is supported by the browser
if ("getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    // Update the charging status initially
    updateChargingStatus(battery);

    // Listen for changes in charging status
    battery.addEventListener("chargingchange", function () {
      updateChargingStatus(battery);
    });
  });
} else {
  console.log("Battery Status API is not supported");
}

// Function to update charging status
function updateChargingStatus(battery) {
  if (battery.charging) {
    console.log(battery.charging);
    console.log("Device is currently charging");
  } else {
    console.log("Device is not charging");
  }
}

const favicon = document.querySelector("#favicon");

if (false) {
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcklEQVR4nN3YsWsTURzA8YeG6KBQt2Sxyx1i4bJIsuYPEBNH/QfE/8DxBd/SUtFCb6w4SDJUF4uGgkNyalILXYRCMukoLg205AaXn6TpNTnu7t0vud+7vPjgt5XH99O7hF/LWEqneDCslb67ED7Ddabzkce7KMTt+19v5R92njA9410pYrXaWslXOof5ahdylS790zLFoGaKk/Vk8W4oYjreG1LEOH4A45kg5ot3fYiweFKEP36CSBbvnk/ROd3KVzpHYfGX8+BblTh+PNbb00TxpYu5u/UrMj5X7b5mHK6Qx1Mj7mz+pI0vc8gYYvApDjCaQuOM/EnkksR7Z41D1hSDDxgE5euUo4hfJKJ4MNwgiV8kokS9dvwXCNu2bzza/PJ7KRGwu5aFhrX3t34Pnr78CEuFgKZxDeqFJjQKMJpFIFjS37wXvygEo4yfRjx+0f6TBoJ5Z9vp1WynF/tOQaucmX5tQqdeaO7sbNxM49uJTeL7MB4Eom49iwZY+/Bm9XpaX7HMH58UMYn3jmoEC8bPiwjGp4DgEsAsiOh4hQh+frEcgES0ypm4nyFG8MtL4wE4BPYQILjvQtvpNTGI0Yddg92JBy7jx8fZbae/l9aTSLA78chL00Ik2Z3MkP87BRCvPv8AVQiK3cmMQ4j3bVCBoNydTBlCvGsBNYJ6dzKen3A5QAWCaHcyZPE+QGoIC707xcYHAMoR+N3JwMSHApQh8LuTgY2PBCj6YKOCduEqOl4KUIBQcoQMsAwIEQfQHSEwAJ0RAgvQFSFmAeiIELMCdEOIeQA6IcS8AJ0QSQ76L7t2H78eaIfQOZ5dnEiEgvh/O+L2fhcunmAAAAAASUVORK5CYII=";
} else if (true) {
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nNXYT2vTYBzA8UcRpyfnbT2ol/bgQW/Ne5CxxlfhW/AkT21wtAizWzLQgXiYeGhh4hhjIDRPnG234bGSZ9VRFET0sMGkAWHwSF3TpeXJk79P8uwHv1MhfD9NGsoDQEKTb/eL0o5F6NsvA5GHHW/5Qtyc3b6eud98AMSMt5iIW7I+nSk0dzNyi8wUWmVB4y0qwhlvbyKIcPHWGIIWnwgiWrz1f/PGcTVTaH6ixY927qMcOjKnHBVzymGZR7w03NvVnmv8jNx6CSC5GCH+iJzuGSLOeImBiDH+DMEjXqIgOMSf7p3VYy7xkgPBLT4pRL7dr4SK1xCGc89/7nkBBnv3zR+uCCno3w7VMIuagYmG8F955ceuHwTvOyH5RYzi7T1PCM0wH4/FD1dF+GT29S8iNEJzibd3ydgnoiDA5DzTe9MqMg9YgMEuGvvk3urv1BGANsvGlxuaYX71QohwJ4DbnBcEYM382+bCUqNDREYAt1HqelGp6+TJ2gciMgKw4u0VGAE94wVGQN/xAiJg4HiBEDB0vAAIGDk+RQR0e+MEjk8BAVnveyI4ArrGxwHgjIDM+LgAvBA5yrkTN0BqCCVGQCqIUq2xIjoiWzp0/y0QQi4odX1ZVESWFS8KQkX4hHba4SteFIQ2cWQTKF40RDZMvD2L3e5UZX2nxwfx2RNR1fGj8PGb3SnNMDcHF3q6sUcSvxMIh//mYadzWTXwuvOCPBDza9sL1NMOFHM8D0Sp1oDUIxsUJV7XL9mPjdtW3rW/xRVvzwiBIsTboyL8kPFcbtVa369GeTtNxtvz4v3BtcjxTATCW6/03pUor1i3eC6jOhGOeHuCIhKNH0NQ4oMiUokHwxn8sFmfeyGSjP8Hib81qnuGwEQAAAAASUVORK5CYII=";
} else {
  favicon.href =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nI2SwWrCQBRF8y99qUQ6s9a/KLjyS6wr05ksXAnanbqNUEg+wG3BdS39jZpHDUQwI6/UEKMy5hl4u5zDnct1nDs+Wsg+hTKlUIzZn0Wc+yLKhyc4FD4tJBUnfnk4NnS8KB9ewpIolC+MwPROgtjQ6H1+qGDhs/EhwI43zb4skgHbCQTYAZXsXY3kTbPvcwnbCZzB5dkk1k4eXjfta/iWxNqJq3BlgxlJ1QloTOsEXCcOaFxzglrJo8LnewRHyWy3LgVPkame4b2lS1agEuPqTbdYa16Nqpxvc5axMDvfxsSSpA6+TFHE+u8EVPIJCreg8QOCn1Yd/Ac3HMYAj+DNBwAAAABJRU5ErkJggg==";
}

// var percent=navigator.getbatteryPercent
// var percent=navigator.getBattery().then(function(battery) {
//     document.write(`Your battery is ${battery.level*100}%`);
// });
// var showInfo=document.getElementById('battery');
// showInfo.innerHTML=percent;

navigator.getBattery().then(function (battery) {
  var batteryLevel = battery.level * 100;
  console.log(batteryLevel);
});

let percent = document.querySelector(".percent");
navigator.getBattery().then(function (battery) {
  percent.innerHTML = battery.level * 100 + "%";
  console.log(battery);
});

// navigator.getBattery().then(battery => {
// function updateAllBatteryInfo(){
//     updateChargeInfo();
//     updateLevelInfo();
//     updateChargingInfo();
//     updateDischargingInfo();
// }
// updateAllBatteryInfo();

// battery.addEventListener('chargingchange', () => {
//     updateChargeInfo();
// });
// function updateChargeInfo(){
//     console.log("Battery charging? "
//                 + (battery.charging ? "Yes" : "No"));
// }

// battery.addEventListener('levelchange', () => {
//     updateLevelInfo();
// });
// function updateLevelInfo(){
//     console.log("Battery level: "
//                 + battery.level * 100 + "%");
// }

// battery.addEventListener('chargingtimechange', () => {
//     updateChargingInfo();
// });
// function updateChargingInfo(){
//     console.log("Battery charging time: "
//                 + battery.chargingTime + " seconds");
// }

// battery.addEventListener('dischargingtimechange', () => {
//     updateDischargingInfo();
// });
// function updateDischargingInfo(){
//     console.log("Battery discharging time: "
//                 + battery.dischargingTime + " seconds");
// }

// });
