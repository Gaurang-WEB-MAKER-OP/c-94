function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSpanshot) {
                    childkey = childSpanshot.childkey;
                    Room_name = childkey;
                    //start code
                    row = " <div class = 'room_name' id = " +


                }

            });

    }