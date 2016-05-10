describe ("Airport", function(){
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('should start empty', function(){
    spyOn(Math, 'random').and.returnValue(0.6);
    expect(airport.planes).toEqual([]);
  })
  it('should keep track of all the landed planes', function () {
    spyOn(Math, 'random').and.returnValue(0.6);
    airport.land(plane)
    expect(airport.planes).toEqual([plane]);
  })
  it('planes in airport shouldnt be flying', function(){
    spyOn(Math, 'random').and.returnValue(0.6);
    airport.land(plane);
    expect(plane.flying).toEqual(false)
  })

  it("can't land a plane which is on land", function(){
    spyOn(Math, 'random').and.returnValue(0.6);
    airport.land(plane);
    expect(function() {
      airport.land(plane);
    }).toThrowError('Already landed!')
  })

  describe('when stormy', function(){

    it('should not allow a plane to land', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(function(){
        airport.land(plane);
      }).toThrowError('Too stormy!')
    })

    it('should not allow a plane to take off', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(function(){
        airport.takeoff(plane);
      }).toThrowError('Too stormy!')
    })
  })


  describe('#takeoff', function(){
    it('plane no longer in airport', function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).toEqual([])
    });

    it('should allow a plane to take off', function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      airport.land(plane);
      airport.takeoff(plane);
      expect(plane.flying).toEqual(true)
    });


    it('should throw an error if the plane takes off in the air', function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(function(){
        airport.takeoff(plane);
      }).toThrowError('Already flying!')
    });
  })
  describe('When the airport is full', function(){
    it('should throw an error when the airport is full', function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      for (var i = 0; i < 10; i++){ airport.land(new Plane()); }
      expect(function(){
        airport.land(plane)
      }).toThrowError("We're packed")
    })

    it('different airports have different capacities',function(){
      smallCapacity = 5
      smallAirport = new Airport(smallCapacity)
      spyOn(Math, 'random').and.returnValue(0.6);
      for (var i = 0; i < smallCapacity; i++){ smallAirport.land(new Plane()); }
      expect(function(){
        smallAirport.land(plane)
      }).toThrowError("We're packed")
    })
  })
});
