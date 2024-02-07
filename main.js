import "./style.css";

const unplugIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcklEQVR4nN3YsWsTURzA8YeG6KBQt2Sxyx1i4bJIsuYPEBNH/QfE/8DxBd/SUtFCb6w4SDJUF4uGgkNyalILXYRCMukoLg205AaXn6TpNTnu7t0vud+7vPjgt5XH99O7hF/LWEqneDCslb67ED7Ddabzkce7KMTt+19v5R92njA9410pYrXaWslXOof5ahdylS790zLFoGaKk/Vk8W4oYjreG1LEOH4A45kg5ot3fYiweFKEP36CSBbvnk/ROd3KVzpHYfGX8+BblTh+PNbb00TxpYu5u/UrMj5X7b5mHK6Qx1Mj7mz+pI0vc8gYYvApDjCaQuOM/EnkksR7Z41D1hSDDxgE5euUo4hfJKJ4MNwgiV8kokS9dvwXCNu2bzza/PJ7KRGwu5aFhrX3t34Pnr78CEuFgKZxDeqFJjQKMJpFIFjS37wXvygEo4yfRjx+0f6TBoJ5Z9vp1WynF/tOQaucmX5tQqdeaO7sbNxM49uJTeL7MB4Eom49iwZY+/Bm9XpaX7HMH58UMYn3jmoEC8bPiwjGp4DgEsAsiOh4hQh+frEcgES0ypm4nyFG8MtL4wE4BPYQILjvQtvpNTGI0Yddg92JBy7jx8fZbae/l9aTSLA78chL00Ik2Z3MkP87BRCvPv8AVQiK3cmMQ4j3bVCBoNydTBlCvGsBNYJ6dzKen3A5QAWCaHcyZPE+QGoIC707xcYHAMoR+N3JwMSHApQh8LuTgY2PBCj6YKOCduEqOl4KUIBQcoQMsAwIEQfQHSEwAJ0RAgvQFSFmAeiIELMCdEOIeQA6IcS8AJ0QSQ76L7t2H78eaIfQOZ5dnEiEgvh/O+L2fhcunmAAAAAASUVORK5CYII=";

const pluginIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nNXYT2vTYBzA8UcRpyfnbT2ol/bgQW/Ne5CxxlfhW/AkT21wtAizWzLQgXiYeGhh4hhjIDRPnG234bGSZ9VRFET0sMGkAWHwSF3TpeXJk79P8uwHv1MhfD9NGsoDQEKTb/eL0o5F6NsvA5GHHW/5Qtyc3b6eud98AMSMt5iIW7I+nSk0dzNyi8wUWmVB4y0qwhlvbyKIcPHWGIIWnwgiWrz1f/PGcTVTaH6ixY927qMcOjKnHBVzymGZR7w03NvVnmv8jNx6CSC5GCH+iJzuGSLOeImBiDH+DMEjXqIgOMSf7p3VYy7xkgPBLT4pRL7dr4SK1xCGc89/7nkBBnv3zR+uCCno3w7VMIuagYmG8F955ceuHwTvOyH5RYzi7T1PCM0wH4/FD1dF+GT29S8iNEJzibd3ydgnoiDA5DzTe9MqMg9YgMEuGvvk3urv1BGANsvGlxuaYX71QohwJ4DbnBcEYM382+bCUqNDREYAt1HqelGp6+TJ2gciMgKw4u0VGAE94wVGQN/xAiJg4HiBEDB0vAAIGDk+RQR0e+MEjk8BAVnveyI4ArrGxwHgjIDM+LgAvBA5yrkTN0BqCCVGQCqIUq2xIjoiWzp0/y0QQi4odX1ZVESWFS8KQkX4hHba4SteFIQ2cWQTKF40RDZMvD2L3e5UZX2nxwfx2RNR1fGj8PGb3SnNMDcHF3q6sUcSvxMIh//mYadzWTXwuvOCPBDza9sL1NMOFHM8D0Sp1oDUIxsUJV7XL9mPjdtW3rW/xRVvzwiBIsTboyL8kPFcbtVa369GeTtNxtvz4v3BtcjxTATCW6/03pUor1i3eC6jOhGOeHuCIhKNH0NQ4oMiUokHwxn8sFmfeyGSjP8Hib81qnuGwEQAAAAASUVORK5CYII=";

