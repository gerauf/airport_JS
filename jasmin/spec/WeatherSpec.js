describe('Weather', function() {
  beforeEach(function() {
    weather = new Weather;
  })

  it('stormy half of the time',function(){
    spyOn(Math, 'random').and.returnValue(0.4);
    expect(weather.stormy()).toEqual(true);
  })

  it('not to be stormy half of the time',function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(weather.stormy()).toEqual(false);
  })

});
