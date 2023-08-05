// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 1500,
    height: 1005,
    fill: 'grey'
});

var stageWidth = stage.width();
var stageHeight = stage.height() - 5;
var maxWidth = 400; //Unit cm 
var maxHeight = 478; //Unit cm


// get factor to scale to stage
var scale = stageHeight / maxHeight;
var edge = maxWidth * scale

scale = scale
// then create layer
var layer = new Konva.Layer();


var background = new Konva.Rect({
    x: 0,
    y: 0,
    width: stage.width(),
    height: stage.height(),
    fill: 'grey',
});
layer.add(background);





var room = new Konva.Shape({
    sceneFunc: function (context, shape) {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(200 * scale, 0);
        context.lineTo(200 * scale, 5 * scale);
        context.lineTo(200 * scale, 0);
        context.lineTo(400 * scale, 0);
        context.lineTo(400 * scale, 478 * scale)
        context.lineTo(238.5 * scale, 478 * scale)
        context.lineTo(238.5 * scale, 457.5 * scale)
        context.lineTo(205.5 * scale, 457.5 * scale)
        context.lineTo(205.5 * scale, 478 * scale)
        context.lineTo(193.5 * scale, 478 * scale)
        context.lineTo(193.5 * scale, 476 * scale)
        context.lineTo(97.5 * scale, 476 * scale)
        context.lineTo(97.5 * scale, 478 * scale)
        context.lineTo(0, 478 * scale)
        context.closePath();
        context.fillStrokeShape(shape);
    },
    fill: 'lightgrey',
    stroke: 'black',
    strokeWidth: 4,
})
layer.add(room);
// add the shape to the layer
var shelf = new Konva.Group({
    x: edge + 20,
    y: 0,
    width: 30 * scale,
    height: 88 * scale,
    draggable: true
})
shelf.add(new Konva.Rect({
    fill: 'lightblue',
    width: 30 * scale,
    height: 88 * scale
}))
shelf.add(new Konva.Text({
    text: 'Regal',
    fontSize: 18,
    align: 'center'
}))
layer.add(shelf)

var desk = new Konva.Group({
    x: edge + 120,
    y: 0,
    width: 200 * scale,
    height: 160 * scale,
    draggable: true
})
desk.add(new Konva.Shape({
    fill: 'lightblue',
    sceneFunc: function (context, shape) {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(200 * scale, 0);
        context.lineTo(200 * scale, 80 * scale);
        context.lineTo(80 * scale, 80 * scale);
        context.lineTo(80 * scale, 160 * scale);
        context.lineTo(0 * scale, 160 * scale);
        context.closePath();
        context.fillStrokeShape(shape);
    },
}))
desk.add(new Konva.Text({
    text: 'Schreibtisch',
    fontSize: 18,
    align: 'center'
}))
var deskFlipButton = new Konva.Label({
    x:50,
    y:50,
})
deskFlipButton.add(new Konva.Tag({
    fill: 'black',
    lineJoin: 'round',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: 10,
    shadowOpacity: 0.5
  }));
  deskFlipButton.add(new Konva.Text({
    text: 'flip',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white'
  }));
desk.add(deskFlipButton);

deskFlipButton.on('click', () => {
    desk.scaleX( -desk.scaleX()) ;
})
layer.add(desk)

var piano = new Konva.Group({
    x: edge + 20,
    y: 200,
    width: 39 * scale,
    height: 128 * scale,
    draggable: true
})
piano.add(new Konva.Rect({
    fill: 'lightblue',
    width: 39 * scale,
    height: 128 * scale
}))
piano.add(new Konva.Text({
    text: 'Klavier',
    fontSize: 18,
    align: 'center'
}))
layer.add(piano)

var tv = new Konva.Group({
    x: edge + 120,
    y: 160 * scale +20,
    width: 127 * scale,
    height: 60 * scale,
    draggable: true
})
tv.add(new Konva.Rect({
    fill: 'lightblue',
    width: 127 * scale,
    height: 60 * scale
}))
tv.add(new Konva.Text({
    text: 'TV',
    fontSize: 18,
    align: 'center'
}))
layer.add(tv)

var box = new Konva.Group({
    x: edge + 20,
    y: 200+128*scale+20,
    width: 78 * scale,
    height: 42 * scale,
    draggable: true
})
box.add(new Konva.Rect({
    fill: 'lightblue',   
    width: 78 * scale,
    height: 42 * scale,
}))
box.add(new Konva.Text({
    text: 'Kiste',
    fontSize: 18,
    align: 'center'
}))
layer.add(box)

var container = new Konva.Group({
    x: edge + 20 + 78 * scale + 20,
    y: 200+128*scale+20,
    width: 43 * scale,
    height: 60 * scale,
    draggable: true
})
container.add(new Konva.Rect({
    fill: 'lightblue',    
    width: 43 * scale,
    height: 60 * scale,
}))
container.add(new Konva.Text({
    text: 'Container',
    fontSize: 18,
    align: 'center'
}))
layer.add(container)

var couch = new Konva.Group({
    x: edge + 20,
    y: 200+128*scale+60*scale+40,
    width: 200 * scale,
    height: 160 * scale,
    draggable: true
})
couch.add(new Konva.Shape({
    fill: 'lightgreen',
    sceneFunc: function (context, shape) {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(230 * scale, 0);
        context.lineTo(230 * scale, 90 * scale);
        context.lineTo(90 * scale, 90 * scale);
        context.lineTo(90 * scale, 151 * scale);
        context.lineTo(0 * scale, 151 * scale);
        context.closePath();
        context.fillStrokeShape(shape);
    },
}))

var flipButton = new Konva.Label({
    x:50,
    y:50,
})
flipButton.add(new Konva.Tag({
    fill: 'black',
    lineJoin: 'round',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: 10,
    shadowOpacity: 0.5
  }));
  flipButton.add(new Konva.Text({
    text: 'flip',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white'
  }));
couch.add(flipButton);

flipButton.on('click', () => {
    couch.scaleX( -couch.scaleX()) ;
})
couch.add(new Konva.Text({
    text: 'couch',
    fontSize: 18,
    align: 'center'
}))
layer.add(couch)

var tr1 = new Konva.Transformer({
    nodes: [shelf],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
});
layer.add(tr1)

var tr2 = new Konva.Transformer({
    nodes: [desk],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
});
layer.add(tr2)

var tr3 = new Konva.Transformer({
    nodes: [piano],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
});
layer.add(tr3)

var tr4 = new Konva.Transformer({
    nodes: [tv],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
});
layer.add(tr4)
var tr5 = new Konva.Transformer({
    nodes: [box],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
});
layer.add(tr5)
var tr6 = new Konva.Transformer({
    nodes: [container],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
});
layer.add(tr6)

var tr7 = new Konva.Transformer({
    nodes: [couch],
    centeredScaling: true,
    rotationSnaps: [0, 90, 180, 270],
    resizeEnabled: false,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
});
layer.add(tr7)




// add the layer to the stage
stage.add(layer);
// draw the image
layer.draw();
