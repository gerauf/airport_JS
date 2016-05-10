function Airport() {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  plane.land();
  this.planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  this.planes.shift(plane);
}