const batteryFull =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nO2TvQ3CMBCFXVGxDQukRSyRTRBVwgawAkNgFxewictMwE+miBRkJBpQFKTLBYPeJ11rv+f7rBQA8bC3fmFceTXOtx1zMafTXMWKCQG7wz9GW39WsWJ6wj9HxYr5hQJVVU2082ttff1p4F6tXHnT1ufhbPEC4aKhgpvXsT4bo8BgL2/eP3gtXkDs9d1I/wMFHDbAY0arVnKUNChA2AAPKERQiAcUIijEAwoRFOIBhQgK8YBCBIV4QCGCQjygEEEhHlCIvqxQQnkjtYWEska8QFpsjlIF0mJ7EC+wrHbTUGLITSSUNSF8OFu8AAB/xh2+rp0+C+0xagAAAABJRU5ErkJggg==";

const batteryLow =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9klEQVR4nO2TPQ6CQBCFt7LyShwArPEOtHoAS7X3PLKV7sCWtFr4Q6DwBiSYNbHREEyGQTTvS6bdfW/nW6UAGA5bYyea0osmWzfMWSeJr4aKdgGbwz8mNvakhopuCf8cNVT0LxTIsmwUk13HxuafBm7VitJrbOzKnS1ewF3UVXD9OsYu+yjQ2cvr9w+eixcQe33q6X+gAGEDPKAQQSEeUIigEA8oRFCIBxQiKMQDChEU4gGFCArxgEIEhXhAIYJCPG6eX0uOkgYFvC9voPSnldQWiiCsxAscovleqsAxmu3EC5SLzdiV6HITRRBWLrw7W7wAAH/GHWogi9pZs9DLAAAAAElFTkSuQmCC";

const batteryIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO2ZPW8TQRCGr+I/oDSQkki2bxekgGSg5UNKBYEyDQ0JYGIlARtnjyIBKb8EChzsmBiSHHgvZWQkQGmMFMiHxFcPDYNmOZ99seM7I995HDzSFG7O77Pzzs7trab1ox90gq8bl7gUO9wyoFkyaWyflMYFjWowaWwfJN6BsMRnjWpwD/HV1KgG7wWAE+9njzApHnNL7PkV7JnS2GWW8QifHTgA/lHHhFv7U8wHDtDRlbcaAPZCAAhKvBFOf/yfAFL0KIAUoK+mQX+ZAn0lBezNbG8B6KtpiC5Nw6nFOxBZTCoIr2poVADY6wzEivchnpuAL5VBuPzihvrNS70AIIVabVz1XPk0/NoaAJ5NKCv1RAV0tE5+GibWrsHvT0fh3eaQbaE0/R5gtnXO5sbha2VQATzZiEM0PwX62gPiALJmnaXysBKPacgRiBVmFBxpAN22zi3bOtUcLY5BbPkesBLhbZTVWefbx+OO+HYamHcNoM46y29r1nE18KtULXGomRk6AFXr3DZHXeKrDRx5NunObFJVizWZzKEDoAgUcy4/Dt/rrNMqF9YvqgnNmlQhfAAzo8SgKD/iERJhyVUgkk02WOXpRrwBYNK8ouyGtuNUegCrgI1Z36jYuB82h1ziC+Vhp6EP2pG0bgA07Ei4ZWYT8HNrwBH/o3IMzudu/p0HLQaa1m0AHFYo8npxzLX6d82rLa3DyQDgQCvMwEM54ojHN1Iv63AqAPjCFs1NOQ2M1lG7jod1OBmAlbSrgRM+rcNJAOxr4OflM76PkpwEQEmomYDHRzxG4nFSDSwf1uFkKmDPADzI44T2ax1OAsCezGqo4acUFN/GNyFOAaC+Gu0I5+QA/jG1PsChr4A0dgMDkGIneABLzAdYgbnAAfAeS0F0shJS3S3PhXJH1o9+HLL4A6hD/d762AytAAAAAElFTkSuQmCC";

