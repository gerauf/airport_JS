describe("Plane", function(){

  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('a plane should start as flying', function(){
    expect(plane.flying).toEqual(true);
  })

  describe('#land', function() {
    it("should be able to land", function() {
      plane.land();
      expect(plane.flying).toEqual(false);
    })
    it('should return a confirm message', function() {
      expect(plane.land()).toEqual('Landed');
    })
    describe('when the plane is landed', function(){
      it('will return an error', function () {
        plane.land()
        expect(function() {
          plane.land();
        }).toThrowError('Already landed!')
      })
    })
  });

  describe('#takeoff', function() {
    it('should be able to take off', function() {
      plane.land();
      plane.takeoff();
      expect(plane.flying).toEqual(true);
    });
    it('should return a confirm message', function() {
      plane.land();
      expect(plane.takeoff()).toEqual('Flying')
    })
    describe('when the plane is flying', function(){
      it('will return an error', function () {
        expect(function() {
          plane.takeoff();
        }).toThrowError('Already flying!')
      })
    })
  })
});
