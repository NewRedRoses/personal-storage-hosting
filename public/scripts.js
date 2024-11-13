// Function to open the modal
function openModal(option) {
  switch (option) {
    case 1:
      document.getElementById("dialog").style.display = "block";
      break;
    case 2:
      document.getElementById("dialog2").style.display = "block";
      break;
    case 3:
      document.getElementById("dialog3").style.display = "block";
      break;
    default:
      break;
  }
}

// Function to close the modal
function closeModal(option) {
  switch (option) {
    case 1:
      document.getElementById("dialog").style.display = "none";
      break;
    case 2:
      document.getElementById("dialog2").style.display = "none";
      break;
    case 3:
      document.getElementById("dialog3").style.display = "none";
      break;
    default:
      break;
  }
}

// Function to confirm action
function confirmAction() {
  closeModal();
  test();
}

function test() {
  console.log("test");
}
