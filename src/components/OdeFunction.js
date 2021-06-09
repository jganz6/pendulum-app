// Solve ODE `dx/dt = f(x,t), x(0) = x0` numerically.
const math = {};
function ndsolve(f, x0, dt, tmax) {
  let x = x0.clone(); // Current values of variables
  const result = [x]; // Contains entire solution
  const nsteps = math.divide(tmax, dt); // Number of time steps
  for (let i = 0; i < nsteps; i++) {
    // Compute derivatives
    // eslint-disable-next-line no-loop-func
    const dxdt = f.map((func) => func(...x.toArray()));
    // Euler method to compute next time step
    const dx = math.multiply(dxdt, dt);
    x = math.add(x, dx);
    result.push(x);
  }
  return math.matrix(result);
}
console.log(ndsolve());
// Import the numerical ODE solver
//   math.import({ ndsolve })
