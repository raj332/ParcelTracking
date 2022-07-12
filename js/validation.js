
$("#usernamefield").blur(function() {

    if (!/^([a-z0-9]{3,})$/.test($("#usernamefield").val())) {

      $("#usernamefield").val("");
      $("#usernamefield").attr("placeholder", "* Invailid username");
      $("#usernamefield").css({

      })
    } else {
      $("#usernamefield").css({

      })
    }
  })


  $("#password").blur(function() {

    if (!/^([a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test($("#password").val())) {

      $("#password").val("");
      $("#password").attr("placeholder", "ex. abcd@123");
      $("#password").css({

      })
    } else {
      $("#password").css({

      })
    }
  })


  // admin2---------------------------validation



  $("#weight").blur(() => {

    if ($("#weight").val() > 100 || $("#weight").val() < 0 || !/^([0-9.]{1,})$/.test($("#weight").val())) {
      $("#weight").val("");
      $("#weight").attr("placeholder", "*weight should be between 0 and 100");
      $("#weight").css({

      })
    } else {
      $("#weight").css({

      })
    }
  })
  $("#quantity").blur(() => {

    if ($("#quantity").val() > 1000 || $("#quantity").val() < 0 || !/^([0-9]{1,})$/.test($("#quantity").val())) {
      $("#quantity").val("");
      $("#quantity").attr("placeholder", "*Invailid number of pieces");
      $("#quantity").css({

      })
    } else {
      $("#quantity").css({

      })
    }
  })
  $("#country").blur(() => {
    if (!/^([a-zA-Z]{2,})$/.test($("#country").val())) {
      $("#country").val("");
      $("#country").attr("placeholder", "*Invailid countryname ");
      $("#country").css({

      })
    } else {
      $("#country").css({

      })
    }
  })
 
  $("#cost").blur(() => {
    if (!/^([0-9.]{2,})$/.test($("#cost").val())) {
      $("#cost").val("");
      $("#cost").attr("placeholder", "*Invailid input ");
      $("#cost").css({

      })
    } else {
      $("#cost").css({

      })
    }
  })


   $("#sendername").blur(() => {
  
    if (!/^([a-zA-Z\s]{3,})$/.test($("#sendername").val())) {
      $("#sendername").val("");
      $("#sendername").attr("placeholder", "*Invailid name ");
      $("#sendername").css({

      })
    } else {
      $("#sendername").css({

      })
    }
  })
  $("#receivername").blur(() => {
   
    if (!/^([a-zA-Z\s]{3,})$/.test($("#receivername").val())) {
      $("#receivername").val("");
      $("#receivername").attr("placeholder", "*Invailid name ");
      $("#receivername").css({

      })
    } else {
      $("#receivername").css({

      })
    }
  })
  $("#source").blur(() => {
    if (!/^([a-zA-Z]{2,})$/.test($("#source").val())) {
      $("#source").val("");
      $("#source").attr("placeholder", "*Invailid countryname ");
      $("#source").css({

      })
    } else {
      $("#source").css({

      })
    }
  })
  $("#destination").blur(() => {
    if (!/^([a-zA-Z]{2,})$/.test($("#destination").val())) {
      $("#destination").val("");
      $("#destination").attr("placeholder", "*Invailid countryname ");
      $("#destination").css({

      })
    } else {
      $("#destination").css({

      })
    }
  })
  $("#sendercontact").blur(() => {
    if (!/^[6789][0-9]{9}$/.test($("#sendercontact").val())) {
      $("#sendercontact").val("");
      $("#sendercontact").attr("placeholder", "*Invailid contactno ");
      $("#sendercontact").css({

      })
    } else {
      $("#sendercontact").css({

      })
    }
  })
  $("#receivercontact").blur(() => {
    if (!/^[6789][0-9]{9}$/.test($("#receivercontact").val())) {
      $("#receivercontact").val("");
      $("#receivercontact").attr("placeholder", "*Invailid contactno ");
      $("#receivercontact").css({

      })
    } else {
      $("#receivercontact").css({

      })
    }
  })
  $("#trackingno").blur(() => {
    if (!/^[0-9]{10,14}$/.test($("#trackingno").val())) {
      $("#trackingno").val("");
      $("#trackingno").attr("placeholder", " *Invailid trackingno ");
      $("#trackingno").css({

      })
    } else {
      $("#trackingno").css({

      })
    }
  })