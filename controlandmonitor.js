var stateFan1 = false;
var stateFan2 = false;
var stateAir = false;
// var stateAlarm= false;
var stateEna_fan1 = false;
var stateEna_fan2 = false;
var stateEna_air = false;
// var stateEna_alarm= false;
var valueFan1 = "0";
var valueFan2 = "0";
var valueAir = "0";
// var valueAlarm = "0";
var valueEna_fan1 = "0";
var valueEna_fan2 = "0";
var valueEna_air = "0";
// var valueEna_alarm = "0";


//ham ghi du lieu len firebase
function WriteDataToFirebase(fan1, fan2, air, ena_fan1, ena_fan2, ena_air) {
  firebase.database().ref("DieuKhien").set({
    Quatcapkhi: fan1,
    Quathutkhi: fan2,
    Maylanh: air,
    // Chuongbao: alarm,
    Chophep_Quatcapkhi: ena_fan1,
    Chophep_Quathutkhi: ena_fan2,
    Chophep_Maylanh: ena_air,
    // Chophep_Chuongbao: ena_alarm
  })
}

//function nut bam
if(valueEna_air || valueEna_fan1 || valueEna_fan2){
 console.log(true)
  setInterval(() => {
    check_btn();
  }, 100);
}

function check_btn() {
  if (!stateEna_fan1) {
    valueFan1 = "0";
    stateFan1 = false;
    jsBtnhc.classList.remove('on_btn');
    jsBtnhc.classList.add('off_btn');
    jsBtnhc.textContent = ('OFF');
  }
  if (!stateEna_fan2) {
    valueFan2 = "0";
    stateFan2 = false;
    jsBtngc.classList.remove('on_btn');
    jsBtngc.classList.add('off_btn');
    jsBtngc.textContent = ('OFF');
  }
  if (!stateEna_air) {
    valueAir = "0";
    stateAir = false;
    jsBtntc.classList.remove('on_btn');
    jsBtntc.classList.add('off_btn');
    jsBtntc.textContent = ('OFF');

  }

  WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
}
function ClickFan1() {
  if (stateEna_fan1) {
    stateFan1 = !stateFan1;
    if (stateFan1) {
      valueFan1 = "1";
    } else {
      valueFan1 = "0";
    }
    WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
  }

}
function ClickFan2() {
  if (stateEna_fan2) {
    stateFan2 = !stateFan2;
    if (stateFan2) {
      valueFan2 = "1";
    } else {

      valueFan2 = "0";
    }
    WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
  }

}
function ClickAir() {
  if (stateEna_air) {
    stateAir = !stateAir;
    if (stateAir) {
      valueAir = "1";
    } else {

      valueAir = "0";
    }
    WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
  }

}
// function ClickAlarm(){
//     stateAlarm=!stateAlarm;
//     if(stateAlarm){
//       valueAlarm="1";
//     }else{
//       valueAlarm="0";
//     }
//     WriteDataToFirebase(valueFan1,valueFan2,valueAir,valueAlarm,valueEna_fan1,valueEna_fan2,valueEna_air,valueEna_alarm);
// }

function EnableFan1() {
  stateEna_fan1 = !stateEna_fan1;
  if (stateEna_fan1) {
    valueEna_fan1 = "1";
  } else {
    valueEna_fan1 = "0";
  }
  WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
}
function EnableFan2() {
  stateEna_fan2 = !stateEna_fan2;
  if (stateEna_fan2) {
    valueEna_fan2 = "1";
  } else {
    valueEna_fan2 = "0";
  }
  WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
}
function EnableAir() {
  stateEna_air = !stateEna_air;
  if (stateEna_air) {
    valueEna_air = "1";
  } else {
    valueEna_air = "0";
  }
  WriteDataToFirebase(valueFan1, valueFan2, valueAir, valueEna_fan1, valueEna_fan2, valueEna_air);
}
// function EnableAlarm(){
//   stateEna_alarm=!stateEna_alarm;
//   if(stateEna_alarm){
//     valueEna_alarm="1";
//   }else{
//     valueEna_alarm="0";
//   }
//   WriteDataToFirebase(valueFan1,valueFan2,valueAir,valueAlarm,valueEna_fan1,valueEna_fan2,valueEna_air,valueEna_alarm);
// }


