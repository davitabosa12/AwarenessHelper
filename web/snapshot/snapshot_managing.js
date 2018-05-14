
var elem = document.getElementById("btn_generate");
var glo

elem.addEventListener("click", generateJSON, false);

function generateJSON(evt){
    console.log("Hi");
    
    var form = evt.target.form;
    
    console.log(form);

    var resp = {
        fences:{

        },
        snapshots:{
            headphone: false,
            location: false,
            detected_activity: false,
            beacon: false,
            time: false
        }
    }
    
    if(form.headphone.checked){
        resp.snapshots.headphone = true;
    }
    if(form.location.checked){
        resp.snapshots.location = true;
    }
    if(form.detected_activity.checked){
        resp.snapshots.detected_activity = true;
    }
    if(form.beacon.checked){
        resp.snapshots.beacon = true;
    }
    if(form.time.checked){
        resp.snapshots.time = true;
    }

    console.log(JSON.stringify(resp));
    
    
    
}
