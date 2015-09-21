
$(document).ready(function() {
    var width = $(document).width();
    var height = $(document).height();
    var vid = 0;
    
    $('#btnAddCopCar').click(function() {
        var div = $('<div class="CopCar"></div>').attr('id', 'v'+ vid);
        $('#carCrash').append(div);
        var v = new CopCar('#v'+vid);
        function Vehicledrop() {
            var x = Math.floor((Math.random() * 1200) +1);
            var y = Math.floor((Math.random() * 600) + 1);
            $('#v'+vid).css("top",y).css("left",x);
            }
         function anm(element) {
          $(element).delay(150).animate({ opacity: 'toggle' }, 
              10, function() { anm(element); });
       }
        Vehicledrop();
        v.move();
        vid++;
    });
    
    $('#btnAddCar').click(function() {
        var div = $('<div class="Car"></div>').attr('id', 'v'+ vid);
        $('#carCrash').append(div);
        var c = new Car('#v'+vid);
        function Vehicledrop() {
            var x = Math.floor((Math.random() * 1200) + 1);
            var y = Math.floor((Math.random() * 600) + 1);
            $('#v'+vid).css("top",y).css("left",x);
            }
        Vehicledrop();
        c.move();
        vid++;
    });
    
    // $('#btnReverse').click(function() {
    //     var div = $('<div class="Reverse"></div>').attr('id', 'v'+ vid);
    //     $('#carCrash').append(div);
    //     c.move();
    //     vid++;
    // });
    
    $('#btnAddMotorcycle').click(function() {
        var div = $('<div class="Motorcycle"></div>').attr('id', 'v'+ vid);
        $('#carCrash').append(div);
        var m = new Motorcycle('#v'+vid);
        function Vehicledrop() {
            var x = Math.floor((Math.random() * 1200) + 1);
            var y = Math.floor((Math.random() * 600) + 1);
            $('#v'+vid).css("top",y).css("left",x);
            }
        Vehicledrop();
        m.move();
        vid++;
    });
    
    $('#btnAddTank').click(function() {
        var div = $('<div class="Tank"></div>').attr('id', 'v'+ vid);
        $('#carCrash').append(div);
        var t = new Tank('#v'+vid);
        function Vehicledrop() {
            var x = Math.floor((Math.random() * 1200) + 1);
            var y = Math.floor((Math.random() * 600) + 1);
            $('#v'+vid).css("top",y).css("left",x);
            }
        Vehicledrop();
        t.move();
        vid++;
    });
    
    function Vehicle(divid){
        this.tolerance = 1;
        this.divid = '#' + divid;
        this.speed = 500;
    }
    Vehicle.prototype.moveRight = function() {
        $(this.divid).animate({
            left: width -100}, 
            { duration: this.speed, queue: false,
            complete: this.moveLeft.bind(this)}
        );
    };
    Vehicle.prototype.moveLeft = function() {
        console.log(this.divid);
        $(this.divid).animate({
            left: 0}, 
            { duration: this.speed, queue: false,
            complete: this.moveRight.bind(this)}
        );
    }
    Vehicle.prototype.moveDown = function() {
        console.log(this.divid);
        $(this.divid).animate({
            top: height -100}, 
            { duration: this.speed, queue: false, 
            complete: this.moveUp.bind(this)}
        );
    }
    Vehicle.prototype.moveUp = function() {
        console.log(this.divid);
        $(this.divid).animate({
            top: 0}, { 
                duration: this.speed, 
                queue: false, 
                complete: this.moveDown.bind(this)
            }
        );
    }
    // Vehicle.prototype.moveReverse = function() {
    //     console.log(this.divid);
    //     $(this.divid).animate({}, { 
    //             queue: false, 
    //         }
    //     );
    // }
    Vehicle.prototype.move = function (direction) {
        this.moveRight();
        this.moveDown();
    }
        
    // Vehicle.prototype.remove = function () {
    //     if (e.which === 1) {
    //     $('.tolerance').removeClass('Vehicle');
    //  }

    function Car(vid) {
        this.tolerance = 2;
        this.speed = 1000;
        this.divid = vid;
        this.move = function() {
            this.moveRight();
        }
    }
    Car.prototype = Vehicle.prototype;

    function CopCar(vid) {
        this.tolerance = 3;
        this.speed = 750;
        this.divid = vid;
        this.move = function() {
            this.moveDown();
        }
    }
    CopCar.prototype = Vehicle.prototype;
    
    function Motorcycle(vid) {
        this.speed = 500;
        this.divid = vid;  
    }
    Motorcycle.prototype = Vehicle.prototype;
    
    function Tank(vid) {
        this.tolerance = 10;
        this.speed = 2000;
        this.divid = vid;
        this.move =function() {
            this.moveDown();
        }
    }
    Tank.prototype = Vehicle.prototype;
    
 });