///btn------------------------------------------------------------------------------
var jsBtnte = document.querySelector('.js-btnte');
jsBtnte.addEventListener("click", onOffte);
console.log(jsBtnte)
function onOffte() {
  // statete = !statete;
  console.log(stateEna_air)
  if (stateEna_air) {
    jsBtnte.classList.add('on_btn');
    jsBtnte.classList.remove('off_btn');
    jsBtnte.textContent = ('ON');
  }
  else {
    jsBtnte.classList.remove('on_btn');
    jsBtnte.classList.add('off_btn');
    jsBtnte.textContent = ('OFF');
  }
}
// TC------------------------------------------------
// var statetc = false;
var jsBtntc = document.querySelector('.js-btntc');
jsBtntc.addEventListener("click", onOfftc);
console.log(jsBtntc)
function onOfftc() {
  if (stateEna_air) {
    if (stateAir) {

      jsBtntc.classList.add('on_btn');
      jsBtntc.classList.remove('off_btn');
      jsBtntc.textContent = ('ON');

    }
    // statetc = !statetc;
    else {
      jsBtntc.classList.remove('on_btn');
      jsBtntc.classList.add('off_btn');
      jsBtntc.textContent = ('OFF');
    }
  }
}





//he-----------------------------------------------
// var statehe = false;
var jsBtnhe = document.querySelector('.js-btnhe');
jsBtnhe.addEventListener("click", onOffhe);
console.log(jsBtnhe)
function onOffhe() {
  // statehe = !statehe;
  if (stateEna_fan1) {
    jsBtnhe.classList.add('on_btn');
    jsBtnhe.classList.remove('off_btn');
    jsBtnhe.textContent = ('ON');
  }
  else {
    jsBtnhe.classList.remove('on_btn');
    jsBtnhe.classList.add('off_btn');
    jsBtnhe.textContent = ('OFF');
  }
}
//HC-----------------------------------------
// var statehc = false;
var jsBtnhc = document.querySelector('.js-btnhc');
jsBtnhc.addEventListener("click", onOffhc);
console.log(jsBtnhc)
function onOffhc() {
  // statehc = !statehc;
  if (stateEna_fan1) {
    if (stateFan1) {
      jsBtnhc.classList.add('on_btn');
      jsBtnhc.classList.remove('off_btn');
      jsBtnhc.textContent = ('ON');
    }
    else {
      jsBtnhc.classList.remove('on_btn');
      jsBtnhc.classList.add('off_btn');
      jsBtnhc.textContent = ('OFF');
    }
  }

}
//GE---------------------------------------------
// var statege = false;
var jsBtnge = document.querySelector('.js-btnge');
jsBtnge.addEventListener("click", onOffge);
console.log(jsBtnge)
function onOffge() {
  // statege = !statege;
  if (stateEna_fan2) {
    jsBtnge.classList.add('on_btn');
    jsBtnge.classList.remove('off_btn');
    jsBtnge.textContent = ('ON');
  }
  else {
    jsBtnge.classList.remove('on_btn');
    jsBtnge.classList.add('off_btn');
    jsBtnge.textContent = ('OFF');
  }
}
//Gc-----------------------------------------
// var stategc = false;
var jsBtngc = document.querySelector('.js-btngc');
jsBtngc.addEventListener("click", onOffgc);
console.log(jsBtngc)
function onOffgc() {
  // stategc = !stategc;
  if (stateEna_fan2) {
    if (stateFan2) {
      jsBtngc.classList.add('on_btn');
      jsBtngc.classList.remove('off_btn');
      jsBtngc.textContent = ('ON');
    }
    else {
      jsBtngc.classList.remove('on_btn');
      jsBtngc.classList.add('off_btn');
      jsBtngc.textContent = ('OFF');
    }
  }
}