function Airport(capacity = 10) {
  this.planes = []
  this.weather = new Weather()
  this.capacity = capacity
}

Airport.prototype.land = function(plane) {
  if(this.weather.stormy()){
    throw new Error('Too stormy!')
  }
  if(this.planes.length >= this.capacity){
    throw new Error("We're packed")
  }
  plane.land();
  this.planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  if(this.weather.stormy()){
    throw new Error('Too stormy!')
  }
  plane.takeoff();
  this.planes.shift(plane);
}