const percent = document.querySelector(".percent");
const favicon = document.querySelector("#favicon");

favicon.href = batteryIcon;

percent.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

function main() {
  navigator.getBattery().then(function (battery) {
    const batteryLevel = Math.round(battery.level * 100);
    percent.innerText = batteryLevel + "%";
    const chargingInfo = battery.charging ? true : false;

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        if (batteryLevel >= 80 && chargingInfo) {
          favicon.href = unplugIcon;
          new Notification("Unplug the Laptop", {
            body: "The Battery is above 80% and it is not good in the long run for battery to stay above 80%",
            icon: batteryFull,
          });
          setInterval(() => {
            favicon.href = batteryIcon;
          }, 5000);
        } else if (batteryLevel <= 20 && !chargingInfo) {
          favicon.href = pluginIcon;
          new Notification("Plug In the Laptop", {
            body: "The Battery is below 20% and it is not good in the long run for battery to stay below 20%",
            icon: batteryLow,
          });
          setInterval(() => {
            favicon.href = batteryIcon;
          }, 5000);
        } else if (batteryLevel > 20 && batteryLevel < 80) {
          percent.innerHTML = batteryLevel + "%";
        }
      } else if (permission === "denied") {
        percent.innerText = "Permission to Send Notification Denied";
      }
    });
  });
}

if ("getBattery" in navigator) {
  main();
} else {
  console.log(
    "Battery Status API is Not Supported in this Browser or your Machine."
  );
  alert("Battery Status API is Not Supported in this Browser or your Machine.");
}

setInterval(() => {
  main();
}, 60000);

// MDN Example of Notification Api
// function notifyMe() {
//   if (!("Notification" in window)) {
//     // Check if the browser supports notifications
//     alert("This browser does not support desktop notification");
//   } else if (Notification.permission === "granted") {
//     // Check whether notification permissions have already been granted;
//     // if so, create a notification
//     const notification = new Notification("Hi there!");
//     // …
//   } else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then((permission) => {
//       // If the user accepts, let's create a notification
//       if (permission === "granted") {
//         const notification = new Notification("Hi there denied!");
//       }
//     });
//   } else if (Notification.permission === "denied") {
//     console.log("denied");
//   }
// }

// notifyMe();

// Notification.requestPermission().then((permission) => {
//   if (permission === "granted") {
//     if (batteryLevel >= 80 && chargingInfo) {
//       favicon.href = unplugIcon;
//       new Notification("Unplug the Laptop", {
//         body: "The Battery is above 80% and it is not good in the long run for battery to stay above 80%",
//         icon: batteryFull,
//       });
//     } else if (batteryLevel <= 20 && !chargingInfo) {
//       favicon.href = pluginIcon;
//       new Notification("Plug In the Laptop", {
//         body: "The Battery is below 20% and it is not good in the long run for battery to stay below 20%",
//         icon: batteryLow,
//       });
//     }
//   }
//   if (permission !== "denied") {
//     alert("Please ive Permission to Send Notifications");
//   }
//   if (permission === "denied") {
//     alert("Permission to Send Notification Denied");
//   }
// });

// function batteryNotification() {
//   if (batteryLevel >= 80 && chargingInfo) {
//     favicon.href = unplugIcon;
//     new Notification("Unplug the Laptop", {
//       body: "The Battery is above 80% and it is not good in the long run for battery to stay above 80%",
//       icon: batteryFull,
//     });
//   } else if (batteryLevel <= 20 && !chargingInfo) {
//     favicon.href = pluginIcon;
//     new Notification("Plug In the Laptop", {
//       body: "The Battery is below 20% and it is not good in the long run for battery to stay below 20%",
//       icon: batteryLow,
//     });
//   }
// }

// if (!("Notification" in window)) {
//   alert("This browser does not support desktop notification");
// } else if (Notification.permission === "granted") {
//   batteryNotification();
//   // } else if (Notification.permission === "default") {
// } else if (Notification.permission !== "denied") {
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       batteryNotification();
//     }
//   });
// } else if (Notification.permission === "denied") {
//   alert("Permission to Send Notification Denied");
// }
