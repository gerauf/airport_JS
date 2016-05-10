describe ("Airport", function(){
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });
  it('should start empty', function(){
    expect(airport.planes).toEqual([]);
  })
  it('should keep track of all the landed planes', function () {
    airport.land(plane)
    expect(airport.planes).toEqual([plane]);
  })
  it('planes in airport shouldnt be flying', function(){
    airport.land(plane);
    expect(plane.flying).toEqual(false)
  })
  it("can't land a plane which is on land", function(){
    airport.land(plane);
    expect(function() {
      airport.land(plane);
    }).toThrowError('Already landed!')
  })
  describe('#takeoff', function(){
    it('plane no longer in airport', function(){
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).toEqual([])
    });

    it('should allow a plane to take off', function(){
      airport.land(plane);
      airport.takeoff(plane);
      expect(plane.flying).toEqual(true)
    });

    it('should throw an error if the plane takes of in the air', function(){
      expect(function(){
        airport.takeoff(plane);
      }).toThrowError('Already flying!')
    });
  })
});
