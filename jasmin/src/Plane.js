function Plane() {
  this.flying = true
}

Plane.prototype.land = function() {

  if (this.flying === false) {
    throw new Error('Already landed!');
  }

  this.flying = false;
  return 'Landed';
};

Plane.prototype.takeoff = function() {
  if (this.flying === true) {
    throw new Error('Already flying!');
  }
  this.flying = true;
  return 'Flying'
};
