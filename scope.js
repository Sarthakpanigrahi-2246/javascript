let arr=[2,3,4,5,6];
console.log(arr)
function scienceClass() {
  let rule = "No phones";

  function enforceRule() {
    console.log(`Rule: ${rule}`);
  }

  enforceRule(); // ✅ Accesses parent scope
}
scienceClass();
