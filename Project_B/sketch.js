var capture;
var tracker;
var w = 640, h = 480;
let antlers;


function preload() {
  // Load the antlers JPG file
  antlers = loadImage("img/antlers.png", function() {
    console.log("Antlers PNG loaded successfully.");
    console.log("Antlers width: " + antlers.width + " Antlers height: " + antlers.height);
  }, function() {
    console.error("Failed to load antlers PNG.");
  });
}

// function setup() {
//   // Initialize video capture

// }
function setup() {
    let canvas = createCanvas(w,h);
    // canvas.id("p5-filter-canvas");
    canvas.parent("p5-filter-canvas-container");
    capture = createCapture({
        audio: false,
        video: {
          width: w,
          height: h,
        },
      }, function () {
        console.log("Capture ready.");
      });
    
      capture.elt.setAttribute("playsinline", "");
    //   createCanvas(w, h);
      capture.size(w, h);
      capture.hide(); // Hide the default video element
    
      // Initialize the face tracker
      tracker = new clm.tracker();
      tracker.init();
      tracker.start(capture.elt);
    
      colorMode(HSB);
  }

function draw() {
  background(255); // Clear the background

  // Display the video feed
  image(capture, 0, 0, w, h);

  // Get facial feature positions
  var positions = tracker.getCurrentPosition();

  if (positions && positions.length > 0) {
    // Calculate the position and size of the antlers
    let headX = positions[33][0]; // Nose bridge (center of the face)
    let headY = positions[33][1] - 150; // Offset above the head
    let headWidth = positions[14][0] - positions[1][0]; // Width of the head

    // Scale antlers to fit above the head
    let antlerWidth = headWidth * 1.5; // Adjust size multiplier if needed
    let antlerHeight = antlerWidth * (antlers.height / antlers.width); // Maintain aspect ratio

    // Ensure that antlers are positioned above the head
    if (antlers.width > 0 && antlers.height > 0) {
      image(antlers, headX - antlerWidth / 2, headY - antlerHeight / 2, antlerWidth, antlerHeight);
    } else {
      console.error("Antlers image not loaded properly.");
    }
    
    fill(0, 100, 100); // Red color in HSB mode
    noStroke();
    ellipse(positions[62][0], positions[62][1], 40, 40); 
  }
}

